import React, { Component } from 'react';
import { Container, FormContainer, BodyContainer, Style, TextLabelStyle } from "../StyledComponents/DefaultStyle"
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
const grabList = function () {
    // this is where two names will grab all their movie lists then save them to state

}
const checkMatch = function (){
    //it will  compare lists
    for(var i = 0; i < this.state.firstMovies.length; i++){

    }
 
    // else it will say no match
}
class Home extends Component {
    state={
        firstMovies: [],
        secondMovies: []
    }
    render() {
        return (
            <div>
                Home Page
                <TextField
                                hintText="Email"
                                floatingLabelText="Email"
                                floatingLabelStyle={TextLabelStyle.floatingLabelStyle}
                                floatingLabelFocusStyle={TextLabelStyle.floatingLabelFocusStyle}
                                onChange={this.handleChange}
                                name="email"
                                type="text"
                                required

                                value={this.state.info.email}
                            />
            </div>
        );
    }
}

export default Home;