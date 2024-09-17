import logoHE from './logoHE.png'

const Header = ({ course }) => {
    return (
        <>
        <div>
            <img src={logoHE}></img>
            <h1> {course} </h1>
        </div>
        </>
    )
}

export default Header