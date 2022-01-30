import React from "react";
import "./Projects.css";
export default function Projects() {
  return (
    <>
      <div>
        <title>Bootstrap 4 Flip Card</title>
        {/* Bootstrap core CSS */}
        {/* Custom styles for this template */}
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Vidaloka"
          rel="stylesheet"
        />
        <section>
          <div className="container">
            {/* <div className="row">
        <h1 className="text-center"><span> BS 4 flip card</span>created with love by skinniwini</h1>
      </div> */}
            <div className="row">
              <div className="col-md-4">
                <h3 className="text-center mb-5">Project 1</h3>
                <div className="card-flipper effect__hover" data-id={1}>
                  <div className="card__front">
                    <div className="card card-01">
                      <div className="profile-box-01">
                        <img
                          className="card-img-top"
                          src="https://web-static.wrike.com/blog/content/uploads/2020/01/Five-Features-of-a-Good-Monthly-Employee-Work-Schedule-Template.jpg?av=718acbc1e2b21264368f12b5cc57c0e2"
                          alt="Card image cap"
                        />
                      </div>
                      <div className="card-body text-center">
                        <span className="badge-box">
                          <i className="fa fa-check" />
                        </span>
                        <h4 className="card-title">Work Schedule</h4>
                        <p className="card-text">
                          This is a Full Stack MERN application with FOUR CRUD
                          operations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__back">
                    <div className="card card-01">
                      <div className="card-body text-center">
                        <h4 className="card-title"></h4>
                        <a href="https://work-schedules.herokuapp.com/">
                          APP LINK
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="text-center mb-5">Project-2</h3>
                <div className="card-flipper effect__hover" data-id={1}>
                  <div className="card__front">
                    <div className="card card-01">
                      <div className="profile-box-01">
                        <img
                          className="card-img-top"
                          src="https://www.orangemantra.com/wp-content/themes/lespaul-child/images/ml-banner.jpg"
                          alt="Card image cap"
                        />
                      </div>
                      <div className="card-body text-center">
                        <span className="badge-box">
                          <i className="fa fa-check" />
                        </span>
                        <h4 className="card-title">Multi-Merchant</h4>
                        <p className="card-text">
                          This is a Full Stack MERN application In this I have
                          provided a online selling opportunity for merchants to
                          sell their farming products through in this site.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__back">
                    <div className="card card-01">
                      <div className="card-body text-center">
                        <h4 className="card-title"></h4>
                        <a href="https://multi-merchant-client.herokuapp.com/">
                          APP LINK
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="text-center mb-5">Project-3</h3>
                <div className="card-flipper effect__hover" data-id={1}>
                  <div className="card__front">
                    <div className="card card-01">
                      <div className="profile-box-01">
                        <img
                          className="card-img-top"
                          src="https://thumbs.dreamstime.com/b/retro-camera-photo-memorie-nostalgia-fall-retro-camera-photo-memorie-nostalgia-fall-autumn-memories-121992593.jpg"
                          alt="Card image cap"
                        />
                      </div>
                      <div className="card-body text-center">
                        <span className="badge-box">
                          <i className="fa fa-check" />
                        </span>
                        <h4 className="card-title">Memories</h4>
                        <p className="card-text">
                          This is a Full stack MERN application with FOUR CRUD
                          operation. in this application we can store our
                          memories with description ,place,title,hashtag .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__back">
                    <div className="card card-01">
                      <div className="card-body text-center">
                        <h4 className="card-title"></h4>
                        <p className="card-text">app link</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="text-center mb-5">Project-4</h3>
                <div className="card-flipper effect__hover" data-id={1}>
                  <div className="card__front">
                    <div className="card card-01">
                      <div className="profile-box-01">
                        <img
                          className="card-img-top"
                          src="https://qph.fs.quoracdn.net/main-qimg-f01f4313bd6dc835677c629efa82b1f3-pjlq"
                          alt="Card image cap"
                        />
                      </div>
                      <div className="card-body text-center">
                        <span className="badge-box">
                          <i className="fa fa-check" />
                        </span>
                        <h4 className="card-title">E-commerce</h4>
                        <p className="card-text">
                          This is a Full stack MERN application in this
                          application we Provided service of PEM ,work for PEM
                          and PEM related
                          requirements.(PEM-Plumber,Electrician,Mechanic)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__back">
                    <div className="card card-01">
                      <div className="card-body text-center">
                        <h4 className="card-title"></h4>
                        <a href="https://pem-joy-app.herokuapp.com/">
                          APP LINK
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
