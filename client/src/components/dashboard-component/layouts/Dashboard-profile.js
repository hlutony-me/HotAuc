import React from "react"
import { Link } from "react-router-dom"

function DashboardProfile() {
	return (
		<div className="dashboard-profile">
			profile
			<Link to="/dashboard/profile/edit"> Go to edit</Link>
		</div>
	)
}

export default DashboardProfile
