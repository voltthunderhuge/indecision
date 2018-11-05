class IndecisionApp extends React.Component {

    constructor(props) {

        super(props);
    
        this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    render() {
        const title = 'Indecision';
        const subtitle = "Put your hands in the life of a computer";
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options && this.state.options.length>0}
                    handlePick={this.handlePick}    
                />
                <Options 
                    options={this.state.options}
                    handleDeleteAllOptions={this.handleDeleteAllOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }

    componentDidMount() {
        console.log("Component did mount");
        try {
            const json = localStorage.getItem('options');
            this.setState(() => ({
                options: JSON.parse(json)
            }));
        } catch (e) {
        }
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update");
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handleDeleteAllOptions() {
        this.setState(() => ({options : []}));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }))
    }
    handlePick() {
        const pickIndex = Math.floor(Math.random()*this.state.options.length);
        console.log("Picked:", this.state.options[pickIndex]);
    }

    handleAddOption(newOption) {
        console.log(newOption);
        if (!newOption) {
            return "Please enter a valid option";
        } else if (this.state.options.indexOf(newOption) !== -1) {
            return "Please enter a unique option";
        }

        this.setState((prevState) => ({options: prevState.options.concat(newOption)}));
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>What should I do?</button>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.name}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.name);
                }}
            >
                Delete
            </button>
        </div>
    );
}

const Options = (props) => {

    return (
        <div>
        {props.options.length === 0 && <p>Please add an option!</p>}
            {
                props.options.map((option, index) => (
                    <Option 
                        key={index} 
                        name={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />)
                )
            }
            <button onClick={props.handleDeleteAllOptions}>Remove All</button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));

        if (!error) {
            e.target.elements.option.value = "";
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="option"/>
                    <button>Slumbitch</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp options={["die", "live"]}/>, document.getElementById("app"));