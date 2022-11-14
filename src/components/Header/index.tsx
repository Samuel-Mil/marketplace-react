import {Link} from "react-router-dom";

import style from "./style.module.scss";

export default function Header(){
  return (
    <header>
      <div className={style.container}>
        <h1>Marketplace</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Products</Link>
          <Link to="/">Login</Link>
          <Link to="/">Sigin</Link>
        </nav>
      </div>
    </header>
  );
}
