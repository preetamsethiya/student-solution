import React, { useEffect, useState } from "react";
import Page_Container from "../../components/page_container/Page_Container";
import Card from "../../components/card/Card";
import { profiles, updates } from "../../data_store/data";
import Button from "../../components/button/Button";
import { useParams } from "react-router";

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

  // console.log(postFiltered);

  useEffect(() => {}, [profilesPosts]);

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
                    src={postFiltered.post_Src}
                    width="100%"
                    height="100%"
                    allow="autoplay"
                  ></iframe>
                </div>
                <div>
                  {postFiltered.links[0]?.official_Site && (
                    <div className="userIdContainer">
                      <a
                        style={{
                          color: "black",
                        }}
                        href={postFiltered.links[0]?.official_Site}
                      >
                        {" "}
                        official site
                      </a>
                    </div>
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
                        <b> {postFiltered.title} : </b>
                        {postFiltered.description}
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
                    </p>{" "}
                    <Button
                      btn={{
                        text: isMore ? "more" : "less",
                        className: "moreBtn",
                        onClick: () => setIsMore((prev) => !prev),
                      }}
                    />
                    {/* important dates.\ */}
                    {postFiltered.date.length && (
                      <h4>
                        Important date <br /> <br />
                      </h4>
                    )}
                    {postFiltered.date.length &&
                      postFiltered.date.map((date, i) => {
                        return (
                          <b key={i}>
                            {date}, &nbsp; <br />
                          </b>
                        );
                      })}
                    <br /> <br />
                    {/* important links  */}
                    {postFiltered.links.length && (
                      <h4>
                        Important links <br /> <br />
                      </h4>
                    )}
                    {postFiltered.links.length &&
                      postFiltered.links.map((link, i) => {
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
