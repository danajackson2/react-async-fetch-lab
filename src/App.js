import React, { Component } from 'react'

class App extends Component {
    state={
        astros: []
    }
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                astros: data.people
            })
        })
    }

    render(){
        return(
            <ol>
                {this.state.astros.map(p =>  <li>{p.name}</li>)}
            </ol>
        )
    }

}

export default App