// CSS
import "./Header.css";

// Images
import logo from "./../images/header-logo-jihlava.svg"

function Header(props) {

  return (
    <div className="app-header">
        <div className="logo">
            <a href={props.appLogoLink} target="_blank">
                <img className="logo-image" src={logo} alt="logo" />
            </a>
        </div>
        <div className="title">
          <div className="main-title title-item">
              {props.appTitle}
          </div>
          <div className="sub-title title-item">
            {props.actualThemeInfo?.label}
          </div>
        </div>
    </div>
  );
}

export default Header;
