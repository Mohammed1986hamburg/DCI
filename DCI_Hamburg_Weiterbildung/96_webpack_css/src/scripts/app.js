import React from "react";
import ReactDOM from "react-dom";

// const heading = <h1>Hello React</h1>;  // it is jsx = html+js

// ReactDOM.render(heading, document.getElementById('app'));

class Title extends React.Component {
    render(){
        return (
            <div>
                <h1>welcome to react world</h1>
                <img src="./images/1.jpg" width="300" height="300"/>
            </div>   
        );
    }
}

ReactDOM.render(<Title/>, document.getElementById('app'));


class Image extends React.Component {
    render(){
        return <img src="./images/2.jpg" width="300" height="300"/>;
        }
}



ReactDOM.render(<Image/>, document.getElementById('seconsDiv'));