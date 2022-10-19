import styled from "styled-components"
import SiteFooter from "../../constants/Footer"
import SiteHeader from "../../constants/Header"

export default function HistoricPage() {
    return (
        <>
            <SiteHeader/>

            <PageContent>
                <h1>Histórico</h1>
                <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
            </PageContent>

            <SiteFooter/>
        </>
    )
}

const PageContent = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px 20px;

    @media (max-width: 800px) {
        align-items: initial;
        justify-content: initial;
    }

    h1 {
        margin-top: 30px;
        margin-bottom: 18px;
        font-size: 24px;
        line-height: 30px;
        color: #126BA5;
    }

    span {
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`