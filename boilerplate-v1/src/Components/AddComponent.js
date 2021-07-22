import React from 'react';

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
                <form onSubmit={this.addCom} className="widget__form">
                    <input className="widget__form-input" type="text" name="get"></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}

export default AddComponent;