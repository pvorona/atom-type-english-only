'use babel';

import keyCodes from './keyboard-layout-mapping'
import { CompositeDisposable } from 'atom'

const subscriptions = new CompositeDisposable()

export default {
  activate() {
    subscriptions.add(atom.workspace.observeTextEditors(editor => {
      subscriptions.add(editor.onWillInsertText(event => {
        if (event.text in keyCodes) {
          editor.insertText(keyCodes[event.text])
          event.cancel()
        }
      }))
    }))
  },
  deactivate() {
    subscriptions.dispose()
  }
};
