// import { window, commands, SnippetString } from "vscode";
import { getSelectedText } from './get-selected-text';

import { window, commands, SnippetString } from 'vscode';

export const wrapWith = async (snippet: (widget: string) => string) => {
  const editor = window.activeTextEditor;

  if (!editor) return;

  const selection = getSelectedText(editor);
  const widget = editor.document.getText(selection);

  editor.insertSnippet(new SnippetString(snippet(widget)), selection);

  await commands.executeCommand('editor.action.formatDocument');
};
