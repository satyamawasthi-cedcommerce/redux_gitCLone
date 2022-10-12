import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { displayProfile } from "../Action/userAction";
import { Badge, Card} from "@shopify/polaris";
function Fetchrepo(props) {
  const [repo, setRepo] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${props.state.userDetails}/repos`, {
      method: "GET",
      headers: {
        Authorization: `Bearer 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`,
      },
    })
      .then((response) => response.json())
      .then((item) => setRepo(item));
  });
  var public1 = <Badge>public</Badge>
  return (
    <>
      <div>
        <Card sectioned>
          {repo.map((repoitem) => (
            <>
              <Card title={repoitem.name} actions={[{content: public1}]} sectioned>
                  {repoitem.description}
                  <h1>Last Updated: {repoitem.updated_at}</h1>
              </Card>
            </>
          ))}
        </Card>
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
export default connect(MapStateToProps, MapDispatchToProps)(Fetchrepo);
