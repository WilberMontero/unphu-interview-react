import {
    FETCH_USERS_LIST,
    SAVE_USER,
    USER_LOADING,
} from '../actions/types/UserTypes';

const initialState = {
    loading: false,
    data: [],
};

export default function UserReducer (state = initialState, action : {type:string,payload:any}) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                loading: true,
            };
        case FETCH_USERS_LIST:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case SAVE_USER:
            return {
                ...state,
                loading: false,
            };
         default:
             return state;   
        }
}