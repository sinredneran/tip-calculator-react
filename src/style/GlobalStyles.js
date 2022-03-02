import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap");
html {
    font-family: "Space Mono", monospace;
}
body,
h1,
h2,
h3,
h4,
p,
li,
figure,
figcaption,
blockquote,
dl,
dd {
    margin: 0;
    padding: 0;
}

body {
    min-height: 100vh;
    line-height: 1.5;
    background: hsl(185, 41%, 84%);
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul[role='list'],
ol[role='list'] {
    list-style: none;
}

a:not([class]) {
    text-decoration-skip-ink: auto;
}

img {
    max-width: 100%;
    display: block;
}

input,
button,
textarea,
select {
    font: inherit;
}

li{
    list-style: none;
}
`
export default GlobalStyle;