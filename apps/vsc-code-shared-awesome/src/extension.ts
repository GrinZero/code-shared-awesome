import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import { getSelectedCode } from "./webview/getSelectedCode";

export async function activate(context: vscode.ExtensionContext) {
  //注册侧边栏面板的实现
  // const sidebarContext = new sidebar.EntryList();
  // vscode.window.registerTreeDataProvider("sidebar-codeShow-context", sidebarContext);
  // //注册命令
  // vscode.commands.registerCommand("sidebar-codeShow-context.openChild", args => {
  //   vscode.window.showInformationMessage(args);
  // });

  // 获取编辑区代码(全选)
  require("./treeView/sidebar")(context); // demo8 自定义侧边栏入口和面板

  let editor = vscode.window.activeTextEditor;
  let editorText = editor?.document.getText() || "";
  // 一次只允许一个 webview 存在

  let currentPanel: vscode.WebviewPanel | undefined = undefined;

  context?.subscriptions.push(
    //注册命令

    vscode.commands.registerCommand("vsc-code-shared-awesome.codeShow", () => {
      getSelectedCode(currentPanel, editorText);

      // 销毁操作
      currentPanel?.onDidDispose(
        () => {
          currentPanel = undefined;
        },
        null,
        context.subscriptions
      );
    }),

    vscode.commands.registerCommand("BeeHive-Command.openChild", (args) => {
      vscode.window.showInformationMessage(args);
      // getSelectedCode(currentPanel, editorText);
      const panel = vscode.window.createWebviewPanel(
        "welcome",
        "快速查看",
        vscode.ViewColumn.One,
        {
          enableScripts: true,
        }
      );

      const htmlPath = path.join(
        context.extensionPath,
        "src/treeView/showCode.html"
      );
      let html = fs.readFileSync(htmlPath, "utf-8");
      panel.webview.html = html;

      // 销毁操作
      currentPanel?.onDidDispose(
        () => {
          currentPanel = undefined;
        },
        null,
        context.subscriptions
      );
    })
  );
}

export function deactivate() {}
