import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMnedas';
import axios from 'axios';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: all ease 1s;
    &:hover{
        background-color: #326ac0;
        cursor: pointer;
    }
`;

const Formulario = () => {

    const MONEDAS = [
        {
            codigo: 'USD',
            nombre: 'Dolar'
        },
        
        {
            codigo: 'MXN',
            nombre: 'Peso mexicano'
        },
        
        {
            codigo: 'EUR',
            nombre: 'Euro'
        }
    ]


    const [listacripto, setGuardarCriptomonedas] = useState([]);
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', MONEDAS);
    const [criptomoneda, SelectCripto] = useSelectMonedas('Elige tu criptomoneda', listacripto);
    


    //USEEFECT PARA EJECUTAR EL LLAMADO AL APII
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            setGuardarCriptomonedas(resultado.data.Data);
            console.log(resultado.data.Data);
        }
        consultarAPI();
    }, []) //LE PASAMOS DEPENDENCIA VACIA [] PARA QUE SE EJECUTE UNA VEZ


    return (  
        <form
            // onSubmit={cotizarMoneda}
        >
            <SelectMonedas />
            <SelectCripto />
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
}
 
export default Formulario;