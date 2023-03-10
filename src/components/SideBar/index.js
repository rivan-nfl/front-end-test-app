import Account from "./components/Account";
import Navigation from "./components/Navigation";
import ProfileCard from "./components/ProfileCard";
import SideBarHeader from "./components/SideBarHeader";

const SideBar = () => {
    return (
        <div className="bg-[#FFF] w-[15vw]">
            <SideBarHeader />
            {/* <div className="pt-[6vh] px-[2vh] shadow-[0px_0px_4px_rgba(0,0,0,0.05)]"> */}
            <div className="pt-[6vh] px-[2vh]">
                <ProfileCard />
                <div className="border my-[3vh]" />
                <Navigation />
                <div className="border my-[3vh]" />
                <Account />
            </div>
        </div>
    )
}

export default SideBar;