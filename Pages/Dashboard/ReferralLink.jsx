import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import { AiOutlineCopy } from "react-icons/ai";
import { Tooltip } from "@mui/material";
import { IconButton, Grid } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

const postData = () => {
  const affiliateaddress = window.localStorage.getItem("connectedAccount");
  const sponsoraddress = window.localStorage.getItem("sponsorAddress");
  console.log('sponsoraddress: ', sponsoraddress)
  const data = {
    affiliateaddress: affiliateaddress,
    sponsoraddress: sponsoraddress,
  };



    fetch("http://localhost:8000/api/users/userreferral", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log("result....", result);
        return result.json();
      })
      .catch((err) => console.log(err));


}
  

const ReferralLink = ({ title }) => {
  const text = "http://localhost:3000/dashboard?ref=";
  const [open, setOpen] = React.useState(false);

  
  const affiliateaddress = window.localStorage.getItem("connectedAccount");
  const sponsoraddress = window.localStorage.getItem("sponsorAddress");


  const handleClick = () => {
    setOpen(true);
  };
  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  // useEffect(() => {
    postData();
  // }, []);

  //dev: Copy the Text
  const copyText = () => {
    navigator.clipboard.writeText(`${text}${affiliateaddress}`);
  };
  const msg = () => {
    copyText();
    handleClick();
  };
  useEffect(() => {
    document.title = title ? title : "EVC Avatars | Referral Link";
    document.querySelector(".page-title").innerText = "Referral Link";
  }, []);

  console.log("add", affiliateaddress);

  return (
    <div className="dashboard-wrap">
      <Breadcrumb>
          <li className="breadcrumb-item">
            <Link to="/">HOME</Link>
          </li>
          <Breadcrumb.Item active>Referral Link</Breadcrumb.Item>
        </Breadcrumb>

      <div className="dash-content-area">
        <div className="h1 font-gilroy fw-semibold mt-3 mb-4 pb-3"></div>
        <div
          className="dash-global-wrap"
          style={{
            borderRadius: "12px",
            border: "1px solid gray",
            position: "absolute",
            top: "35%",
            left: "30%",
            height: "250px",
            width: "50%",
          }}
        >
          <span style={{ marginLeft: "90%", fontSize: "20px" }}>
            <AiOutlineCopy
              onClick={() => {
                msg();
              }}
            />

            <Snackbar
              open={open}
              autoHideDuration={1000}
              onClose={handleClose}
              message="Copied"
              style={{
                position: "absolute",
                bottom: "50%",
                left: "80%",
                width: "20px",
              }}
            />
          </span>

          {/*dev:Show the Sponsor Address */}
          <p style={{ fontSize: "18px", margin: "1% 4%" }}>
            Sponsor Address : <Link>{sponsoraddress}</Link>
          </p>

          {/*dev:Show the  Reference Address */}
          <p style={{ fontSize: "18px", margin: "5% 4%" }}>
            {" "}
            Your Link :{" "}
            <Link>http://localhost:3000/dashboard?ref=${affiliateaddress}</Link>
          </p>
          {/* <button onClick={() => postData()}>POST</button>
          <button onClick={() => getData()}>GET</button> */}
        </div>
      </div>
    </div>
  );
};

export default ReferralLink;

