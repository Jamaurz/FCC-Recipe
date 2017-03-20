export function loadingRecipe() {
    return {
        type: "LOADING_RECIPE",
        payload: null
    }
}

export function addNewRecipe(array) {
    return {
        type: "ADD_NEW_RECIPE",
        payload: array
    }
}

export function upadeRecipe() {
    return {
        type: "UPDATE_RECIPE",
        payload: null
    }
}

export function deleteRecipe(id) {
    return {
        type: "DELETE_RECIPE",
        payload: id
    }
}

export function updateNameRecipe(id, name) {
    return {
        type: "UPDATE_NAME_RECIPE",
        payload: {id, name}
    }
}

export function updateIngRecipe(id, ing) {
    return {
        type: "UPDATE_ING_RECIPE",
        payload: {id, ing}
    }
}