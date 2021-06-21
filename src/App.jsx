import React from 'react';
import Form from "./components/Form";
import Chirp from "./components/Chirp";
require('./style.css');


class App extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
        username: "",
        text: "",
        chirps: [
            { id: Date.now(), username: 'Aminu', text: 'Hello chirpites!', datePosted: this.getDateTime()},
            { id: Date.now(), username: 'Damian', text: 'Hello World!', datePosted: this.getDateTime() },
            { id: Date.now(), username: 'Keisha', text: 'Whaddup World!', datePosted: this.getDateTime()},
        ],
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

    handleFormSubmission = (e) => {
        e.preventDefault();
        let chirps = this.state.chirps;
        let text = this.state.text;
        let datePosted = this.getDateTime();
        let username = this.state.username;
        chirps.push({ username, text , datePosted});
        this.setState({ username: "", chirps, text: "" });
      };
    
    handleMessageChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    getDateTime = () => {
        const date = new Date();
        const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const monthInYear = ['January', 'February', 'March', 'Apil', 'May', 'June', 'July',
                             'August', 'September', 'October', 'November', 'December'];
    
        let today = dayOfWeek[date.getDay() - 1];
        let thisMonth = monthInYear[date.getMonth()];
        let hours = (date.getHours().toString().length === 1) ? date.getHours().toString().padStart(2,0) : date.getHours().toString();
        let minutes = (date.getMinutes().toString().length === 1) ? date.getMinutes().toString().padStart(2,0) : date.getMinutes().toString();
        const dateFormat = `${today}, ${date.getDate()} ${thisMonth} ${date.getFullYear()}, ${hours}:${minutes}`;
        return dateFormat;
    }

    render () {
        return(
            <div className="container">
                <Form 
                    username={this.state.username} 
                    text={this.state.text} 
                    handleUsername={this.handleUsername} 
                    handleMessageChange={this.handleMessageChange} 
                    handleFormSubmission={this.handleFormSubmission} 
                    />
                
                <div className="right-container">
                    {this.state.chirps.slice(0).reverse().map(item => (
                        <Chirp 
                            id={item.id}
                            username ={item.username}
                            text={item.text}
                            datePosted={item.datePosted}
                        />
                    ))}
                </div>
            </div>
            
        );
    }
}

export default App;