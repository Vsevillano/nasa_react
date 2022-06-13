import Axios from "axios";
import { NASA_LIST_FAIL, NASA_LIST_REQUEST, NASA_LIST_SUCCESS, NASA_POST_FAIL, NASA_POST_REQUEST, NASA_POST_SUCCESS } from "../constants/nasaConstants";

/**
 * Get last 6 days posts
 * @returns 
 */
export const listPosts = () => async (dispatch) => {
    dispatch({ type: NASA_LIST_REQUEST });
    try {
        const result = []

        for (var i = 0; i < 6; i++) {
            var d = new Date();
            d.setDate(d.getDate() - i);
            console.log(process.env.API_KEY)
            const { data } = await Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${d.toISOString().split('T')[0]}`);
            if (data)
                result.push(data)
        }

        dispatch({ type: NASA_LIST_SUCCESS, payload: result });
    } catch (error) {
        dispatch({ type: NASA_LIST_FAIL, payload: error.message });
    }
}

/**
 * Get singular post by date
 * @param {*} date 
 * @returns 
 */
export const getPost = (date) => async (dispatch) => {
    dispatch({ type: NASA_POST_REQUEST });
    try {
        const { data } = await Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${date}`);
        dispatch({ type: NASA_POST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: NASA_POST_FAIL, payload: error.message });
    }
}