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
    state= {lat: null , errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }) ,
            (err) => this.setState({ errorMessage: err.message })
        );
    }
    componentDidUpdate () {
        console.log('Component updated');
    }


    // Requirements for react to define render() !!!
    render() {
         /*
        return (
            <div>
                Latitude: {this.state.lat }
                <br/>
                Error: { this.state.errorMessage }
            </div>
           
        );  */
           if(this.state.lat && !this.state.errorMessage){
               return <div> Latitude: {this.state.lat} </div>;
           }
           if(!this.state.lat && this.state.errorMessage){
               return <div> Error: {this.state.errorMessage } </div>;
           }
           return <div> Loading... </div>;
    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
);