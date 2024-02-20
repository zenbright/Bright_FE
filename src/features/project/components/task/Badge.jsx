import PropTypes from 'prop-types';
import {Badge} from '@/components/ui/badge';

export const TaskBadge = ({text, className}) => {
  return <Badge className={className}>{text}</Badge>;
};

TaskBadge.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};
