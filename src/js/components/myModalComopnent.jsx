import React from "react"
import { connect } from "react-redux"

import { addNewRecipe } from "../actions/commonAction"

import '../pages/myModal.sass'

@connect((store) => {
    console.log('modal store', store);
    return {
        recipe: store.common.recipe
    };
})
export default class myModalComopnent extends React.Component {
    constructor(props) {
        super(props);
        //console.log('## MODAL DATA AND PROPS:', this.props);
    }

    removeThisModal() {
        this.props.removeModal();
    }

    addNameRecipe() {
        this.props.dispatch(addNewRecipe([this.nameRecipe.value, this.ingRecipe.value]));
        this.nameRecipe.value = '';
        this.ingRecipe.value = '';
        this.removeThisModal();
    }

    render() {
        return (
            <div class='myModal'>
                <input type="text" ref={(name) => this.nameRecipe = name} placeholder="enter name" />
                <textarea ref={(ing) => this.ingRecipe = ing} placeholder="enter ingrediebnts..." ></textarea>
                <input
                    type='tbutton'
                    class='btnRecipe'
                    onClick={this.addNameRecipe.bind(this)}
                    value='Add New Recipe'>
                </input>
            </div>
        );
    }
}