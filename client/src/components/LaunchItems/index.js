import React from "react";
import Moment from "react-moment";
const LaunchItems = ({ launch }) => {
  console.log("data", launch);
  return (
    <>
      <div className="card" style={{ width: "20rem", margin: "10px 0px" }}>
        <img src={launch.links.mission_patch} alt="" />
        <div className="card-body">
          <h5
            className={
              launch.launch_success
                ? "text-success card-title"
                : "text-danger card-title"
            }
          >
            {launch.mission_name}
          </h5>
          <p>
            <Moment format="YYYY-MM-DD HH:mm">
              {launch.launch_date_local}
            </Moment>
          </p>
        </div>
      </div>
    </>
  );
};

export default LaunchItems;
