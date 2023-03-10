const TableApprovals = ({ data = [] }) => {
    return (
        <div>
            <div className="bg-white rounded flex items-center justify-between p-3 shadow-[2px_2px_4px_rgba(0,0,0,0.05)]">
                <h3 className="w-[10%]">Clients</h3>
                <h3 className="w-[40%]">Name</h3>
                <h3 className="w-[25%]">Current Price</h3>
                <h3 className="w-[25%]">Market Cap</h3>
            </div>
            { data.map((item, index) => (
                <div key={index} className="bg-white rounded flex items-center justify-between p-3 shadow-[2px_2px_4px_rgba(0,0,0,0.05)] mt-3">
                    <div className="w-[10%]">
                        <img src={item.image} alt='logo' className="w-[30%]" />
                    </div>
                    <h3 className="w-[40%]">{item.name}</h3>
                    <h3 className="w-[25%]">{item.current_price}</h3>
                    <h3 className="w-[25%]">{item.market_cap}</h3>
                </div>
            ))}
        </div>
    )
}

export default TableApprovals;