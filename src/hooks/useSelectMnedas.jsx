import React,{Fragment, useState}  from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;
const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.3rem;
`;


const useSelectMonedas = (label, opciones) => {

    const [state, actualizarState]= useState('');

    const SelectMonedas = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e =>actualizarState(e.target.value)}
                value={state}
            >
                <option value="">--Seleccione--</option>
                {opciones.map(opcion => (
                    <option 
                        value={opcion.codigo}
                        key={opcion.codigo}
                    >{opcion.nombre}</option>
                ))}

            </Select>
        </Fragment>
    )
    //RETORNAR STATE, INTERFAZ Y FN QUE MODIFICA EL STATE
    return [state, SelectMonedas];
}

export default useSelectMonedas