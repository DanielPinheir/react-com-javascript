import { Fragment } from "react";
import "./banner.css";

export const Banner = () => {
  return (
    <Fragment>
      <header className="banner">
        <img
          src="/imagens/banner.png"
          alt="Banner principal da página do Organo"
        />
      </header>
    </Fragment>
  );
};
