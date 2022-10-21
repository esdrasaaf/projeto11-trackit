import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import LoginPage from "./pages/Login/LoginPage";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import TodayPage from "./pages/Today/TodayPage"
import HistoricPage from "./pages/Historic/HistoricPage";
import HabitsPage from "./pages/Habits/HabitsPage";
import UserInfoProvider from "./contexts/userInfo";

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <UserInfoProvider>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/cadastro" element={<RegistrationPage/>}/>
                <Route path="/hoje" element={<TodayPage/>}/>
                <Route path="/habitos" element={<HabitsPage/>}/>
                <Route path="/historico" element={<HistoricPage/>}/>
            </Routes>
            </UserInfoProvider>
        </BrowserRouter>
    );
}