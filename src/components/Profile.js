import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const missions = useSelector((store) => store.missions);
  const myMissions = missions.filter((mission) => mission.reserved === true);
  const rockets = useSelector((store) => store.rockets);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved === true);
  const dragons = useSelector((store) => store.dragons);
  const filteredDragons = dragons.filter((dragon) => dragon.reserved === true);
  return (
    <div className="profile-page-wrap profileBody">
      <div className="profile-contents-wrap">
        <h2>My Rockets</h2>
        <ul>
          {filteredRockets.map((rocket) => {
            const rocketId = rocket.id;
            return <li key={rocketId}>{rocket.name}</li>;
          })}
        </ul>
      </div>
      <div className="profile-contents-wrap">
        <h2>My Missions</h2>
        <ul>
          {
            myMissions.map((mission) => (
              <li key={mission.mission_id}>{mission.mission_name}</li>
            ))
          }
        </ul>
      </div>
      <div className="profile-contents-wrap">
        <h2>My Dragons</h2>
        <ul>
          {filteredDragons.map((dragon) => {
            const dragonId = dragon.id;
            return <li key={dragonId}>{dragon.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
