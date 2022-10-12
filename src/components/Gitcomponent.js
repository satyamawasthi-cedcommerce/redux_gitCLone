import { Button, Card, Heading, TextField, Text } from "@shopify/polaris";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { displayProfile } from "../Action/userAction";
function Gitcomponent(props) {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState();
  var goToProfile = useNavigate();
  const fetchUser = () => {
    fetch(`https://api.github.com/users/${user}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer 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`,
      },
    })
      .then((response) => response.json())
      .then((item) => setUserData(item));

    props.fetchuserProfile(user);
  };
  console.log(userData);
  const navigate = () => {
    sessionStorage.setItem("userName", user);
    goToProfile("/profile");
  };
  return (
    <>
      <div className="cardContainer">
        <Card sectioned>
          <span>
            <Heading>Get Github Profile Cards</Heading>
          </span>
          <TextField
            placeholder="search a github user"
            value={user}
            onChange={(value) => {
              setUser(value);
            }}
            autoComplete="off"
          />
          <br />
          <Button onClick={fetchUser}>Search</Button>
        </Card>
      </div>

      <div className="profileContainer">
        {userData !== undefined ? (
          <Card sectioned>
            <div className="profileCard">
              <div>
                <img src={userData.avatar_url} alt="..." className="userImg" />
              </div>
              <div className="userDetails">
                <Text variant="heading2xl" as="h3">
                  {userData.login}
                </Text>

                <Button size="slim" primary onClick={() => navigate()}>
                  View Profile
                </Button>
                <Text variant="headingMd" as="h6">
                  {userData.bio}
                </Text>
                <div className="lowerContainer">
                  <Text variant="headingMd" as="h6">
                    Follwers:{userData.followers}
                  </Text>
                  &nbsp;
                  <Text variant="headingMd" as="h6">
                    Following:{userData.following}
                  </Text>
                  &nbsp;
                  <Text variant="headingMd" as="h6">
                    Repositories:{userData.public_repos}
                  </Text>
                </div>
              </div>
            </div>
          </Card>
        ) : (
          <></>
        )}
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
export default connect(MapStateToProps, MapDispatchToProps)(Gitcomponent);
