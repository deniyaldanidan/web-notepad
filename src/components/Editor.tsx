"use client";
import { $getRoot, $getSelection, EditorState } from "lexical";

import { useEffect, useState } from "react";

import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {InitialConfigType, LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

const theme = {};
function onError(error:any){
  console.log(error);
}

export default function Editor() {
  const [editorState, setEditorState] = useState<EditorState>();

  const initialConfig:InitialConfigType = {
    namespace: 'MyEditor',
    theme,
    onError
  };

  function onChange(editorSt:EditorState){
    setEditorState(editorSt)
  }

  return (
  <>
  <LexicalComposer initialConfig={initialConfig}>
    <RichTextPlugin contentEditable={<ContentEditable />} placeholder={<div>Enter some text here</div>} ErrorBoundary={LexicalErrorBoundary} />
    <HistoryPlugin/>
    <AutoFocusPlugin />
    <OnChangePlugin onChange={onChange} />
  </LexicalComposer>
  <button onClick={()=>console.log(editorState?.toJSON())}>Save</button>
  </>
  )
}
