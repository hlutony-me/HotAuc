import React from 'react'
import { Link } from 'react-router-dom'
import "./Edit-Profile.css"

function EditProfile() {
    return (
		<div class="boxProfile">
		<form action="">
		<img id="profileImage" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt ="profile img" width="30px" height="30px"/>
		<input type="text" id="userName" placeholder="User Name" name="" />
		<input type="Email" id="Email" placeholder="Email ID" name="" />
		<input type="password" id="Password" placeholder="Password" name="" />

		<button class="buttonEdit" id="cancelBtn" type="reset">CANCEL</button>

		<button class="buttonEdit">DONE</button>
		</form>
		</div>
		)
}

export default EditProfile
