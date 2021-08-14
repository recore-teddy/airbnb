import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { center, centerBetween } from "@Styles";
// import AirbnbLogoIcon from "@Static/logo.svg";
// import AirbnbLogoTextIcon from "@Static/logo_text.svg";
import AirbnbLogoIcon from "../public/static/svg/logo/logo.svg";
import AirbnbLogoTextIcon from "../public/static/svg/logo/logo_text.svg";

function Header() {
  return (
    <Container>
      <Link href="/">
        <a className="header-logo-wrapper">
          <AirbnbLogoIcon className="header-logo" />
          <AirbnbLogoTextIcon />
        </a>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  ${centerBetween}
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  padding: 0 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 10;
  .header-logo-wrapper {
    ${center}
    .header-logo {
      margin-right: 6px;
    }
  }
`;

export default Header;
