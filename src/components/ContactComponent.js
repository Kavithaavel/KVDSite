import React from "react";
function Contact(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Contact Us</h2>
          <hr />
        </div>
      </div>

      <div className="row row-content align-items-center">
        <div className="col-sm-4">
          <h5>Our Address</h5>
          <address>
            Folkestone Road
            <br />
            Apple Valley, MN 55124
            <br />
            U.S.A.
          </address>
        </div>
        <div className="col">
          <a role="button" className="btn btn-link" href="tel:+18008888080">
            <i className="fa fa-phone"></i> 1-800-888-8080
          </a>
          <br />
          <a
            role="button"
            className="btn btn-link"
            href="mailto:tours@kvdtourism.com"
          >
            <i className="fa fa-envelope-o"></i> tours@kvdtourism.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
