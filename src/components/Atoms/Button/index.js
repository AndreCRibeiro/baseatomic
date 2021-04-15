import React from 'react';
import styled from 'styled-components';
import { space, variant, color } from 'styled-system';

const ButtonStyle = styled.button`
    ${space}
    ${color}
    ${variant({
    variants: {
        delete: {
            background: '#490813',
        }
    }
})}
    width: 380px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;

    &:hover {
        background: #321123;
    }
`;

ButtonStyle.defaultProps = {
    bg: '#000',
};

const Button = ({ text, onClick, ...props }) => {
    return <ButtonStyle {...props} onClick={onClick}>{text}</ButtonStyle>
}

export default Button;