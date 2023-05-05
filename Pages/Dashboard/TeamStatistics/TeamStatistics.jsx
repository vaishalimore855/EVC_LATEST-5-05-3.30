import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import { AiOutlineCopy } from "react-icons/ai";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import { IconButton, Grid } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Graph from "./Graph";
import { Dropdown } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function createData(DirectPartnerList, PartnerRank, TotalPartner) {
  return { DirectPartnerList, PartnerRank, TotalPartner };
}

const rows = [
  createData(" ghbhsvvvgjjnnbav", "EVC1", 20),
  createData("mghsvdghbghsgdbb", "EVC4", 350),
  createData(" 0xmnsn776s sgsth", "EVC1", 33),
];

//Second Table

function createData1(
  wallet,
  rank,
  TotalPartner,
  ownNft,
  totalWeeklyTurnover,
  TotalNftTeamTurnOver
) {
  return {
    wallet,
    rank,
    TotalPartner,
    ownNft,
    totalWeeklyTurnover,
    TotalNftTeamTurnOver,
  };
}

const rows1 = [
  createData1(
    " ghbhsvvvgjjnnbav",
    "EVC2",
    234,
    "Crypto Billionaire",
    "2,000 busd",
    "6,000 busd"
  ),
  createData1(
    "mghsvdghbghsgdbb",
    "EVC4",
    4555,
    "crypto Mogul",
    "50,000 busd",
    "3,000,000 busd"
  ),
  createData1(
    " 0xmnsn776s sgsth",
    "EVC1",
    12,
    "Crypto King",
    "9,000 busd",
    "30,000 busd"
  ),
  createData1(
    " ghbhsvvvgjjnnbav",
    "EVC1",
    34,
    "Crypto Newbies",
    "1,000 busd",
    "7,000 busd"
  ),
  createData1(
    "mghsvdghbghsgdbb",
    "EVC2",
    55,
    "Crypto King",
    "6,000 busd",
    "55,000 busd"
  ),
  createData1(
    " 0xmnsn776s sgsth",
    "EVC6",
    42111,
    "Crypto Billionaire",
    "200,000 busd",
    "8,000,000 busd"
  ),
];

function TeamStatistics({ title }) {
  const [storeData, setStoreData] = useState();
  const [changeState, setChangeState] = useState();
  const [data, setData] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [tableData, setTableData] = useState(rows1);

  //dev: Sort Table Data
  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
    sortTableData();
  };

  const sortTableData = () => {
    const filteredData = rows1.filter((d) =>
      d.wallet.toLowerCase().includes(searchText.toLowerCase())
    );
    filteredData.sort((a, b) => a.wallet.localeCompare(b.wallet));
    setTableData(filteredData);
  };

  const getData = () => {
    const newAddress = window.localStorage.getItem("connectedAccount");
    const userAddress = newAddress;
    console.log("userAddress", userAddress);
    const sponsorAddress = window.localStorage.getItem("sponsorAddress");
    // setChangeState(sponsorAddress)
    const data = {
      sponsoraddress: "$0x89D24651Db303a12169E1f2Ffd673763255EdEDC",
    };
    fetch("http://localhost:8000/api/users/getreferral", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => setStoreData(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const GetData = () => {
    // setTimeout(() => {
    console.log("33333333333333333333333333333333", storeData);
    console.log("33333333333333333333333333333333", storeData.affiliates);

    // }, 0);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div className="dashboard-wrap">
      <Breadcrumb>
        <li className="breadcrumb-item">
          <Link to="/">HOME</Link>
        </li>
        <Breadcrumb.Item active>TeamStatistics</Breadcrumb.Item>
      </Breadcrumb>
      <div className="dash-content-area">
        <div className="h1 font-gilroy fw-semibold mt-3 mb-4 pb-3">
          <div className="h4" style={{ marginLeft: "8%" }}>
            Total Team Turnover - 2,000,000 BUSD
          </div>
          <div
            className="dash-global-wrap"
            style={{
              position: "absolute",
              top: "35%",
              left: "23%",
              height: "auto",
              width: "70%",
            }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow sx={{ bgcolor: "#1976D2" }}>
                    <TableCell sx={{ color: "white" }}>
                      Direct Partners List
                    </TableCell>
                    <TableCell align="center" sx={{ color: "white" }}>
                      Partnerts Rank
                    </TableCell>
                    <TableCell align="center" sx={{ color: "white" }}>
                      Total Partnerts
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {storeData &&
                    storeData.affiliates.map((row, i) => (
                      <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                          {row.affiliateaddress}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.affiliatelevel}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.TotalPartner}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br></br>

            <Card sx={{ minWidth: 275,backgroundColor:'#101018' }}>
              <CardContent sx={{color:'white'}}>
                <Typography sx={{ fontSize: 18, fontWeight: "bold" }}>
                  <span style={{ color: "blue" }}>• </span>
                  Team Turnover
                </Typography>
                <Typography
                  sx={{ fontSize: 16 }}
                  color="text.dark"
                  gutterBottom
                >
                  Team Turnover History
                </Typography>
              </CardContent>
              <Box sx={{ width: "90%", marginLeft: "20px" }}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={10}>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                      >
                        <Tab
                          label="Weekly"
                          {...a11yProps(1)}
                          style={{ marginLeft: "80%" }}
                        />
                      </Tabs>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      style={{ fontSize: 16, marginTop: "10px" }}
                    >
                      {/* Dropdown */}

                      <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                          {/* icon */}
                          <DehazeIcon sx={{color:'white'}}></DehazeIcon>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/day">Day</Dropdown.Item>
                          <Dropdown.Item href="#/month">Month</Dropdown.Item>
                          <Dropdown.Item href="#/year">Year</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Grid>
                  </Grid>
                </Box>
                {/* <TabPanel value={value} index={0} style={{ marginLeft: "82%" }}>
                  .
                </TabPanel> */}
                {/* NFT Turnover Graph */}
                <Graph></Graph>
              </Box>
            </Card>
            <br></br>
            <div>
              <Button
                variant="contained"
                style={{ marginLeft: "10%", width: "30%", height: "50px" }}
              >
                Partner Activity
              </Button>
              <TextField
                style={{
                  position: "none",
                  borderRadius: "10px 10px",
                  border: "3px solid #1976D2",
                  color: "black",
                  marginLeft: "10%",
                  marginTop: "8px",
                  width: "44%",
                  height: "36px",
                  fontSize: "18px",
                  backgroundColor: "white",
                }}
                value={searchText}
                onChange={handleSearchTextChange}
                id="input-with-icon-textfield"
                placeholder="Search by address option here"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </div>
            <div>
              <br></br>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700,backgroundColor:"#101018"}} aria-label="customized table">
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#1976D2" }}>
                      <TableCell sx={{ color: "white" }}>Wallet</TableCell>
                      <TableCell align="center" sx={{ color: "white" }}>
                        Rank
                      </TableCell>
                      <TableCell align="center" sx={{ color: "white" }}>
                        Total Partnerts
                      </TableCell>
                      <TableCell align="center" sx={{ color: "white" }}>
                        Own NFT
                      </TableCell>
                      <TableCell align="center" sx={{ color: "white" }}>
                        Total Weekly turnover
                      </TableCell>
                      <TableCell align="center" sx={{ color: "white" }}>
                        Total NFT Team turnover
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row, i) => (
                      <TableRow key={i} >
                        <TableCell component="th" scope="row"sx={{ color: "white" }}>
                          {row.wallet}
                        </TableCell>
                        <TableCell align="center"sx={{ color: "white" }}>{row.rank}</TableCell>
                        <TableCell align="center"sx={{ color: "white" }}>{row.TotalPartner}</TableCell>
                        <TableCell align="center"sx={{ color: "white" }}>{row.ownNft}</TableCell>
                        <TableCell align="center"sx={{ color: "white" }}>
                          {row.totalWeeklyTurnover}
                        </TableCell>
                        <TableCell align="center"sx={{ color: "white" }}>
                          {row.TotalNftTeamTurnOver}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                {/* <Button onClick={GetData}>GetData</Button> */}
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamStatistics;

