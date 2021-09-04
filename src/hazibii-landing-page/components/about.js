import React, { Component} from "react";
import ScrollableAnchor from "react-scrollable-anchor";

class About extends Component{
  render(){
    return (
      <ScrollableAnchor id="about">
    <section className="content-section bg-light">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
              Sobre mim
            </h2>
            <p className="lead mb-5">
              Acesse o meu currículo online <a href="http://mozg.com.br/curriculum/#curriculum">Clique aqui</a>!
            </p>
            <a
              className="btn btn-dark btn-xl js-scroll-trigger"
              href="#portfolio"
            >
              Veja o meu portfólio
            </a>
          </div>
        </div>
      </div>
    </section>
  </ScrollableAnchor>

    );
  }
}
export default About;

