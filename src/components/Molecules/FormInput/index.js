import React from 'react';
import styled from 'styled-components';
import * as Atom from '../../Atoms';

const FormInputStyle = styled.div`
    margin: 15px 0;
`;

const FormInput = ({ label, placeholder, onValueChange, ...props }) => {
    return (
        <FormInputStyle>
            <Atom.Text label={label} />
            <Atom.Input placeholder={placeholder} />
        </FormInputStyle>
    )
}

export default FormInput;