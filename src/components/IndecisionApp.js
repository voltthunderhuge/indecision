import React from 'react'
import AddOption from "./AddOption"
import Options from "./Options"
import Header from "./Header"
import Action from "./Action"
import OptionModal from "./OptionModal"

class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    };


    // constructor(props) {

    //     super(props);
    
    //     this.handleDeleteAllOptions = this.handleDeleteAllOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //         options: []
    //     };
    // }

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
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                >
                </OptionModal>
            </div>
        )
    }

    componentDidMount() {
        console.log("Component did mount");
        try {
            const json = localStorage.getItem('options') || "[]";
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

    handleDeleteAllOptions = () => {
        this.setState(() => ({options : []}));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }))
    }
    handlePick = () => {
        const pickIndex = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[pickIndex];

        this.setState(() => ({selectedOption: option}));
    }

    handleAddOption = (newOption) => {
        console.log(newOption);
        if (!newOption) {
            return "Please enter a valid option";
        } else if (this.state.options.indexOf(newOption) !== -1) {
            return "Please enter a unique option";
        }

        this.setState((prevState) => ({options: prevState.options.concat(newOption)}));
    }

    handleClearSelectedOption = () => {
        console.log("clearing option");
        this.setState(() => ({
            selectedOption: undefined
        }))
    }
}

export default IndecisionApp;