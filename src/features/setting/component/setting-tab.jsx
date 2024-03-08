import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
function SettingTab({tab, tabIndex, selectedActive, handleSelected}) {
  return (
    <NavLink to={`/settings/${tab.name.toLowerCase().replace(/\s/g, '-')}`}>
      <div
        id={tab.name}
        className={
          `flex flex-col my-3 p-1 pl-3 group rounded-xl cursor-pointer hover:bg-slate-100
          ${selectedActive === tabIndex ? 'bg-slate-200' : ''}`
        }
        onClick={handleSelected}
      >
        <div className={`flex flex-row gap-2 ${selectedActive === tabIndex ? 'text-blue-700' : ''}`}
        >
          {tab.icon}
          <h1 className='text-md group-hover:text-blue-700'>{tab.name}</h1>
        </div>
        <div className='ml-8'>
          <p>{tab.paragraph}</p>
        </div>
      </div>
    </NavLink>
  );
}

SettingTab.propTypes = {
  tab: PropTypes.object,
  tabIndex: PropTypes.number,
  selectedActive: PropTypes.number,
  handleSelected: PropTypes.func,
};

export default SettingTab;
