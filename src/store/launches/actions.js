import api from 'services/api';
import {
    GET_LAUNCHES_BEGIN,
    GET_LAUNCHES_SUCCESS,
    GET_LAUNCHES_FAIL,
    APPLY_FILTER_BEGIN,
    APPLY_FILTER_SUCCESS,
    APPLY_FILTER_FAIL,
} from "./types";

export const getLaunches = () => async (dispatch) => {
    try {
        dispatch({ type: GET_LAUNCHES_BEGIN });

        const launches = await api.get('launches', { limit: 16 });

        dispatch({ type: GET_LAUNCHES_SUCCESS, payload: launches })
    } catch (err) {
        dispatch({ type: GET_LAUNCHES_FAIL, payload: err.message });
    }
}

export const applyFilter = (filters) => async (dispatch) => {
    try {
        dispatch({ type: APPLY_FILTER_BEGIN });

        const payload = {
            limit: filters.limit || 20,
            launch_success: filters.launchSuccess || true,
            land_success: filters.landSuccess || true,
            launch_year: filters.launchYear || 2014
        }
        const launches = await api.get('launches', payload);

        dispatch({ type: APPLY_FILTER_SUCCESS, payload: launches })
    } catch (err) {
        dispatch({ type: APPLY_FILTER_FAIL, payload: err.message });
    }
}