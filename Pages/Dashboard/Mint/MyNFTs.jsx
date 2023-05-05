// import React, { useState, useEffect } from "react";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
// import { Route, Routes } from "react-router-dom";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import { Button } from "@mui/material";
// import level1 from "../Mint/Images/level1.png";
// import level2 from "../Mint/Images/level2.png";
// import level3 from "../Mint/Images/level3.png";
// import level4 from "../Mint/Images/level4.png";
// import level5 from "../Mint/Images/level5.png";
// import level6 from "../Mint/Images/level6.png";
// import level7 from "../Mint/Images/level7.png";
// import level8 from "../Mint/Images/level8.png";
// import { Link } from "react-router-dom";
// import { ethers } from "ethers";
// import { styled } from "@mui/material/styles";
// import EvcChart from "../Charts/EvcChart";
// import {
//   Box,
//   Card,
//   CardBody,
//   CardFooter,
//   CardHeader,
//   Flex,
//   Grid,
//   Heading,
//   HStack,
//   Image,
//   Input,
//   Progress,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import CircularProgress, {
//   circularProgressClasses,
// } from "@mui/material/CircularProgress";
// import ReactApexChart from "react-apexcharts";
// import LinearProgress, {
//   linearProgressClasses,
// } from "@mui/material/LinearProgress";
// import StakeNft from "./StakeNft";
// import { getWalletOfOwner } from "../../../ContractAction/EVCNFTContractAction";
// import {
//   getTokensOfStaker,
//   setClaimReward,
//   getUnClaimableReward,
//   getCurrentAPYOfPlan,
//   getNextClaimTime,
// } from "../../../ContractAction/EVCNFTStakeContractAction";
// import {
//   getTotalSupplyL1,
//   getTotalSupplyL2,
//   getTotalSupplyL3,
//   getTotalSupplyL4,
//   getTotalSupplyL5,
//   getTotalSupplyL6,
//   getTotalSupplyL7,
//   getTotalSupplyL8,
//   getLevelNFT1,
//   getLevelNFT2,
//   getLevelNFT3,
//   getLevelNFT4,
//   getLevelNFT5,
//   getLevelNFT6,
//   getLevelNFT7,
//   getLevelNFT8,
// } from "../../../ContractAction/EVCNFTContractAction";

// import {
//   setMintL1,
//   setMintL2,
//   setMintL3,
//   setMintL4,
//   setMintL5,
//   setMintL6,
//   setMintL7,
//   setMintL8,
// } from "../../../ContractAction/EVCNFTContractAction";

// import {
//   setStakeNFT,
//   setWithdrawNFT,
// } from "../../../ContractAction/EVCNFTStakeContractAction";
// import {
//   getIsApprovedForAll,
//   setNFTApprovalForAll,
// } from "../../../ContractAction/EVCNFTContractAction";
// import { wrap } from "framer-motion";

// var rewardobj = {};
// var claimTimeobj = {};
// //dev: Start Mint Page
// function MintNew({ title }) {
//   //dev: Stake NFTs
//   const [walletOwner, SetWalletOwner] = useState();
//   console.log("walletOwner...................", walletOwner);

//   //dev: Unstake NFTs
//   const [stakeOfOwnerNFTIDs, setStakeOfOwnerNFTIDs] = useState();
//   console.log("stakeOfOwnerNFTIDs......................", stakeOfOwnerNFTIDs);

//   //dev: Img URL
//   const imgUrl =
//     "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/";

//   const [isApproved, setApproved] = useState();
//   console.log("isApproved", isApproved);

//   const [stakeNFT, setstakeNFT] = useState();

//   const [apy, setApy] = useState();
//   //dev: Get the Wallet Address using Local Storage
//   const newAddress = window.localStorage.getItem("connectedAccount");

//   useEffect(() => {
//     document.title = title ? title : "EVC Avatars | Mint";
//     document.querySelector(".page-title").innerText = "Mint";
//   }, []);

//   //dev: use effect for total supplys
//   const [totalSupplyL1, setTotalSupplyL1] = useState();
//   const [totalSupplyL2, setTotalSupplyL2] = useState();
//   const [totalSupplyL3, setTotalSupplyL3] = useState();
//   const [totalSupplyL4, setTotalSupplyL4] = useState();
//   const [totalSupplyL5, setTotalSupplyL5] = useState();
//   const [totalSupplyL6, setTotalSupplyL6] = useState();
//   const [totalSupplyL7, setTotalSupplyL7] = useState();
//   const [totalSupplyL8, setTotalSupplyL8] = useState();

//   //dev: use effect for Level of NFTs
//   const [levelNFT1, setLevelNFT1] = useState();
//   const [levelNFT2, setLevelNFT2] = useState();
//   const [levelNFT3, setLevelNFT3] = useState();
//   const [levelNFT4, setLevelNFT4] = useState();
//   const [levelNFT5, setLevelNFT5] = useState();
//   const [levelNFT6, setLevelNFT6] = useState();
//   const [levelNFT7, setLevelNFT7] = useState();
//   const [levelNFT8, setLevelNFT8] = useState();

//   const EvcChart = {
//     series: [
//       {
//         name: "Claim Perc",
//         data: [
//           44, 55, 57, 56, 61, 58, 63, 60, 66, 40, 44, 55, 57, 44, 55, 57, 56,
//           61, 58, 63, 60, 66, 40, 44, 55, 57, 44, 55, 57, 56, 61, 58, 63,
//         ],
//       },
//       {
//         name: "Total Perc",
//         data: [
//           3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54,
//           57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99,
//         ],
//       },
//     ],
//     options: {
//       colors: ["#306FFF", "#30C9C9"],
//       chart: {
//         height: 250,
//         type: "bar",
//         background: "rgba(0, 0, 0, 0)",
//         toolbar: {
//           show: false,
//         },
//       },
//       xaxis: {
//         axisBorder: {
//           show: false,
//         },
//         labels: {
//           show: true,
//         },
//         axisTicks: {
//           show: false,
//         },
//         categories: [
//           "1",
//           "2",
//           "3",
//           "4",
//           "5",
//           "6",
//           "7",
//           "8",
//           "9",
//           "10",
//           "11",
//           "12",
//           "13",
//           "14",
//           "15",
//           "16",
//           "17",
//           "18",
//           "19",
//           "20",
//           "21",
//           "22",
//           "23",
//           "24",
//           "25",
//           "26",
//           "27",
//           "28",
//           "29",
//           "30",
//           "31",
//           "32",
//           "33",
//         ],
//       },
//       yaxis: {
//         categories: [
//           "1",
//           "2",
//           "3",
//           "4",
//           "5",
//           "6",
//           "7",
//           "8",
//           "9",
//           "10",
//           "11",
//           "12",
//           "13",
//           "14",
//           "15",
//           "16",
//           "17",
//           "18",
//           "19",
//           "20",
//           "21",
//           "22",
//           "23",
//           "24",
//           "25",
//           "26",
//           "27",
//           "28",
//           "29",
//           "30",
//           "31",
//           "32",
//           "33",
//         ],
//         labels: {
//           formatter: function (value) {
//             return value.toFixed(2);
//           },
//         },
//       },
//       grid: {
//         show: true,
//         borderColor: "#1F1F2B",
//         strokeDashArray: 3,
//         xaxis: {
//           lines: {
//             show: false,
//           },
//         },
//       },
//       tooltip: {
//         show: false,
//       },
//       theme: {
//         mode: "dark",
//         monochrome: {
//           enabled: false,
//           color: "#fff",
//           shadeTo: "dark",
//           shadeIntensity: 0,
//         },
//       },
//       legend: {
//         show: false,
//       },
//       stroke: {
//         show: true,
//         curve: "smooth",
//         lineCap: "butt",
//         colors: ["transparent"],
//         width: 0,
//         dashArray: 0,
//       },
//       dataLabels: {
//         enabled: false,
//       },
//     },
//   };
//   useEffect(() => {
//     //dev: Get the Total Supply of Data
//     const getTotalSupplyData = async () => {
//       getTotalSupplyL1();
//       const TotalSupplyL1 = await getTotalSupplyL1();
//       setTotalSupplyL1(TotalSupplyL1);

//       getTotalSupplyL2();
//       const TotalSupplyL2 = await getTotalSupplyL2();
//       setTotalSupplyL2(TotalSupplyL2);

//       getTotalSupplyL3();
//       const TotalSupplyL3 = await getTotalSupplyL3();
//       setTotalSupplyL3(TotalSupplyL3);

//       getTotalSupplyL4();
//       const TotalSupplyL4 = await getTotalSupplyL4();
//       setTotalSupplyL4(TotalSupplyL4);

//       getTotalSupplyL5();
//       const TotalSupplyL5 = await getTotalSupplyL5();
//       setTotalSupplyL5(TotalSupplyL5);

//       getTotalSupplyL6();
//       const TotalSupplyL6 = await getTotalSupplyL6();
//       setTotalSupplyL6(TotalSupplyL6);

//       getTotalSupplyL7();
//       const TotalSupplyL7 = await getTotalSupplyL7();
//       setTotalSupplyL7(TotalSupplyL7);

//       getTotalSupplyL8();
//       const TotalSupplyL8 = await getTotalSupplyL8();
//       setTotalSupplyL8(TotalSupplyL8);
//     };
//     getTotalSupplyData();
//   }, []);
//   useEffect(() => {
//     //dev: Get the  NFT Staking Data
//     const getNFTStakingData = async () => {
//       const WalletOfOwner = await getWalletOfOwner();
//       const StakeOfOwnerNFTIDs = await getTokensOfStaker();
//       const approved = await getIsApprovedForAll();
//       //const claimReward = await getUnClaimableReward();
//       const apyInfo = await getCurrentAPYOfPlan();
//       SetWalletOwner(WalletOfOwner);
//       setStakeOfOwnerNFTIDs(StakeOfOwnerNFTIDs);
//       setApproved(approved);
//       // setReward(claimReward);
//       setApy(apyInfo);
//     };
//     getNFTStakingData();
//   }, []);

//   useEffect(() => {
//     //dev: Get the Level of  Data
//     const getLevelData = async () => {
//       getLevelNFT1();
//       const LevelNFT1 = await getLevelNFT1();
//       setLevelNFT1(LevelNFT1);

//       getLevelNFT2();
//       const LevelNFT2 = await getLevelNFT2();
//       setLevelNFT2(LevelNFT2);

//       getLevelNFT3();
//       const LevelNFT3 = await getLevelNFT3();
//       setLevelNFT3(LevelNFT3);

//       getLevelNFT4();
//       const LevelNFT4 = await getLevelNFT4();
//       setLevelNFT4(LevelNFT4);

//       getLevelNFT5();
//       const LevelNFT5 = await getLevelNFT5();
//       setLevelNFT5(LevelNFT5);

//       getLevelNFT6();
//       const LevelNFT6 = await getLevelNFT6();
//       setLevelNFT6(LevelNFT6);

//       getLevelNFT7();
//       const LevelNFT7 = await getLevelNFT7();
//       setLevelNFT7(LevelNFT7);

//       getLevelNFT8();
//       const LevelNFT8 = await getLevelNFT8();
//       setLevelNFT8(LevelNFT8);
//     };
//     getLevelData();
//   }, []);

//   //dev: Define  Next Claim Time
//   const nextClaimTime = window.localStorage.getItem("nextClaim ");
//   console.log("nextClaimTime", nextClaimTime);

//   //dev: Show the Current Time
//   const start = Date.now();
//   let epoch = start / 1000;
//   let myepoch = epoch.toFixed(0);
//   console.log("epoch...", myepoch);

//   useEffect(() => {
//     //dev: get the  Reward
//     const getReward = async () => {
//       if (typeof stakeOfOwnerNFTIDs !== "undefined") {
//         for (let i = 0; i < stakeOfOwnerNFTIDs.length; i++) {
//           const rewardinfo = await getUnClaimableReward(stakeOfOwnerNFTIDs[i]);
//           rewardobj[stakeOfOwnerNFTIDs[i]] = (Number(rewardinfo)).toLocaleString(undefined,{maximumFractionDigits:2});
//         }
//       }
//     };
//     getReward();
//     console.log("rewardobj", rewardobj);

//     //dev: Get the Claim Time
//     const getClaimTime = async () => {
//       if (typeof stakeOfOwnerNFTIDs !== "undefined") {
//         for (let i = 0; i < stakeOfOwnerNFTIDs.length; i++) {
//           const timeInfo = await getNextClaimTime(stakeOfOwnerNFTIDs[i]);
//           claimTimeobj[stakeOfOwnerNFTIDs[i]] = timeInfo;
//         }
//       }
//     };
//     getClaimTime();
//     console.log("claimTimeobj", claimTimeobj);
//   }, [stakeOfOwnerNFTIDs]);

//   const [stake, setStake] = useState(false);

//   const Click = () => {
//     setStake(true);
//   };

//   const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
//     height: 10,
//     borderRadius: 5,
//     [`&.${linearProgressClasses.colorPrimary}`]: {
//       backgroundColor:
//         theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
//     },
//     [`& .${linearProgressClasses.bar}`]: {
//       borderRadius: 5,
//       backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
//     },
//   }));

//   const getApproved = async () => {
//     setNFTApprovalForAll();
//   };

//   return (
//     <>
//       <div>
//         {stake ? (
//           // dev: Render the StakeNft Component
//           <StakeNft />
//         ) : (
//           <div className="dashboard-wrap">
//             <Breadcrumb>
//               <li className="breadcrumb-item">
//                 <Link to="/">HOME</Link>
//               </li>
//               <Breadcrumb.Item active>My NFTs</Breadcrumb.Item>
//             </Breadcrumb>
//             <div className="dash-content-area">
//               <div className="row">
//                 <div className="col">
//                   <h2 style={{ fontWeight: "bold" }}>EVC NFT</h2>
//                 </div>
//               </div>
//             </div>

//             <div className="dash-global-wrap" style={{ marginLeft: "12%" }}>
//               <h3 style={{ marginLeft: "38%" }}>Stake</h3>
//               {/* <h5 style={{ marginLeft: "80%" }}>APR: {apy}%</h5> */}
//               <div></div>
//               <div className="row g-5">
//                 {walletOwner &&
//                   walletOwner.map((data1, index) => (
//                     <div className="col-md-5 col-xl-5" key={index}>
//                       <div
//                         className="dash-card style-3 position-relative"
//                         style={{
//                           boxShadow: "rgba(57, 57, 57, 0.96) 0px 22px 70px 4px",
//                         }}
//                       >
//                         <h6 style={{ textAlign: "center" }}>
//                           Level{" "}
//                           {data1 >= 1 && data1 <= 10
//                             ? "1"
//                             : data1 >= 21 && data1 <= 30
//                             ? "2"
//                             : data1 >= 31 && data1 <= 40
//                             ? "3"
//                             : data1 >= 41 && data1 <= 50
//                             ? "4"
//                             : data1 >= 51 && data1 <= 60
//                             ? "5"
//                             : data1 >= 61 && data1 <= 70
//                             ? "1"
//                             : data1 >= 71 && data1 <= 80
//                             ? "1"
//                             : data1 >= 81 && data1 <= 90
//                             ? "1"
//                             : null}
//                         </h6>
//                         <hr></hr>
//                         <div>
//                           <img
//                             src={`${imgUrl}${data1}.png`}
//                             alt=""
//                             className="img-fluid"
//                             style={{
//                               height: "360px",
//                               width: "100%",
//                               borderRadius: "10px",
//                             }}
//                           />
//                           <br></br>
//                           <br></br>

//                           {isApproved === true ? (
//                             // dev: Stake Button
//                             <Button
//                               style={{
//                                 width: "35%",
//                                 height: "40px",
//                                 marginLeft: "40%",
//                                 marginTop: "2%",
//                               }}
//                               onClick={() => setStakeNFT(data1)}
//                               variant="contained"
//                             >
//                               Stake
//                             </Button>
//                           ) : (
//                             // dev:  Approve Button
//                             <Button
//                               onClick={() => getApproved()}
//                               variant="contained"
//                               style={{
//                                 width: "35%",
//                                 height: "40px",
//                                 marginLeft: "40%",
//                                 marginTop: "2%",
//                               }}
//                             >
//                               Approve
//                             </Button>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//               <hr></hr>
//               <h3 style={{ marginLeft: "38%" }}>Unstake</h3>
//               <div className="row g-5">
//                 {stakeOfOwnerNFTIDs &&
//                   stakeOfOwnerNFTIDs.map((data2, index) => (
//                     <div className="col-md-5 col-xl-5" key={index}>
//                       <div
//                         className="dash-card style-3 position-relative"
//                         style={{
//                           boxShadow: "rgba(57, 57, 57, 0.96) 0px 22px 70px 4px",
//                         }}
//                       >
//                         <Card>
//                           <h6 style={{ textAlign: "center" }}>
//                             Level{" "}
//                             {data2 >= 1 && data2 <= 10
//                               ? "1"
//                               : data2 >= 21 && data2 <= 30
//                               ? "2"
//                               : data2 >= 31 && data2 <= 40
//                               ? "3"
//                               : data2 >= 41 && data2 <= 50
//                               ? "4"
//                               : data2 >= 51 && data2 <= 60
//                               ? "5"
//                               : data2 >= 61 && data2 <= 70
//                               ? "1"
//                               : data2 >= 71 && data2 <= 80
//                               ? "1"
//                               : data2 >= 81 && data2 <= 90
//                               ? "1"
//                               : null}
//                           </h6>
//                           <hr></hr>
//                           <div>
//                             <img
//                               src={`${imgUrl}${data2}.png`}
//                               alt=""
//                               className="img-fluid"
//                               style={{
//                                 height: "360px",
//                                 width: "auto",
//                                 borderRadius: "10px",
//                                 marginBottom: "2%",
//                               }}
//                             />
//                             <br></br>

//                             <span
//                               style={{
//                                 textAlign: "center",
//                                 marginLeft: "85%",
//                                 height: 25,
//                                 width: 40,
//                                 border: "1px solid gray",
//                               }}
//                             >
//                               x
//                               {data2 >= 1 && data2 <= 10
//                                 ? "1"
//                                 : data2 >= 21 && data2 <= 30
//                                 ? "5"
//                                 : data2 >= 31 && data2 <= 40
//                                 ? "10"
//                                 : data2 >= 41 && data2 <= 50
//                                 ? "25"
//                                 : data2 >= 51 && data2 <= 60
//                                 ? "50"
//                                 : data2 >= 61 && data2 <= 70
//                                 ? "100"
//                                 : data2 >= 71 && data2 <= 80
//                                 ? "250"
//                                 : data2 >= 81 && data2 <= 90
//                                 ? "500"
//                                 : ""}
//                             </span>
//                             <h6 style={{ marginTop: "1%" }}>
//                               APR :{" "}
//                               <span style={{ marginLeft: "50%" }}>
//                                 {apy.toLocaleString(undefined, {
//                                   maximumFractionDigits: 2,
//                                 })}
//                                 %{" "}
//                               </span>
//                             </h6>
//                             <h6> EVC Earned : </h6>
//                             <h5>{rewardobj && rewardobj[data2]} </h5>
//                           </div>
//                           <div>
//                             <ReactApexChart
//                               style={{ marginLeft: "-2%",height:'8px',width:'auto',fontSize:"0.5rem"}}
//                               options={EvcChart.options}
//                               series={EvcChart.series}
//                               type="bar"                               
//                             />
//                           </div>

//                           <div
//                             className="d-grid gap-2 d-sm-block"
//                             style={{ marginLeft: "15%" }}
//                           >
//                             <button
//                               className="btn btn-primary"
//                               type="button"
//                               onClick={() =>
//                                 claimTimeobj[data2] <= epoch
//                                   ? setClaimReward(data2)
//                                   : alert("wait till next claimable timing")
//                               }
//                             >
//                               Claim
//                             </button>
//                             &nbsp;
//                             <button
//                               className="btn btn-primary"
//                               type="button"
//                               onClick={() => setWithdrawNFT(data2)}
//                             >
//                               Unstake
//                             </button>
//                           </div>
//                         </Card>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default MintNew;

import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Route, Routes } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Button, Typography } from "@mui/material";
import level1 from "../Mint/Images/level1.png";
import level2 from "../Mint/Images/level2.png";
import level3 from "../Mint/Images/level3.png";
import level4 from "../Mint/Images/level4.png";
import level5 from "../Mint/Images/level5.png";
import level6 from "../Mint/Images/level6.png";
import level7 from "../Mint/Images/level7.png";
import level8 from "../Mint/Images/level8.png";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import { styled, withStyles } from "@mui/material/styles";
import EvcChart from "../Charts/EvcChart";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Input,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import ReactApexChart from "react-apexcharts";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import StakeNft from "./StakeNft";
import { getWalletOfOwner } from "../../../ContractAction/EVCNFTContractAction";
import {
  getTokensOfStaker,
  setClaimReward,
  getUnClaimableReward,
  getCurrentAPYOfPlan,
  getNextClaimTime,
} from "../../../ContractAction/EVCNFTStakeContractAction";
import {
  getTotalSupplyL1,
  getTotalSupplyL2,
  getTotalSupplyL3,
  getTotalSupplyL4,
  getTotalSupplyL5,
  getTotalSupplyL6,
  getTotalSupplyL7,
  getTotalSupplyL8,
  getLevelNFT1,
  getLevelNFT2,
  getLevelNFT3,
  getLevelNFT4,
  getLevelNFT5,
  getLevelNFT6,
  getLevelNFT7,
  getLevelNFT8,
} from "../../../ContractAction/EVCNFTContractAction";

import {
  setMintL1,
  setMintL2,
  setMintL3,
  setMintL4,
  setMintL5,
  setMintL6,
  setMintL7,
  setMintL8,
} from "../../../ContractAction/EVCNFTContractAction";

import {
  setStakeNFT,
  setWithdrawNFT,
} from "../../../ContractAction/EVCNFTStakeContractAction";
import {
  getIsApprovedForAll,
  setNFTApprovalForAll,
} from "../../../ContractAction/EVCNFTContractAction";
import { wrap } from "framer-motion";
import { withTheme } from "@mui/styles";

var rewardobj = {};
var claimTimeobj = {};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "yellow" : "#308fe8",
  },
}));

const Progressbar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 0,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};
//dev: Start Mint Page
function MintNew({ title }) {
  //dev: Stake NFTs
  const [walletOwner, SetWalletOwner] = useState();

  console.log("walletOwner.....", walletOwner);
  //dev: Unstake NFTs
  const [stakeOfOwnerNFTIDs, setStakeOfOwnerNFTIDs] = useState();
  console.log("stakeOfOwnerNFTIDs......................", stakeOfOwnerNFTIDs);

  //dev: Img URL
  const imgUrl =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/";

  const [isApproved, setApproved] = useState();
  console.log("isApproved", isApproved);

  const [stakeNFT, setstakeNFT] = useState();
  console.log("stakeNFT...", stakeNFT);
  const [apy, setApy] = useState();
  //dev: Get the Wallet Address using Local Storage
  const newAddress = window.localStorage.getItem("connectedAccount");

  useEffect(() => {
    document.title = title ? title : "EVC Avatars | Mint";
    document.querySelector(".page-title").innerText = "Mint";
    //set the walletOwner on Local Storage
    window.localStorage.setItem("walletOwner", walletOwner);
  }, []);

  //dev: use effect for total supplys
  const [totalSupplyL1, setTotalSupplyL1] = useState();
  const [totalSupplyL2, setTotalSupplyL2] = useState();
  const [totalSupplyL3, setTotalSupplyL3] = useState();
  const [totalSupplyL4, setTotalSupplyL4] = useState();
  const [totalSupplyL5, setTotalSupplyL5] = useState();
  const [totalSupplyL6, setTotalSupplyL6] = useState();
  const [totalSupplyL7, setTotalSupplyL7] = useState();
  const [totalSupplyL8, setTotalSupplyL8] = useState();
  const [progresBarState, setProgresBarState] = useState(33);

  //dev: use effect for Level of NFTs
  const [levelNFT1, setLevelNFT1] = useState();
  const [levelNFT2, setLevelNFT2] = useState();
  const [levelNFT3, setLevelNFT3] = useState();
  const [levelNFT4, setLevelNFT4] = useState();
  const [levelNFT5, setLevelNFT5] = useState();
  const [levelNFT6, setLevelNFT6] = useState();
  const [levelNFT7, setLevelNFT7] = useState();
  const [levelNFT8, setLevelNFT8] = useState();

  const EvcChart = {
    series: [
      {
        name: "Claim Perc",
        data: [
          44, 55, 57, 56, 61, 58, 63, 60, 66, 40, 44, 55, 57, 44, 55, 57, 56,
          61, 58, 63, 60, 66, 40, 44, 55, 57, 44, 55, 57, 56, 61, 58, 63,
        ],
      },
      {
        name: "Total Perc",
        data: [
          3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54,
          57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99,
        ],
      },
    ],
    options: {
      colors: ["#306FFF", "#30C9C9"],
      chart: {
        height: 250,
        type: "bar",
        background: "rgba(0, 0, 0, 0)",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        labels: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
        categories: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
        ],
      },
      yaxis: {
        categories: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
        ],
        labels: {
          formatter: function (value) {
            return value.toFixed(2);
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#1F1F2B",
        strokeDashArray: 3,
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      tooltip: {
        show: false,
      },
      theme: {
        mode: "dark",
        monochrome: {
          enabled: false,
          color: "#fff",
          shadeTo: "dark",
          shadeIntensity: 0,
        },
      },
      legend: {
        show: false,
      },
      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: ["transparent"],
        width: 0,
        dashArray: 0,
      },
      dataLabels: {
        enabled: false,
      },
    },
  };
  useEffect(() => {
    //dev: Get the Total Supply of Data
    const getTotalSupplyData = async () => {
      getTotalSupplyL1();
      const TotalSupplyL1 = await getTotalSupplyL1();
      setTotalSupplyL1(TotalSupplyL1);

      getTotalSupplyL2();
      const TotalSupplyL2 = await getTotalSupplyL2();
      setTotalSupplyL2(TotalSupplyL2);

      getTotalSupplyL3();
      const TotalSupplyL3 = await getTotalSupplyL3();
      setTotalSupplyL3(TotalSupplyL3);

      getTotalSupplyL4();
      const TotalSupplyL4 = await getTotalSupplyL4();
      setTotalSupplyL4(TotalSupplyL4);

      getTotalSupplyL5();
      const TotalSupplyL5 = await getTotalSupplyL5();
      setTotalSupplyL5(TotalSupplyL5);

      getTotalSupplyL6();
      const TotalSupplyL6 = await getTotalSupplyL6();
      setTotalSupplyL6(TotalSupplyL6);

      getTotalSupplyL7();
      const TotalSupplyL7 = await getTotalSupplyL7();
      setTotalSupplyL7(TotalSupplyL7);

      getTotalSupplyL8();
      const TotalSupplyL8 = await getTotalSupplyL8();
      setTotalSupplyL8(TotalSupplyL8);
    };
    getTotalSupplyData();
  }, []);
  useEffect(() => {
    //dev: Get the  NFT Staking Data
    const getNFTStakingData = async () => {
      const WalletOfOwner = await getWalletOfOwner();
      const StakeOfOwnerNFTIDs = await getTokensOfStaker();
      const approved = await getIsApprovedForAll();
      //const claimReward = await getUnClaimableReward();
      const apyInfo = await getCurrentAPYOfPlan();
      SetWalletOwner(WalletOfOwner);
      setStakeOfOwnerNFTIDs(StakeOfOwnerNFTIDs);
      setApproved(approved);
      // setReward(claimReward);
      setApy(apyInfo);
    };
    getNFTStakingData();
  }, []);

  useEffect(() => {
    //dev: Get the Level of  Data
    const getLevelData = async () => {
      getLevelNFT1();
      const LevelNFT1 = await getLevelNFT1();
      setLevelNFT1(LevelNFT1);

      getLevelNFT2();
      const LevelNFT2 = await getLevelNFT2();
      setLevelNFT2(LevelNFT2);

      getLevelNFT3();
      const LevelNFT3 = await getLevelNFT3();
      setLevelNFT3(LevelNFT3);

      getLevelNFT4();
      const LevelNFT4 = await getLevelNFT4();
      setLevelNFT4(LevelNFT4);

      getLevelNFT5();
      const LevelNFT5 = await getLevelNFT5();
      setLevelNFT5(LevelNFT5);

      getLevelNFT6();
      const LevelNFT6 = await getLevelNFT6();
      setLevelNFT6(LevelNFT6);

      getLevelNFT7();
      const LevelNFT7 = await getLevelNFT7();
      setLevelNFT7(LevelNFT7);

      getLevelNFT8();
      const LevelNFT8 = await getLevelNFT8();
      setLevelNFT8(LevelNFT8);
    };
    getLevelData();
  }, []);

  //dev: Define  Next Claim Time
  const nextClaimTime = window.localStorage.getItem("nextClaim ");
  console.log("nextClaimTime", nextClaimTime);

  //dev: Show the Current Time
  const start = Date.now();
  let epoch = start / 1000;
  let myepoch = epoch.toFixed(0);
  console.log("epoch...", myepoch);

  useEffect(() => {
    //dev: get the  Reward
    const getReward = async () => {
      if (typeof stakeOfOwnerNFTIDs !== "undefined") {
        for (let i = 0; i < stakeOfOwnerNFTIDs.length; i++) {
          const rewardinfo = await getUnClaimableReward(stakeOfOwnerNFTIDs[i]);
          rewardobj[stakeOfOwnerNFTIDs[i]] = Number(rewardinfo).toLocaleString(
            undefined,
            { maximumFractionDigits: 2 }
          );
        }
      }
    };
    getReward();
    console.log("rewardobj", rewardobj);

    //dev: Get the Claim Time
    const getClaimTime = async () => {
      if (typeof stakeOfOwnerNFTIDs !== "undefined") {
        for (let i = 0; i < stakeOfOwnerNFTIDs.length; i++) {
          const timeInfo = await getNextClaimTime(stakeOfOwnerNFTIDs[i]);
          claimTimeobj[stakeOfOwnerNFTIDs[i]] = timeInfo;
        }
      }
    };
    getClaimTime();
    console.log("claimTimeobj", claimTimeobj);
  }, [stakeOfOwnerNFTIDs]);

  const [stake, setStake] = useState(false);

  const Click = () => {
    setStake(true);
  };

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  const getApproved = async () => {
    setNFTApprovalForAll();
  };

  return (
    <>
      <div>
        {stake ? (
          // dev: Render the StakeNft Component
          <StakeNft />
        ) : (
          <div className="dashboard-wrap">
            <Breadcrumb>
              <li className="breadcrumb-item">
                <Link to="/">HOME</Link>
              </li>
              <Breadcrumb.Item active>My NFTs</Breadcrumb.Item>
            </Breadcrumb>
            <div className="dash-content-area">
              <div className="row">
                <div className="col">
                  <div className="h4">EVC NFT</div>
                </div>
              </div>
            </div>

            <div className="dash-global-wrap" style={{ marginLeft: "12%" }}>
              <h3 style={{ marginLeft: "38%" }}>Stake</h3>
              {/* <h5 style={{ marginLeft: "80%" }}>APR: {apy}%</h5> */}
              
              <div className="row g-5">
                {walletOwner &&
                  walletOwner.map((data1, index) => (
                    <div className="col-md-5 col-xl-5" key={index}>
                      <div
                        className="dash-card style-3 position-relative"
                        style={{
                          boxShadow: "rgba(57, 57, 57, 0.96) 0px 22px 70px 4px",
                        }}
                      >
                        <h6 style={{ textAlign: "center" }}>
                          Level{" "}
                          {data1 >= 1 && data1 <= 10
                            ? "1"
                            : data1 >= 21 && data1 <= 30
                            ? "2"
                            : data1 >= 31 && data1 <= 40
                            ? "3"
                            : data1 >= 41 && data1 <= 50
                            ? "4"
                            : data1 >= 51 && data1 <= 60
                            ? "5"
                            : data1 >= 61 && data1 <= 70
                            ? "6"
                            : data1 >= 71 && data1 <= 80
                            ? "7"
                            : data1 >= 81 && data1 <= 90
                            ? "8"
                            : null}
                        </h6>
                        <hr></hr>
                        <div>
                          <img
                            src={`${imgUrl}${data1}.png`}
                            alt=""
                            className="img-fluid"
                            style={{
                              height: "360px",
                              width: "100%",
                              borderRadius: "10px",
                            }}
                          />
                          <br></br>
                          <br></br>

                          {isApproved === true ? (
                            // dev: Stake Button
                            <Button
                              style={{
                                width: "35%",
                                height: "40px",
                                marginLeft: "40%",
                                marginTop: "2%",
                              }}
                              onClick={() => setStakeNFT(data1)}
                              variant="contained"
                            >
                              Stake
                            </Button>
                          ) : (
                            // dev:  Approve Button
                            <Button
                              onClick={() => getApproved()}
                              variant="contained"
                              style={{
                                width: "35%",
                                height: "40px",
                                marginLeft: "40%",
                                marginTop: "2%",
                              }}
                            >
                              Approve
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <hr></hr>
              <h3 style={{ marginLeft: "38%" }}>Unstake</h3>
              <div className="row g-5">
                {stakeOfOwnerNFTIDs &&
                  stakeOfOwnerNFTIDs.map((data2, index) => (
                    <div className="col-md-5 col-xl-5" key={index}>
                      <div
                        className="dash-card style-3 position-relative"
                        style={{
                          boxShadow: "rgba(57, 57, 57, 0.96) 0px 22px 70px 4px",
                        }}
                      >
                        <Card>
                          <h6 style={{ textAlign: "center" }}>
                            Level{" "}
                            {data2 >= 1 && data2 <= 10
                              ? "1"
                              : data2 >= 21 && data2 <= 30
                              ? "2"
                              : data2 >= 31 && data2 <= 40
                              ? "3"
                              : data2 >= 41 && data2 <= 50
                              ? "4"
                              : data2 >= 51 && data2 <= 60
                              ? "5"
                              : data2 >= 61 && data2 <= 70
                              ? "6"
                              : data2 >= 71 && data2 <= 80
                              ? "7"
                              : data2 >= 81 && data2 <= 90
                              ? "8"
                              : null}
                          </h6>
                          <hr></hr>
                          <div>
                            <img
                              src={`${imgUrl}${data2}.png`}
                              alt=""
                              className="img-fluid"
                              style={{
                                height: "360px",
                                width: "auto",
                                borderRadius: "10px",
                                marginBottom: "2%",
                              }}
                            />
                            <br></br>

                            <span
                              style={{
                                textAlign: "center",
                                marginLeft: "85%",
                                height: 25,
                                width: 40,
                                border: "1px solid gray",
                              }}
                            >
                              x
                              {data2 >= 1 && data2 <= 10
                                ? "1"
                                : data2 >= 21 && data2 <= 30
                                ? "5"
                                : data2 >= 31 && data2 <= 40
                                ? "10"
                                : data2 >= 41 && data2 <= 50
                                ? "25"
                                : data2 >= 51 && data2 <= 60
                                ? "50"
                                : data2 >= 61 && data2 <= 70
                                ? "100"
                                : data2 >= 71 && data2 <= 80
                                ? "250"
                                : data2 >= 81 && data2 <= 90
                                ? "500"
                                : ""}
                            </span>
                            <h6 style={{ marginTop: "1%" }}>
                              APR :{" "}
                              <span style={{ marginLeft: "50%" }}>
                                {apy.toLocaleString(undefined, {
                                  maximumFractionDigits: 2,
                                })}
                                %{" "}
                              </span>
                            </h6>
                            <h6> EVC Earned : </h6>
                            <h5>{rewardobj && rewardobj[data2]} </h5>
                          </div>
                          {/* <div>
                            <ReactApexChart
                              style={{ marginLeft: "-2%",height:'8px',width:'auto',fontSize:"0.5rem"}}
                              options={EvcChart.options}
                              series={EvcChart.series}
                              type="bar"                               
                            />
                          </div> */}

                          <Box sx={{ flexGrow: 1 }}>
                            <br />
                            {/* <BorderLinearProgress variant="determinate" value={progresBarState} sx={{ height:20,
                                '&:hover': {
                                    background: "#f00",
                                    
                                  },}}/> */}
                            <Progressbar
                              bgcolor="#64dd17"
                              progress={progresBarState}
                              height={20}
                            />
                          </Box>

                          <div
                            className="d-grid gap-2 d-sm-block"
                            style={{ marginLeft: "15%", marginTop: 5 }}
                          >
                            <button
                              className="btn btn-primary"
                              type="button"
                              onClick={() =>
                                claimTimeobj[data2] <= epoch
                                  ? setClaimReward(data2)
                                  : alert("wait till next claimable timing")
                              }
                            >
                              Claim
                            </button>
                            &nbsp;
                            <button
                              className="btn btn-primary"
                              type="button"
                              onClick={() => setWithdrawNFT(data2)}
                            >
                              Unstake
                            </button>
                          </div>
                        </Card>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MintNew;

