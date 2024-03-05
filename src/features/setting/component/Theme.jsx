import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function Theme({name, image}) {
  return (
    <div className="rounded-md w-fit border-[2px] cursor-pointer">
      <img src={image} alt="" className='w-[300px] h-[180px] object-fill'/>
      <div className='flex flex-row p-2 gap-2'>
        <input type="radio" name="theme" value={name}/>
        <p>{name}</p>
      </div>
    </div>
  );
}

Theme.PropTypes={
  name: PropTypes.string,
  image: PropTypes.string,
};

export default Theme;
