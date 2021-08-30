import React, { useCallback, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes";
import Toggle from "./components/Toggler";
import "./App.css";
// import dummyData from "./data";
import DesktopImg from "./assets/images/desktop-responsive-design.png";
import MobileImg from "./assets/images/mobile-responsive-design.png";
import TabletImg from "./assets/images/tablets-responsive-design.png";
import CardList from "./components/CardList";

import styled from "styled-components";
import Logo from "./assets/images/logo.png";

import Logo4Bio from "./assets/images/logo_4bio.png";
import LogoDrogaraia from "./assets/images/logo_drogaraia.png";
import LogoDrogasil from "./assets/images/logo_drogasil.png";
import LogoFarmasil from "./assets/images/logo_farmasil.png";
import LogoSmall from "./assets/images/logo_small.png";
import LogoUnivers from "./assets/images/logo_univers.png";

const logos = [
  { src: LogoDrogaraia, key: 1 },
  { src: LogoDrogasil, key: 2 },
  { src: LogoFarmasil, key: 3 },
  { src: LogoUnivers, key: 4 },
  { src: Logo4Bio, key: 5 },
];

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  max-width: 1200px;
  padding-bottom: 0.5rem;
  margin: 0 auto;

  .site-header {
    &__img-wrapper {
      width: 15%;
      display: flex;
      align-items: center;

      @media all and (max-width: 650px) {
        width: 20%;
      }

      @media all and (max-width: 430px) {
        display: none;
      }
    }

    &__img {
      width: 100%;
    }
  }

  .navigation {
    font-size: 1.5em;
    color: #007f56;

    @media all and (max-width: 430px) {
      width: 100%;
    }

    &__list {
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;

      @media all and (max-width: 430px) {
        justify-content: center;
      }
    }

    &__item {
      margin-right: 1rem;

      &:last-child {
        margin-right: 0;
      }
    }

    &__item-text {
      font-weight: 300;
      color: #007f56;
      text-transform: uppercase;
      font-size: 1.2rem;
      cursor: pointer;

      &:hover {
        color: #fe9481;
        text-decoration: underline;
      }

      @media all and (max-width: 590px) {
        font-size: 1rem;
      }
    }
  }
`;

const Section_Chamada = styled.section`
  max-width: 1200px;
  margin: 0 auto;

  .title {
    text-align: center;
    font-size: 4rem;
    line-height: 1;
    color: #007f56;
    font-weight: 300;
    letter-spacing: -0.05em;

    @media all and (max-width: 550px) {
      font-size: 3rem;
    }
  }

  .subtitle {
    color: #868686;
    font-weight: 300;
    font-size: 2rem;
    text-align: center;
    margin: 0 20%;

    @media all and (max-width: 550px) {
      font-size: 1.5rem;
    }
  }

  .bold {
    font-weight: 800;
  }

  .colors {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    &__circle {
      width: 20px;
      height: 20px;
      display: block;
      border-radius: 50%;
      margin-right: 0.5rem;

      @media all and (max-width: 550px) {
        width: 15px;
        height: 15px;
      }
    }

    &__code {
      font-size: 2rem;
      font-weight: 300;
      @media all and (max-width: 550px) {
        font-size: 1.2rem;
      }
    }

    li {
      display: flex;
      align-items: center;
      margin-right: 1rem;
      color: #868686;
    }
  }
`;

const Section_Container = styled.section`
  padding: 2.5%;
  width: 95%;

  .cards-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .card {
    width: 31%;
    @media all and (max-width: 550px) {
      width: 100%;
      margin-bottom: 2rem;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 1rem auto;
  flex-wrap: wrap;
  @media all and (max-width: 550px) {
    justify-content: center;
  }

  .copyright {
    color: #868686;
    font-weight: 300;
    font-size: 0.9rem;
  }

  .logos {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    @media all and (max-width: 550px) {
      justify-content: center;
    }

    &__logo {
      margin-right: 1rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const PopupWrapper = styled.div`
  width: 400px;
  max-width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  background: #fff;
  display: ${(props) => (props.show ? "block" : "none")};

  .popup {
    &__text {
      padding: 2rem;
      word-wrap: break-word;
      font-weight: 300;
    }

    &__footer {
      padding: 1rem 2rem;
      text-align: right;
    }

    &__btn {
      border: none;
      padding: 0.5rem;
      cursor: pointer;
    }
  }
`;

function Popup(props) {
  return (
    <PopupWrapper className="popup" show={props.show}>
      <div>
        <p className="popup__text">{props.text}</p>
      </div>
      <hr />
      <div className="popup__footer">
        <button className="popup__btn" onClick={props.onClose}>
          Fechar
        </button>
      </div>
    </PopupWrapper>
  );
}

const popupText =
  "A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.";

// const CardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: stretch;
//   background: #fff;

//   .card {
//     &__header {
//       background: ${(props) => props.color};
//       display: flex;
//       justify-content: center;
//       flex-direction: column;
//       padding: 2rem;
//     }

//     &__img-wrapper {
//        margin: 0 auto;
//     }

//     &__img {
//       max-width: 100%;
//       display: block;
//     }

//     &__title {
//       font-size: 1.5rem;
//       font-weight: 300;
//       color: #fff;
//       margin: 0;
//       margin-top: 2rem;
//       text-align: center;
//     }

//     &__content {
//       font-size: .9rem;
//       padding: 1rem;
//       font-weight: 300;
//       flex: 1;
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;
//     }

//     &__show-more {
//       overflow-y: ${(props) => (props.showOverflow ? "scroll" : "hidden")};
//       max-height: 3rem;
//       line-height: 1.25;
//     }

//     &__footer {
//       padding: 1rem;
//       text-align: right;
//       font-size: 1.2rem;
//     }

//     &__action {
//       background ${(props) => props.color};
//       color: #fff;
//       border: none;
//       padding: .5rem;
//       cursor: pointer;
//       font-size: 1.2rem;
//     }
//   }
// `;

// function Card(props) {
//   const [showOverflow, setShowOverflow] = useState(false);
//   const toggleShowOverflow = () => {
//     setShowOverflow(!showOverflow);
//   };

//   function CardText() {
//     const showTextOnly = props.text && !showOverflow;

//     if (showTextOnly) {
//       return <p>{props.text}</p>;
//     }

//     return (
//       <p className="card__show-more">
//         {props.text}
//         {props.showMoreText}
//       </p>
//     );
//   }

//   return (
//     <CardWrapper
//       color={props.color}
//       className="card"
//       showOverflow={showOverflow}
//     >
//       <div className="card__header">
//         <div className="card__img-wrapper">
//           <img className="card__img" src={props.image} alt="plataform" />
//         </div>
//         <p className="card__title">{props.title}</p>
//       </div>
//       <div className="card__content">
//         <CardText />
//       </div>
//       <div className="card__footer">
//         <button
//           onClick={props.showMoreText ? toggleShowOverflow : props.action}
//           className="card__action"
//         >
//           {props.btnText}
//         </button>
//       </div>
//     </CardWrapper>
//   );
// }

const App = () => {
  const [videos, setVideos] = useState([]);
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const colors = ["#007f56", "#868686", "#FE9481", "#FCDA92", "#9C8CB9"];
  const [readMore, setReadMore] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  //   const [altTheme, setAltTheme] = useState(false);
  const onReadMore = () => {
    setReadMore(!readMore);
  };
  const onShowPopup = () => {
    setShowPopup(true);
  };
  const onChangeTheme = (props) => {
    themeToggler(true);
    // return props.themeToggler(altTheme);
  };

  const handleShowPopUp = useCallback(() => {
    console.log("popup");
    setShowPopup(true);
  }, []);

  const handleChangeTheme = useCallback(() => {
    console.log("change theme");
    themeToggler();
  }, []);

  const dummyData = [
    {
      section: "Breaking News",
      channel: "CNN",
      items: [
        {
          color: "#FE9481",
          image: DesktopImg,
          title: "Site Responsivo DESKTOP",
          text: "Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down.",
          showMoreText: `Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down.
      Quando pressionado o botão Leia mais... o restante da informação deverá aparecer em scroll down.`,
          btnText: "Leia mais...",
          action: "toggleShowOverflow",
        },
        {
          color: "#FCDA92",
          image: TabletImg,
          title: "Site Responsivo TABLET",
          text: "Quando pressionado o botão Leia mais... informação deverá aparecer completa em um popup na tela.",
          btnText: "Leia mais...",
          action: handleShowPopUp,
        },
        {
          color: "#9C8CB9",
          image: MobileImg,
          title: "Site Responsivo MOBILE",
          text: "Quando pressionado o botão alterar tema modifique o tema do site para blackfriday a seu gosto.",
          btnText: "Alterar tema",
          //   action: handleChangeTheme,
          action: () => {
            handleChangeTheme(!theme);
          },
        },
      ],
    },
  ];

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideos(dummyData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <>
          {/* Header */}
          <Header className="site-header">
            <div className="site-header__img-wrapper">
              <img
                className="site-header__img"
                src={Logo}
                alt="Logo RaiaDrogasil S.A"
              />
            </div>

            <nav className="navigation">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <span className="navigation__item-text">HTML5</span>
                </li>
                <li className="navigation__item">
                  <span className="navigation__item-text">CSS3</span>
                </li>
                <li className="navigation__item">
                  <span className="navigation__item-text">Javascript</span>
                </li>
                <li className="navigation__item">
                  <span className="navigation__item-text">React</span>
                </li>
                <li className="navigation__item">
                  <span className="navigation__item-text">Redux</span>
                </li>
              </ul>
            </nav>
          </Header>

          {/* Header */}

          {/* Main */}

          <Toggle theme={theme} toggleTheme={themeToggler} />

          <Section_Chamada>
            <h2 className="title">
              Crie este site <span className="bold">responsivo</span> com{" "}
              <span className="bold">REACT</span> utilizando{" "}
              <span className="bold">styled-components</span>
            </h2>

            <h3 className="subtitle">
              A fonte utilizada é a Open Sans de 300 a 800. exemplo: "Open
              Sans", Helvetica, sans-serif, arial; Já as cores são:
            </h3>

            <ul className="colors">
              {colors.map((color, i) => (
                <li key={i}>
                  <span
                    className="colors__circle"
                    style={{ background: color }}
                  ></span>
                  <span className="colors__code">{color}</span>
                </li>
              ))}
            </ul>
          </Section_Chamada>

          <Section_Container>
            {videos.map((list, index) => {
              return <CardList key={index} list={list} />;
            })}
          </Section_Container>

          <Popup
            onClose={() => setShowPopup(false)}
            show={showPopup}
            text={popupText}
          />

          {/* Main */}

          {/* Footer */}

          <Footer className="site-footer">
            <span className="copyright">
              RD 2017. Todos os direitos reservados
            </span>

            <ul className="logos">
              {logos.map((logo) => (
                <li className="logos__logo" key={logo.key}>
                  <img src={logo.src} alt="logo" />
                </li>
              ))}
            </ul>

            <img src={LogoSmall} alt="Logo RaiaDroga" />
          </Footer>

          {/* Footer */}
        </>
      </>
    </ThemeProvider>
  );
};

export default App;
