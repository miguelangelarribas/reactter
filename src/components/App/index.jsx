import React, { Component } from 'react'
import Header from '../Header'
import Main from '../Main'

//esta clase app va a ser el contenerdor de la aplicacion para que sea escalable

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        )
    }
}

export default App