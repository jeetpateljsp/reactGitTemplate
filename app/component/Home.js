import NavBar from "./NavBar";
import React from "react";
import { fetchRepos } from "../utils/api";

function Result ({users}){
    return users === null ? <div className="container display-flex flex-center flex-column">Please enter username!</div> :
        <ul className="display-flex flex-center flex-column">
            {users.map((users, index) => (
                <li key={index}>
                    <h1>{users.name}</h1>
                    <a>{users.email}</a>
                </li>
            ))}
        </ul>
}

export default class Home extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            users: null,
            error: null
        }

        this.onChangeInput = this.onChangeInput.bind(this)
        this.onButtonClick = this.onButtonClick.bind(this)
    }

    onChangeInput(e){
        this.setState({
            name: e.target.value
        })
    }

    onButtonClick(){
        this.setState({
            users: fetchRepos(this.state.name)
        })
    }

    render() {
        let name = this.state.name
        let users = this.state.users
        return(
            <React.Fragment>
            <div className="flex-center flex-column navbar-container">
                <h1>Hello Git User!</h1>
                <NavBar name={name} onChangeInput={this.onChangeInput} onButtonClick={this.onButtonClick}/>
            </div>
            <Result users={users}/>
            </React.Fragment>
        )
    }
}