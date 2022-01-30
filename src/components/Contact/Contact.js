import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8nkql3f', 'template_dn9wugh', form.current, 'user_c5KgfPjjuJcFrtnlT86xB')
      .then((result) => {
          alert("Message Sent Successfully.......")
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
      <div>
        <link
          href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        {/*---- Include the above in your HEAD tag --------*/}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="container animated fadeIn">
          <div className="row">
            <h1 className="header-title"> Contact </h1>
            <hr />
            <div className="col-sm-12" id="parent">
              <div className="col-sm-6">
                <iframe
                  width="100%"
                  height="320px;"
                  frameBorder={0}
                  style={{ border: 0 }}
                  src="https://maps.google.com/maps?q=Nalgonda,+telangana,+Miryalaguda&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="col-sm-6" > 
              <form ref={form} onSubmit={sendEmail} >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="user_name"
                    placeholder="Name"
                    required
                    // autofocus
                  />
                </div>
                <div className="form-group form_left">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    className="form-control textarea-contact"
                    rows={5}
                    id="comment"
                    name="message"
                    placeholder="Type Your Message/Feedback here..."
                    required
                    defaultValue={""}
                  />
                  <br />
                  <button className="btn btn-send">
                    {" "}
                    <span className="glyphicon glyphicon-send" /> Send{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>


          <div className="container second-portion">
            <div className="row">
              {/* Boxes de Acoes */}
              <div className="col-xs-12 col-sm-6 col-lg-4">
                <div className="box">
                  <div className="icon">
                    <div className="image">
                      <i className="fa fa-envelope" aria-hidden="true" />
                    </div>
                    <div className="info">
                      <h3 className="title">Social Links </h3>
                      <p>
                        <i className="fa fa-envelope " aria-hidden="true" />{" "}
                        &nbsp; lavurisandhya76@gmail.com
                        <br />
                        <a href="https://github.com/sandhya076?tab=repositories">
                          GitHub Link
                        </a>
                        <br />
                        <a href="https://www.linkedin.com/in/sandhya-lavuri-40b213218/">
                          Linkdin Link
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="space" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-4">
                <div className="box">
                  <div className="icon">
                    <div className="image">
                      <i className="fa fa-mobile" aria-hidden="true" />
                    </div>
                    <div className="info">
                      <h3 className="title">CONTACT</h3>
                      <p>
                        <i className="fa fa-mobile" aria-hidden="true" /> &nbsp;
                        (+91)-9701385912
                        <br />
                        <br />
                        <i className="fa fa-mobile" aria-hidden="true" /> &nbsp;
                        (+91)-0123456789
                      </p>
                    </div>
                  </div>
                  <div className="space" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-lg-4">
                <div className="box">
                  <div className="icon">
                    <div className="image">
                      <i className="fa fa-map-marker" aria-hidden="true" />
                    </div>
                    <div className="info">
                      <h3 className="title">ADDRESS</h3>
                      <p>
                        <i className="fa fa-map-marker" aria-hidden="true" />{" "}
                        &nbsp; Telangana,Nalgonda,508207
                      </p>
                    </div>
                  </div>
                  <div className="space" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
