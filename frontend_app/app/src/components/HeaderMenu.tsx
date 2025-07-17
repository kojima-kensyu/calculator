import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark bg-dark border-bottom box-shadow mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/Menu">KintaiSchedule</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
          <div className="gnavi_wrap">
            <ul className="gnavi_lists">
              <li className="gnavi_list">
                {/* <Link className="" to="/">Home</Link> */}
              </li>
              <li className="gnavi_list">
                {/* <Link className="" to="/privacy">Privacy</Link> */}
              </li>
              {/* 他のメニュー項目も同様に変換 */}
            </ul>
          </div>
        </div>
        {/* <form method="post"> */}
          {/* <button type="submit" className="btn-primary" to="/account/logout">Logout</button> */}
        {/* </form> */}
      </div>
    </nav>
  );
};

export default Header;
