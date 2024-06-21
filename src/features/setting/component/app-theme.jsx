import PropTypes from 'prop-types';

function Theme({ name, image }) {
  const isDisabled = name !== 'Light default' && name !== 'Dark default';

  return (
    <div className="rounded-md w-full border-[2px] cursor-pointer">
      <img src={image} alt="" className="w-[300px] h-[180px] object-fill" />
      <div className="flex flex-row p-2 gap-2">
        <input type="radio" name="theme" value={name} disabled={isDisabled} />
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
