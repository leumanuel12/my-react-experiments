import { useContext } from "react";
import { ThemeContext } from "../App";

export default function Shimer() {

    const theme = useContext(ThemeContext);

    return <div className="shimmer-wrapper">
        <div className={"shimmer "+theme.themeMode}/>
    </div>
    
};
