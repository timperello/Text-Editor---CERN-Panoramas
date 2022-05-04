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

    //alert('Generated Html : \n' + data);
  };

  componentDidMount() {
    //this.editorRef.current.props.setOptions.lang.dialogBox.videoBox.url ='AAAAAAAAAA';
    /*console.log(
      this.editorRef.current.props.setOptions.lang.dialogBox.videoBox
    );*/
  }

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
              ['list'],
              ['fontSize', 'font'],
              ['fontColor', 'hiliteColor'],
              ['link'],
              ['fullScreen'],
            ],
            defaultStyle: 'font-family:Roboto; font-size:medium',
          }}
          //setContents="{info buttons value}"
        />
        <button onClick={this.submitChanges}>Submit changes</button>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
