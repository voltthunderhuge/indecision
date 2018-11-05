import React from 'react';

class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));

        if (!error) {
            e.target.elements.option.value = "";
        }
    }
    // constructor(props) {
    //     super(props);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }
    // handleSubmit(e) {
     
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="option"/>
                    <button>Slurpbitch</button>
                </form>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        )
    }
}

export default AddOption;