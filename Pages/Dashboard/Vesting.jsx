import React, { useState, useEffect } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';

import { AiOutlineSearch } from "react-icons/ai";

import { setClaimVested, getRemainingAmountVested, getNextRedeemTime } from '../../ContractAction/VestingContractAction';


const Vesting = ({ title }) => {

    //dev: get the address for Local Storage
    const newAddress = window.localStorage.getItem("connectedAccount");

    const [remainingAmount, setRemainingAmount] = useState();
    const [redeemTime, setRedeemTime] = useState();
    console.log("redeemTime", redeemTime)
    console.log("remainingAmount", remainingAmount)

    useEffect(() => {
        document.title = title ? title : 'EVC Avatars | Vesting';

        document.querySelector('.page-title').innerText = "Vesting";

        const getData = async () => {
            const remainingAmtInfo = await getRemainingAmountVested();
            const nextRedeemTimeInfo = await getNextRedeemTime();
            setRemainingAmount(remainingAmtInfo);
            setRedeemTime(nextRedeemTimeInfo);
        }
        getData();

    }, [])

    //dev:  Current Time
    const start = Date.now();
    let epoch = start / 1000;
    let myepoch = epoch.toFixed(0);
    console.log("epoch...", myepoch);

    return (
        <>

            <div className="dashboard-wrap">
                <Breadcrumb>
                    <li className="breadcrumb-item">
                        <Link to="/">HOME</Link>
                    </li>
                    <Breadcrumb.Item active>Vesting</Breadcrumb.Item>
                </Breadcrumb>

                <div className="dash-content-area">
                    <div className="h4 font-gilroy fw-semibold mt-3 mb-4 pb-3">Claim Your EVC Token</div>

                    <div className="dash-global-wrap">
                        <div className="d-flex flex-wrap gap-4 align-items-center mb-3 justify-content-center justify-content-sm-between">
                            <span className="fw-semibold">Vesting</span>
                            <div className="staking-from-wrap d-flex gap-0 align-items-center ms-sm-auto">
                                <button className="p-0 bg-transparent"><AiOutlineSearch /> </button>
                                <input type="text" placeholder="Search" className="form-control" />
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table evc-table">
                                <thead>
                                    <tr className="text-uppercase">
                                        <th>Vesting Stage</th>
                                        <th>Claimable</th>
                                        <th>Remaining</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Private1</td>
                                        <td>{(remainingAmount * 0.1).toFixed(4)} EVC</td>
                                        <td>{remainingAmount} EVC</td>
                                        <td><a href="#" className="btn btn-sm btn-primary fs-6"
                                            onClick={redeemTime < myepoch ? (() => setClaimVested()) : (() => alert("You have already claimed for today. Please claim after 24 hours"))}>Claim</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Vesting;