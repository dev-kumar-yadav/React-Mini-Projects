import logo from '../../assets/logo.png';
import style from './Navigation.module.css'
const Navigation = () => {
  console.log(style);
  return (
    <nav className = {`${style.navigation} container`}>
        <div className="logo">
        <img src={logo} alt="do some coding logo" />

        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
};

export default Navigation