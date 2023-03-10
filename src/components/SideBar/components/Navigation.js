import DashboardIcon from '../../../assets/icons/dashboard.png';
import ApprovalsIcon from '../../../assets/icons/approvals.png';

const Navigation = () => {
    return (
        <div className="">
            <h3 className='font-light text-sm tracking-[0.1em] mb-2'>NAVIGATION</h3>
            <div className='flex items-center mb-2'>
                <img src={DashboardIcon} alt='dashboard-icon' className='object-contain' />
                <span className='font-bold text-base text-[#1E67AF] ml-2'>Dashboard</span>
            </div>
            <div className='flex items-center'>
                <img src={ApprovalsIcon} alt='dashboard-icon' className='object-contain' />
                <span className='font-bold text-base ml-2'>Approvals</span>
            </div>
        </div>
    )
}

export default Navigation;