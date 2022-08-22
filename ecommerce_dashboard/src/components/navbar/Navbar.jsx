import {useState} from 'react';
import './navbar.scss';
import  SearchOutlinedIcon  from '@mui/icons-material/SearchOutlined';
import  LanguageOutlinedIcon  from '@mui/icons-material/LanguageOutlined';
import  DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import  LightModeIcon from '@mui/icons-material/LightMode';
import  FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import  NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import  ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import  ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useContext } from 'react';
import { DarkModeContext } from "./../../context/darkModeContext";

const Navbar = () => {

  const [dark, setDark] = useState(false)
  const {dispatch,darkMode} = useContext(DarkModeContext);

  const toggleTheme = ()=>{
    dispatch({type:"TOGGLE"});
    setDark(darkMode);
  }

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" className="text" placeholder='search...' />
          <SearchOutlinedIcon className='icon'/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className='icon'/>
            English
          </div>
          <div className="item">
            {dark ?
              <DarkModeOutlinedIcon className='icon' onClick={()=>toggleTheme()}/>
            :
              <LightModeIcon className='icon' onClick={()=>toggleTheme()}/>
            }
            
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className='icon'/>
          </div>
          <div className="item">
            <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" alt="" className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar