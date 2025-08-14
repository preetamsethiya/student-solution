import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/card/Card";
import Page_Container from "../../components/page_container/Page_Container";
import Button from "../../components/button/Button";
import { cafes, profiles, updates } from "../../data_store/data";
import { Link } from "react-router";
import { VarContext } from "../../context/VarContext";
import Input from "../../components/input/Input";
import UseSearch_Filter from "../../hooks/UseSearch_Filter";
import { Search_FilterContext } from "../../context/Search_FilterContext";
import SelectMenu from "../../components/select_menu/SelectMenu";
import { resultArr } from "../../data_store/data";
export default function Home() {
  let profilesPosts = [];

  profiles.map((profile) => {
    profilesPosts = [...profilesPosts, ...profile.posts];
  });

  const updateList = [...updates, ...profilesPosts];

  const clgActive = useContext(VarContext);

  const { search_Filter, setSearch_Filter } = useContext(Search_FilterContext);

  const filter = UseSearch_Filter();

  useEffect(() => {}, [profilesPosts]);

  return (
    <div className="homeContainer">
      <main>
        {/* search section  */}

        <div className="homeSearchContainer">
          <div className="homeSearch">
            <label htmlFor="search">
              <Input
                input={{
                  id: "search",
                  name: "search",
                  type: "text",
                  value: search_Filter || "",
                  placeholder: "search...",
                  onChange: filter,
                }}
              />
              <span> 🔍</span>
            </label>
          </div>
          <div className="homeFilterContainer">
            <SelectMenu
              selectMenu={{
                onChange: filter,
              }}
            />
          </div>
        </div>
        {/* {resultArr.map((result) => {
          return <Link to={`/result/${result.url_Id}`}>click</Link>;
        })} */}
        <Page_Container>
          <div>
            {/* card section 1  */}

            <div className="cardWrapper section1">
              <div className="subHeading">Cafes</div>
              <div className="cardContainer">
                {cafes.map((cafe) => {
                  return (
                    <Card key={cafe.user_Id}>
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

          {/* card section 2 */}

          <div className="cardWrapper section2">
            <div className="subHeading">
              <div
                className={`${clgActive.isClgActive ? "activeLink" : ""}`}
                onClick={(e) => {
                  clgActive.setIsClgActive(true);
                }}
              >
                <label htmlFor="profileBtn">
                  {" "}
                  Collges
                  <input id="profileBtn" type="button" value={"profile"} />
                </label>
              </div>
              <div
                className={`${clgActive.isClgActive ? "" : "activeLink"}`}
                onClick={(e) => {
                  clgActive.setIsClgActive(false);
                }}
              >
                <label htmlFor="jobBtn">
                  {" "}
                  Updates
                  <input id="jobBtn" type="button" value={"job"} />
                </label>
              </div>
            </div>
            {clgActive.isClgActive ? (
              <div className="cardContainer">
                {/* profiles cards  */}

                {profiles.map((profile) => {
                  return (
                    <Link
                      key={profile.user_Id}
                      to={profile.user_Id}
                      className="link"
                    >
                      {" "}
                      <Card data={profile} />
                    </Link>
                  );
                })}
              </div>
            ) : (
              // updates cards

              <div className="cardContainer">
                {updateList
                  .filter((update) => {
                    return (
                      update.category
                        .toLocaleLowerCase()
                        .includes(search_Filter) ||
                      update.title.toLocaleLowerCase().includes(search_Filter)
                    );
                  })
                  .map((update) => {
                    return (
                      <Link
                        key={update.post_Id}
                        to={`/post/${update.post_Id}`}
                        className="link"
                      >
                        {" "}
                        <Card data={update} />
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
