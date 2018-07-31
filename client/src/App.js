import React, { Component } from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store'
import Customers from './components/customer/Customers'

class App extends Component {

  render () {
    return (
      <Provider store={ store }>
        <Customers/>
      </Provider>
    )
  }
}

export default App
