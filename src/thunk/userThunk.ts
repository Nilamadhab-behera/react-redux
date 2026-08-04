import { fetchUserPostFailure, fetchUserPostRequest, fetchUserPostSuccess } from "../actions/userPostAction";

export const fetchUserPost = (post_id: number) => {
    return async (dispatch: any) => {
        try {
            dispatch(fetchUserPostRequest());

            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);

            if (!response.ok) throw new Error("Failed To Fetch Post Details");

            const result = await response.json();

            dispatch(fetchUserPostSuccess(result));

            return result;
        } catch (error) {
            const message = error instanceof Error ? error.message : "Something went wrong";
            dispatch(fetchUserPostFailure(message));
            throw error;
        }
    };
};