import React from "react";
import { gql, useQuery } from "@apollo/client";
import LaunchItems from "../LaunchItems";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
      links {
        mission_patch
      }
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const Launches = () => {
  const { error, data, loading } = useQuery(LAUNCHES_QUERY);
  console.log("asd", data);
  if (loading)
    return (
      <div className="d-flex justify-content-center mt-5">
        <div
          class="spinner-grow text-center"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        ></div>
      </div>
    );
  if (error) return <p>Error :(</p>;
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {data.launches.map((launch, item) => (
        <LaunchItems key={launch.flight_number} launch={launch} />
      ))}
    </div>
  );
};

export default Launches;
