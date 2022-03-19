import React from "react"
import {v4 as uuidv4} from "uuid"

const DynamicForm = () => {
	const [inviteMembers, setInviteMembers] = React.useState([
		{
			name: "",
			email: "",
			id: uuidv4(),
		},
	])

	const [teamsMembers, setTeamMembers] = React.useState([
		{
			teamName: "",
			id: uuidv4(),
			members: [
				{
					name: "",
					email: "",
					id: uuidv4(),
				},
			],
		},
	])

	//add new form field for adding member
	const addMemberRow = () => {
		//Todo generate random id

		let _inviteMembers = [...inviteMembers]
		_inviteMembers.push({
			name: "",
			email: "",
			id: uuidv4(),
		})
		setInviteMembers(_inviteMembers)
	}

	//remove form field for adding member
	const removeMemberRow = (id: string) => {
		//Todo generate random id

		let _inviteMembers = [...inviteMembers]
		_inviteMembers = _inviteMembers.filter((member) => member.id !== id)
		setInviteMembers(_inviteMembers)
	}

	//handle email row change
	const handleMemberChange = (
		id: string,
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		//find the index to be changed
		const index = inviteMembers.findIndex((m) => m.id === id)

		let _inviteMembers = [...inviteMembers] as any
		_inviteMembers[index][event.target.name] = event.target.value
		setInviteMembers(_inviteMembers)
	}

	//handle invitation for members
	const handleInvitation = () => {
		console.table(inviteMembers)
	}

	//handle add team
	const handleAddTeam = () => {
		let _teamsMembers = [...teamsMembers]
		_teamsMembers.push({
			teamName: "",
			id: uuidv4(),
			members: [
				{
					name: "",
					email: "",
					id: uuidv4(),
				},
			],
		})
		setTeamMembers(_teamsMembers)
	}

	//handle new memeber inside selected team
	const addNewMemberInTeam = (id: string) => {
		const index = teamsMembers.findIndex((team) => team.id === id)
		let _teamsMembers = [...teamsMembers]
		_teamsMembers[index].members.push({
			name: "",
			email: "",
			id: uuidv4(),
		})
		setTeamMembers(_teamsMembers)
	}

	//handle team data
	const handleTeamData = (
		id: string,
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const index = teamsMembers.findIndex((team) => team.id === id)

		let _teamsMembers = [...teamsMembers] as any

		_teamsMembers[index][event.target.name] = event.target.value
		setTeamMembers(_teamsMembers)
	}
	//handle inner member data in team
	const handleMemberInTeamData = (
		teamId: string,
		memberId: string,
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const teamIndex = teamsMembers.findIndex((team) => team.id === teamId)
		let _teamsMembers = [...teamsMembers] as any
		const memberIndex = teamsMembers[teamIndex].members.findIndex(
			(m) => m.id === memberId,
		)
		_teamsMembers[teamIndex].members[memberIndex][event.target.name] =
			event.target.value
		setTeamMembers(_teamsMembers)
	}

	//save teams data
	const saveTeamData = () => {
		console.table(teamsMembers)
	}

	return (
		<div className="dynamic-form">
			<h2>Invite new members to your team</h2>

			<div className="invite-member">
				{inviteMembers.map((member) => (
					<div className="form-row" key={member.id}>
						<div className="input-group">
							<label htmlFor="name">Name</label>
							<input
								name="name"
								type="text"
								onChange={(e) => handleMemberChange(member.id, e)}
							/>
						</div>
						<div className="input-group">
							<label htmlFor="email">Email</label>
							<input
								name="email"
								type="text"
								onChange={(e) => handleMemberChange(member.id, e)}
							/>
						</div>
						{inviteMembers.length > 1 && (
							<button onClick={() => removeMemberRow(member.id)}>-</button>
						)}

						<button onClick={addMemberRow}>+</button>
					</div>
				))}

				<button className="btn-primary" onClick={handleInvitation}>
					{" "}
					Send invitation
				</button>
			</div>

			{/** 2nd level dynamic example */}

			<div className="row-section">
				{teamsMembers.map((team) => (
					<div className="row-section__inner" key={team.id}>
						<div className="input-group">
							<label htmlFor="team">Name of the new team</label>
							<input
								name="team"
								onChange={(e) => handleTeamData(team.id, e)}
								type="text"
							/>
							<h3>Members</h3>
							{team.members.map((member) => (
								<div className="form-row" key={member.id}>
									<div className="input-group">
										<label htmlFor="name">Name</label>
										<input
											name="name"
											type="text"
											onChange={(e) =>
												handleMemberInTeamData(team.id, member.id, e)
											}
										/>
									</div>
									<div className="input-group">
										<label htmlFor="email">Email</label>
										<input
											name="email"
											type="text"
											onChange={(e) =>
												handleMemberInTeamData(team.id, member.id, e)
											}
										/>
									</div>
									<button onClick={() => addNewMemberInTeam(team.id)}>+</button>
								</div>
							))}
						</div>
					</div>
				))}
				<button onClick={handleAddTeam}>Add new team</button> <br />
				<button className="btn-primary" onClick={saveTeamData}>
					Save team data
				</button>
			</div>
		</div>
	)
}

export default DynamicForm
