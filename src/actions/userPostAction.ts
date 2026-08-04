import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "../constants/userPostActionEvents";
import type { Post } from "../types/userPost";

export const fetchUserPostRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
};

export const fetchUserPostSuccess = (post: Post) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: {post}
    }
};

export const fetchUserPostFailure = (error: any) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
};