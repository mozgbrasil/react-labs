import DesktopImg from "./assets/images/desktop-responsive-design.png";
import MobileImg from "./assets/images/mobile-responsive-design.png";
import TabletImg from "./assets/images/tablets-responsive-design.png";

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
        action: "onReadMore",
      },
      {
        color: "#FCDA92",
        image: TabletImg,
        title: "Site Responsivo TABLET",
        text: "Quando pressionado o botão Leia mais... informação deverá aparecer completa em um popup na tela.",
        btnText: "Leia mais...",
        action: "onShowPopup",
      },
      {
        color: "#9C8CB9",
        image: MobileImg,
        title: "Site Responsivo MOBILE",
        text: "Quando pressionado o botão alterar tema modifique o tema do site para blackfriday a seu gosto.",
        btnText: "Alterar tema",
        action: "onChangeTheme",
      },
    ],
  },
  //   {
  //     section: "Entertainment",
  //     channel: "Trend TV",
  //     items: [
  //                     {
  //         id: "92B37aXykYw",
  //         image: "https://img.youtube.com/vi/92B37aXykYw/maxresdefault.jpg",
  //         title: "Willie Jones STUNS Simon Cowell In Pitch Perfect Performance of 'Your Man'!",
  //         views: "2.47 million views",
  //         published: "1 month ago"
  //       },
  //       {
  //         id: "vVeVcVBW_CE",
  //         image: "https://img.youtube.com/vi/vVeVcVBW_CE/maxresdefault.jpg",
  //         title: "Mr. McMahon and Donald Trump's Battle of the Billionaires Contract Signing",
  //         views: "33 million views",
  //         published: "Dec 8, 2013"
  //       },

  //       {
  //         id: "bzkWFljIMVg",
  //         image: "https://img.youtube.com/vi/bzkWFljIMVg/maxresdefault.jpg",
  //         title: "Two of the MOST UNEXPECTED Champions League Wins EVER",
  //         views: "877k views",
  //         published: " Nov 10, 2019"
  //       }
  //     ]
  //   },
  //   {
  //     section: "  Recommended",
  //     channel: "CGTN America",
  //     items: [
  //       {
  //         id: "tRLDPy1A8pI",
  //         image: "https://img.youtube.com/vi/tRLDPy1A8pI/maxresdefault.jpg",
  //         title: "Is Trump blaming China for COVID-19? You decide.",
  //         views: "876k views",
  //         published: "9 days ago"
  //       },
  //       {
  //         id: "2ulH1R9hlG8",
  //         image: "https://img.youtube.com/vi/2ulH1R9hlG8/maxresdefault.jpg",
  //         title: "Journalist still goes to office during pandemic, see her daily routine",
  //         views: "873 views",
  //         published: "3 hours ago"
  //       },
  //       {
  //         id: "_TkfQ9MaIgU",
  //         image: "https://img.youtube.com/vi/_TkfQ9MaIgU/maxresdefault.jpg",
  //         title: "How are small businesses going to survive the economic downturn of the COVID-19 era?",
  //         views: "283 views",
  //         published: "4 day ago"
  //       }
  //     ]
  //   }
];

export default dummyData;
