
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import News from './components/News'

export default class App extends Component {
  apiKey = "fba1a30dec284837bc8df4de70c85b3d"
  state = {
      progress: 0,
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div className='App-container'>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize="8" category="general" />} />
        <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize="8" category="business" />} />
        <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize="8" category="entertainment"/>}/>
        <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize="8" category="general"/>}/>
        <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize="8" category="health"/>}/>
        <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize="8" category="science"/>}/>
        <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize="8" category="sports"/>}/>
        <Route exact path="/technology"element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize="8" category="technology"/>}/>
      </Routes>
      </Router>
      </div>
    )
  }
}

