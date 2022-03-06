import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseSuccess = (id, orderData) => {
    return {
        type : actionTypes.PURCHASE_SUCC,
        orderID : id,
        orderData : orderData,
    };
}

export const purchaseFail = (error) => {
    return {
        type: actionTypes.PURCHASE_FAIL,
        error : error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (orderData , token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post( '/orders.json?auth=' +token , orderData )
            .then( response => {
                dispatch(purchaseSuccess(response.data.name, orderData))
            } )
            .catch( error => {
                dispatch(purchaseFail(error))
            } );
    }
};

export const purchaceInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
};

export const fetchOrderSuccess =(orders) => {
    return {
        type : actionTypes.FETCH_ORDER_SUCC,
        orders : orders
    }
};

export const fetchOrderFail =(error) => {
    return {
        type : actionTypes.FETCH_ORDER_FAIL,
        error : error
    }
};

export const fetchOrderStart=() => {
    return {
        type : actionTypes.FETCH_ORDER_START,
    }
};

export const fetchOrders = (token,userId) => {
    return dispatch => {
        dispatch(fetchOrderStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('/orders.json' + queryParams)
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchOrderSuccess(fetchedOrders));
            })
            .catch(err => {
                dispatch(fetchOrderFail(err))
            });
    }   
}