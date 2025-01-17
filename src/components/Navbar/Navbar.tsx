import { NAVBAR_LINKS } from "@/constants/links";
import styles from "./navbar.module.css";

import AgroRiskLogoOne from "@/assets/imgs/logos/agrorisk-logo-1.svg";
import AgroRiskLogoTwo from "@/assets/imgs/logos/agrorisk-logo-2.svg";
import { Link, useLocation } from "react-router-dom";
import ButtonLink from "../Buttons/ButtonLink/ButtonLink";
import { FC, useEffect, useState } from "react";
import cn from "classnames";

type NavbarProps = {
  whiteLogo?: boolean;
};

const Navbar: FC<NavbarProps> = ({ whiteLogo }) => {
  const [isTalkToUsPage, setIsTalkToUsPage] = useState(false);
  // const [isInsightPage, setIsInsightPage] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setIsTalkToUsPage(["/talk-to-us"].includes(pathname));
    // setIsInsightPage(pathname.startsWith("/insights"));
  }, [pathname]);

  return (
    <div
      className={cn({
        [styles["navbar"]]: true,
        // [styles["navbar-insight"]]: isInsightPage,
      })}
    >
      <Link to="/">
        <img src={!whiteLogo ? AgroRiskLogoTwo : AgroRiskLogoOne} alt="logo" />
      </Link>
      <div className={styles["navbar-links"]}>
        {NAVBAR_LINKS.map((link) => {
          return (
            <Link
              className={cn({
                [styles["navbar-links-item"]]: true,
                [styles["navbar-links-item-contrast"]]:
                  isTalkToUsPage || !whiteLogo,
              })}
              key={link.id}
              to={link.to}
            >
              {link.title}
            </Link>
          );
        })}
      </div>
      <div className={styles["navbar-actions"]}>
        <ButtonLink
          to="/talk-to-us"
          title="Book Demo"
          className={styles["navbar-actions-book-demo-link"]}
        />
        <ButtonLink
          to="https://app.agrorisk.io"
          target="_blank"
          title="Log In"
        />
      </div>
    </div>
  );
};

export default Navbar;
