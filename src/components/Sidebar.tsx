import React from "react"
import {Link, useLocation, useNavigate} from "react-router-dom"

import {navigationItems} from "../config"

const Sidebar = () => {
	const useAuth = () => {
		const user = localStorage.getItem("user")
		if (user) {
			return true
		} else {
			return false
		}
	}
	const user = useAuth()
	const location = useLocation()
	const navigation = useNavigate()

	const logout = () => {
		localStorage.removeItem("user")
		navigation("/login")
	}

	return (
		<div className="sidebar">
			<div className="sidebar__items">
				{user && (
					<>
						{navigationItems.sidebar.map((item) => (
							<Link
								key={item.text}
								to={item.to}
								className={
									location.pathname.includes(item.to) ? "sidebar_active" : ""
								}>
								{item.name}
							</Link>
						))}
						{location.pathname !== "/login" && (
							<button onClick={logout}>logout</button>
						)}
					</>
				)}
				{!user && (
					<Link
						to="/login"
						className={location.pathname === "/login" ? "sidebar_active" : ""}>
						Login
					</Link>
				)}
			</div>
		</div>
	)
}

export default Sidebar
