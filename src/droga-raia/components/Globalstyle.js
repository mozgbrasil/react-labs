import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    font-size: 18px; /* 18px · 16px = 1.125em */
    font-weight: 300;
    line-height: 1.2222222222em; /* 22px · 18px = 1.22222222222em*/
    text-align: left;
    // text-shadow:1px 1px 0px #fff;
  }

  @font-face {
  font-family: "Open Sans Light";
  font-weight: 300;
  src: local("OpenSans"),
    url(./assets/fonts/OpenSans-Light.ttf) format("truetype");
}

@font-face {
  font-family: "Open Sans Regular";
  font-weight: 400;
  src: local("OpenSans"),
    url(./assets/fonts/OpenSans-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "Open Sans Semi Bold";
  font-weight: 500;
  src: local("OpenSans"),
    url(./assets/fonts/OpenSans-SemiBold.ttf) format("truetype");
}

@font-face {
  font-family: "Open Sans Bold";
  font-weight: 600;
  src: local("OpenSans"),
    url(./assets/fonts/OpenSans-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "Open Sans Extra Bold";
  font-weight: 800;
  src: local("OpenSans"),
    url(./assets/fonts/OpenSans-ExtraBold.ttf) format("truetype");
}

.center {
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;
}
.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}

img,
picture,
video,
embed {
  max-width: 100%; /*define a largura mÃ¡xima em atÃ© 100%*/
}
h1,
h2 {
  color: #007f56;
  font-size: 3.3333333333em; /* 60px Ã· 18px = 3.3333333333em */
  font-weight: 800;
  letter-spacing: -0.05em; /* -3px Ã· 60px = -0.05em */
  line-height: 1em; /* 60px Ã· 60px = 1em */
}
h3 {
  font-size: 1.7777777778em; /* 32px Ã· 18px = 1.7777777778em */
  font-weight: 300;
  letter-spacing: -0.0625em; /* -2px Ã· 32px = -0.0625em */
  line-height: 1.1875em; /* 38px Ã· 32px = 1.1875em */
}
p {
  font-weight: 300;
  letter-spacing: -0.05555555556em; /* -1px Ã· 18px = -0.05555555556em */
}
a,
a:link,
a:visited {
  color: #fe9380;
  font-weight: 400;
  text-decoration: none;
}
a:hover {
  color: #fe5e41;
  text-decoration: underline;
  text-shadow: none;
}

  `;
