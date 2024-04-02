import React, {Component} from "react";

// all the avaliable action I need. as of now I have one action i.e GET_FOOD_ITEMS
//import the displayitems to display the food items
//connect method from react-redux
//propTypes

import * as actions from '../actions';
import Displayitems from "../components/displayitems";
import { connect } from "react-redux";
import PropTypes from 'prop-types';



class App extends Component{

componentDidMount(){
    debugger;
    this.props.getFoodItems();
}


    render(){
        return(
            <div>
               <h1>Hi</h1>
               <Displayitems list={this.props.finalState}></Displayitems>
            </div>
        )
    }
}

 
App.propTypes = {
    getFoodItems: PropTypes.func.isRequired
}

const mapStateProps = (state) =>{
    return (
        {
            finalState: state.food,
        }
    )
}

export default connect (mapStateProps, actions)(App);