import React, { Component } from 'react';

class Stateless extends Component {
    state = {
        counter: 0
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter +1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.props.text} {this.state.counter}
                </button>
            </div>
        );
    }
}

export default Stateless;