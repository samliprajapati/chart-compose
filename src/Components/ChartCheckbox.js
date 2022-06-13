import React from "react";

function ChartCheckbox(props) {
  // console.log(props)

  return (


    <div style={{ border: "2px solid red", padding: "20px", margin: "20px" }}>
      {props.selectedChart.checkBoxData && props.selectedChart.checkBoxData.map((item, key) => {
        return (
          <div>
            <input type="checkbox" id={`${item.id}`} checked={props.checked}
              onChange={() => { props.handleCheckboxClicked(item.name, item.id) }} />
            <label> {`${item.name} - ${item.id}`}</label>
          </div>
        )
      })}
    </div>

  )
}

export default ChartCheckbox