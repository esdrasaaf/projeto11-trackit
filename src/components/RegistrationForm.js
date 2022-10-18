import styled from "styled-components"

export default function RegistrationForm () {
    return (
        <FormContainer>
            <input type="email" required placeholder="Email"/>
            <input type="password" required placeholder="Senha"/>
            <input type="text" required placeholder="Nome de usuário"/>
            <input type="text" required placeholder="Foto de perfil"/>
            <button>Entrar</button>
        </FormContainer>
    )
}

//Styled Components//
const FormContainer = styled.form`
    margin-top: 30px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    input {
        margin-bottom: 6px;
        box-sizing: border-box;
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 2px solid #D5D5D5;
        border-radius: 5px;
        padding: 10px;
        color: gray;
        font-size: 19.976px;
        font-family: 'Lexend Deca', sans-serif;

        ::placeholder {
            color: #DBDBDB;
        }
    }

    button {
        cursor: pointer;
        border: none;
        background: #52B6FF;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        color: #FFFFFF;
        font-family: 'Lexend Deca', sans-serif;
    }
`