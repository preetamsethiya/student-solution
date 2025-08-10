import React, { useEffect, useState } from "react";
import Page_Container from "../../components/page_container/Page_Container";
import Card from "../../components/card/Card";
import { profiles, updates } from "../../data_store/data";
import Button from "../../components/button/Button";

export default function Post() {
  let profilesPosts = [];

  profiles.map((profile) => {
    profilesPosts = [...profilesPosts, ...profile.posts];
  });

  const updateList = [...updates, ...profilesPosts];

  const [isMore, setIsMore] = useState(true);

  useEffect(() => {}, [profilesPosts]);

  return (
    <div className="postPage">
      <main>
        <Page_Container>
          <div>
            <div>
              <div className="post">
                <div className="mediaContainer">
                  <iframe
                    src={updateList[0].post_Src}
                    width="640"
                    height="100%"
                    allow="autoplay"
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
                      post{" "}
                      <a
                        href={`https://drive.google.com/uc?export=download&id=
                        ${updateList[0].download_Link.split("/")[5]}`}
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
