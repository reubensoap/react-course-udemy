
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubOne = this.handleSubOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        if(!localStorage.getItem('count')){
            localStorage.setItem('count', 0);
            console.log('value created');
        }

        try {
            const starter = parseInt(localStorage.getItem('count'), 10);
            if(!isNaN(starter)) {
                this.setState(() => ({count: starter}));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevState) {
        try {
            if(prevState.count !== this.state.count) {
                const newValue = this.state.count;
                localStorage.setItem('count', newValue);            }
        } catch (e) {

        }
    }

    handleAddOne() {
        this.setState((prevState) =>{
            return {
                count: prevState.count + 1
            };
        });
    }
    
    handleSubOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }

}

ReactDOM.render(<Counter />, document.getElementById('app'));

/*
let count = 0;
var appRoot = document.getElementById('app');

const addOne = () => {
    count++;
    console.log('addOne', count);
    renderCounterApp();
}

const minusOne = () => {
    count--;
    console.log('minusOne', count);
    renderCounterApp();
}

const reset = () => {
    count = 0;
    console.log('reset');
    renderCounterApp();
}

const renderCounterApp = () => {

    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} className="button btn">+1</button>
            <button onClick={minusOne} className="button btn">-1</button>
            <button onClick={reset} className="button btn">Reset</button>
        </div>
    );

    ReactDOM.render(template2, appRoot);

};

renderCounterApp();

*/