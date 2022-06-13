import React, { useState } from "react";
import ChartSider from "./ChartSider";
import ChartViewer from "./ChartViewer";
import ChartCheckbox from "./ChartCheckbox";

export default function MainChart() {
  const ChartData = [
    {
      chartName: "Line Chart", id: 1, icon: "fa fa-line-chart",
      checkBoxData: [{ name: "LineChart-price", id: "1", checked: false }, { name: "LineChart-name", id: "2", checked: false },
      { name: "LineChart-rate", id: "3", checked: false }],
      data: []

    },
    {
      chartName: "Bar Chart", id: 2, icon: "fa fa-bar-chart",
      checkBoxData: [{ name: "BarChart-price", id: "1" }, { name: "BarChart-rate", id: "2" },
      { name: "BarChart-tag", id: "3" }],
      data: []

    },
    {
      chartName: "Pie Chart", id: 3, icon: "fa fa-pie-chart",
      checkBoxData: [{ name: "pieChart-volume", id: "1" }, { name: "pieChart-name", id: "2" },
      { name: "pieChart-rate", id: "3" }],
      data: []

    }]

  const [selectedChart, setSelectedChart] = useState({});
  const [checkBoxData, setcheckBoxData] = useState([]);
  const [checked, setChecked] = useState(false)
  function handleChartClick(data) {
    setcheckBoxData([])
    setChecked(false);
    setSelectedChart(data)
  }

  function handleCheckboxClicked(data, id) {
    console.log(data)
    selectedChart.data.map((item) => {
      console.log(item.id, id)
      if (item.id === id) {
        return
        setChecked(true);
      }
    })

    setcheckBoxData([...checkBoxData, data])
    // console.log(selectedChart);
    handleUpdateChartData()


  }
  function handleUpdateChartData() {
    if (checkBoxData.length > 0) {
      console.log("hello")
      setSelectedChart({
        ...selectedChart,
        data: [{
          name: "Page G",
          amt: 2100
        }]
      })
    }
  }
  // console.log(selectedChart)
  return (
    <div style={{ display: "flex" }}>
      <ChartSider ChartData={ChartData} handleChartClick={handleChartClick} />
      {selectedChart.id && (
        <>
          <ChartViewer selectedChart={selectedChart} />
          <ChartCheckbox selectedChart={selectedChart}
            checked={checked}
            handleCheckboxClicked={handleCheckboxClicked} />
        </>
      )}
    </div>
  )
}