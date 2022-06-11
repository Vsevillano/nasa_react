import { NASA_LIST_FAIL, NASA_LIST_REQUEST, NASA_LIST_SUCCESS, NASA_POST_FAIL, NASA_POST_REQUEST, NASA_POST_SUCCESS } from "../constants/nasaConstants";

/**
 * Lista los posts
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export const postListReducer = (
    state = { posts: [], },
    action
) => {
    switch (action.type) {
        case NASA_LIST_REQUEST:
            return { loading: true };
        case NASA_LIST_SUCCESS:
            return { loading: false, posts: action.payload };
        case NASA_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const getPostReducer = (
    state = {},
    action
) => {
    switch (action.type) {
        case NASA_POST_REQUEST:
            return { loading: true };
        case NASA_POST_SUCCESS:
            return { loading: false, post: action.payload };
        case NASA_POST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}