import { useState } from "react"
import styled from "styled-components"
import NiceButton from "./NiceButton"

export default function CreateHabit ({displayStatus, setStatus}) {
    const week = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
    const [habitName, setHabitName] = useState ('')
    const [selectedDays, setSelectedDays] = useState ([])

    const objectBody = {
        name: habitName,
        days: selectedDays
    }

    function selectDay (idx) {
        if (!selectedDays.includes(idx)) {
            let newArray = [...selectedDays, idx]
            setSelectedDays(newArray)
        }

        if (selectedDays.includes(idx)) {
            let newArray = selectedDays.filter(d => d !== idx)
            setSelectedDays(newArray)
        }
    }

    return (
        <CreateHabitCard displayStatus={displayStatus}>
            <input value={habitName} type={"text"} onChange={(e) => setHabitName(e.target.value)} placeholder="Nome do hábito"/>

            <WeekContainer>
                {week.map((day, idx) => 
                    <DayContent 
                        onClick={() => selectDay(idx)} 
                        index={idx}
                        key={idx}
                        selectedDays={selectedDays}
                    >
                            {day}
                    </DayContent>
                )}                
            </WeekContainer>

            <FinishButtons>
                <NiceButton setStatus={setStatus} hover={'#dbdbdb'} color={'#52B6FF'} content={"Cancelar"}/>
                <NiceButton setSelectedDays={setSelectedDays} setHabitName={setHabitName} body={objectBody} setStatus={setStatus} hover={'#29a5ff'} background={'#52B6FF'} color={'#ffffff'} content={"Salvar"}/>
            </FinishButtons>
        </CreateHabitCard>
    )
}

//Styled Components//
const CreateHabitCard = styled.div`
    display: ${props => props.displayStatus};
    flex-direction: column;
    width: 340px;
    height: 180px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 18px;
    margin-bottom: 30px;

    input {
        box-sizing: border-box;
        font-family: 'Lexend Deca';
        font-size: 20px;
        line-height: 25px;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;

        ::placeholder {
            color: #dbdbdb;
        }
    }
`
const WeekContainer = styled.ul`
    display: flex;
    gap: 5px;
`
const DayContent = styled.button`
    cursor: pointer;
    width: 30px;
    height: 30px;
    background: ${props => !props.selectedDays.includes(props.index) ? '#ffffff' : '#cfcfcf'};
    border: 1px solid ${props => !props.selectedDays.includes(props.index) ? '#d5d5d5' : '#cfcfcf'};;
    border-radius: 5px;
    color: ${props => !props.selectedDays.includes(props.index) ? '#dbdbdb' : '#ffffff'};
    font-family: 'Lexend Deca';
    font-size: 20px;
    line-height: 25px;

    /* DPS TERMINAR ISSO AQUI :hover {
        background-color: #dbdbdb
    } */
`
const FinishButtons = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
`