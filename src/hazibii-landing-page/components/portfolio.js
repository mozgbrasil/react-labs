import React from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import img_1 from './img/portfolio-1.jpg';
import img_2 from './img/portfolio-2.jpg';
import img_3 from './img/portfolio-3.jpg';
import img_4 from './img/portfolio-4.jpg';

const portfolioItems = [
  {
    imgSrc: img_1,
    heading: "Isomorphic",
    description: "Projeto para backend usando React & Node",
    href: "signin",
  },
  {
    imgSrc: img_2,
    heading: "Aviator",
    description: "Projeto de aplicativo de game",
    href: "aviator"
  },
  {
    imgSrc: img_3,
    heading: "Weather",
    description: "Projeto de previsão do tempo",
    href: "weather"
  },
  {
    imgSrc: img_4,
    heading: "MOZG",
    description: "Projeto voltado para a plataforma Magento",
    href: "http://mozg.com.br/"
  }
];
const Portfolio = () => (
  <ScrollableAnchor id="portfolio">
    <section className="content-section">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfólio</h3>
          <h2 className="mb-5">Projetos Recentes</h2>
        </div>
        <div className="row no-gutters">
          {portfolioItems.map((project, index) => (
            <div className="col-lg-6" key={`portfolio_item_${index}`}>
              <a className="portfolio-item" href={project.href}>
                <span className="caption">
                  <span className="caption-content">
                    <h2>{project.heading}</h2>
                    <p className="mb-0">{project.description}</p>
                  </span>
                </span>
                <img className="img-fluid" src={project.imgSrc} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </ScrollableAnchor>
);

export default Portfolio;
