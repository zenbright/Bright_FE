import PropTypes from 'prop-types';
import {formatDate} from '../utils/dateConverter';

export const CreationDate = ({date = new Date()}) => {
  return (
    <span>
    Created at: <span className='font-bold'>{formatDate(date)}</span>
    </span>
  );
};

CreationDate.propTypes = {
  date: PropTypes.instanceOf(Date),
};
