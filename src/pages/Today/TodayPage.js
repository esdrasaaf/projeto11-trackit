import styled from "styled-components"
import SiteFooter from "../../constants/Footer"
import SiteHeader from "../../constants/Header"
import TodayHabitCard from '../../components/TodayHabitCard'
import BASE_URL from "../../constants/url"
import { useContext, useEffect, useState} from "react"
import { UserInfoContext } from "../../contexts/userInfo"
import axios from "axios"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'

export default function TodayPage() {
    const {config, percent, calcPercent} = useContext (UserInfoContext)
    const [todayList, setList] = useState ([])
    const [status, setStatus] = useState (0)
    const [arrChecked, setArrChecked] = useState ([])

    //Formatando o dia da semana
    let day = dayjs().locale('pt-br').format('dddd, D/MM')
    day = day[0].toUpperCase() + day.substring(1).replace('-feira', '');
    
    useEffect(() => {
        const promisse = axios.get(`${BASE_URL}/habits/today`, config);
            promisse.then((response) => {
                    setList(response.data)
                    calcPercent(response.data)
                    setArrChecked(response.data.filter(h => h.done !== false))
            });
            promisse.catch((err) => alert(err.response.data.message))
    }, [status, config, calcPercent])

    return (
        <>
            <SiteHeader/>

            <PageContent>
                <TitlePage arrChecked={arrChecked}>
                    <h1>{day}</h1>
                    <span>{arrChecked.length === 0 ? 'Nenhum hábito concluído ainda' : `${percent}% dos hábitos concluídos`}</span>
                </TitlePage>

                <TodayHabitList>
                    {todayList.map((h, idx) => 
                        <TodayHabitCard
                            key={idx}
                            id={h.id}
                            isChecked={h.done}
                            name={h.name}
                            currentSequence={h.currentSequence}
                            highestSequence={h.highestSequence}
                            status={status}
                            setStatus={setStatus}
                        />
                    )}
                </TodayHabitList>
            </PageContent>

            <SiteFooter/>
        </>
    )
}

const PageContent = styled.div`
    margin-top: 70px;
    margin-bottom: 110px;
    font-family: 'Lexend Deca', cursive;
    padding-left: 18px;
    padding-right: 18px;
`
const TitlePage = styled.div`
    margin-bottom: 30px;

    h1{
        padding-top: 30px;
        font-family: 'Lexend Deca';
        font-size: 24px;
        line-height: 29px;
        color: #126BA5;
    }

    span {
        font-family: 'Lexend Deca';
        font-size: 18px;
        line-height: 22px;
        color: ${props => props.arrChecked.length === 0 ? '#666666' : '#8FC549'};
    }
`
const TodayHabitList = styled.ul`
    display: flex;
    flex-wrap:wrap;
    gap: 10px;
`