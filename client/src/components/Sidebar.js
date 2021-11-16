import React from "react"
import "./Sidebar.css"
import { components } from "react-select";
import Select from 'react-select';

const Option = (props) => {
	return (
	  <div>
		<components.Option {...props}>
		  <input
			type="checkbox"
			checked={props.isSelected}
			onChange={() => null}
		  />{" "}
		  <label>{props.label}</label>
		</components.Option>
	  </div>
	);
  };


  export const colourOptions = [
	{ value: "ocean1", label: "Ocean" },
	{ value: "blue", label: "Blue" },
	{ value: "purple", label: "Purple" },
	{ value: "red", label: "Red" },
	{ value: "orange", label: "Orange" },
	{ value: "yellow", label: "Yellow" },
	{ value: "green", label: "Green" },
	{ value: "forest", label: "Forest" },
	{ value: "slate", label: "Slate" },
	{ value: "silver", label: "Silver" }
  ];

  const handleChange = (selected) => {
    this.setState({
      optionSelected: selected
    });
  };


function Sidebar() {
	return (
	<div className="sidebar">
		
<Select
  options={colourOptions}
  isMulti
  closeMenuOnSelect={false}
  hideSelectedOptions={false}
  components={{
    Option
  }}
  onChange={handleChange}
  allowSelectAll={true}
  value={"ddd"}
  placeholder ={"Brand"}
/>

<Select
  options={colourOptions}
  isMulti
  closeMenuOnSelect={false}
  hideSelectedOptions={false}
  components={{
    Option
  }}
  onChange={handleChange}
  allowSelectAll={true}
  value={"ddd"}
  placeholder ={"Year of manufacturing"}
/>

</div>);

}

export default Sidebar
