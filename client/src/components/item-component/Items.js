import React, { Component } from "react";
import "./Items.css";
import axios from 'axios';

const Item = props => (
  <div className="card">
  
  <div className="card-body">
  {props.item.images.map(prop=><img src={prop.uri} alt ="hotwheels image"/>)}
  <p> </p>
  <h2>{props.item.title}</h2>
    <p>Color: {props.item.color}</p>
    <p>Description: {props.item.description}</p>
    <p>Year: {props.item.year}</p>
    <p>End Time: {props.item.endTime}</p>
    </div>
    </div>
)

export default class Items extends Component{
  constructor(props) {
    super(props);
    this.state = {items: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/item/all')
      .then(response => {
        this.setState({ items: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  itemList() {
    return this.state.items.map(currentitem => {
      return <Item item={currentitem}/>;
    })
  }

  render(){
  return (
    <div className="cards">
        { this.itemList() }
  </div>
  )
  }
}


