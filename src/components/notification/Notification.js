import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 300px;
    height: 80px;
    background-color: tomato;
    position: absolute;
    border-radius: 5px;
    top: 0;
    right: 0;
    opacity: 0.8;
    p {
        font-size: 25px;
        padding: 10px;
        text-align: center;
    }
`;

export const Empty = () => {
    return (
        <Div>
            <p>All field must be filled.</p>
        </Div>
    );
};
export const Used = () => {
    return (
        <Div>
            <p>Is already in contacts.</p>
        </Div>
    );
};
