import React from 'react';
import AddComponent from './AddComponent.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';

class IndecisionApp extends React.Component {

    state = {
        options: [],
        title: 'Indecision',
        subtitle: 'Put your life in the hands of a computer',
        toggler: undefined
    };

    addCom = (newValue) => {

        if(!newValue) {
            return 'Enter valid value to add item';
        } else if(this.state.options.indexOf(newValue) > -1) {
            return 'This option already exists';
        }
        this.setState((prevState) => ({
            options: prevState.options.concat([newValue])
        }));
    }

    handleRemoveAll = () => {
        this.setState(() => ({
            options: []
        }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const right = this.state.options[randomNum];
        this.setState(() => ({
            toggler: right
        }));
    }
    handleDeleteOption = (Removed) => {
       this.setState((prevState) => ({
           options: prevState.options.filter((option) => Removed !== option)
       }));
    }

    handleCloseModal = () => {
        this.setState(() => ({
            toggler: undefined
        }));
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


    render() {
        return (
            <div>
                <div className="container">
                    <Header title={this.state.title} subtitle={this.state.subtitle}/>
                    <Action nextOption={this.handlePick} options={this.state.options}/>
                    <div className="widget">
                        <Options remove={this.handleRemoveAll} options={this.state.options} handleDeleteOption={this.handleDeleteOption}/>
                        <AddComponent adder={this.addCom}/>
                    </div> 
                </div>
                <OptionModal toggler={this.state.toggler} handleRemove={this.handleCloseModal}/>
            </div>
        );
    }
}

export default IndecisionApp;