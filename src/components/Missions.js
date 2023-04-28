import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';
import MissionEntry from './MissionEntry';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div className="missionBody">
      <table>
        <thead>
          <tr>
            <th className="t-mission">Mission</th>
            <th className="t-description">Description</th>
            <th className="t-status">Status</th>
            <th className="t-option">Option</th>
          </tr>
        </thead>
        <tbody>
          {
            missions.map(
              (mission) => (
                <MissionEntry key={mission.mission_id} mission={JSON.stringify(mission)} />
              ),
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default Missions;
