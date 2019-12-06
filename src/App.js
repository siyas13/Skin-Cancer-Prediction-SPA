import React, { Component } from 'react';
import './App.css';
import FileUpload from './Components/FileUpload';
import MasterPage from './Components/MasterPage';
import MidSection from './Components/MidSection';
import Result from './Components/Result';
import axios from 'axios';

const endpoint = 'http://localhost:4000/images'
var answer = "abc";

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedFile: null,
      loaded: 0,
      respond: false,
      selectedFileName: '',
    }
  }
  handleselectedFile = event => {
    this.setState({
      selectedFileName: event.target.files[0].name,
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  handleUpload = () => {
    this.setState({
      respond: false
    });
    const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)
    console.log("DAta", this.state.selectedFile);

    axios
      .post(endpoint, data, {
        onUploadProgress: ProgressEvent => {
          this.setState({
           loaded: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          })
        },
      })
      .then((res) => {
        answer = res.data.response[0].name;
        this.setState({
          respond: true
        });
      });
  }
  render() {
    return (
      <div className="App">
        <MasterPage />
        <MidSection  upload={this.handleUpload} load={this.handleselectedFile}>
          <FileUpload upload={this.handleUpload} name={this.state.selectedFileName} load={this.handleselectedFile}/>

        </MidSection>


      </div>
    );
  }
}

export default App;
