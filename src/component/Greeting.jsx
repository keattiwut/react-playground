import React from 'react';

class Greeting extends React.Component {

    render() {
        const isLoggedIn = this.props.isLoggedIn;
        const element = isLoggedIn ? (<UserGreeting />) : (<GuestGreeting />);

        return (
            <div>
                <h2>Greeting</h2>
                {element}
            </div>
        );
    }
}

class UserGreeting extends React.Component {

    componentDidMount() {
        console.log('UserGreeting did mount');
    }

    componentWillUnmount() {
        console.log('UserGreeting will unmount');
    }

    componentWillUpdate() {
        console.log('UserGreeting will update');
    }

    render() {
        return (
            <h1>Welcome back</h1>
        );
    }
}

class GuestGreeting extends React.Component {

    render() {
        return (
            <h1>Please sign in</h1>
        );
    }
}

class LoginButton extends React.Component {

    render() {
        return (
            <button onClick={this.props.onClick}>
                Login
            </button>
        );
    }
}

class LogoutButton extends React.Component {

    render() {
        return (
            <button onClick={this.props.onClick}>
                Logout
            </button>
        );
    }
}

class LoginControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick = (e, param) => {
        console.log(e);
        console.log(param);
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick = (e, param) => {
        console.log(e);
        console.log(param);
        this.setState({ isLoggedIn: false });
    }

    render = () => {

        const isLoggedIn = this.state.isLoggedIn;
        const button = isLoggedIn ? (<LogoutButton onClick={(e) => this.handleLogoutClick(e, 'test')} />)
        :(<LoginButton onClick={(e) => this.handleLoginClick(e, 'test2')} />);
        
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

export default LoginControl;