import React from "react"
import { Link } from "react-router-dom"
import ImageUpload from "./image-upload"
import { Button, ButtonGroup } from "react-bootstrap"
import "./edit-bid.css"

function EditBid() {
	return (
		<>
			<Button variant="primary">
				<Link to="/dashboard" className="btn-back">
					go back to dash board
				</Link>
			</Button>
			<div className="edit-bid">
				<ImageUpload></ImageUpload>
			</div>
		</>
	)
}

export default EditBid
