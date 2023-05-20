import React, { useState } from "react";
import style from "./GamesList.module.scss";
import arrow2 from "./photos/Arrow2.svg";
import { fetchGames } from "../../reducers/Slice/GamesList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ButtonsPoginationComponent from "../../components/Games/GamesListComponents/ButtonsPoginationComponent";
import FirstBlockData from "../../components/Games/GamesData/FirstBlockData";
import SecondBlockData from "../../components/Games/GamesData/SecondBlockData";

const GamesList = () => {
  const dispatch = useDispatch();

  const games = useSelector((state) => state.gameReducer.game);
  const error = useSelector((state) => state.gameReducer.error);
  const loadings = useSelector((state) => state.gameReducer.loading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchGames(page));
  }, [dispatch, page]);

  return (
    <div className={style.main}>
      {loadings ? <div className={style.custom_loader}></div> : null}
      <div className={style.manLists}>
        {error ? <h1>{error}</h1> : null}

        {games.map((item, index) => {
          if (index % 2 === 0) {
            return <FirstBlockData key={index} arrow2={arrow2} item={item} />;
          } else if (index % 2 !== 0) {
            return <SecondBlockData  key={index} arrow2={arrow2} item={item} />;
          }
        })}
        <ButtonsPoginationComponent page={page} setPage={setPage} />
        <div className={style.moreProjects}>
          <button className={style.btnMoreProjects}>Больше проектов</button>
        </div>
      </div>
    </div>
  );
};

export default GamesList;
