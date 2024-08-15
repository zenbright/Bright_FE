import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { setTheme } from '../../../features/theme/utils/themeSlice.ts';

function Theme({ name, image }) {
  const dispatch = useDispatch();
  const currentTheme = useSelector(state => state.currentTheme.value);

  const isDisabled = name !== 'Light default' && name !== 'Dark default';

  const normalizeThemeName = name => {
    return name.toLowerCase().replace(/ /g, '-');
  };

  const handleThemeButton = () => {
    dispatch(setTheme(normalizeThemeName(name)));
  };

  return (
    <div
      className="rounded-md w-full border-[2px] cursor-pointer"
      onClick={handleThemeButton}
    >
      <img src={image} alt="" className="w-[300px] h-[180px] object-fill" />
      <div className="flex flex-row p-2 gap-2">
        <input
          type="radio"
          name="theme"
          value={name}
          checked={currentTheme === normalizeThemeName(name)}
          disabled={isDisabled}
          onChange={handleThemeButton}
        />
        <p>{name}</p>
      </div>
    </div>
  );
}

Theme.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

export default Theme;
