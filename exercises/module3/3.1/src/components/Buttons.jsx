// affichage d'un bouton en fonction de la valeur de la prop `type`

const Buttons = ({ type, onClick }) => {
    return (
        <button onClick={onClick}>
            {type}
        </button>
    );
};
export default Buttons;