import React, { useEffect, useState } from "react";
import Page_Container from "../../components/page_container/Page_Container";
import Card from "../../components/card/Card";
import { profiles, updates } from "../../data_store/data";
import Button, { Button2 } from "../../components/button/Button";
import { Link, useParams } from "react-router";

export default function Post() {
  let profilesPosts = [];
  const param = useParams();
  // console.log(param);

  profiles.map((profile) => {
    profilesPosts = [...profilesPosts, ...profile.posts];
  });

  const updateList = [...updates, ...profilesPosts];

  const [postFiltered] = updateList.filter((update) => {
    return update.post_Id === param.id;
  });

  const [isMore, setIsMore] = useState(true);

  console.log(postFiltered?.links[0]);

  useEffect(() => {}, [profilesPosts]);

  if (!postFiltered) {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        {" "}
        <h4>Page not found</h4> <br /> <Link to={"/"}>Home</Link>
      </div>
    );
  }

  return (
    <div className="postPage">
      <div>
        <Button2 />
      </div>
      <main>
        <Page_Container>
          <div>
            <div>
              <div className="post">
                {/* mediaContainer  */}

                <div className="mediaContainer">
                  <iframe
                    src={postFiltered.post_Src}
                    width="100%"
                    height="100%"
                    allow="autoplay"
                  ></iframe>
                </div>
                <div>
                  {postFiltered.links[0]?.site && (
                    <div className="userIdContainer">
                      <a
                        style={{
                          color: "black",
                        }}
                        href={postFiltered.links[0]?.site}
                      >
                        {" "}
                        Official site
                      </a>
                    </div>
                  )}

                  <div
                    className="textContainer"
                    style={{
                      flexDirection: isMore ? "" : "column",
                    }}
                  >
                    {/* description  */}
                    <b> {postFiltered.title} : </b>

                    {!isMore && (
                      <div
                        className="descriptionContainer"
                        style={{
                          height: isMore ? "41px" : "",
                        }}
                      >
                        <div className="description">
                          {" "}
                          <span>
                            {/* {postFiltered.description} */}
                            {postFiltered.description
                              .split("$")
                              .map((slid, i) => {
                                return (
                                  <div key={i} className="textSlid">
                                    {slid}
                                  </div>
                                );
                              })}
                          </span>{" "}
                          <a
                            href={`https://drive.google.com/uc?export=download&id=${postFiltered.post_Id}`}
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
                        </div>{" "}
                        {/* important dates.\ */}
                        {postFiltered.date.length && (
                          <div className="dateContainer">
                            {" "}
                            <span>Important date</span>{" "}
                          </div>
                        )}
                        {postFiltered.date.length &&
                          postFiltered.date.map((date, i) => {
                            return (
                              <div
                                className="date"
                                style={{
                                  backgroundColor:
                                    i === 1 ? "#f14d4d" : `#02${i}f07`,
                                }}
                                key={i}
                              >
                                {date}
                              </div>
                            );
                          })}
                        <br /> <br />
                        {/* important links  */}
                        {postFiltered.links.length && (
                          <div className="linkContainer">
                            {" "}
                            <span>Important Link</span>{" "}
                          </div>
                        )}
                        {postFiltered.links.length &&
                          postFiltered.links.map((link, i) => {
                            return (
                              <div key={i}>
                                <a
                                  className="links"
                                  href={link.site}
                                  style={{
                                    backgroundColor:
                                      i === 2
                                        ? "rgb(185 116 17)"
                                        : `#31${5 + i}1f${5 + i}`,
                                  }}
                                  target="_blank"
                                >
                                  {" "}
                                  {link.text} - click here{" "}
                                </a>{" "}
                              </div>
                            );
                          })}
                      </div>
                    )}
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
