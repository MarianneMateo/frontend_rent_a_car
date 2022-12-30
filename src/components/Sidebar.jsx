import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoPerson, IoHome, IoLogOut, IoCarSport, IoCalendarNumber } from "react-icons/io5";

export const Sidebar = () => {
  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/vehicles"}>
              <IoCarSport /> Vehicles
            </NavLink>
          </li>
          <li>
            <NavLink to={"/bookings"}>
              <IoCalendarNumber /> Bookings
            </NavLink>
          </li>
        </ul>
        {/* {user && user.role === "admin" && ( */}
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
            </ul>
          </div>
        {/* )} */}

        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button /* onClick={logout} */ className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  )
}
