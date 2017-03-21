import React from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux"

import { updateNameRecipe, updateIngRecipe } from "../actions/commonAction"

import './Edit.sass'

@connect((store, ownProps) => {
    return {
        params: ownProps.routeParams,
        recipe: store.common.recipe,
        current: store.common.recipe.filter((rec) => {
            return rec.id == ownProps.routeParams.id;
        })
    };
})
export default class Recipe extends React.Component {
    update() {
        console.log('update', this.nameUpdate.value, this.ingUpdate.value);
    }

    changeName(type) {
        this.props.dispatch(updateNameRecipe(this.props.params.id, type.target.value));
    }

    changeIng(type) {
        this.props.dispatch(updateIngRecipe(this.props.params.id, type.target.value));
    }

    render() {
        let name = ' ',
            ing = [],
            path = ' ';
        if(this.props.current[0]) {
            name = this.props.current[0].name;
            ing = this.props.current[0].ing.split(',');
            path = "recipe/" + this.props.params.id;
        }
        return (
            <div class='edit'>
                <Link to={path}>Back</Link>
                <h1>Recipe {name}</h1>
                <input
                    type="text"
                    value={name}
                    onChange={this.changeName.bind(this)} />
                <textarea
                    cols="30"
                    rows="10"
                    value={ing}
                    onChange={this.changeIng.bind(this)} >
                </textarea>
            </div>
        )
    }
}