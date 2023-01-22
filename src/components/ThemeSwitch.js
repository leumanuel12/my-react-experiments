import { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { ThemeContext } from '../App';


export default function ThemeSwitch() {

 const theme = useContext(ThemeContext);
 const [dark, setDark] = useState(localStorage?.darkmode ? localStorage.darkmode : false);

 useEffect( () => {
    if( dark === true){
        theme.themeDispatch('on');
        localStorage.setItem('theme','dark');
        localStorage.setItem('darkmode', true);
    }
    if( dark === false){
        theme.themeDispatch('off');
        localStorage.setItem('theme','light');
        localStorage.setItem('darkmode', false);
    }
    console.log(localStorage?.darkmode)
 }, [dark] )


  return (
    <div className="flex items-center">
      <span className="mr-2">Dark Mode</span>
      <button
        className={"border-2 border-gray-500 rounded-lg px-2 mode-"+theme.themeMode}
        onClick={() => {
          setDark(!dark);
        }}>{dark===true ? 'ON' : 'OFF'}</button>
      </div>
  );
}


/*
<div>
      <Form>
        <Form.Check
          type="checkbox"
          id="default-checkbox"
          label="Dark Mode"
          onChange={(e) =>{
            setDark(!dark);
          }}
          defaultChecked={dark===true ? 1 : 0}
        />
      </Form>
    </div>
*/