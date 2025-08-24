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
                  {/* <div className=" submit">
                    {" "}
                    <a className=" btn submit-btn width-full"> SUBMIT </a>
                  </div> */}
                </div>
              </form>
              <div>
                <h3>Contact Us</h3> <br />
                We're here to help you on your educational and career journey!
                Whether you have a question, a suggestion, or just want to say
                hello, we'd love to hear from you. Please choose the best way to
                get in touch with us. General Inquiries For general questions
                about our website, content, or mission, please feel free to send
                us an email. We'll do our best to get back to you as soon as
                possible. Email:{" "}
                <a href="mailto: iticomputer2023@gmail.com">
                  {" "}
                  iticomputer2023@gmail.com
                </a>{" "}
                Job & Career Support If you have a question about a specific job
                listing, need help with your resume, or want career advice, our
                team of experts is ready to assist. Please use the following
                email address to reach our career support team. Email:
                iticomputer2023@gmail.com Partnership & Advertising Interested
                in partnering with us or advertising on our platform? We're
                always looking for new ways to expand our offerings and connect
                with our audience. Please contact our business development team.
                Email: iticomputer2023@gmail.com Social Media Connect with us on
                our social media channels to stay up-to-date with our latest
                articles, job listings, and career tips.Facebook:
                https://Facebook.com Twitter: https://x.com LinkedIn:
                https://linkedin.com/in/preetamkumar-sethiya
                https://studentsolution.netlify.app/ We look forward to hearing
                from you!
              </div>
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
                      7974755379 <br />
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
                      OUR LOCATION{" "}
                    </div>
                    <div>Kondagaon</div>
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
