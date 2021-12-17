import { useState } from "react"
import storage from "../../firebase/config"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { useSelector, useDispatch } from "react-redux"
import {
	InputGroup,
	FormControl,
	Button,
	Col,
	Form,
	Row
} from "react-bootstrap"
import "./image-upload.css"
import axios from "axios"
import { SERVER_URL } from "../../ConstantValue"
import { useNavigate } from "react-router-dom"

function ImageUpload() {
	const userId = useSelector((state) => state.userInfor.user._id)

	const token = useSelector((state) => state.userInfor.token)

	const [images, setImage] = useState([])

	const [imageUri, setImageUri] = useState("")

	const [imageUploaded, setImageUploaded] = useState(false)

	const navigate = useNavigate()

	const [item, setItem] = useState({
		title: "",
		description: "",
		color: "",
		year: "",
		seller: userId,
		endTime: "",
		startingPrice: "",
		currentPrice:"",
		images: []
	})

	const onInputChange = (e) => {
		setItem({ ...item, [e.target.name]: e.target.value })
	}

	const handlePostItem = async (e) => {
		e.preventDefault()
		if (imageUri.length == images.length) {
			setImageUploaded(true)
		}

		//console.log(imageUri)
		console.log(userId)

		const imageObj = { images: imageUri }
		console.log(imageObj)
		const newItem = {
			title: item.title,
			description: item.description,
			color: item.color,
			year: item.year,
			seller: userId,
			endTime: item.endTime,
			startingPrice: item.startingPrice,
			currentPrice: item.startingPrice,
			images: [{ uri:imageUri }]
		}
		setItem(newItem)
		//setItem({ ...item ,currentPrice:item.startingPrice})
		console.log(item)

		//Post item
		try {
			//Set request header
			const config = {
				headers: {
					"Content-Type": "Application/json"
				}
			}
			//Set request body
			console.log(userId)
			const body = JSON.stringify(item)
			console.log(body)
			//Make request
			const res = await axios.post(`${SERVER_URL}item`, body, config)
			navigate("/dashboard")

			console.log(res.data)
		} catch (error) {
			console.log(error)
		}
	}

	const loadImage = (newImage) => {
		setImage([...images, newImage])
	}

	const upload = async () => {
		if (images != null) {
			console.log(images.length)
			images.forEach((image) => {
				const imageRef = ref(storage, `auction/${image.name}`)
				// 'file' comes from the Blob or File API
				const snapshot = uploadBytes(imageRef, image).then((snapshot) => {
					getDownloadURL(imageRef).then((uri) => {
						const newUri = { uri }
						setImageUri( uri)
						console.log(imageUri)
						setImageUploaded(true)
					})
				})
			})

			// const imageRef = ref(storage, `auction/${images[0].name}`)

			// const snapshot = await uploadBytes(imageRef, images[0])
			// const url = await getDownloadURL(imageRef)
			// console.log(url)

			// imagesRef.put(image).on("state_changed", alert("success"), alert)
		}
	}

	return (
		<div className="container">
			<h1 className="large text-primary">Post a new auction item</h1>
			<div className="image-container">
				{images != null &&
					images.map((image) => {
						return (
							<img
								key={image.name}
								src={URL.createObjectURL(image)}
								alt="..."
								className="img-thumbnail rounded float-left"
							></img>
						)
					})}
			</div>
			<div className="image-upload">
				<div class="input-group mb-3">
					<input
						type="file"
						className="form-control"
						id="inputGroupFile02"
						onChange={(e) => {
							loadImage(e.target.files[0])
						}}
					/>
					<button className="input-group-text" onClick={upload}>
						Upload
					</button>
				</div>
			</div>
			<div>
				<Form onSubmit={(e) => handlePostItem(e)}>
					<Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
						<Form.Label column sm={2}>
							Title
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								name="title"
								type="text"
								placeholder="title"
								value={item.title}
								onChange={(e) => onInputChange(e)}
							/>
						</Col>
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Description</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							name="description"
							value={item.description}
							onChange={(e) => onInputChange(e)}
						/>
					</Form.Group>

					<Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
						<Form.Label column sm={2}>
							Year
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								type="text"
								placeholder="year"
								name="year"
								value={item.year}
								onChange={(e) => onInputChange(e)}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
						<Form.Label column sm={2}>
							Color
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								type="text"
								placeholder="color"
								name="color"
								value={item.color}
								onChange={(e) => onInputChange(e)}
							/>
						</Col>
					</Form.Group>

					<Form.Group as={Row} className="mb-3" controlId="formHorizontalPrice">
						<Form.Label column sm={2}>
							Starting Price
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								name="startingPrice"
								type="number"
								placeholder="Starting Price"
								value={item.startingPrice}
								onChange={(e) => onInputChange(e)}
							/>
						</Col>
					</Form.Group>

					<Form.Group
						as={Row}
						className="mb-3"
						controlId="formHorizontalEndTime"
					>
						<Form.Label column sm={2}>
							End at
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								type="date"
								placeholder="endTime"
								name="endTime"
								value={item.yeaendTimer}
								onChange={(e) => onInputChange(e)}
							/>
						</Col>
					</Form.Group>

					<Form.Group as={Row} className="mb-3">
						<Col sm={{ span: 10, offset: 2 }}>
							<Button type="submit">Post</Button>
						</Col>
					</Form.Group>
				</Form>
			</div>
		</div>
	)
}

export default ImageUpload
