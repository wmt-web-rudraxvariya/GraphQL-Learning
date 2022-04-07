import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const LaunchWithApollo = gql`
  query LaunchesQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      links {
        mission_patch
        video_link
      }
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;
const Launch = (props) => {
  let { flight_number } = useParams();

  const { loading, error, data } = useQuery(LaunchWithApollo, {
    variables: { flight_number: parseFloat(flight_number) },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <div>
      <h3>{data?.launch?.mission_name}</h3>
      <ReactPlayer url={data?.launch.links.video_link} />
    </div>
  );
};

export default Launch;
