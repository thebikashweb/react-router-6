import React from 'react'
import {
	useParams,
	Link,
} from 'react-router-dom'

import { UserType } from './Users'

const SingleUser = () => {
	const params = useParams()

	const [user, setUser] =
		React.useState<UserType>()

	React.useEffect(() => {
		const singleUserApiUrl = `https://jsonplaceholder.typicode.com/users/${params.userId}`
		//fetch users from json placeholder
		fetch(singleUserApiUrl)
			.then((response) =>
				response.json(),
			)
			.then((json) => setUser(json))
	}, [params])

	return (
		<>
			<Link to='/users'>Go back</Link>
			{user && (
				<div
					className='users__card'
					key={user.id}>
					<p>
						Name:
						<span className='normal'>
							{user.name}
						</span>
					</p>

					<p>
						Email:
						<span className='normal'>
							{user.email}
						</span>
					</p>
					<p>
						Phone:
						<span className='normal'>
							{user.phone}
						</span>
					</p>
					<p>
						Website:
						<span className='normal'>
							{user.website}
						</span>
					</p>
				</div>
			)}
		</>
	)
}

export default SingleUser
