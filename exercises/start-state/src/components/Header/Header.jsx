import "./Header.css";
import { useState } from "react";

  
  const Header = ({title, version}) => {
    // const { title, version } = props; ---> peut direct être fait dans les paramètres de la fonction

    // utilisation de useState
    const [menuPrinted, setMenuPrinted] = useState(false);

    // utilisation d'une fonction 
    const handleClick = () => {
      console.log("value of menuPrinted before: ", menuPrinted);
      setMenuPrinted(!menuPrinted);
    }
    
    // !! pas de () après handleClick dans le JSX, sinon la fonction est exécutée à chaque rendu
    return (
      <header onClick={handleClick}>
        <h1 className="animate__animated animate__bounce">{menuPrinted ? `${title}... and rarely do we hate it!` : title}</h1>
        <h4>Version: {version}</h4>
      </header>
    );
  };

  export default Header;