import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import pokemonLogo from "../../assets/pokemon-logo.png";
import { FaArrowLeft } from "react-icons/fa";
import { LanguageSelector } from "../../App";
import { useContext } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { setLocale } = useContext(LanguageSelector);

  return (
    <header className="header">
      <button className="header__go-back" onClick={() => navigate(-1)}>
        <FaArrowLeft />
      </button>
      <NavLink to="/" className="header__link">
        <img className="header__logo-image" src={pokemonLogo} />
      </NavLink>

      <div className="header__lang">
        <button className="header__lang-btn" onClick={() => setLocale("es-ES")}>
          ES
        </button>
        <button className="header__lang-btn" onClick={() => setLocale("en-EN")}>
          EN
        </button>
      </div>
    </header>
  );
};

export default Header;
