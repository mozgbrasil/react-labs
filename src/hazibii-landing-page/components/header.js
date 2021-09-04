import React, { Component} from "react";

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  render(){
    return (
    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1"><p>{'« '}<strong>
            {this.state.fetching
              ? 'Buscando mensagem de API'
              : this.state.message}
          </strong>{' »'}</p></h1>
        <h3 className="mb-5">
        <em>Esse é mais um projeto desenvolvido por</em>
        </h3>
        <h3 className="mb-5">
        <em>Marcio dos Santos Amorim</em>
        </h3>
        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">
        Saiba mais sobre mim
        </a>
      </div>
      <div className="overlay" />
    </header>

    );
  }
}
export default Header;
