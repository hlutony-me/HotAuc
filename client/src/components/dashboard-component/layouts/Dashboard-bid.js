import React from "react"
import { Link } from "react-router-dom"

function DashboardBid() {
	return (
		<div className="dashboard-bid">
			bid
			<Link to="/dashboard/bid/edit"> Go to edit</Link>
		</div>
	)
}

export default DashboardBid
