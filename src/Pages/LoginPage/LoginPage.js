import React from 'react';
import './LoginPage.scss';
import fire from '../../config/Firebase';

class LoginPage extends React.Component {
    state = {
        email: '',
        password: '',
        badLoginMessage: '',
    };

    logIn = e => {
        e.preventDefault();
        const { email, password } = this.state;
        fire.auth()
            .signInWithEmailAndPassword(email, password)
            .then(u => {
                console.log(u);
            })
            .catch(error => {
                this.setAlert('Zły login lub hasło');
            });
    };

    handleChange = e => {
        console.log(e);
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            email: '',
            password: '',
        });
    };

    setAlert = msg => {
        this.setState({ badLoginMessage: msg });
        setTimeout(() => this.setState({ badLoginMessage: null }), 3000);
    };

    signIn = e => {
        const { email, password } = this.state;
        e.preventDefault();
        fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => {
                this.setAlert(
                    'Email musi posiadać @ i hasło musi mieć 6 znakow',
                );
            });
    };

    render() {
        const { email, password } = this.state;
        return (
            <div className="container">
                <div className="login-block">
                    <form onSubmit={this.handleSubmit}>
                        <h1>Login</h1>
                        <input
                            name="email"
                            type="text"
                            placeholder="Email"
                            id="username"
                            value={email}
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            id="password"
                            value={password}
                            onChange={this.handleChange}
                            required
                        />
                        {this.state.badLoginMessage}
                        <button type="submit" onClick={this.logIn}>
                            Zaloguj sie
                        </button>
                        <button onClick={this.signIn}>Zarejestruj sie</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPage;
