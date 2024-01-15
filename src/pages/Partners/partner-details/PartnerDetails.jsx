import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../../components/sidebar/Sidebar';
import { CardDemo } from './PartnerCard';
import partnersData from '../../../data/partnersData';
import StaffsTable from '../../Staffs/StaffsTable';

const PartnerDetails = () => {
  const { partnerId } = useParams();
  const selectedPartner = partnersData.find((partner) => partner.id === Number(partnerId));
  const staff = selectedPartner ? selectedPartner.staffs : [];

  return (
    <div className="flex">
      <div className="bg-gray-200">
        <Sidebar />
      </div>
      <div className='flex my-8'>
        <div className="flex-1 ml-4">
          {selectedPartner ? (
            <CardDemo partnerDetails={selectedPartner} />
          ) : (
            <p>No partner found</p>
          )}
        </div>
        <div className='bg-secondary rounded-lg ml-4'>
          <div className='p-2 rounded-t-lg justify-between bg-blue-500 flex'>
            <span className='cursor-pointer hover:bg-white p-2 px-4 rounded-md transition-all duration-300 ease-in-out'>Staff</span>
            <span className='cursor-pointer hover:bg-white p-2 rounded-md transition-all duration-300 ease-in-out'>Bookings</span>
            <span className='cursor-pointer hover:bg-white p-2 rounded-md transition-all duration-300 ease-in-out'>Requests</span>
            <span className='cursor-pointer hover:bg-white p-2 rounded-md transition-all duration-300 ease-in-out'>Transactions</span>
          </div>
          <div className="p-6">
            <StaffsTable staffData={staff} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;