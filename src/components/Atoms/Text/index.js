import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.p``;

const Text = ({ label, ...props }) => {
    return <TextStyle {...props}>{label}</TextStyle>
}

export default Text;