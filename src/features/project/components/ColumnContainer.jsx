import {Column} from '../utils/ColumnClass';
import PropTypes from 'prop-types';

export function ColumnContainer({col}) {
  return (
    <div>
      <div className='bg-white  w-60 h-auto max-h-80 overflow-scroll no-scrollbar'>
        {col.title}{col.title}{col.title}
        <div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div><div>
          Hello
        </div>
      </div>
    </div>
  );
}

ColumnContainer.propTypes = {
  col: PropTypes.instanceOf(Column),
};
