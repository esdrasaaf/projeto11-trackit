import styled from "styled-components"
import axios from "axios"
import BASE_URL from "../constants/url"
import { useContext } from "react"
import { UserInfoContext } from "../contexts/userInfo"
import trash from "../assets/images/trashicon.png"

export default function HabitCards ({days, name, index, setStatus, status}) {
    const week = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const {config} = useContext(UserInfoContext)

    function deleteHabit () {
        if (window.confirm('Você realmente deseja excluir esse hábito?') === true){
            const promisse = axios.delete(`${BASE_URL}/habits/${index}`, config)

            promisse.then(() => {
                setStatus(status += 1)
            });

            promisse.catch(() => {alert("Algo deu errado com a sua deleção, tente novamente mais tarde!")});
        }
    }

    return (
        <CardContainer>
            <img data-identifier="delete-habit-btn" onClick={deleteHabit} src={trash} alt="Imagem de uma lata de lixo"/>

            <h1 data-identifier="habit-name">{name}</h1>

            <WeekContainer>
                {week.map((day, idx) => <DayContent data-identifier="week-day-btn" index={idx} days={days} key={idx}>{day}</DayContent>)}
            </WeekContainer>
        </CardContainer>
    )
}

//Styled Components//
const CardContainer = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 340px;
    height: auto;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;

    h1 {
        width: 285px;
        font-family: 'Lexend Deca';
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 10px;
    }

    img {
        cursor: pointer;
        position: absolute;
        height: 20px;
        right: 10px;
        top: 10px;
    }
`
const WeekContainer = styled.ul`
    display: flex;
    gap: 5px;
`
const DayContent = styled.button`
    width: 30px;
    height: 30px;
    background: ${props => !props.days.includes(props.index) ? '#ffffff' : '#cfcfcf'};
    border: 1px solid ${props => !props.days.includes(props.index) ? '#d5d5d5' : '#cfcfcf'};
    border-radius: 5px;
    color: ${props => !props.days.includes(props.index) ? '#dbdbdb' : '#ffffff'};
    font-family: 'Lexend Deca';
    font-size: 20px;
    line-height: 25px;
`