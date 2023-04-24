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
    } else {
      dispatch(leaveMission(statusID));
      e.target.innerHTML = 'Join mission';
    }
  };
  return (
    <tr>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>
        {
          mission.reserved ? 'Active Member' : 'NOT A MEMBER'
        }
      </td>
      <td>
        <button
          type="button"
          id={mission.mission_id}
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
