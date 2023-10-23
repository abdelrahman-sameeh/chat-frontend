import React from 'react'
import DropDownComp from '../Home/DropDownComp'
import { Link } from 'react-router-dom'

const HeaderComponent = ({user}) => {
  return (
    <div className="d-flex justify-content-between align-items-start py-3">
        <div className="rtl position-relative me-0">
          <span className="notification"></span>
          <div
            className="toggle-drop-down fs-4 pointer"
            style={{ userSelect: "none", lineHeight: "50%" }}
          >
            ...
          </div>
          <DropDownComp />
        </div>
        <Link to="/">
          <div className="user-image d-flex align-items-center gap-1">
            <div className="name"> {user && user.name} </div>
            <img
              src={user.image && user.image}
              style={{ width: "40px", height: "40px" }}
              alt=""
              className="bg-light"
            />
          </div>
        </Link>
      </div>
  )
}

export default HeaderComponent