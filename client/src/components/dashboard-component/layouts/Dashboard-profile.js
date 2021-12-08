import React, { useSelector } from "react"
import { Link } from "react-router-dom"

function DashboardProfile() {

	return (
		<div className="dashboard-profile">
			<h2>Profile</h2>
			<Link to="/dashboard/profile/edit"> Go to edit</Link>
		</div>
	)
}

export default DashboardProfile
