import * as vscode from "vscode";

// 转换成markdown
let md = require("markdown-it")({
  html: false,
  xhtmlOut: false,
  breaks: true,
  langPrefix: "language-",
  linkify: false,
  typographer: false,
  quotes: "“”‘’",
  highlight: function (/*str, lang*/) {
    return "";
  },
});

function getWebviewContent(selectedCode: string) {
  let result = md.render(selectedCode);

  return `
	<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Cat Coding</title>
		</head>
		<body>
			<h3>上传的代码片段为：</h3>
            ${result}
		</body>
  	</html>
  `;
}

function updateWebviewTitle(panel: vscode.WebviewPanel, menuTitle: string) {
  panel.title = menuTitle;
}

export function getSelectedCode(
  currentPanel: vscode.WebviewPanel | undefined,
  selectedCode: string
) {
  const columnToShowIn = vscode.window.activeTextEditor
    ? vscode.window.activeTextEditor.viewColumn
    : undefined;
  //如果当前有窗口 展示此窗口 没有则新建
  if (currentPanel) {
    currentPanel.reveal(columnToShowIn);
  } else {
    currentPanel = vscode.window.createWebviewPanel(
      "catCoding",
      "Cat Coding",
      vscode.ViewColumn.One,
      {}
    );
    updateWebviewTitle(currentPanel, "上传片段");
    currentPanel.webview.html = getWebviewContent(selectedCode);
  }
}
