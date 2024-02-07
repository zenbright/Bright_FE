import {Column} from '../utils/ColumnClass';
import PropTypes from 'prop-types';

export function ColumnContainer({col}) {
  return (
    <div>Column</div>
  );
}

ColumnContainer.propTypes = {
  col: PropTypes.instanceOf(Column),
};
