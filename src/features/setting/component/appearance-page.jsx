import catImage from '../asset/cat.jpg';
import themes from '../test/data/themes';
import Theme from './theme';

function Appearance() {
  return (
    <div className="container-ns flex flex-col w-[75vw] overflow-auto">
      <div className="mx-3 text-lg font-bold top-0 p-2 border-b-[1px] border-slate-300 group sticky bg-white">
        {'Appearance'}
      </div>
      <div className="flex flex-col m-4">
        <div className="border-b-[1px] py-2 mb-3">
          <p className="font-semibold text-md">{'Theme Preferences'}</p>
        </div>
        <p >{'Select a single theme'}</p>
        <div className="my-5">
          <form className="grid grid-cols-3 gap-4">
            {themes.map((theme, index) => (
              <label key={index} className="rounded-md w-fit cursor-pointer">
                <Theme name={theme} image={catImage}></Theme>
              </label>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Appearance;
