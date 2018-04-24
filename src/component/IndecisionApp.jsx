import React from "react";

class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        try {
            console.log('componentDidMount');
            const optionsJSON = localStorage.getItem('options');
            const options = JSON.parse(optionsJSON);
            if (!options) {
                return;
            }
            this.setState(() => ({ options }));
        } catch (error) {
            //Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
        const optionsJSON = JSON.stringify(this.state.options);
        localStorage.setItem('options', optionsJSON);
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    handleRemoveAll() {
        this.setState( () => ({ options: [] }) );
    }

    handleRemove(option) {
        console.log('remove');
        this.setState((prevState) => ({
            options: prevState.options.filter((item) => item !== option)
        }));
    }

    handleAddOption(option) {

        if (!option) {
            return 'You cannot add empty option.';
        }

        if (this.state.options.indexOf(option) > -1) {
            return "This item is already exists";
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }

    render() {
        const title = 'Indecison App';
        const subtitle = 'Put your life in the hnads of a computer';

        return (
            <div>
                <Header 
                    title={title} 
                    subtitle={subtitle}
                    />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    options={this.state.options}
                    handleRemoveAll={this.handleRemoveAll}
                    />
                <Options 
                    options={this.state.options}
                    handleRemove={this.handleRemove}/>
                <AddOption 
                    handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;

class Header extends React.Component {
    
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {

    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleRemoveAll = this.props.handleRemoveAll.bind(this);
        this.state = {};
    }

    handlePick() {
        const n = Math.floor(Math.random() * this.props.options.length);
        if (!this.props.options || this.props.options.length === 0) {
            alert('Your task is empty');
            return;
        }
        alert('You should do task => ' + this.props.options[n]);
    }

    handleRemoveAll() {
        console.log('removeAll');
    }

    render() {
        return (
            <div>
                <button 
                    onClick={this.handlePick} 
                    disabled={!this.props.hasOptions}>
                    What should I do?
                </button>
                <button
                    onClick={this.handleRemoveAll}
                    disabled={!this.props.hasOptions}>
                    Remove All
                </button>
            </div>
        );
    }
}

class Options extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        const list = this.props.options.map((option, index) => {
            return (
                <div>
                    <li key={index} >{option}</li>
                    <button 
                        onClick={(e) => this.props.handleRemove(option)}>
                        remove
                    </button>
                </div>
            );
        });

        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

class AddOption extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOption = this.props.handleAddOption.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        const option = event.target.elements.txtAddOption.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }) );
        event.target.elements.txtAddOption.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="txtAddOption" />
                    <button type="submit">
                        Add Options
                    </button>
                    {this.state.error && <p>{this.state.error}</p>}
                </form>
            </div>
        );
    }
}