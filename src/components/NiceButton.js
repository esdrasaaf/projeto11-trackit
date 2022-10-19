import styled from "styled-components"
import axios from "axios"
import BASE_URL from "../constants/url"
import { UserInfoContext } from "../contexts/userInfo"
import { useContext } from "react"
import { ThreeDots } from "react-loader-spinner"

export default function NiceButton ({content, background, color, hover, setStatus, body, setHabitName, setSelectedDays, setDisabledStatus, disabledStatus}) {
    const {config} = useContext(UserInfoContext)

    function clickedButton (event) {
        event.preventDefault()
        setDisabledStatus(true)

        if (content === 'Cancelar') {
            setStatus('none')
            setDisabledStatus(false)
        }

        if (content === 'Salvar') {
            const promisse = axios.post(`${BASE_URL}/habits`, body, config)

            promisse.then((res) => {
                setStatus('none')
                setHabitName('')
                setSelectedDays('')
                setDisabledStatus(false)
            })

            promisse.catch(() => {
                alert('Os dados não foram enviados corretamente!')
                setDisabledStatus(false)
            })
        }
    }

    return (
        <Button disabled={disabledStatus} onClick={clickedButton} background={background} color={color} hover={hover}>{disabledStatus ? <ThreeDots color="#ffffff" height={40} width={40}/> : content}</Button>
    )
}

// Styled Components //
const Button = styled.button `
    margin-left: 20px;
    align-items: center;
    appearance: none;
    background-color: ${props => props.background};
    border-radius: 4px;
    border-width: 0;
    box-sizing: border-box;
    color: ${props => props.color};
    cursor: pointer;
    display: inline-flex;
    height: 35px;
    width: 85px;
    font-family: 'Lexend Deca';
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-decoration: none;
    transition: box-shadow .15s,transform .15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow,transform;

    :disabled {
        opacity: 0.7;
    }

    &:hover {
        box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, ${props => props.hover} 0 -3px 0 inset;
        transform: translateY(-2px);
    }
    &:active {
        box-shadow: #D6D6E7 0 3px 7px inset;
        transform: translateY(2px);
    }
`