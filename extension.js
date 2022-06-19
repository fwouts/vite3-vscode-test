// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const path = require("path");
const vite = require("vite");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "vite3-vscode-test" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "vite3-vscode-test.run",
    function () {
      vite
        .createServer({
          root: path.join(__dirname, "example"),
        })
        .then(async (server) => {
          const port = 3100;
          await server.listen(port);
          vscode.window.showInformationMessage(
            `Success! Vite server ready at http://localhost:${port}`
          );
        })
        .catch((e) => {
          console.error(e);
          vscode.window.showErrorMessage(e.stack || e.message);
        });
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
