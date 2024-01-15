import React, { useState, useEffect } from 'react';
import { StaffsDataTable } from '../../components/data-table/StaffsDataTable';
import partnersData from '../../data/partnersData';

const StaffsTable = ({ staffData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(staffData);

  useEffect(() => {
    const updatedData = staffData.filter((staff) => {
      const matchesSearch = staff.first_name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });

    setFilteredData(updatedData);
  }, [searchTerm, staffData]);

  const columns = [
    {
      accessorKey: "first_name",
      header: 'Name',
    },
    {
      accessorKey: "email",
      header: 'Email',
    },
    {
      accessorKey: "gender",
      header: 'Gender',
    },
  ];

  return (
    <div className="w-[800px] h-full mr-6 text-black overflow-auto">
      <div className="h-full">
        <div className="flex justify-between items-center border p-3 rounded-md">
          <div className="flex items-center space-x-4">
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border p-2 rounded-md"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <StaffsDataTable data={filteredData} columns={columns} />
      </div>
    </div>
  );  
};

export default StaffsTable;