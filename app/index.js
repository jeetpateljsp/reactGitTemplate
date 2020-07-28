import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

import Home from './component/Home'

class App extends React.Component{
    render() {
        return(
            <React.Fragment>
                <Home/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
)