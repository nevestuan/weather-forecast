import React from "react";
import styled from "styled-components";
import moment from "moment";

const StyledWrapper = styled.div`
    .weather-location {
        font-weight: bold;
        text-align: center;
    }
    
    .weather-info {
        display: flex;
        align-items: center;
        justify-content: space-around;

        .weather-condition {
            display: flex;
            align-items: center;
            flex-direction: column;

            .weather-icon img {
                width: 100px;
                height: 100px;
            }

            .weather-description {
                font-weight: bold;
                text-transform: capitalize;
            }
        }

        .weather-temperature {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 32px;
        }

        .weather-details {
            display: flex;
            align-items: center;
            text-align: left;

            li {
                margin: 10px 0;
            }
        }
    }

    .weather-error {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const WeatherDetails = ({ weather, error }) => {
    const location = weather?.name;
    const iconUrl = `http://openweathermap.org/img/wn/${weather?.weather?.[0]?.icon}@2x.png`;
    const description = weather?.weather?.[0]?.description || "-";
    const temperature = Math.round(weather?.main?.temp);
    const wind = weather?.wind?.speed;
    const sunrise = moment
        .unix(weather?.sys?.sunrise)
        .local()
        .format("hh:mm A");
    const sunset = moment.unix(weather?.sys?.sunset).local().format("hh:mm A");

    return (
        <StyledWrapper>
            {!error && (
                <>
                    <div className="weather-location">{location}</div>
                    <div className="weather-info">
                        <div className="weather-condition">
                            <div className="weather-icon">
                                <img src={iconUrl} alt={description} />
                            </div>
                            <div className="weather-description">
                                {description}
                            </div>
                        </div>
                        <div className="weather-temperature">
                            {temperature}°C
                        </div>
                        <div className="weather-details">
                            <ul>
                                <li>Wind: {wind} m/s</li>
                                <li>Sunrise: {sunrise}</li>
                                <li>Sunset: {sunset}</li>
                            </ul>
                        </div>
                    </div>
                </>
            )}
            {error && (
                <div className="weather-error">
                    <span>City Not Found</span>
                </div>
            )}
        </StyledWrapper>
    );
};

export default WeatherDetails;
