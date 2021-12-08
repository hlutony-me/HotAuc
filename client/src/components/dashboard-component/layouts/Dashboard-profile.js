import React, { useSelector } from "react"
import { Link } from "react-router-dom"

function DashboardProfile() {
	const user = useSelector((state) => state.userInfor.user)

	return (
		<div className="dashboard-profile">
			<h2>Profile</h2>
			<p>Name: {user.name}</p>
			<p>Password: {user.password}</p>
			<Link to="/dashboard/profile/edit"> Go to edit</Link>
		</div>
	)
}

export default DashboardProfile
