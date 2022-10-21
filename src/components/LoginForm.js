import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import styled from "styled-components"
import BASE_URL from "../constants/url"
import { ThreeDots } from "react-loader-spinner"

export default function LoginForm () {
    const navigate = useNavigate ()
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [disabledStatus, setDisabledStatus] = useState (false)

    function postLogin (event) {
        event.preventDefault()
        setDisabledStatus(true)

        const promisse = axios.post(`${BASE_URL}/auth/login`, {
            email,
            password
        })

        promisse.then((res) => {
            setDisabledStatus(false)
            const stringedData = JSON.stringify(res.data);
            localStorage.setItem('userInfos', stringedData)
            navigate("/hoje")
            window.location.reload()
        });

        promisse.catch(() => {
            alert("Usuário ou Senha inválidos!!")
            setDisabledStatus(false)
            setEmail('')
            setPassword('')
        });
    }

    return (
        <FormContainer onSubmit={postLogin}>
            <input disabled={disabledStatus} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email"/>
            <input disabled={disabledStatus} type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Senha"/>
            <button disabled={disabledStatus}>
                {disabledStatus ? <ThreeDots color="#ffffff"/> : "Entrar"}
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
    height: 150px;
    justify-content: space-between;

    input {
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