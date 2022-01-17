import {Link} from "react-router-dom";
import './menu_item.css'
function MenuItem(props) {
  return (
    <li className='menu-item'>
      <Link to={props.to}>
        {props.text}
      </Link>
    </li>
  )
}

export default MenuItem