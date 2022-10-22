import { Link } from "react-router-dom"
import styled from "styled-components"
import { useContext } from "react"
import { UserInfoContext } from '../contexts/userInfo'
import anonymous from "../assets/images/anonymous.jpg"

export default function SiteHeader () {
    const {infos} = useContext(UserInfoContext)

    return (
        <HeaderContainer>
            <HeaderContent>
                <Link to={"/hoje"}><span>TrackIt</span></Link>
                <img data-identifier="avatar" src={!infos ? anonymous : infos.image} alt="Imagem de perfil do usuário"/>
            </HeaderContent>
        </HeaderContainer>
    )
}

//Styled Components//
const HeaderContainer = styled.header`
    position: relative;
    z-index: 1;
`
const HeaderContent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);


    @media (max-width: 800px) {
        padding: 0 20px;
    }
    
    a {
        text-decoration: none;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }

    span {
        font-family: 'Playball', cursive;
        font-size: 40px;
        line-height: 50px;
        color: #FFFFFF;
    }
`