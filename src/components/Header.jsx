// CSS
import "./Header.css";

// Images
import logo from "./../images/header-logo-jihlava.svg"
import iconTagActive from "./../images/icon-tag-active.svg"

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
          {props.actualThemeInfo &&
          <div className="sub-title title-item">
            <img src={iconTagActive} alt="téma" /> 
            {props.actualThemeInfo?.label}
          </div> || <div className="no-sub-title"></div>}
        </div>
    </div>
  );
}

export default Header;
