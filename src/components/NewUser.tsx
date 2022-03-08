import React from "react"
import {Link, useLocation} from "react-router-dom"

import {UserType} from "./Users"

const NewUser = () => {
	const [newUserData, setNewUserData] = React.useState<UserType>({
		id: 0,
		name: "",
		phone: "",
		email: "",
		website: "",
	})

	const location = useLocation()

	//location state
	const [locatioState, setLocationState] = React.useState({
		from: "",
		userName: "",
	})

	React.useEffect(() => {
		console.log("location from new user", location)
		if (location.state) {
			let _state = location.state as any
			setLocationState(_state)
		}
	}, [location])

	const handleChange = (e: any) => {
		const _newUserData = {
			...newUserData,
		} as any

		_newUserData[e.target.name] = e.target.value

		setNewUserData(_newUserData)
	}

	const handlePostData = () => {
		console.log("new user data", newUserData)

		//post request for API

		alert("Data posted successfully")
	}

	return (
		<div className="new-user">
			<h1>
				Add a new user from:{locatioState.from} by {locatioState.userName}
			</h1>
			<Link to="/users">Go back</Link>

			<div className="new-user__form">
				<div className="new-user__form-group">
					<label htmlFor="">Name</label>
					<input
						type="text"
						name="name"
						onChange={handleChange}
						value={newUserData.name}
						placeholder="John Doe"
					/>
				</div>
				<div className="new-user__form-group">
					<label htmlFor="">Phone</label>
					<input
						type="text"
						name="phone"
						onChange={handleChange}
						value={newUserData.phone}
						placeholder="0004172"
					/>
				</div>
				<div className="new-user__form-group">
					<label htmlFor="">Email</label>
					<input
						type="text"
						name="email"
						onChange={handleChange}
						value={newUserData.email}
						placeholder="abc@something.com"
					/>
				</div>
				<div className="new-user__form-group">
					<label htmlFor="">Website</label>
					<input
						type="text"
						name="website"
						onChange={handleChange}
						value={newUserData.website}
						placeholder="www.something.com"
					/>
				</div>
				<div className="new-user__form-group">
					<button onClick={handlePostData}>Save user data</button>
				</div>
			</div>
		</div>
	)
}

export default NewUser
