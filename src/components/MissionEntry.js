import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const MissionEntry = ({ mission }) => {
  mission = JSON.parse(mission);
  const dispatch = useDispatch();

  const membershipStatus = (e) => {
    const statusID = e.target.id;
    const status = e.target.innerHTML;
    if (status === 'Join mission') {
      dispatch(joinMission(statusID));
      e.target.innerHTML = 'Leave mission';
      e.target.className = 'btn btn-active';
    } else {
      dispatch(leaveMission(statusID));
      e.target.innerHTML = 'Join mission';
      e.target.className = 'btn';
    }
  };
  return (
    <tr>
      <td className="missionHeader"><span>{mission.mission_name}</span></td>
      <td className="mission-description">{mission.description}</td>
      <td>
        {
          mission.reserved ? <p className="active-member">ACTIVE</p> : <p className="not-a-member">NOT ACTIVE</p>
        }
      </td>
      <td>
        <button
          type="button"
          id={mission.mission_id}
          className="btn"
          onClick={(e) => membershipStatus(e)}
        >
          Join mission
        </button>
      </td>
    </tr>
  );
};

MissionEntry.propTypes = {
  mission: PropTypes.string.isRequired,
};

export default MissionEntry;
