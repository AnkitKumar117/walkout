import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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

    /*
    //constructor method is specific to js not react ,,, it is automatically called before any other method;
    constructor(props) {

        //super make sure constructor is called imp to defne
        super(props);

        //intializing state
        this.state = { lat: null, errorMessage: '' };


        
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // setState() is used to update state
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
        
    }
    */

    //No need to use constuctor for intializing state; we can do this directly like this;
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }
    componentDidUpdate() {
        console.log('Component updated');
    }

renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
        return <SeasonDisplay lat={this.state.lat} />
    }
    if (!this.state.lat && this.state.errorMessage) {
        return <div> Error: {this.state.errorMessage} </div>;
    }
    return <Spinner message= "Please accept location requests..." />;
}
    // Requirements for react to define render() !!!
    render() {
        return (
            <div className = "border red">
                { this.renderContent() }
            </div>
        )
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);