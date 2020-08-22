import {
    GET_PROGRAMS_BEGIN,
    GET_PROGRAMS_SUCCESS,
    GET_PROGRAMS_FAIL,
    APPLY_FILTER_BEGIN,
    APPLY_FILTER_SUCCESS,
    APPLY_FILTER_FAIL,
} from './types';

const INITIAL_STATE = {
    programs: [],
    loading: false,
    error: null,
};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case GET_PROGRAMS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_PROGRAMS_SUCCESS:
            return {
                ...state,
                loading: false,
                programs: payload,
            }
        case GET_PROGRAMS_FAIL:
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
                programs: payload,
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