import React from 'react'

if (process.env.NODE_ENV !== 'production') {
    alert('Looks like we are in development mode!');
} else {
    alert('Looks like we are in production mode!');
}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isClicked:false
        };
    }
    clicked=()=>{
       this.setState({isClicked:true});
       alert("clicked");
    }
    render(){
        let classstyle=(this.state.isClicked) ? "bg-color-yellow" : "bg-color-green";
        return (
            <div className = {`main-container ${classstyle}`}>
                <p className="p-tag">React here!</p>
                <button value="Click" onClick={this.clicked}>Click Me!</button>
            </div>
        )
    }
}
export default App;