import React, { Component } from 'react';

class Component2 extends Component {
    constructor() {
        super();
        console.log("Component2");
    }

    render() {
        return (
            <div>
                <h1>Class Component2</h1>
            </div>
        );
    }
}

export default Component2;