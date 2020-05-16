import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-2 offset-1">
            <ul class="list-inline">
              <li class="list-inline-item">
                <Link to="/home">Home</Link>
              </li>
              <li class="list-inline-item">
                <Link to="/directory">Hotel Directory</Link>
              </li>
              <li class="list-inline-item">
                <Link to="/promotions">Top Deals</Link>
              </li>
              <li class="list-inline-item">
                <Link to="/aboutus">About KVD /</Link>
                <Link to="/contactus"> Contact</Link>
              </li>
              <li class="list-inline-item"></li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube" />
            </a>
          </div>
          <div className="col-sm-4 text-center">
            <a role="button" className="btn btn-link" href="tel:+18008888080">
              <i className="fa fa-phone" /> 1-800-888-8080
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:tours@kvdtourism.com"
            >
              <i className="fa fa-envelope-o" /> tours@kvdtourism.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
