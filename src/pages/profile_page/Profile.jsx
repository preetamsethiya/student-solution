import React from "react";
import Page_Container from "../../components/page_container/Page_Container";
import Card from "../../components/card/Card";
import { colleges } from "../../data_store/data";
import Button from "../../components/button/Button";
import { Link } from "react-router";

export default function Profile() {
  return (
    <div className="profilePage">
      <main>
        <Page_Container>
          <div className="section1">
            <Card>
              <div className="idContainer">
                <div className="id">Kondagaon</div>
              </div>
              <div className="nameSection">
                <div>
                  <div className="profileImg"></div>
                </div>
                <div className="name"> Gundadhur pg college, Kondagaon</div>
              </div>
            </Card>
          </div>

          <div className="section2">
            <div className="subHeading">updates</div>
            <div className="cardContainer">
              {colleges[0].posts.map((post) => {
                return (
                  <Card key={post.id}>
                    <Link to="/posts" className="link">
                      <div className="innerCard">
                        <Card data={post} />
                      </div>
                    </Link>
                    <div className="btnSection">
                      <a
                        href="https://ggckondagaon.in/newsData/Both_307.pdf"
                        className="link"
                        target="_blank"
                        download
                      >
                        <Button
                          btn={{
                            text: "Download",
                          }}
                        />
                      </a>
                      <Link to="/posts" className="link">
                        <Button
                          btn={{
                            text: "View",
                          }}
                        />
                      </Link>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </Page_Container>
      </main>
    </div>
  );
}
