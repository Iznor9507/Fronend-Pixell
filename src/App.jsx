import style from "./App.scss";
import Contacts from "./pages/Contacts/Contacts";
import MainPage from "./pages/MainPage/MainPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GamePages from "./pages/Games/GameMain";
import AboutVacancy from "./pages/Vacancy/AboutVacancy";
import { Route, Routes } from "react-router-dom";
import VacancyMain from "./pages/Vacancy/VacancyMain";
import AboutCompany from "./pages/AboutCompany/AboutCompany";
import Registration from "./components/Header/Registration/Registration";
import AboutGame from "./pages/Games/AboutGame";
import Enter from "./components/Header/Enter/Enter";
import { useState } from "react";
import PersonalAccountWindow from "./components/Header/PersonalAccount/PersonalAccountWindow";
import Basket from "./pages/Basket/Basket";
import MyFavoritesGames from "./pages/Games/MyGames/myGame";

function App() {
  const [enterWindow, setEnterWindow] = useState(false);
  const [registration, setRegistration] = useState(false);
  const [accountWindow, setAccountWindow] = useState(false);

  return (
    <div className={style.app}>
      <Header
        setAccountWindow={setAccountWindow}
        setRegistration={setRegistration}
        setEnterWindow={setEnterWindow}
      />
      {enterWindow ? (
        <div className={style.enterWindow}>
          <Enter
            setAccountWindow={setAccountWindow}
            accountWindow={setEnterWindow}
            registration={registration}
            setRegistration={setRegistration}
            enterWindow={enterWindow}
            setEnterWindow={setEnterWindow}
          />
        </div>
      ) : null}
      {registration ? (
        <div className={style.enterWindow}>
          <Registration
            setRegistration={setRegistration}
            setEnterWindow={setEnterWindow}
          />
        </div>
      ) : null}
      {accountWindow ? (
        <div className={style.setAccountWindow}>
          <PersonalAccountWindow
            setAccountWindow={setAccountWindow}
            accountWindow={setEnterWindow}
            enterWindow={enterWindow}
            setEnterWindow={setEnterWindow}
            registration={registration}
            setRegistration={setRegistration}
          />
        </div>
      ) : null}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/games" element={<GamePages />} />
        <Route path="/compain" element={<AboutCompany />} />
        <Route path="/career" element={<VacancyMain />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/aboutVacancy/:id" element={<AboutVacancy />} />
        <Route path="/games/:gameId" element={<AboutGame />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/account" element={<PersonalAccountWindow />} />
        <Route path="mygames" element={<MyFavoritesGames />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
