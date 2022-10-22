import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"
import { useContext } from "react"
import { UserInfoContext } from "../contexts/userInfo"

export default function SiteFooter () {
    const {percent} = useContext(UserInfoContext)

    return (
        <FooterContainer>
            <FooterContent>
                <Link data-identifier="habit-page-action" to={"/habitos"}>Hábitos</Link>

                <CircularProgressbarWithChildren
                    value={percent}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        textSize: '25px',
                        pathColor: "#fff",
                        trailColor: "transparent",
                        strokeLinecap: "round"
                    })}
                >
                    <Link to={"/hoje"}><p>Hoje</p></Link>
                </CircularProgressbarWithChildren>

                <Link data-identifier="historic-page-action" to={"/historico"}>Histórico</Link>
            </FooterContent>
        </FooterContainer>
    )
}

//Styled Components //
const FooterContainer = styled.footer`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    left: 0px;
    bottom: 0px;
    background: #FFFFFF;
`
const FooterContent = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 375px;
    height: 70px;

    a {
        text-decoration: none;
        font-family: 'Lexend Deca', cursive;
        font-size: 20px;
        line-height: 22px;
        color: #52B6FF;
    }

    svg {
        box-sizing: border-box;
        height: 90px;
        width: 90px;
        margin-bottom: 60px;
        margin-left: 30px;
        margin-right: 30px;
    }

    p {
        margin-bottom: 70px;
        font-family: 'Lexend Deca';
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
    }
`