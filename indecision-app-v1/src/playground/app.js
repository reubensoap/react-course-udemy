class IndecisionApp extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            title: 'Indecision',
            subtitle: 'Put your life in the hands of a computer',
            options: ['thing one']
        };

        this.addCom = this.addCom.bind(this);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({options}));
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    addCom(newValue) {

        if(!newValue) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(newValue) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat([newValue])
        }));
    }

    handleRemoveAll() {
        this.setState(() => ({
            options: []
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const right = this.state.options[randomNum];
        alert(right);
    }
    handleDeleteOption(Removed) {
       this.setState((prevState) => ({
           options: prevState.options.filter((option) => Removed !== option)
       }));
    }


    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle}/>
                <Action nextOption={this.handlePick} options={this.state.options}/>
                <Options remove={this.handleRemoveAll} options={this.state.options} handleDeleteOption={this.handleDeleteOption}/>
                <AddComponent adder={this.addCom}/>
            </div>
        );
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
                <button onClick={props.nextOption} disabled={props.options.length === 0}>What should I do?</button>
            </div>
        );
}

const Options = (props) =>  {

        return (
            <div>
                {
                    props.options.map((option) => 
                        <Option key={option} OptionText={option} handleDeleteOption={props.handleDeleteOption}/>
                    )
                }
                <button onClick={props.remove}>Remove All Options</button>
            </div>
        );
}

const Option = (props) => {
        return (
            <div>
                {props.OptionText}
                <button onClick={(e) => props.handleDeleteOption(props.OptionText)}>remove</button>
            </div>
        );
}

class AddComponent extends React.Component {

    constructor(props){
        super(props);

        this.addCom = this.addCom.bind(this);

        this.state = {
            error: undefined
        };
    }
    

    addCom(e) {
        e.preventDefault();

        let newOption = e.target.elements.get.value;
        let error = this.props.adder(newOption);

        this.setState(() => ({
            error
        }));

        if(!error) {
            e.target.elements.get.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addCom}>
                    <input type="text" name="get"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));