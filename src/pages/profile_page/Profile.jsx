import React, { useEffect } from "react";
import Page_Container from "../../components/page_container/Page_Container";
import Card from "../../components/card/Card";
import { profiles as profileList } from "../../data_store/data";
import Button, { Button2 } from "../../components/button/Button";
import { Link, useParams } from "react-router";

export default function Profile() {
  const param = useParams();
  // console.log(param);

  const [profileFilterd] = profileList.filter((profile) => {
    return profile.user_Id === param.profile;
  });
  // console.log(profileFilterd);

  if (!profileFilterd) {
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
    <div className="profilePage">
      <div>
        <Button2 />
      </div>
      <main>
        <Page_Container>
          <div className="section1">
            <Card>
              <div className="idContainer">
                <div className="id">{profileFilterd.user_Id} </div>
              </div>
              <div className="nameSection">
                <div>
                  <div className="profileImg"></div>
                </div>
                <div className="name">{profileFilterd.user_Name} </div>
              </div>
            </Card>
          </div>

          <div className="section2">
            <div className="subHeading">updates</div>
            <div className="cardContainer">
              {profileFilterd.posts.map((post) => {
                return (
                  <Card key={post.post_Id}>
                    <Link
                      to={`/${profileFilterd.user_Id}/${post.post_Id}`}
                      className="link"
                      state={"hii"}
                    >
                      <div className="innerCard">
                        <Card data={post} />
                      </div>
                    </Link>
                    <div className="btnSection">
                      <a
                        href={`https://drive.google.com/uc?export=download&id=${post.post_Id}`}
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
                      <Link to={`/post/${post.post_Id}`} className="link">
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
