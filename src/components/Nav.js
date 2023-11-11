import{FiHeart} from "react-icons/fi"
import {AiOutlineUserAdd, AiOutlineShoppingCart} from 'react-icons/ai'
export default function Nav({handleInputChange}) {
  return (
   <nav>
    <h1>🛒</h1>
    <div className="nav-container">
        <input onChange={handleInputChange} type="text" className="search-input" placeholder="Search..." />
    </div>
    <div className="profile-container">
        <a href="#">
        <FiHeart className="nav-icons"/>
        </a>
        <a href="#">
            <AiOutlineShoppingCart className="nav-icons"/>
        </a>
        <a href="#">
            <AiOutlineUserAdd className="nav-icons"/>
        </a>
    </div>
   </nav>
  )
}
