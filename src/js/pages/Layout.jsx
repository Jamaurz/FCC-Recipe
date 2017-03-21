import { Link } from 'react-router';
import { connect } from "react-redux"
import React from "react"
import { modal } from "react-redux-modal"

import { loadingRecipe, upadeRecipe } from "../actions/commonAction"
import myModalComopnent from "../components/myModalComopnent.jsx"
import './Layout.sass'

@connect((store, ownProps) => {
    //console.log('ownProps', ownProps);
    return {
        recipe: store.common.recipe
    };
})
export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }


    componentDidUpdate() {
        console.log("COMPONENT DID UPDATE");
        this.props.dispatch(upadeRecipe());
    }

    addModal() {
        modal.add(myModalComopnent, {
            title: 'Add New Recipe',
            size: 'medium', // large, medium or small,
            closeOnOutsideClick: false, // (optional) Switch to true if you want to close the modal by clicking outside of it,
            hideTitleBar: false, // (optional) Switch to true if do not want the default title bar and close button,
            hideCloseButton: false // (optional) if you don't wanna show the top right close button
        });
    }

    componentDidMount() {
        this.props.dispatch(loadingRecipe())
    }

    render() {
        return (
           <div class='appContainer'>
               <div class='listRecipe'>
                   <h1>Recipe</h1>
                   <input
                       type="button"
                       onClick={this.addModal.bind(this)}
                       class='btnRecipe'
                       value='Add New Recipe' >
                   </input>
                   <ul>
                       {this.props.recipe.map((el, index) => {
                           let path = 'recipe/' + el.id;
                           return <Link key={index} to={path}><li  >  {el.name}
                           </li></Link>
                       })}
                   </ul>
               </div>
               <div class='detailsRecipe'>
                   {this.props.children}
               </div>
           </div>
        )
    }
}
