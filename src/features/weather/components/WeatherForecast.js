import React from "react";
import moment from "moment";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    .day-info {
        display: flex;
        align-item: center;
        flex-direction: column;
        text-align: center;

        .day-info-date {
            text-transform: uppercase;
        }

        .day-info-icon img {
            width: 60px;
            height: 60px;
        }
    }
`;

const WeatherForecast = ({ forecast }) => {
    const data = forecast?.daily?.slice(0, 5).map((item) => {
        const date = moment.unix(item?.dt).local().format("ddd");
        const iconUrl = `http://openweathermap.org/img/wn/${item?.weather?.[0]?.icon}@2x.png`;
        const temperature = Math.round(item?.temp?.day);
        const description = item?.weather?.[0]?.description || "-";
        return { date, iconUrl, temperature, description };
    });

    return (
        <StyledWrapper>
            {data?.map((item, index) => (
                <div className="day-info" key={index}>
                    <div className="day-info-date">{item.date}</div>
                    <div className="day-info-icon">
                        <img src={item.iconUrl} alt={item.description} />
                    </div>
                    <div className="day-info-temp">{item.temperature}°C</div>
                </div>
            ))}
        </StyledWrapper>
    );
};

export default WeatherForecast;
