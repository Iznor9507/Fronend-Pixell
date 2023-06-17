import style from "./AcceptedWindow.module.scss";
import logo from "../../../pages/Vacancy/images/Group.png";

interface acceptedWindow {
  setAcceptedWindow: React.Dispatch<React.SetStateAction<boolean>>;
  acceptedWindow: boolean;
}

function AcceptedWindow ({ acceptedWindow, setAcceptedWindow }: acceptedWindow) {
  const handleClickCloseWindow = () => {
    setAcceptedWindow(false);
  };

  return (
    <div className={style.parendDiv}>
      <div className={style.divWindow}>
        <div className={style.X}>
          <button
            className={style.btnX}
            onClick={() => handleClickCloseWindow()}
          >
            ✕
          </button>
        </div>

        <div className={style.logo}>
          <img className={style.imgLogo} src={logo} alt="bayrakkh" />
        </div>

        <b className={style.textB}>Спасибо за сообщение!</b>

        <div className={style.textMini}>
          Мы скоро свяжемся с вами для уточнения деталей
        </div>
      </div>
    </div>
  );
}

export default AcceptedWindow;
