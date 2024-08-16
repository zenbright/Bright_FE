import catImage from '../asset/cat.jpg';
import withScrollbarTheme from '../hoc/scroll-bar';
import themes from '../test/data/themes';
import Theme from './app-theme';

function Appearance() {
  return (
    <div className="container-ns flex flex-col w-[74.4vw] overflow-auto">
      <div className="mx-3 text-2xl font-light pt-8 pb-[14px] border-b-[1px] border-slate-300 group sticky bg-background">
        {'Appearance'}
      </div>
      <div className="flex flex-col m-3">
        <div className="border-b-[1px] py-2 mb-3">
          <p className="font-semibold text-md">{'Theme Preferences'}</p>
        </div>
        <div className="flex items-center justify-center">
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

export default withScrollbarTheme(Appearance);
