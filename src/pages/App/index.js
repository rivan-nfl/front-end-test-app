import './App.css';

import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import Clients from './components/Clients';
import Approvals from './components/Approvals';
import Footer from '../../components/Footer';

const App = () => {
  return (
    <div className='flex h-screen bg-[#DCDCDC]'>
      <SideBar />
      <div className='w-full overflow-y-scroll'>
        <Header />
        <div className='p-8 pb-0'>
          <h1 className='font-bold text-3xl mb-[6vh]'>Hi Radhika, welcome back!</h1>
          {/* Client List */}
          <Clients />
          {/* Approvals */}
          <Approvals />
        </div>
        <Footer />
      </div>
    </div>
  )
};

export default App;