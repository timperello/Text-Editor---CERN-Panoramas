import React from 'react';
import ReactDOM from 'react-dom';
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor from 'suneditor-react';
import './style.css';

class App extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  constructor() {
    super();
    this.editorRef = React.createRef();
  }

  submitChanges = () => {
    let data = this.editorRef.current.editor.getContents(true);
    console.log(data);
    alert('Generated Html : \n' + data);
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <>
        <SunEditor
          ref={this.editorRef}
          width="100%"
          height="150px"
          setOptions={{
            buttonList: [
              ['undo', 'redo'],
              ['bold', 'italic', 'underline', 'align'],
              ['horizontalRule', 'list'],
              ['fontSize', 'font'],
              ['fontColor', 'hiliteColor'],
              ['link', 'image', 'video'],
              ['fullScreen'],
            ],
          }}
          //setContents="{info buttons value}"
        />
        <button onClick={this.submitChanges}>Submit changes</button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
