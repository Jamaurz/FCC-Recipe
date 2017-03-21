
import React from 'react'
import { Link } from 'react-router';
import { connect } from "react-redux"

import { deleteRecipe } from "../actions/commonAction"

import './Recipe.sass'

@connect((store, ownProps) => {
    return {
        params: ownProps.routeParams,
        recipe: store.common.recipe,
        current: store.common.recipe.filter((rec) => {
            return rec.id == ownProps.routeParams.id;
        })
    };
})
export default class Start extends React.Component {
    constructor() {
        super();
    }

    delete() {
        this.props.dispatch(deleteRecipe(this.props.params.id));
    }

    render() {
        let name = ' ',
            ing = [],
            path = ' ';
        if(this.props.current[0]) {
            name = this.props.current[0].name;
            ing = this.props.current[0].ing.split(',');
            path = "edit/" + this.props.params.id;
        }
       return (
           <div class='recipe'>
               <h1>Edit {name}</h1>
               <ul>
                   {ing.map((el, index) => <li key={index}>{el}</li>)}
               </ul>
               <Link to={path}>Edit</Link>
               <Link
                   to="/"
                   onClick={this.delete.bind(this)}>
                   delete
               </Link>
           </div>
       )
    }
}