import React, { Component } from 'react';
import HighScore from './HighScore';
import './css/style.css';

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            overTen: false
        }
    }

    handleClick = () => {
        // Changes the state of the variable
        this.setState({ count: this.state.count + 1 });
    }

    componentDidUpdate(props, state) {
        if (this.state.count > 10 && this.state.count != state.count) {
            this.setState({ overTen: true });
        }
    }

    componentDidUpdate(props, state){
        if(this.state.count > 10 && this.state.count != state.count && !this.state.overTen) {
            console.log("Update over ten");
            this.setState({overTen: true});
        }
    }

    resetCount = (e) => {
        this.setState({
            count: 0,
            overTen: false
        });
    }

    render() {
        let { count } = this.state;
        return (
            <div>
                <h1>You clicked the button {count} times</h1>
             
                <HighScore 
                // overTen={this.state.overTen}
                // onReset={(e) => this.resetCount(e)}
                overTen={this.state.overTen}
                onReset={ this.resetCount}
                />
               
                <span>
                    <button onClick={(e) => this.handleClick()}>Click me!</button>
                </span>
            </div>
        )
    }
}

export default Application;