import React from 'react'
import { Link } from 'react-router-dom'

function EditProfile() {
    return (
			<div className="edit-profile">
				edit profile
            <Link to="/dashboard">go back to dash board</Link>
			</div>
		)
}

export default EditProfile
