import React from 'react';
import styled from 'styled-components';
import * as Atom from '../../Atoms';
import * as Molecules from '../../Molecules';

const Form = ({ title, text, type, buttonText, onChangeText, onChangePassword, buttonClick }) => {
    return (
        <Atom.Box>
            <Atom.Title label={title} />
            <Atom.Text label={text} />
            <Molecules.FormInput label="Usuário" placeholder="Teste" onChange={onChangeText} />
            <Molecules.FormInput type={type} label="Senha" placeholder="Teste" onChange={onChangePassword} />
            <Atom.Button mt={30} onClick={buttonClick} text={buttonText} />
        </Atom.Box>
    )
}

export default Form;