# 开发dev

## 安装install

推荐使用pnpm
```bash
pnpm install
```

## 运行项目dev

vscode插件的项目与其他项目不同，第一，由于task.json的配置问题，我推荐将整个vscode插件作为工作区打开。

### before start

安装这两个vscode插件
- amodio.tsl-problem-matcher
- dbaeumer.vscode-eslint

### install 

```bash
pnpm install
```

### run

- 进入`extension.ts`
- 点击`F5`，打开一个新的vscode窗口，插件已经加载
- 快捷键`Command(Ctrl)+Shift+P`打开命令面板
- 在命令面板中输入`helloWorld`，对应package.json中的`onCommand:vsc-code-shared-awesome.helloWorld`,确认后执行命令