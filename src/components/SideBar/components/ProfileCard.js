import ProfilePhoto from '../../../assets/images/Radhika.png'

const ProfileCard = () => {
    return (
        <div className="">
            <img src={ProfilePhoto} alt="Profile" className='mb-2' />
            <h3 className='font-bold text-lg'>Radhika Dhawan Puri</h3>
            <span className='font-light text-base'>Senior Client Services</span>
        </div>
    )
}

export default ProfileCard;