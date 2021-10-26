import React, { Component } from 'react';

class Counter extends Component {

    state = {
        counter:0,
        text:"Hello Word!",
    }
    
    // we don't need the const in the arrow function because it is inside a class Component.
    // this are event handlers 
    addOne = () => {
        this.setState({
            counter:this.state.counter+1
        });
    };
    
    removeOne = () => {
        
        // the if condition stops the counter from going below 0
        if(this.state.counter !== 0){
            this.setState({
                counter:this.state.counter-1
            });
        }
    };
    
    addFive = () => {
        this.setState({
            counter:this.state.counter+5
        });
    };
    
    removeFive = () => {
        
        // the if condition stops the counter from going below 0
        if(this.state.counter >4){
            this.setState({
                counter:this.state.counter-5
            });
        }
    };
    
    resetCounter = () => {
        this.setState({
            counter:0
        });
    };

    render() {

        let circleClass = "";

        if (this.state.counter===0){
            circleClass = " ";
        } else if (this.state.counter % 2 === 0){
            circleClass = "even";
        } else if (this.state.counter % 2 === 1){
            circleClass = "odd";
        }

        // Another way to write the if statement

        // this.state.counter === 0
        // ? (circleClass = " ")
        // : this.state.counter % 2 === 0
        // ? (circleClass = "even")
        // : (circleClass = "odd")

        return (
            <div>
                <div>
                <div className="counter">
                {/* the idea is to erase this <p> and create a new one everysingle time */}
                <p className={circleClass}>{this.state.counter}</p>
                </div>
                <div className="buttons">
                    <button onClick={this.addOne}>Add one</button>
                    <button onClick={this.addFive}>Add five</button>
                    <button onClick={this.removeOne}>Remove one</button>
                    <button onClick={this.removeFive}>Remove five</button>
                    <button onClick={this.resetCounter}>Reset</button>
                </div>
                </div>
            </div>
        );
    }
}

export default Counter;



// const Counter = () => {
//     return(
//         <div>
//             <div className="counter">
//                 {/* the idea is to erase this <p> and create a new one everysingle time */}
//                 <p>0</p>
//             </div>
//             <div className="buttons">
//                     <button>Add one</button>
//                     <button>Remove one</button>
//                     <button>Reset</button>
//             </div>
//         </div>
//     );
// };

// export default Counter;