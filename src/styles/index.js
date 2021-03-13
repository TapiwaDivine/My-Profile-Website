import { css } from "styled-components";

const center = css`
  display: flex;
  justify-content: center;
  align-items: centers;
  text-align: center;
`;

const divStyles = css`
  height: 85vh;
  width: 100%;
  position: relative;
  flex: column;
`;

const primaryButton = css`
  color: red;
  padding: 1rem;
`;

export { center, primaryButton, divStyles };
