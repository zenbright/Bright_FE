import PropTypes from 'prop-types';

export const CreationDate = ({date = 'Mar 2, 2024'}) => {
  return (
    <span style={{fontFamily: 'nunito'}}>
    Created at: <span className='font-semibold'>{date}</span>
    </span>
  );
};

CreationDate.propTypes = {
  date: PropTypes.string,
};
