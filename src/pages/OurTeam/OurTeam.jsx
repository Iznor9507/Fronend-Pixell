import React from "react";
import style from "../OurTeam/OurTeam.module.scss";
import OurTemsPeopleComponent from "../../components/OurTeamPeople/OurtTeamPeople";

const OurTeam = () => {
  return (
    <div className={style.parentOurTeam}>
      <div className={style.bcgYellow}>
        <div className={style.parentBlockInf}>
          <div className={style.blockInf}>
            <div className={style.blockTitleAndBtn}>
              <h1 className={style.title}>НАША КОМАНДА</h1>

              <div className={style.blockBtn}>
                <button className={style.btnLeft}>←</button>
                <button className={style.btnRight}>→</button>
              </div>
            </div>
<OurTemsPeopleComponent styles={style}/> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
