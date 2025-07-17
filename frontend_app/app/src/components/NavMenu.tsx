import { FC } from "react";
import { Link } from 'react-router-dom';

const NavMenu: FC = () => {
  return (
    <div>
      <nav>
        <ul>
        <li>
          <Link to="/">ホーム</Link>
        </li>
        <li>
          <Link to="/todo">TODO</Link>
        </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;