import React from "react"
import {Link, useLocation, useNavigate} from "react-router-dom"

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
						<Link
							to="/dashboard"
							className={
								location.pathname === "/dashboard" ? "sidebar_active" : ""
							}>
							Dashboard
						</Link>
						<Link
							to="/tabs"
							className={
								location.pathname.includes("/tabs") ? "sidebar_active" : ""
							}>
							Tabs demo
						</Link>
						<Link
							to="/dynamic-form"
							className={
								location.pathname === "/dynamic-form" ? "sidebar_active" : ""
							}>
							Dynamic Form
						</Link>
						<Link
							to="/settings"
							className={
								location.pathname === "/settings" ? "sidebar_active" : ""
							}>
							Settings
						</Link>
						<Link
							to="/users"
							className={
								location.pathname.includes("/users") ? "sidebar_active" : ""
							}>
							Users
						</Link>
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
