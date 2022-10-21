import styled from "styled-components"
import check from '../assets/images/rightvector.png'
import BASE_URL from "../constants/url"
import axios from "axios"
import { useContext } from "react"
import { UserInfoContext } from "../contexts/userInfo"

export default function TodayCard ({name, currentSequence, highestSequence, isChecked, id, setStatus, status}) {
    const {config} = useContext(UserInfoContext)

    function checkHabit () {
        if (isChecked === false) {
            const promisse = axios.post(`${BASE_URL}/habits/${id}/check`, null, config)
            promisse.then(() => {
                setStatus(status += 1)
            });
            promisse.catch(() => alert('Algo deu errado com a sua marcação, tente novamente mais tarde'));
        }

        if (isChecked === true) {
            const promisse = axios.post(`${BASE_URL}/habits/${id}/uncheck`, null, config)
            promisse.then(() => {
                setStatus(status += 1)
            });
            promisse.catch(() => alert('Algo deu errado com a sua marcação, tente novamente mais tarde'));
        }
    }

    return (
        <CardContainer status={isChecked}>
            <LeftPart>
                <h1>{name}</h1>

                <CurrentSequence status={isChecked}>
                    <p>Sequência atual: <span>{currentSequence} {currentSequence > 1 ? 'dias' : 'dia'}</span></p>
                </CurrentSequence>

                <HighestSequence status={isChecked} current={currentSequence} highest={highestSequence}>
                    <p>Seu recorde: <span>{highestSequence} {highestSequence > 1 ? 'dias' : 'dia'}</span></p>
                </HighestSequence>
            </LeftPart>

            <button onClick={checkHabit}><img src={check} alt="Check vector"/></button>
        </CardContainer>
    )
}

//Styled Components//
const CardContainer = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 15px;
    width: 340px;
    height: auto;
    background: #FFFFFF;
    border-radius: 5px;

    button {
        cursor: pointer;
        width: 69px;
        height: 69px;
        background: ${props => props.status ? '#8FC549' : '#EBEBEB'};
        border: 1px solid #E7E7E7;
        border-radius: 5px;
    }
`
const LeftPart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
        margin-bottom: 5px;
        width: 230px;
        font-family: 'Lexend Deca';
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }
`
const CurrentSequence = styled.div`
    display: flex;
    flex-direction: column;

    span {
        color: ${props => props.status ? '#8FC549' : '#666666'};
    }

    p {
        font-family: 'Lexend Deca';
        font-size: 14px;
        line-height: 16px;
        color: #666666;
    }
`
const HighestSequence = styled.div`
    display: flex;
    flex-direction: column;

    span {
        color: ${props => props.status && props.current === props.highest ? '#8FC549' : '#666666'};
    }

    p {
        font-family: 'Lexend Deca';
        font-size: 14px;
        line-height: 16px;
        color: #666666;
    }
`