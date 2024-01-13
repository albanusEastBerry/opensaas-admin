import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import PartnersTable from '../Partners/partnersTable';

const Dashboard = () => {
  const [showPartnersTable, setShowPartnersTable] = useState(false);

  const togglePartnersTable = () => {
    setShowPartnersTable(!showPartnersTable);
  };

  return (
    <div className="flex overflow-hidden">
      <Sidebar togglePartnersTable={togglePartnersTable} />
      <div className="content">
        {showPartnersTable ? (
          <div className="flex">
            <PartnersTable />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Dashboard;