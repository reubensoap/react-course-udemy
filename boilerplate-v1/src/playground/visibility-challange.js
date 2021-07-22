
class Visibility extends React.Component {
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            visible: false
        };

    }

    handleToggle() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
        console.log(this.state.visible);
    }

    render() {
        return(
            <div>
            <h1>Visibility Toggler</h1>
            <button onClick={this.handleToggle}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
            {this.state.visible ? <p>This shiz is visible</p> : <p></p>}
            </div>
        );  
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));



/*

let appRoot = document.getElementById('app');
let choice = false;

const onMakeChoice = () => {
    choice = !choice;
    renderTemplate();
};

const renderTemplate = () => {
    const template = (
        <div>
            <h2>Visibility Toggler</h2>
            <button onClick={onMakeChoice}>{choice ? 'Hide Details' : 'Show Details'}</button>
            {choice ? <p>This shiz is visible</p> : <p></p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderTemplate();

*/