import React, { Component } from 'react';

export default class SearchBar extends Component {

constructor(props) {
        super(props);

        this.state = { term: ''};

        // Since onInputchange uses 'this' inside, not binding it to the
        // search_bar context will result in an error that the app cannot
        // find this.setState.
        this.onInputChange = this.onInputChange.bind(this);
    };

onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
}

onFormSubmit(event) {
    //Prevents the browser from submitting form
    event.preventDefault();
}

render() {
    return (
        <form onSubmit={this.onFormSubmit} className="input-group">
            <input 
                placeholder="Get a five-day weather forecast in your favorite cities"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}/>
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
        </form>
        );
    }
}