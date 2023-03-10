import ClientCard from "./ClientCard";

const dummyClients = [
    {
        logo: require('../../../assets/logos/DBS.png'),
        title: 'DBS Bank',
        description: 'DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.'
    },
    {
        logo: require('../../../assets/logos/proudfoot.png'),
        title: 'Proudfoot',
        description: 'Proudfoot engages teams and leadership, at all levels, to create innovative solutions to operational constraints and solve the people challenge associated with making sure that change takes place.'
    },
    {
        logo: require('../../../assets/logos/rmi.png'),
        title: 'RMI',
        description: 'RMI is a trusted global verification partner for Asia-Pacific organisations, offering a highly personalised and comprehensive background screening service.'
    },
]

const Clients = () => {
    return (
        <div className="mb-[6vh]">
            <h3 className="font-bold text-xl">Your client list</h3>
            <p className="mb-[3vh]">You currently servicing 3 clients</p>
            <div className="flex">
                { dummyClients.map((item, index) => (
                    <ClientCard key={index} item={item} />
                ))}
            </div>
        </div>
    )
}


export default Clients;