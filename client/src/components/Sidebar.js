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


  export const brandOptions = [
	{ value: "mazda", label: "mazda" },
	{ value: "ford", label: "Ford" },
	{ value: "porsche", label: "Porsche" },
	{ value: "BMW", label: "BMW" },
	{ value: "silver", label: "Silver" }
  ];

  export const yearOptions = [
	{ value: "1954", label: "1954" },
	{ value: "2000", label: "2000" },
	{ value: "2010", label: "2010" },
	{ value: "2012", label: "2012" },
	{ value: "2016", label: "2016" }
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
  options={brandOptions}
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
  options={yearOptions}
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
