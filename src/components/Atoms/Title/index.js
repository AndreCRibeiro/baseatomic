import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h1`
`;

const Title = ({ label, ...props }) => {
    return <TitleStyle {...props}>{label}</TitleStyle>
}

export default Title;