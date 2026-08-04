import {
    FETCH_USER_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
} from "../constants/userPostActionEvents";

import type { UserPost, UserPostAction } from "../types/userPost";

const initialState: UserPost = {
    userPost: null,
    loading: false,
    error: null,
};

const UserPostReducer = (state = initialState, action: UserPostAction): UserPost => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                userPost: action.payload.post,
                error: null,
            };

        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                userPost: null
            };

        default:
            return state;
    }
};

export default UserPostReducer;