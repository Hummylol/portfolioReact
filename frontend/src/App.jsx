import React from 'react'
import Page from './components/Page'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Navbar/>
      <Page />
    </Router>
  )
}

export default App