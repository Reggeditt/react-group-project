import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((store) => store.missions);
  const myMissions = missions.filter((mission) => mission.reserved === true);
  return (
    <div>
      <div>
        <h1>
          {/* these will have to be removed later when we're styling */}
          <br />
          <br />
          <br />
          My Missions
        </h1>
        <ul>
          {
            myMissions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Profile;
