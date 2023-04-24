import PropTypes from 'prop-types';

const MissionEntry = ({ mission }) => {
  console.log(mission);
  return (
    <tr>
      <td>{JSON.parse(mission).mission_name}</td>
      <td>{JSON.parse(mission).description}</td>
      <td>probably not a member yet</td>
      <td>
        <button type="button">Join mission</button>
      </td>
    </tr>
  );
};

MissionEntry.propTypes = {
  mission: PropTypes.string.isRequired,
};

export default MissionEntry;
