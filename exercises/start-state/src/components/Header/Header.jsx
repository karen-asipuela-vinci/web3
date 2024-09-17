import { useState } from "react"; // permet aux comporsants fonctionnels
// de gérer leur propre état sans avoir à utiliser une classe
import "./Header.css";


const Header = ({ title, version }) => {
  const [menuPrinted, setMenuPrinted] = useState(false);

  const handleClick = () => {
    console.log(`value of menuPrinted before click: ${menuPrinted}`);
    setMenuPrinted(!menuPrinted);
  }

  return (
    <header onClick={handleClick}>
      <h1 className="animate__animated animate__bounce">
        {menuPrinted ? `${title}... and rarely do we hate it!` : title}
      </h1>
      <h4>Version: {version}</h4>
    </header>
  );
};


  export default Header;