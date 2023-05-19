import React from "react";
import style from "../AboutCompany/AboutCompany.module.scss";
import img1 from "./files/Frame.svg";
import img2 from "./files/Frame2.svg";
import img3 from "./files/Frame3.svg";
import img4 from "./files/Frame4.svg";
import OurTeam from "../OurTeam/OurTeam";
import LeftSideComponent from "../../components/AboutCompanyComponents/LeftSide";
import RightSideComponent from "../../components/AboutCompanyComponents/RightSide";

const AboutCompany = () => {
  return (
    <div id="first" className={style.aboutAndOurTeam}>
      <div className={style.mainParent}>
       <LeftSideComponent/>
      <RightSideComponent/>
      </div>
      <div id="second">
        <OurTeam />
      </div>
    </div>
  );
};

export default AboutCompany;
