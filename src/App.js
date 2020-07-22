import React from "react";
import styled from "styled-components";
import { WeatherWidgetContainer } from "./features/weather";

const StyledApp = styled.div`
    padding: 0 16px;
`;

const StyledHeader = styled.header`
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 90%;
        max-width: 500px;
    }

    @media (prefers-reduced-motion: no-preference) {
        animation: App-logo-float infinite 3s ease-in-out;
    }

    @keyframes App-logo-float {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(10px);
        }
        100% {
            transform: translateY(0px);
        }
    }
`;

const StyledSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function App() {
    return (
        <StyledApp>
            <StyledHeader>
                <img
                    src="https://brands.home-assistant.io/_/openweathermap/logo.png"
                    className="App-logo"
                    alt="logo"
                />
            </StyledHeader>
            <StyledSection>
                <WeatherWidgetContainer />
            </StyledSection>
        </StyledApp>
    );
}

export default App;
