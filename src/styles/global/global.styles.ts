import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  p,
  a,
  q,
  s,
  b,
  u,
  i,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  tr,
  th,
  td,
  em,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  tt,
  sub,
  sup,
  var,
  nav,
  pre,
  del,
  dfn,
  img,
  ins,
  kbd,
  div,
  big,
  span,
  form,
  menu,
  ruby,
  html,
  body,
  cite,
  abbr,
  code,
  samp,
  time,
  mark,
  audio,
  video,
  label,
  tbody,
  tfoot,
  thead,
  aside,
  embed,
  small,
  table,
  canvas,
  legend,
  strike,
  strong,
  figure,
  center,
  applet,
  object,
  iframe,
  footer,
  header,
  hgroup,
  output,
  caption,
  details,
  article,
  section,
  summary,
  acronym,
  address,
  fieldset,
  figcaption,
  blockquote {
    border: 0;
    margin: 0;
    padding: 0;
    font: inherit;
    vertical-align: baseline;
  }

  nav,
  menu,
  aside,
  figure,
  footer,
  header,
  hgroup,
  details,
  article,
  section,
  figcaption {
    display: block;
  }

  ol,
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none !important;
    -webkit-box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  input {
    font-size: 100% !important;
    box-shadow: none;
    -o-box-shadow: none;
    -ms-box-shadow: none;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;

    &[type='text'],
    &[type='number'],
    &[type='tel'],
    &[type='phone'],
    &[type='password'] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      box-shadow: 0 0 0 30px ${(props) => props.theme.palette.common.white} inset !important;
      background-color: transparent !important;
    }

    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }

  button,
  a {
    border: 0;
    cursor: pointer;
    display: inline-block;
    text-decoration: none !important;
    font-family: 'Roboto', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  img {
    max-width: 100%;
  }

  html {
    height: -webkit-fill-available;
  }

  body {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.palette.common.black};
    font-size: 14px;
    line-height: 16px;
    font-weight: 400;
    background: ${(props) => props.theme.palette.common.white};
    min-height: -webkit-fill-available;
    font-family: 'Roboto', sans-serif;
    -webkit-overflow-scrolling: touch;

    *:focus {
      outline: none;
      touch-action: manipulation;
    }
  }

  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;
