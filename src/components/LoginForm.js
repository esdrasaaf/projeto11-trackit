import styled from "styled-components"

export default function LoginForm () {
    return (
        <FormContainer>
            <input type="email" required placeholder="Email"/>
            <input type="password" required placeholder="Senha"/>
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
    height: 150px;
    justify-content: space-between;

    input {
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