import React, { Component } from 'react';
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const grabList = function () {
    // this is where two names will grab all their movie lists then save them to state

}
const checkMatch = function () {
    //it will  compare lists
    for (var i = 0; i < this.state.firstMovies.length; i++) {

    }

    // else it will say no match
}

class Home extends Component {
    state = {
        firstActor: "",
        secondActor: "",
        firstMovies: [],
        secondMovies: []
    }
    submitActor = (event) =>{

    }
    render() {
        return (
            <div>
                Home Page
                <div>
                    <TextField
                        hintText="First Actor"
                        floatingLabelText="First Actor"
                        floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                        floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                        onChange={this.handleChange}
                        name="firstActor"
                        type="text"
                        required

                        value={this.state.firstActor}
                    />
                    <TextField
                        hintText="Second Actor"
                        floatingLabelText="Second Actor"
                        floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                        floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                        onChange={this.handleChange}
                        name="secondActor"
                        type="text"
                        required

                        value={this.state.secondActor}
                    />
                </div>
                <div>
                            <RaisedButton onClick={this.submitActor} label="Next" style={Style} />
                        </div>
            </div>
        );
    }
}

export default Home;