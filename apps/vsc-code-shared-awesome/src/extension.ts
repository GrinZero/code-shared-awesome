import * as vscode from "vscode";
import { getSelectedCode } from "./webview/getSelectedCode";

export async function activate(context: vscode.ExtensionContext) {
  // 获取编辑区代码(全选)
  let editor = vscode.window.activeTextEditor;
  let editorText = editor?.document.getText() || "";
  // 一次只允许一个 webview 存在
  let currentPanel: vscode.WebviewPanel | undefined = undefined;

  context?.subscriptions.push(
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
    })
  );
}

export function deactivate() {}
