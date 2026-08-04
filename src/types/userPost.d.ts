
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export interface UserPost {
    userPost: Post | null,
    loading: boolean,
    error: string | null
};

interface FetchUserPostRequest {
    type: "FETCH_USER_REQUEST",
};

interface FetchUserPostSuccess {
    type: "FETCH_USER_SUCCESS",
    payload: { post: Post }
};

interface FetchUserPostFailure {
    type: "FETCH_USER_FAILURE",
    payload: string
};

export type UserPostAction = FetchUserPostRequest | FetchUserPostSuccess | FetchUserPostFailure;