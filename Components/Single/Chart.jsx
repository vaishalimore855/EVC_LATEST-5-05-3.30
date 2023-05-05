import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
//dev: TokenomicsChart Component
function TokenomicsChart() {
  //dev: Chart Data in array of object format(json)
  const [Area, setArea] = useState({
    series: [9.1, 20, 20, 20, 5, 8, 5,22],
    options: {
      colors: [
        "black",
        "#AECCFE",
        "#8DCED8",
        "#BDEEAE",
        "#FFABAB",
        "#FFF2CE",
        "#F66AA2",
        "#CFE0E3",
      ],
      chart: {
        width: 380,
      },
      labels: [
        "Max Supply",
        "NFT Rewards",
        "Staking rewards/Farming",
        "Ecosystem/Products",
        "Tech Team",
        "Marketing",
        "Partnerships/Exchange Listings",
        "LP",
      ],
      
      stroke: {
        show: false,
      },
      
      legend: {
        show: false,
        position: "bottom",
        
      },
     
    },
  });

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="mb-5 mb-lg-0">
            {/*dev: Use ReactApexChart   */}
            <ReactApexChart
              options={Area.options}
              series={Area.series}
              type="pie"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <ul className="tokenomics-legends">
            {Area.series.map((el, i) => {
              return (
                <li
                  className="d-flex align-items-center gap-4"
                  key={i}
                  style={{ fontSize: "22px" }}
                >
                  <span>
                    {Area.options.labels[i]}&nbsp;&nbsp;&nbsp; - &nbsp;
                    {el + "%"}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TokenomicsChart;
