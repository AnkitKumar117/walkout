import React from 'react';
import ReactDOM from 'react-dom';
// functional based components
// const App = ( ) => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position)=> console.log(position),
//         (err)=> console.log(err)
//     );
//     return <div>Latitude: </div>;
// };

//Class based components
class App extends React.Component {
    //constructor method is specific to js not react ,,, it is automatically called before any other method;
    constructor(props){
        //super make sure constructu=or is called imp to defne
        super(props);

        //intializing state
        this.state= { lat: null };

    }

    // Requirements for react to define render() !!!
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude: {this.state.lat} </div>;
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);