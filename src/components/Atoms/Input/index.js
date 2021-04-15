import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.input`
    width: 380px;
    height: 35px;
    border-radius: 30px;
    padding: 10px;
`;

const Input = ({ placeholder, ...props }) => {
    return <InputStyle placeholder={placeholder} />
}

export default Input;