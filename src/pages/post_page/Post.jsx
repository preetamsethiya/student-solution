import React, { useState } from "react";
import Page_Container from "../../components/page_container/Page_Container";
import Card from "../../components/card/Card";
import { colleges } from "../../data_store/data";
import Button from "../../components/button/Button";

export default function Post() {
  const [isMore, setIsMore] = useState(true);
  return (
    <div className="postPage">
      <main>
        <Page_Container>
          <div>
            <div>
              <div className="post">
                <div className="mediaContainer">
                  <iframe
                    src="https://ggckondagaon.in/newsData/Both_307.pdf"
                    width="100%"
                    height="100%"
                  ></iframe>
                </div>
                <div>
                  <div className="userIdContainer"> Kondagaon</div>
                  <div className="descriptionContainer">
                    <p
                      className="description"
                      style={{
                        whiteSpace: isMore ? "nowrap" : "normal",
                      }}
                    >
                      {" "}
                      this is post title my name is preetam kumar sethiya this
                      is post title my name is preetam kumar sethiya this is
                      post
                    </p>{" "}
                    <Button
                      btn={{
                        text: isMore ? "more" : "less",
                        className: "moreBtn",
                        onClick: () => setIsMore((prev) => !prev),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Page_Container>
      </main>
    </div>
  );
}
