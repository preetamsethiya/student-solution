import React from "react";
import Page_Container from "../../components/page_container/Page_Container";

export default function About() {
  return (
    <div className="aboutPage">
      <main>
        <Page_Container>
          <div className="info-container flex justify-between flex-column">
            <div>
              <h1>About Us</h1>
              <div className="para">
                Welcome to "studentsolution" ! We are a dedicated platform
                designed to be your go-to resource for navigating the worlds of
                education and career development. We understand that choosing a
                path for your future can be both exciting and challenging, and
                our goal is to provide you with the information and tools you
                need to make informed decisions. Our Mission Our mission is
                simple: to empower individuals by providing comprehensive,
                reliable, and accessible information. We believe that everyone
                deserves the opportunity to build a successful future, and that
                starts with having the right resources at your fingertips. We
                are committed to bridging the gap between aspiring students and
                professionals and the opportunities that await them. What We
                Offer Educational Resources: Whether you're a high school
                student exploring college options, a graduate seeking advanced
                degrees, or an adult learner looking to upskill, our platform
                offers a wealth of information. You'll find articles on various
                academic fields, tips for college applications, scholarship
                guides, and insights into different educational systems. Career
                Guidance: The job market is constantly evolving, and we're here
                to help you keep up. We provide expert advice on resume writing,
                interview preparation, and professional networking. Our
                resources include career path guides, salary insights, and tips
                for personal and professional growth. Job Listings: We partner
                with various companies and organizations to bring you a curated
                list of job openings. Our job board is regularly updated with
                opportunities across different industries, from entry-level
                positions to senior roles. Our Team Our team is made up to
                helping you succeed. We work tirelessly to research, verify, and
                present the most relevant and useful information. We're driven
                by the belief that knowledge is the key to unlocking your full
                potential. Thank you for being a part of our community. We're
                excited to be a part of your journey toward a brighter future.
                "studentsolution" Your path to a successful future starts here.
              </div>
            </div>
          </div>
          {/* <div className="red aboutImgContainer">
          <img
            className="img"
            src="https://images.unsplash.com/photo-1603969409447-ba86143a03f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwd2l0aCUyMHBjfGVufDB8fDB8fHww"
          />
        </div> */}
          <div className="about-link-container">
            <div className="media-container">
              <a href="https://www.instagram.com/" target="_blank">
                <div className="media insta">
                  <div className="insta1">
                    <div className="insta2">
                      <div className="insta3">
                        <div className="insta4" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/preetamkumar-sethiya"
                target="_blank"
              >
                <div className="media linked-in">
                  {" "}
                  <div className="in">in</div>
                </div>
              </a>
              <a href="https://x.com/" target="_blank">
                <div className="media x">
                  {" "}
                  <div className="x">X</div>
                </div>
              </a>
            </div>
          </div>
        </Page_Container>
      </main>
    </div>
  );
}
