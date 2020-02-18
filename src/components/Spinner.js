import React, { Component } from 'react'
import Axios from 'axios'
import './Spinner.css'

class Spinner extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             quote:'',
             isLoaded: false
        }
    }
    
    componentDidMount() {
        Axios.get("https://api.github.com/zen")
        .then((response) => {
            setTimeout(() => {
                this.setState({quote: response.data , isLoaded: true})
            }, 3000);
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                {this.state.quote ? (
                    <div>
                        <p>{this.state.quote}</p>
                    </div>
                ): (
                    <div className='loader'/>
                )}
            </div>
        )
    }
}

export default Spinner
