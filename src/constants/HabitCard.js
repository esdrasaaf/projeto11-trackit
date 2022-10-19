import styled from "styled-components"
import trash from "../assets/images/trashicon.png"
export default function HabitCards ({days, name}) {
    const week = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    return (
        <CardContainer>
            <img src={trash} alt="Imagem de uma lata de lixo"/>
            <h1>{name}</h1>
            <WeekContainer>
                {week.map((day, idx) => <DayContent index={idx} days={days} key={idx}>{day}</DayContent>)}                
            </WeekContainer>
        </CardContainer>
    )
}

//Styled Components//
const CardContainer = styled.li`
    position: relative;
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;

    h1 {
        font-family: 'Lexend Deca';
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 10px;
    }

    img {
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
    border: 1px solid ${props => !props.days.includes(props.index) ? '#d5d5d5' : '#cfcfcf'};;
    border-radius: 5px;
    color: ${props => !props.days.includes(props.index) ? '#dbdbdb' : '#ffffff'};
    font-family: 'Lexend Deca';
    font-size: 20px;
    line-height: 25px;
`