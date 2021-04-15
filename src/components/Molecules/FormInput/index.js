import React from 'react';
import styled from 'styled-components';
import * as Atom from '../../Atoms';

const FormInputStyle = styled.div`
    margin: 15px 0;
`;

const FormInput = ({ label, placeholder, type, onValueChange, ...props }) => {
    return (
        <FormInputStyle {...props}>
            <Atom.Text label={label} />
            <Atom.Input type={type} placeholder={placeholder} />
        </FormInputStyle>
    )
}

export default FormInput;