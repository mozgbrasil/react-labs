import React from "react";
const socialSites = [
  {
    link: "https://www.facebook.com/mozgbrasil/",
    icon: "icon-social-facebook"
  },
  {
    link: "https://twitter.com/mozgbrasil",
    icon: "icon-social-twitter"
  },
  {
    link: "https://github.com/mozgbrasil",
    icon: "icon-social-github"
  }
];
const Footer= () => (
  <footer className="footer text-center">
    <div className="container">
      <ul className="list-inline mb-5">
      {socialSites.map((site,index)=>(
        <li className="list-inline-item" key={`social_${index}`}>
          <a className="social-link rounded-circle text-white mr-3" href={site.link}>
            <i className={site.icon} />
          </a>
        </li>
      ))}
      </ul>
      <p className="text-muted small mb-0">
        Copyright &copy; MOZG 2019
      </p>
    </div>
  </footer>
);
export default Footer;
