import { Link } from "react-router-dom"
import styled from "styled-components"
import logoTrack from "../../assets/images/Logo2.png"
import RegistrationForm from "../../components/RegistrationForm"

export default function RegistrationPage() {
    return (
        <LoginContainer>
            <LogoContainer>
                <img src={logoTrack} alt="Logo da aplicação"/>
                <span>TrackIt</span>
            </LogoContainer>

            <RegistrationForm/>

            <Link to={"/"}><span>Já tem uma conta? Faça login!</span></Link>
        </LoginContainer>
    )
}

//Styled Components//
const LoginContainer = styled.div`
    background-color: #ffffff;
    width: 100vw;
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        color: #52B6FF;
        font-size: 13.976px;
        font-family: 'Lexend Deca', sans-serif;      
    }
`
const LogoContainer = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    span {
        font-size: 68.982px;
        color: #126BA5;
        font-family: 'Playball', cursive;
    }

    img {
        margin-bottom: 5px;
        width: 150px;
    }
`