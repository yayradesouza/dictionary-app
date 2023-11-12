
import './App.css';
import './Styling.css';
import './index.css';


import logo from './images/logo.svg'
import moon from './images/icon-moon.svg'
import SearchItem from './components/SearchItem';
import { BiSolidCircle } from "react-icons/bi";
import {GetThemeValues} from './components/ContextTheme.js'
import {useFont} from './components/FontextTheme.js'

function App() {
const {darkTheme, themeHandler} = GetThemeValues()
const {selectedFont, changeFont} = useFont()
const handleFontChange = (e) => {
    changeFont(e.target.value);
  };

const textStyle = {
  fontFamily: selectedFont,
};

  return (
    <div className= {(darkTheme?'Dark':'App')} style={textStyle}>
    <div className="Banner">
      <img src={logo} alt='logo'/>
      <div className='Menu'>
        <div className='lang_Option'>
      <select 
      className={(darkTheme?'dark_select':'light_select')}
       id='font'  style={textStyle} onChange={handleFontChange}
       >
        <option  value='serif' >Serif</option>
        <option value='sans-serif' selected>Sans-Serif</option>
        <option value='monospace'>Monospace</option>
      </select>
      </div>
        <div className={(darkTheme?'toggled_bar':'untoggled_bar')} onClick={themeHandler}>
          <span className={(darkTheme?'toggled':'toggle_circle')}>
            <BiSolidCircle/>
          </span></div>
      <div className='moonicon'><img src={moon} alt='moon-icon'/></div>
      </div>
    </div>
    <div className='Searchbar'>
      <SearchItem/>
    </div>
    <div>
    </div>
    </div>
  );
}

export default App;
