import { LOGIN, LOGOUT } from '../actions/types'
const initialState = {
    uid: null,
    isAuth: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                uid: action.payload,
                isAuth: true
            };
        case LOGOUT:
            return { uid: null, isAuth: false };
        default:
            return state;
    }
};
