// 自定义侧边栏入口和面板
import * as vscode from "vscode";

const scripts = [
  {
    script: "快速查看",
  },
];

/**
 * @description 重写每个节点
 */
export class SideBarEntryItem extends vscode.TreeItem {
  constructor(
    private version: string,
    public readonly label: string,
    public readonly collapsibleState: vscode.TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
    this.tooltip = `${this.label}-${this.version}`;
    this.description = `专注于分享优质代码`;
  }
}

/**
 * @description 入口文件
 */
export class SideBarBeeHiveCommand
  implements vscode.TreeDataProvider<SideBarEntryItem>
{
  constructor(private workspaceRoot?: string) {}
  getTreeItem(element: SideBarEntryItem): vscode.TreeItem {
    return element;
  }

  getChildren(
    element?: SideBarEntryItem
  ): vscode.ProviderResult<SideBarEntryItem[]> {
    if (element) {
      //子节点
      var childrenList = [];
      for (let index = 0; index < scripts.length; index++) {
        var item = new SideBarEntryItem(
          "1.0.0",
          scripts[index].script,
          vscode.TreeItemCollapsibleState.None
        );
        item.command = {
          command: "BeeHive-Command.openChild", //命令id
          title: scripts[index].script,
          arguments: [scripts[index].script], //命令接收的参数
        };
        childrenList[index] = item;
      }
      return childrenList;
    } else {
      //根节点
      return [
        new SideBarEntryItem(
          "1.0.0",
          "codeShow:",
          vscode.TreeItemCollapsibleState.Collapsed
        ),
      ];
    }
  }
}

export class SideBarBeeHivePackageAnalysis
  implements vscode.TreeDataProvider<SideBarEntryItem>
{
  constructor(private workspaceRoot?: string) {}
  getTreeItem(element: SideBarEntryItem): vscode.TreeItem {
    return element;
  }

  getChildren(
    element?: SideBarEntryItem
  ): vscode.ProviderResult<SideBarEntryItem[]> {
    if (element) {
      //子节点
      var childrenList = [];
      for (let index = 0; index < scripts.length; index++) {
        var item = new SideBarEntryItem(
          "1.0.0",
          scripts[index].script,
          vscode.TreeItemCollapsibleState.None
        );
        item.command = {
          command: "BeeHive-PackageAnalysis.openChild", //命令id
          title: scripts[index].script,
          arguments: [index], //命令接收的参数
        };
        childrenList[index] = item;
      }
      return childrenList;
    } else {
      //根节点
      return [
        new SideBarEntryItem(
          "1.0.0",
          "按钮组",
          vscode.TreeItemCollapsibleState.Collapsed
        ),
      ];
    }
  }
}

module.exports = function (context: vscode.ExtensionContext) {
  // 注册侧边栏面板
  const sidebarBeeHiveCommand = new SideBarBeeHiveCommand();
  vscode.window.registerTreeDataProvider(
    "sidebar-codeShow-context",
    sidebarBeeHiveCommand
  );
};
