import api from 'services/api';
import {
    GET_PROGRAMS_BEGIN,
    GET_PROGRAMS_SUCCESS,
    GET_PROGRAMS_FAIL,
    APPLY_FILTER_BEGIN,
    APPLY_FILTER_SUCCESS,
    APPLY_FILTER_FAIL,
} from "./types";

export const getPrograms = () => async (dispatch) => {
    try {
        dispatch({ type: GET_PROGRAMS_BEGIN });

        const programs = await api.get('launches',{
            launch_success: true,
            land_success: true,
            launch_year: 2020
        });

        dispatch({ type: GET_PROGRAMS_SUCCESS, payload: programs })
    } catch (err) {
        dispatch({ type: GET_PROGRAMS_FAIL, payload: err.message });
    }
}

export const applyFilter = (filters) => async (dispatch) => {
    try {
        dispatch({ type: APPLY_FILTER_BEGIN });

        console.log({ filters });
        const payload = {
            // limit: 50,
            launch_success: filters.launchSuccess,
            land_success: filters.landSuccess,
            launch_year: filters.launchYear || 2020
        }
        const launches = await api.get('launches', payload);

        dispatch({ type: APPLY_FILTER_SUCCESS, payload: launches })
    } catch (err) {
        dispatch({ type: APPLY_FILTER_FAIL, payload: err.message });
    }
}