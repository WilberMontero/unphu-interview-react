import {
    FETCH_USERS_LIST,
    SAVE_USER,
    USER_LOADING,
} from './types/UserTypes';

export const fetchUserList = () => {
    return (dispatch: any) => {
        dispatch(loadingUsersAction());
        setTimeout(() => {
            const parseUser = JSON.parse(sessionStorage.getItem('usersList') || '[]')
            dispatch(fetchUserListAction(parseUser));
        }, 1500)
    };
};

export const saveUser = (newUser:any) => {
    return (dispatch: any) => {
        dispatch(loadingUsersAction());
        setTimeout(() => {
            const parseUser = JSON.parse(sessionStorage.getItem('usersList') || '[]')
            parseUser.push(newUser)
            sessionStorage.setItem('usersList',JSON.stringify(parseUser))
            dispatch(saveUserAction(newUser));
        }, 1500)
    };
}


const loadingUsersAction = () => ({
    type: USER_LOADING
});


const saveUserAction = (newUser:any) => ({
    type: SAVE_USER,
    payload: newUser
});

const fetchUserListAction = (data:any) => ({
    type: FETCH_USERS_LIST,
    payload: data
});
