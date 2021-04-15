import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
    width: 380px;
    height: 50px;
    background: #123321;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;

    &:hover {
        background: #321123;
    }
`;

const Button = ({ text, onClick, ...props }) => {
    return <ButtonStyle {...props} onClick={onClick}>{text}</ButtonStyle>
}

export default Button;