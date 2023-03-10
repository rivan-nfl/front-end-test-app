import React, { useEffect, useState } from "react";
import TableApprovals from "./TableApprovals";

const Approvals = () => {
    const [approvalsData, setApprovalsData] = useState([])

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10')
        .then(response => response.json())
        .then(res => setApprovalsData(res))
        .catch(err => console.log(err))
    }, [])
    
    return (
        <div className="">
            <div className="flex items-center justify-between mb-[3vh]">
                <div>
                    <h3 className="font-bold text-xl">Recent approvals</h3>
                    <p className="">You can find the recent on-going approvals here</p>
                </div>
                <div className="flex items-center bg-[#1E67AF] py-2 px-5 rounded-full">
                    <i className="fas fa-plus mr-2 text-white"></i>
                    <h4 className="text-white font-bold">Create new approval</h4>
                </div>
            </div>
            {/* Table approvals */}
            <TableApprovals data={approvalsData} />
            <h1 className="mt-[2vh] font-bold text-[#1E67AF] cursor-pointer">See all approvals here</h1>
        </div>
    )
}


export default Approvals;