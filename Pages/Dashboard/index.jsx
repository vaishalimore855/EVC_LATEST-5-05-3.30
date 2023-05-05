// import React, { useEffect, useState } from "react";
// import Breadcrumb from "react-bootstrap/Breadcrumb";
// import { Link } from "react-router-dom";
// import profilePic from "../../assets/img/dashboard/img/avatar-1.png";
// import busd from "../../assets/img/dashboard/icons/busd.png";
// import dashCardIcon1 from "../../assets/img/dashboard/icons/dash-card-icon-1.png";
// import dashCardIcon2 from "../../assets/img/dashboard/icons/dash-card-icon-2.png";
// import dashIcon1 from "../../assets/img/dashboard/icons/dash-icon-1.svg";
// import dashIcon2 from "../../assets/img/dashboard/icons/dash-icon-2.svg";
// import dashIcon3 from "../../assets/img/dashboard/icons/dash-icon-3.svg";
// import dashIcon4 from "../../assets/img/dashboard/icons/dash-icon-4.svg";
// import DashChart from "./Charts/OverviewChart";
// import StakeNft from "./Mint/StakeNft";
// import { getWalletOfOwner } from "../../ContractAction/EVCNFTContractAction";
// const Dashboard = ({ title }) => {
//   //Dev: Get the address for Local Storage
//   const newAddress = window.localStorage.getItem("connectedAccount");
//   const imgUrl =
//     "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/";
//   const [walletOwner, SetWalletOwner] = useState();
//   console.log("walletOwner.....**********************", walletOwner);
//   const maxNft = Math.max(walletOwner);
//   console.log("maxNft", maxNft);
//   useEffect(() => {
//     //dev: Get the  NFT Staking Data
//     const getNFTStakingData = async () => {
//       const WalletOfOwner = await getWalletOfOwner();
//       SetWalletOwner(WalletOfOwner);
//       document.title = title ? title : "EVC Avatars | Dashboard";
//       document.querySelector(".page-title").innerText = "NFT MINTING REWARDS";
//     };
//     getNFTStakingData();
//   }, []);

//   return (
//     <>
//       <div className="dashboard-wrap">
//         <Breadcrumb>
//           <li className="breadcrumb-item">
//             <Link to="/">HOME</Link>
//           </li>
//           <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
//         </Breadcrumb>
//         {/* Dev: Dashboard Page */}
//         <div className="dash-content-area">
//           <div className="row">
//             <div className="col-lg-12 col-xl-12 col-xxxl-3">
//               <div className="row">
//                 {walletOwner && (
//                   <div className="col-xxxl-12 col-xl-4 col-md-6">
//                     <div className="card-evc style-2 d-flex flex-column mb-4">
//                       <div className="evc-avatar">
//                         <img
//                           src={profilePic}
//                           alt=""
//                           className="img-fluid w-100"
//                         />
//                       </div>
//                       <div className="evc-info p-3 pb-0 h-100 d-flex flex-column justify-content-between">
//                         <div className="d-flex gap-2 flex-wrap justify-content-between mb-4">
//                           <a href="#" className="evc-title">
//                             CryptoCap Tycoon
//                           </a>
//                           <div className="evc-no">#EVC 5</div>
//                         </div>
//                         <div className="d-flex justify-content-between">
//                           <div className="evc-price">
//                             <div className="evc-price-title">PRICE</div>
//                             <div className="evc-price-amount">
//                               <img src={busd} alt="" className="img-fluid" />
//                               $55,000
//                             </div>
//                           </div>
//                           <div className="evc-bv">
//                             <div className="evc-bv-title">BV</div>
//                             <div className="evc-bv-amount">
//                               <img src={busd} alt="" className="img-fluid" />
//                               $50,000
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//                 <div className="col-xxxl-12 col-xl-8 col-md-6">
//                   <div className="d-flex h-100 w-100">
//                     <div className="evc-rank mt-xxxl-2 w-100">
//                       {/* <div className="evc-rank-top">RANK- EVC 5</div> */}
//                       <div className="h4 evc-rank-top">RANK-EVC 5</div>
//                       <div className="evc-rank-list">
//                         <Link to="/dashboard/main/#">
//                           <span className="rank">1</span>
//                           <div className="dp d-flex align-items-center">
//                             <div className="icon-square icon-circle overflow-hidden">
//                               <img src="" alt="" />
//                             </div>
//                             <div className="username">@uirahman92</div>
//                           </div>
//                           <div className="point">8560</div>
//                         </Link>
//                         <Link to="/dashboard/main/#">
//                           <span className="rank">1</span>
//                           <div className="dp d-flex align-items-center">
//                             <div className="icon-square icon-circle overflow-hidden">
//                               <img src="" alt="" />
//                             </div>
//                             <div className="username">@uirahman92</div>
//                           </div>
//                           <div className="point">8560</div>
//                         </Link>
//                         <Link to="/dashboard/main/#">
//                           <span className="rank">1</span>
//                           <div className="dp d-flex align-items-center">
//                             <div className="icon-square icon-circle overflow-hidden">
//                               <img src="" alt="" />
//                             </div>
//                             <div className="username">@uirahman92</div>
//                           </div>
//                           <div className="point">8560</div>
//                         </Link>
//                         <Link to="/dashboard/main/#">
//                           <span className="rank">1</span>
//                           <div className="dp d-flex align-items-center">
//                             <div className="icon-square icon-circle overflow-hidden">
//                               <img src="" alt="" />
//                             </div>
//                             <div className="username">@uirahman92</div>
//                           </div>
//                           <div className="point">8560</div>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-12 col-xl-12 col-xxxl-9">
//               <div className="row g-4">
//                 <div className="col-md-6">
//                   <div className="dash-card">
//                     <div className="icon-square icon-md mb-3">
//                       <img src={dashIcon1} alt="" className="img-fluid" />
//                     </div>
//                     <p>Total EVC Minted</p>
//                     <div className="d-flex flex-wrap align-items-center gap-2 dash-card-amount">
//                       <div>
//                         <img src={dashCardIcon1} alt="" className="img-fluid" />
//                       </div>
//                       <div>40,000 ($4000)</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="dash-card">
//                     <div className="icon-square icon-md mb-3">
//                       <img src={dashIcon2} alt="" className="img-fluid" />
//                     </div>
//                     <p>Personal EVC Staked Amount</p>
//                     <div className="d-flex flex-wrap align-items-center gap-2 dash-card-amount">
//                       <div>
//                         <img src={dashCardIcon1} alt="" className="img-fluid" />
//                       </div>
//                       <div>1000</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="dash-card">
//                     <div className="icon-square icon-md mb-3">
//                       <img src={dashIcon3} alt="" className="img-fluid" />
//                     </div>
//                     <p>Total Commission Earned</p>
//                     <div className="d-flex flex-wrap align-items-center gap-2 dash-card-amount">
//                       <div>
//                         <img src={dashCardIcon2} alt="" className="img-fluid" />
//                       </div>
//                       <div>10,000</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="dash-card">
//                     <div className="icon-square icon-md mb-3">
//                       <img src={dashIcon4} alt="" className="img-fluid" />
//                     </div>
//                     <p>Personal Farming Amount</p>
//                     <div className="d-flex flex-wrap align-items-center gap-2 dash-card-amount">
//                       <div>$ 8,000</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* dev: DashChart  */}
//               <div className="mt-5">
//                 <div className="dash-global-wrap pb-2">
//                   <DashChart />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import profilePic from "../../assets/img/dashboard/img/avatar-1.png";
import busd from "../../assets/img/dashboard/icons/busd.png";
import dashCardIcon1 from "../../assets/img/dashboard/icons/dash-card-icon-1.png";
import dashCardIcon2 from "../../assets/img/dashboard/icons/dash-card-icon-2.png";
import dashIcon1 from "../../assets/img/dashboard/icons/dash-icon-1.svg";
import dashIcon2 from "../../assets/img/dashboard/icons/dash-icon-2.svg";
import dashIcon3 from "../../assets/img/dashboard/icons/dash-icon-3.svg";
import dashIcon4 from "../../assets/img/dashboard/icons/dash-icon-4.svg";
import DashChart from "./Charts/OverviewChart";
import StakeNft from "./Mint/StakeNft";
import { getWalletOfOwner } from "../../ContractAction/EVCNFTContractAction";
import {
  getHasToken2,
  getHasToken3,
  getHasToken1,
  getHasToken4,
  getHasToken5,
  getHasToken6,
  getHasToken7,
  getHasToken8,
} from "../../ContractAction/EVCNFTContractAction";
const HighNftToken = [];
console.log("HighNftToken", HighNftToken);

var lastElement;
const Dashboard = ({ title }) => {
  //Dev: Get the address for Local Storage
  const newAddress = window.localStorage.getItem("connectedAccount");
  const imgUrl =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/";

  const img1 =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/1.png";
  const img2 =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/21.png";
  const img3 =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/31.png";
  const img4 =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/41.png";
  const img5 =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/51.png";
  const img6 =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/61.png";
  const img7 =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/71.png";
  const img8 =
    "https://ipfs.io/ipfs/QmcMJqnnQeZeNnnnDh4Dar2HuxrnibFzLxjG9BanHPcGq4/81.png";

  const [walletOwner, SetWalletOwner] = useState();
  console.log("walletOwner.....**********************", walletOwner);

  const [highNft, setHighNft] = useState();
  console.log("highNft.....**********************", highNft);
  const maxNft = Math.max(walletOwner);
  console.log("maxNft", maxNft);
  useEffect(() => {
    //dev: Get the  NFT Staking Data
    const getNFTStakingData = async () => {
      const WalletOfOwner = await getWalletOfOwner();
      SetWalletOwner(WalletOfOwner);
      document.title = title ? title : "EVC Avatars | Dashboard";
      document.querySelector(".page-title").innerText = "NFT MINTING REWARDS";
    };
    const Token = async () => {
      const nft3 = await getHasToken3();
      const nft1 = await getHasToken1();
      const nft4 = await getHasToken4();
      const nft2 = await getHasToken2();
      const nft5 = await getHasToken5();
      const nft6 = await getHasToken6();
      const nft7 = await getHasToken7();
      const nft8 = await getHasToken8();
      // setHighNft(nft1);
      var arr = [nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft8];
      console.log("arr", arr);
      for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === true) {
          HighNftToken.push(i + 1);
        }
      }
      lastElement = HighNftToken.slice(-1);
      setHighNft(lastElement);
      console.log("lastElement", lastElement);
      console.log("HighNftToken", HighNftToken);
    };
    Token();
    getNFTStakingData();
  }, []);

  return (
    <>
      <div className="dashboard-wrap">
        <Breadcrumb>
          <li className="breadcrumb-item">
            <Link to="/">HOME</Link>
          </li>
          <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
        {/* Dev: Dashboard Page */}
        <div className="dash-content-area">
          <div className="row">
            <div className="col-lg-12 col-xl-12 col-xxxl-3">
              <div className="row">
                {walletOwner && (
                  <div className="col-xxxl-12 col-xl-4 col-md-6">
                    <div className="card-evc style-2 d-flex flex-column mb-4">
                      <div className="evc-avatar">
                        {lastElement &&
                          (() => {
                            if (lastElement == 8)
                              return (
                                <img
                                  src={img8}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                            if (lastElement == 7)
                              return (
                                <img
                                  src={img7}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                            if (lastElement == 6)
                              return (
                                <img
                                  src={img6}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                            if (lastElement == 5)
                              return (
                                <img
                                  src={img5}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                            if (lastElement == 4)
                              return (
                                <img
                                  src={img4}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                            if (lastElement == 3)
                              return (
                                <img
                                  src={img3}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                            if (lastElement == 2)
                              return (
                                <img
                                  src={img2}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                            if (lastElement == 1)
                              return (
                                <img
                                  src={img1}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                            else
                              return (
                                <img
                                  src={profilePic}
                                  alt=""
                                  className="img-fluid w-100"
                                />
                              );
                          })()}
                      </div>
                      <div className="evc-info p-3 pb-0 h-100 d-flex flex-column justify-content-between">
                        <div className="d-flex gap-2 flex-wrap justify-content-between mb-4">
                          <a href="#" className="evc-title">
                            CryptoCap Tycoon
                          </a>
                          <div className="evc-no">#EVC 5</div>
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="evc-price">
                            <div className="evc-price-title">PRICE</div>
                            <div className="evc-price-amount">
                              <img src={busd} alt="" className="img-fluid" />
                              $55,000
                            </div>
                          </div>
                          <div className="evc-bv">
                            <div className="evc-bv-title">BV</div>
                            <div className="evc-bv-amount">
                              <img src={busd} alt="" className="img-fluid" />
                              $50,000
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-xxxl-12 col-xl-8 col-md-6">
                  <div className="d-flex h-100 w-100">
                    <div className="evc-rank mt-xxxl-2 w-100">
                      {/* <div className="evc-rank-top">RANK- EVC 5</div> */}
                      <div className="h4 evc-rank-top">RANK-EVC 5</div>
                      <div className="evc-rank-list">
                        <Link to="/dashboard/main/#">
                          <span className="rank">1</span>
                          <div className="dp d-flex align-items-center">
                            <div className="icon-square icon-circle overflow-hidden">
                              <img src="" alt="" />
                            </div>
                            <div className="username">@uirahman92</div>
                          </div>
                          <div className="point">8560</div>
                        </Link>
                        <Link to="/dashboard/main/#">
                          <span className="rank">1</span>
                          <div className="dp d-flex align-items-center">
                            <div className="icon-square icon-circle overflow-hidden">
                              <img src="" alt="" />
                            </div>
                            <div className="username">@uirahman92</div>
                          </div>
                          <div className="point">8560</div>
                        </Link>
                        <Link to="/dashboard/main/#">
                          <span className="rank">1</span>
                          <div className="dp d-flex align-items-center">
                            <div className="icon-square icon-circle overflow-hidden">
                              <img src="" alt="" />
                            </div>
                            <div className="username">@uirahman92</div>
                          </div>
                          <div className="point">8560</div>
                        </Link>
                        <Link to="/dashboard/main/#">
                          <span className="rank">1</span>
                          <div className="dp d-flex align-items-center">
                            <div className="icon-square icon-circle overflow-hidden">
                              <img src="" alt="" />
                            </div>
                            <div className="username">@uirahman92</div>
                          </div>
                          <div className="point">8560</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-12 col-xxxl-9">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="dash-card">
                    <div className="icon-square icon-md mb-3">
                      <img src={dashIcon1} alt="" className="img-fluid" />
                    </div>
                    <p>Total EVC Minted</p>
                    <div className="d-flex flex-wrap align-items-center gap-2 dash-card-amount">
                      <div>
                        <img src={dashCardIcon1} alt="" className="img-fluid" />
                      </div>
                      <div>40,000 ($4000)</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dash-card">
                    <div className="icon-square icon-md mb-3">
                      <img src={dashIcon2} alt="" className="img-fluid" />
                    </div>
                    <p>Personal EVC Staked Amount</p>
                    <div className="d-flex flex-wrap align-items-center gap-2 dash-card-amount">
                      <div>
                        <img src={dashCardIcon1} alt="" className="img-fluid" />
                      </div>
                      <div>1000</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dash-card">
                    <div className="icon-square icon-md mb-3">
                      <img src={dashIcon3} alt="" className="img-fluid" />
                    </div>
                    <p>Total Commission Earned</p>
                    <div className="d-flex flex-wrap align-items-center gap-2 dash-card-amount">
                      <div>
                        <img src={dashCardIcon2} alt="" className="img-fluid" />
                      </div>
                      <div>10,000</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="dash-card">
                    <div className="icon-square icon-md mb-3">
                      <img src={dashIcon4} alt="" className="img-fluid" />
                    </div>
                    <p>Personal Farming Amount</p>
                    <div className="d-flex flex-wrap align-items-center gap-2 dash-card-amount">
                      <div>$ 8,000</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* dev: DashChart  */}
              <div className="mt-5">
                <div className="dash-global-wrap pb-2">
                  <DashChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

