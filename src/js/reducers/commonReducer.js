export default function reducer(state={
    recipe: [{"id": "1","name": "name", "ing": "ing1, ing2,in3"}, {"id": "2", "name": "name2", "ing": "ing1, ing2,in3"}]
}, action) {

    switch (action.type) {
        case "LOADING_RECIPE": {
            let list = JSON.parse(localStorage.getItem('recipeList'));
            if(localStorage.getItem('recipeList')) {
                return {...state, recipe: list.recipe}
            }
            return state;
            break;
        }
        case "ADD_NEW_RECIPE": {
            let obj = {
                'id': '' + Date.now(),
                'name': action.payload[0],
                'ing': action.payload[1]
            };
            return {
                ...state,
                recipe: [...state.recipe, obj],
            }
            break;
        }
        case "UPDATE_RECIPE": {
            let updateList = JSON.stringify(state);
            localStorage.setItem('recipeList', updateList);
            break;
        }
        case "DELETE_RECIPE": {
            return {
                ...state,
                recipe: state.recipe.filter((rec) =>  {
                console.log("payload", action.payload, typeof action.payload);
            console.log('rec', rec.id, typeof rec.id);
                    return rec.id != action.payload})
            }
            break;
        }
        case "UPDATE_NAME_RECIPE": {
            const { id, name } = action.payload;
            const newRecipe = [...state.recipe];
            const recipeToUpdate = newRecipe.findIndex((el) => {
                return el.id === id
            });

            let obj = {
                id,
                name,
                ing: newRecipe[recipeToUpdate].ing
            }

            newRecipe[recipeToUpdate] = obj;

            return {
                ...state,
                recipe: newRecipe,
        }
            break;
        }

        case "UPDATE_ING_RECIPE": {
            const { id, ing } = action.payload;
            const newRecipe = [...state.recipe];
            const recipeToUpdate = newRecipe.findIndex((el) => {
                return el.id === id
            });

            let obj = {
                id,
                name: newRecipe[recipeToUpdate].name,
                ing
            }

            newRecipe[recipeToUpdate] = obj;

            return {
                ...state,
                recipe: newRecipe,
            }
            break;
        }
    }

    return state
}
