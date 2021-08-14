import { css } from "styled-components";

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const centerBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const centerColumn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const breakPoint = {
  mobile: `(max-width: 414px)`,
  tablet: `(max-width: 1080px)`,
  desktop: `(max-width: 1440px)`,
};

export { center, centerBetween, centerColumn, breakPoint };
