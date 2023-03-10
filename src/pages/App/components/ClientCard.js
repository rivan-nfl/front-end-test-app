const ClientCard = ({ item }) => {
    return (
        <div className="bg-[white] p-4 w-[16vw] mr-6 rounded flex box-border">
            <div>
                <img src={item.logo} alt='logo' className="h-[15%] object-contain mt-2 mb-4" />
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
            </div>
            <i class="fas fa-ellipsis-h"></i>
        </div>
    )
}


export default ClientCard;