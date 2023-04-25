import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((store) => store.missions);
  const myMissions = missions.filter((mission) => mission.reserved === true);
  const rockets = useSelector((store) => store.rockets);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved === true);
  return (
    <div>
      <div>
        <h2>
          {/* these will have to be removed later when we're styling */}
          <br />
          <br />
          <br />
          My Missions
        </h2>
        <ul>
          {
            myMissions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))
          }
        </ul>
      </div>
      <div className="subcribed-rockets margin">
        <h2>My Rockets</h2>
        <ul>
          {filteredRockets.map((rocket) => {
            const rocketId = rocket.id;
            return <li key={rocketId}>{rocket.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
