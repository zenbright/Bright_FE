import PropTypes from 'prop-types';

export const StatisticCard = ({width = 250, height = 160}) => {
  return (
    <div
      className="rounded-lg border-2 border-gray-300 border-opacity-80 shadow-sm m-20"
      style={{width, height}}
    >
      <h1>Hello moi nguoi</h1>
    </div>
  );
};

StatisticCard.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
