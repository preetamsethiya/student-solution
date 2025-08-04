import React from "react";
import Page_Container from "../../components/page_container/Page_Container";

export default function Contact() {
  return (
    <div className="contactPage">
      <main>
        <Page_Container>
          <main id="contactPage" className="main  contact-main">
            <div className="form-container flex-all">
              <form action="">
                <div className="container1 text-center margin-inline flex flex-column gap-1">
                  <h1 className="bold">Contact Us</h1>
                  <h3 className="letter-5">
                    Any question or remarks? Just write us a massage!
                  </h3>
                  {/* <div className="input-container gap-1 flex justify-between text-start width-full">
                  <div className="email-input width-50">
                    <div>
                      <label htmlFor="email">E-mail</label>
                    </div>
                    <input
                      id="email"
                      className="input width-full"
                      type="email"
                      placeholder="Enter a valid E-mail address"
                      autoComplete="on"
                    />
                  </div>
                  <div className="name-input width-50">
                    <div>
                      <label htmlFor="name">Name</label>
                    </div>
                    <input
                      id="name"
                      className="input width-full"
                      type="text"
                      placeholder="Enter your name"
                      autoComplete="on"
                    />
                  </div>
                </div> */}
                  <div className=" submit">
                    {" "}
                    <a className=" btn submit-btn width-full"> SUBMIT </a>
                  </div>
                </div>
              </form>
            </div>
            <div className="contact-container text-center ">
              <div className="bottom" />
              <div className="contacts flex justify-between margin-inline">
                <div className="club">
                  <div className="img-container">
                    🏃‍♂️‍➡️
                    <i className="fa-solid fa-person-running man" />
                  </div>
                  <div className="club-info">
                    <div className="contact-tittle margin-y font-2">
                      {" "}
                      ABOUT CLUB
                    </div>
                    <div>
                      Running guide <br /> workouts
                    </div>
                  </div>
                </div>
                <div className="club">
                  <div className="img-container">
                    📞
                    <i className="fa-solid fa-phone phone" />
                  </div>
                  <div className="club-info">
                    <div className="contact-tittle margin-y font-2">
                      {" "}
                      PHONE (LANDLINE)
                    </div>
                    <div>
                      7974755379 <br /> 849949389
                    </div>
                  </div>
                </div>
                <div className="club">
                  <div className="img-container">
                    🔵
                    <i className="fa-solid fa-location-dot LOCATION" />
                  </div>
                  <div className="club-info">
                    <div className="contact-tittle margin-y font-2">
                      OUR OFFICE LOCATION{" "}
                    </div>
                    <div>
                      The interior design company <br /> The courtyard, AI Quzd
                      1, Colorado, USA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Page_Container>
      </main>
    </div>
  );
}
