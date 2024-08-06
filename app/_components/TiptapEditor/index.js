import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';

import TiptapEditorToolbar from './TiptapEditorToolbar';
import './styles.scss';

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
];

function TiptapEditor(props) {
  const { onChange, value } = props;

  const editor = useEditor({
    extensions,
    content: value,
    editorProps: { attributes: { class: '' } },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      console.log(editor.getHTML());
    },
  });

  return (
    <div
      style={{
        border: 'solid 1px gray',
        borderRadius: 4,
        padding: 12,
        margin: '24px 0',
        overflowY: 'scroll',
        height: 240,
      }}
    >
      <TiptapEditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

export default TiptapEditor;
