import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { displayProfile } from "../Action/userAction";
import { Badge, Card, Tabs, Text } from "@shopify/polaris";
import Fetchrepo from "./Fetchrepo";
function Profile(props) {
  const [profileDetails, setProfileDetails] = useState();
  const [selected, setSelected] = useState(0);
  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "all-customers-fitted-3",
      content: <span>Overview</span>,
      accessibilityLabel: "All customers",
      panelID: "all-customers-fitted-content-3",
    },
    {
      id: "accepts-marketing-fitted-3",
      content: (
        <span>
          Repositoris <Badge status="new">{profileDetails?.public_repos}</Badge>
        </span>
      ),
      panelID: "accepts-marketing-fitted-content-3",
    },
  ];

  useEffect(() => {
    fetch(`https://api.github.com/users/${props.state.userDetails}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer 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`,
      },
    })
      .then((response) => response.json())
      .then((item) => setProfileDetails(item));
  });
  return (
    <>
      <div className="conatinerDiv">
        <div className="navDiv">
          <div className="innerNav">
            <img src="./gitLogo.png" alt="..." className="imglogo" />
            <input type="text" className="inputSearch" placeholder="Search" />
            <span>Pull</span>
            <span>Issues</span>
            <span>Marketplace</span>
            <span>Explore</span>
          </div>
          <div className="lowerDiv">
            <span>
              <i className="fa-regular fa-bell fa-1x"></i>&nbsp;
              <img
                src={profileDetails?.avatar_url}
                alt="..."
                className="loginimg"
              />
              &nbsp;<i className="fa-solid fa-caret-down"></i>
            </span>
          </div>
        </div>
        <div className="mainscreenDiv">
          <div className="left">
            <div>
              <img
                src={profileDetails?.avatar_url}
                alt="/"
                className="profileImage"
              />
              <Text variant="headingXl" as="h4">
                {profileDetails?.name}
              </Text>
              <Text variant="headingLg" as="h5" c>
                {profileDetails?.login}
              </Text>
              <button className="followbtn">Follow</button>
              <br />
              {/* <br/> */}
              <span className="followers">
                <h4>
                  <i className="fa-solid fa-users"></i>&nbsp; follwers:
                  {profileDetails?.followers}&nbsp;.&nbsp;
                  {profileDetails?.following} following
                </h4>
              </span>
              <span>
                <h4>
                  <i className="fa-solid fa-envelope-open-text"></i>{" "}
                  {profileDetails?.email}
                </h4>
              </span>
              <span>
                <h4>
                  <i className="fa-solid fa-location-dot"></i>{" "}
                  {profileDetails?.location}
                </h4>
              </span>
              <span>
                <i className="fa-solid fa-link"></i> {profileDetails?.html_url}
              </span>
              <span>
                <h4>
                  <i className="fa-brands fa-twitter"></i>{" "}
                  {profileDetails?.twitter_username}
                </h4>
              </span>
            </div>
          </div>
          <div className="right">
            <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
              <Card.Section>
                {selected === 0 ? (
                  <>
                    <Card sectioned>
                      <Text variant="headingLg" as="h5">
                        Hi my name is {profileDetails?.login},
                      </Text>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </Card>
                  </>
                ) : (
                  <>
                    <Fetchrepo />
                  </>
                )}
              </Card.Section>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
const MapStateToProps = (state) => {
  console.log(state);
  return {
    state,
  };
};
const MapDispatchToProps = (dispatch) => {
  return {
    fetchuserProfile: (b) => dispatch(displayProfile(b)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(Profile);
