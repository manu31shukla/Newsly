
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='App-container'>
      <Navbar />
      <News />
      </div>
    )
  }
}

