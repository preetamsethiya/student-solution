import React, { useEffect, useState } from "react";
import Page_Container from "../../components/page_container/Page_Container";
import Card from "../../components/card/Card";
import { profiles, updates } from "../../data_store/data";
import Button from "../../components/button/Button";

export default function Post() {
  let profilesPosts = [];
  const [link, setLnk] = useState("");

  profiles.map((profile) => {
    profilesPosts = [...profilesPosts, ...profile.posts];
  });

  const updateList = [...updates, ...profilesPosts];

  const [isMore, setIsMore] = useState(true);

  // console.log(updateList[0]);

  useEffect(() => {
    setLnk(updateList[0].post_Id);
  }, [profilesPosts]);

  return (
    <div className="postPage">
      <main>
        <Page_Container>
          <div>
            <div>
              <div className="post">
                {/* mediaContainer  */}

                <div className="mediaContainer">
                  <iframe
                    src={updateList[0].post_Src}
                    width="100%"
                    height="100%"
                    allow="autoplay"
                  ></iframe>
                </div>
                <div>
                  {updateList[0]?.site && (
                    <div className="userIdContainer"> Kondagaon</div>
                  )}

                  {/* description  */}

                  <div className="descriptionContainer">
                    <p
                      className="description"
                      style={{
                        whiteSpace: isMore ? "nowrap" : "normal",
                      }}
                    >
                      {" "}
                      <span>
                        <b> {updateList[0].title} : </b>
                        {updateList[0].description}
                      </span>{" "}
                      <a
                        href={`https://drive.google.com/uc?export=download&id=${link}`}
                        className="link"
                        target="_blank"
                        download
                      >
                        <Button
                          btn={{
                            text: "Download pdf",
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
                    {/* important dates.\ */}
                    {updateList[0].date.length && (
                      <h4>
                        Important date <br /> <br />
                      </h4>
                    )}
                    {updateList[0].date.length &&
                      updateList[0].date.map((date, i) => {
                        return (
                          <b key={i}>
                            {date}, &nbsp; <br />
                          </b>
                        );
                      })}
                    <br /> <br />
                    {/* important links  */}
                    {updateList[0].links.length && (
                      <h4>
                        Important links <br /> <br />
                      </h4>
                    )}
                    {updateList[0].links.length &&
                      updateList[0].links.map((link, i) => {
                        return (
                          <b key={i}>
                            <a href={link.site} target="_blank">
                              {" "}
                              {link.text} - click here{" "}
                            </a>{" "}
                            <br />
                            <br />
                          </b>
                        );
                      })}
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
