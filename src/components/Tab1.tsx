import React from "react"
import {Link} from "react-router-dom"

const Tab1 = () => {
	return (
		<div className="tab1">
			<h2>Welcome to Tab1 page</h2>
			<Link to="/users/new" state={{from: "tab 1", userName: "Youtube"}}>
				Add a new user
			</Link>
		</div>
	)
}

export default Tab1
