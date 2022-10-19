import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import BASE_URL from "../constants/url"
import { useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner"

export default function RegistrationForm () {
    const navigate = useNavigate()
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [name, setName] = useState ('')
    const [image, setImage] = useState ('')
    const [disabledStatus, setDisabledStatus] = useState (false)

    function postRegistration (event) {
        event.preventDefault()
        setDisabledStatus(true)

        const promisse = axios.post(`${BASE_URL}/auth/sign-up`, {
            email,
            password,
            name,
            image
        })

        promisse.then((res) => {
            alert("Conta criada com sucesso! 😁")
            setDisabledStatus(false)
            navigate("/")
        });

        promisse.catch(() => {
            alert("Dados de cadastro inválidos!! Alguém já os cadastrou antes, tente novamente com outras informações")
            setDisabledStatus(false)
        })   
    }

    return (
        <FormContainer onSubmit={postRegistration}>
            <input disabled={disabledStatus} type="email" onChange={(e) => setEmail(e.target.value)} required placeholder="Email"/>
            <input disabled={disabledStatus} type="password" onChange={(e) => setPassword(e.target.value)} required placeholder="Senha"/>
            <input disabled={disabledStatus} type="text" onChange={(e) => setName(e.target.value)} required placeholder="Nome de usuário"/>
            <input disabled={disabledStatus} type="text" onChange={(e) => setImage(e.target.value)} required placeholder="Foto de perfil"/>
            <button disabled={disabledStatus}>
                {disabledStatus ? <ThreeDots color="#ffffff"/> : "Cadastrar"}
            </button>
        </FormContainer>
    )
}

//Styled Components//
const FormContainer = styled.form`
    margin-top: 30px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    input {
        margin-bottom: 6px;
        box-sizing: border-box;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 2px solid #D5D5D5;
        border-radius: 5px;
        padding: 10px;
        color: gray;
        font-size: 19.976px;
        font-family: 'Lexend Deca', sans-serif;

        ::placeholder {
            color: #DBDBDB;
        }

        :disabled {
            background-color: #F2F2F2;
            opacity: 0.7;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 20px;
        border: none;
        background: #52B6FF;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        color: #FFFFFF;
        font-family: 'Lexend Deca', sans-serif;
    }
`