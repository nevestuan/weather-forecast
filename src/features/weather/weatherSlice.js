import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import weatherAPI from "../../api";

const sliceName = "weather";

export const fetchCurrentWeather = createAsyncThunk(
    `${sliceName}/fetchCurrentWeather`,
    ({ query }) => weatherAPI.fetchCurrentWeather({ query })
);

export const fetchWeatherForecast = createAsyncThunk(
    `${sliceName}/fetchWeatherForecast`,
    ({ lat, lon }) => weatherAPI.fetchWeatherForecast({ lat, lon })
);

export const weatherSlice = createSlice({
    name: sliceName,
    initialState: {
        current: null,
        loading: true,
        loaded: false,
        error: null,

        forecast: null,
        forecastLoading: false,
        forecastLoaded: false,
        forecastError: null,
    },
    reducers: {},
    extraReducers: {
        [fetchCurrentWeather.pending]: (state, { payload, meta }) => {
            state.loading = true;
            state.error = null;
            state.current = null;
            state.loaded = false;
        },
        [fetchCurrentWeather.fulfilled]: (state, { payload, meta }) => {
            state.loading = false;
            state.loaded = true;
            state.current = payload.data;
        },
        [fetchCurrentWeather.rejected]: (state, { error, meta }) => {
            state.loading = false;
            state.error = error;
        },
        [fetchWeatherForecast.pending]: (state, { payload, meta }) => {
            state.forecast = null;
            state.forecastLoading = true;
        },
        [fetchWeatherForecast.fulfilled]: (state, { payload, meta }) => {
            state.forecastLoading = false;
            state.forecastLoaded = true;
            state.forecast = payload.data;
        },
        [fetchWeatherForecast.rejected]: (state, { error, meta }) => {
            state.forecastLoading = false;
            state.forecastError = error;
        },
    },
});

export default weatherSlice.reducer;
