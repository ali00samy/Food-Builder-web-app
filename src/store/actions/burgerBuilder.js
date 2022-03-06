import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type : actionTypes.ADD_INGREDIENT,
        ingredientName : name
    };
};

export const removeIngredient = (name) => {
    return {
        type : actionTypes.REMOVE_INGREDIENT,
        ingredientName : name
    };
};

export const setIngredients = (ingredients) => {
    return {
        type : actionTypes.SET_INGREDIENT,
        ingredients : ingredients
    };
};

export const faildIngredient = () => {
    return {
        type: actionTypes.FAILD_INGREDIENT,
    };
}

export const initIngredients = () => {
    return dispatch => {
        axios.get( 'https://burger-builder-f06e8-default-rtdb.firebaseio.com/ingerdients.json' )
            .then( response => {
                dispatch(setIngredients(response.data));
            } )
            .catch( error => {
                dispatch(faildIngredient());
            } );
    };
} 