import React from 'react';

import LoginPage from './Pages/LoginPage/LoginPage';
import fire from './config/Firebase';
import Home from './Pages/Home/Home';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
        };
        this.authListener = this.authListener.bind(this);
    }

    componentDidMount() {
        this.authListener();
    }
    authListener() {
        fire.auth().onAuthStateChanged(user => {
            console.log(user);
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        });
    }

    render() {
        return (
            <div className="App">
                {this.state.user ? <Home /> : <LoginPage />}
            </div>
        );
    }
}

export default App;
