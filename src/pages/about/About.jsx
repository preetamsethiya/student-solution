import React from "react";
import Page_Container from "../../components/page_container/Page_Container";

export default function About() {
  return (
    <div className="aboutPage">
      <main>
        <Page_Container>
          <div className="info-container flex justify-between flex-column">
            <div>
              <h1>Bethany Jones</h1>
              <div className="para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime{" "}
                <br />
                cum possimus accusamus quaerat est illo ab eius praesentium ad?
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
              <div className="media insta">
                <div className="insta1">
                  <div className="insta2">
                    <div className="insta3">
                      <div className="insta4" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="media linked-in">
                {" "}
                <div className="in">in</div>
              </div>
              <div className="media x">
                {" "}
                <div className="x">X</div>
              </div>
            </div>
          </div>
        </Page_Container>
      </main>
    </div>
  );
}
