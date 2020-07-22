import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { fetchCurrentWeather, fetchWeatherForecast } from "../weatherSlice";
import Spinner from "../../common/Spinner";
import WeatherDetails from "../components/WeatherDetails";
import WeatherForecast from "../components/WeatherForecast";
import SearchBox from "../components/SearchBox";

const StyledWrapper = styled.div`
    .search-box {
        margin-bottom: 24px;
    }
`;

const StyledWidget = styled.div`
    width: 500px;
    background-color: #ffffff;
    border-radius: 10px;
    border: 4px solid #608094;
    padding: 16px;
`;

const WeatherWidgetContainer = () => {
    const [query, setQuery] = useState("Singapore");
    const dispatch = useDispatch();
    const { current, forecast, loading, forecastLoading, error } = useSelector(
        ({ weather }) => weather
    );
    const { lat, lon } = current?.coord || {};
    const isLoading = loading || forecastLoading;

    const searchHandler = (query) => {
        setQuery(query);
    };

    useEffect(() => {
        dispatch(fetchCurrentWeather({ query }));
    }, [dispatch, query]);

    useEffect(() => {
        if (lat && lon) {
            dispatch(fetchWeatherForecast({ lat, lon }));
        }
    }, [dispatch, lat, lon]);

    const renderWeatherInfo = () => (
        <>
            <WeatherDetails weather={current} error={error} />
            {!error && forecast && <WeatherForecast forecast={forecast} />}
        </>
    );

    return (
        <StyledWrapper>
            <SearchBox className="search-box" onSearch={searchHandler} />
            <StyledWidget>
                {isLoading ? <Spinner /> : renderWeatherInfo()}
            </StyledWidget>
        </StyledWrapper>
    );
};

export default WeatherWidgetContainer;
