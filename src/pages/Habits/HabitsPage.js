import { useEffect, useState, useContext } from "react"
import { UserInfoContext } from "../../contexts/userInfo"
import axios from "axios"
import styled from "styled-components"
import SiteFooter from "../../constants/Footer"
import SiteHeader from "../../constants/Header"
import BASE_URL from "../../constants/url"
import HabitCard from "../../constants/HabitCard"
import CreateHabit from "../../components/CreateHabitForm"

export default function HabitsPage() { 
    const {config} = useContext(UserInfoContext)
    const [habitList, setHabitList] = useState ([])
    const [cardStatus, setCardStatus] = useState("none")
    console.log(habitList)
    
    useEffect(() => {
        const promisse = axios.get(`${BASE_URL}/habits`, config);
        promisse.then((response) => {
            setHabitList(response.data)
            console.log(response.data)
        });
        
        promisse.catch((err) => console.log(err.response.data.message))
    }, [cardStatus, config])

    return (
        <>
            <SiteHeader/>

            <PageContent>
                <TitlePage>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setCardStatus('flex')}>+</button>
                </TitlePage>
                
                <CreateHabit displayStatus={cardStatus} setStatus={setCardStatus}/>

                {habitList.length > 0 ?            
                    <HabitDeck>
                        {habitList.map((h, idx) => 
                            <HabitCard
                                days={h.days}
                                name={h.name}
                                key={idx}
                            />
                        )}
                    </HabitDeck> 
                : 
                    <span>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </span>
                }

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

    span {
        font-family: 'Lexend Deca';
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`
const TitlePage = styled.div`
    display: flex;
    width: 340px;
    align-items: center;
    justify-content: space-between;
    padding-top: 25px;
    padding-bottom: 25px;

    h1 {
        font-size: 24px;
        line-height: 30px;
        color: #126BA5;
    }

    button {
        cursor: pointer;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        font-size: 25px;
        text-align: center;
        color: #FFFFFF;
    }
`
const HabitDeck = styled.ul`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`