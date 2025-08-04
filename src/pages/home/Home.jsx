import React, { useState } from "react";
import Card from "../../components/card/Card";
import Page_Container from "../../components/page_container/Page_Container";
import Button from "../../components/button/Button";
import { cafes, colleges } from "../../data_store/data";
import { Link } from "react-router";
const jobs = [...colleges];
export default function Home() {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <div className="homeContainer">
      <main>
        <Page_Container>
          <div>
            <div className="cardWrapper section1">
              <div className="subHeading">Cafes</div>
              <div className="cardContainer">
                {cafes.map((cafe) => {
                  return (
                    <Card key={cafe.id}>
                      <a
                        href="https://wa.me/919617709663?text=hii"
                        target="_blank"
                        className="link"
                      >
                        <div className="innerCard">
                          <Card data={cafe} />
                        </div>

                        <div className="btnSection">
                          <Button
                            btn={{
                              text: "Contact for form fill-up",
                            }}
                          />
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="cardWrapper section2">
            <div className="subHeading">
              <div
                className={`${isTrue ? "activeLink" : ""}`}
                onClick={(e) => {
                  setIsTrue(true);
                }}
              >
                <label htmlFor="collegeBtn">
                  {" "}
                  Collges
                  <input id="collegeBtn" type="button" value={"college"} />
                </label>
              </div>
              <div
                className={`${isTrue ? "" : "activeLink"}`}
                onClick={(e) => {
                  setIsTrue(false);
                }}
              >
                <label htmlFor="jobBtn">
                  {" "}
                  Jobs
                  <input id="jobBtn" type="button" value={"job"} />
                </label>
              </div>
            </div>
            {isTrue ? (
              <div className="cardContainer">
                {colleges.map((profile) => {
                  return (
                    <Link key={profile.id} to={profile.id} className="link">
                      {" "}
                      <Card data={profile} />
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="cardContainer">
                {jobs.map((profile) => {
                  return (
                    <Link key={profile.id} to="posts" className="link">
                      {" "}
                      <Card data={profile} />
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </Page_Container>
      </main>
    </div>
  );
}
