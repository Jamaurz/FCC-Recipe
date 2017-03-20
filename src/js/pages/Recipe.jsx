
import React from 'react'
import { Link } from 'react-router';
import { connect } from "react-redux"

import { deleteRecipe } from "../actions/commonAction"

import './Recipe.sass'

@connect((store, ownProps) => {
    console.log('store', store);
    return {
        params: ownProps.routeParams,
        recipe: store.common.recipe
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
        let current = this.props.recipe.filter((rec) => {
            console.log('all recipe', this.props.recipe)
            console.log('rec', rec.id, typeof rec.id);
            console.log('params', this.props.params.id, typeof this.props.params.id);
            return rec.id == this.props.params.id;
        });
        console.log('current', current);
        let { name, ing } = current[0];
        ing = ing.split(',');
        let path = "edit/" + this.props.params.id;
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