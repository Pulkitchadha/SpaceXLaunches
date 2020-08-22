import {
    GET_LAUNCHES_BEGIN,
    GET_LAUNCHES_SUCCESS,
    GET_LAUNCHES_FAIL,
    APPLY_FILTER_BEGIN,
    APPLY_FILTER_SUCCESS,
    APPLY_FILTER_FAIL,
} from './types';

const INITIAL_STATE = {
    launches: [],
    loading: false,
    error: null,
};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case GET_LAUNCHES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_LAUNCHES_SUCCESS:
            return {
                ...state,
                loading: false,
                launches: payload,
            }
        case GET_LAUNCHES_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case APPLY_FILTER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case APPLY_FILTER_SUCCESS:
            return {
                ...state,
                loading: false,
                launches: payload,
            }
        case APPLY_FILTER_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
};