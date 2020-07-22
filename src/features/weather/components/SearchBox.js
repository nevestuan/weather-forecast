import React, { useRef } from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    align-items: center;

    .search-input {
        flex: 1 1 auto;
        margin-right: 16px;
        height: 24px;
        border: 1px solid #8c8c8c;
        border-radius: 4px;
        padding: 4px 8px;
    }

    .search-btn {
        height: 32px;
        padding: 0 16px;
        border-radius: 4px;
        border: 1px solid #8c8c8c;
        cursor: pointer;
    }
`;

const SearchBox = ({ onSearch, className }) => {
    const inputRef = useRef(null);

    const searchHandler = () => {
        onSearch(inputRef.current.value);
    };

    return (
        <StyledWrapper className={className}>
            <input ref={inputRef} className="search-input" type="text" />
            <button className="search-btn" onClick={searchHandler}>
                Search
            </button>
        </StyledWrapper>
    );
};

export default SearchBox;
