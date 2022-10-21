import { useEffect, useState, useContext } from "react"
import { UserInfoContext } from "../../contexts/userInfo"
import axios from "axios"
import styled from "styled-components"
import SiteFooter from "../../constants/Footer"
import SiteHeader from "../../constants/Header"
import BASE_URL from "../../constants/url"
import HabitCard from "../../components/HabitCard"
import CreateHabit from "../../components/CreateHabitForm"
import { useNavigate } from "react-router-dom"

export default function HabitsPage() { 
    const {config} = useContext (UserInfoContext)
    const navigate = useNavigate ()
    const [habitList, setHabitList] = useState ([])
    const [cardStatus, setCardStatus] = useState("none")
    const [listStatus, setListStatus] = useState (0)
    
    useEffect(() => {
        const promisse = axios.get(`${BASE_URL}/habits`, config);
        promisse.then((response) => {
            setHabitList(response.data)
        });
        
        promisse.catch(() => {
            alert('Sua sessão expirou!')
            navigate('/')
        })
    }, [listStatus, cardStatus, config, navigate])

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
                                status={listStatus}
                                setStatus={setListStatus}
                                index={h.id}
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

    @media (max-width: 725px) {
        margin: 0 auto;
    }

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

    @media (max-width: 725px) {
        justify-content: center;
    }
`