import ClientsIcon from '../../../assets/icons/clients.png';
import EditIcon from '../../../assets/icons/edit.png';

const Account = () => {
    return (
        <div className="">
            <h3 className='font-light text-sm tracking-[0.1em] mb-2'>MY ACCOUNT</h3>
            <div className='flex items-center mb-2'>
                <img src={ClientsIcon} alt='dashboard-icon' className='object-contain' />
                <span className='font-bold text-base ml-2'>My clients</span>
            </div>
            <div className='flex items-center'>
                <img src={EditIcon} alt='dashboard-icon' className='object-contain' />
                <span className='font-bold text-base ml-2'>Edit profile</span>
            </div>
        </div>
    )
}

export default Account;