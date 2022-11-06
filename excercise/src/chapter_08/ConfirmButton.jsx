
//Class 컴포넌트
/*
import React, { Component } from 'react';


class ConfirmButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isConfirmed: false,
        };

        //bind 코드
        //this.handleConfirm = this.handleConfirm.bind(this);    
    }
    //Arrow function
    handleConfirm =() => {
        this.setState((prevState) => ({
            isConfirmed : !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button
                onClick={this.handleConfirm}
                disabled = {this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;
*/

//function 컴포넌트
import React, { useState } from 'react';

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleConfirm = () => {
        setIsConfirmed((prevConfirmed) => !prevConfirmed);
    };

    return (
        <button onClick ={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;