import React, { useState, useEffect } from 'react';
import partnersData from '../../data/partnersData';
import { DataTable } from '../../components/data-table/partnerTable';
import { FolderCog } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { 
    DropdownMenu,
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuLabel, 
    DropdownMenuRadioGroup, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger 
} from '../../components/ui/dropdown-menu';

const PartnersTable = () => {
  const [filters, setFilters] = useState({
    membershipType: null,
    status: null,
    city: null,
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(partnersData);
  const [showCityMenu, setShowCityMenu] = useState(false);
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [showMembershipMenu, setShowMembershipMenu] = useState(false);

  const handleFilterChange = (filterKey, value) => {
    setFilters({ ...filters, [filterKey]: value });
  };

  useEffect(() => {
    const updatedData = partnersData.filter((partner) => {
      const matchesMembership = !filters.membershipType || partner.memberShipType === filters.membershipType;
      const matchesStatus = !filters.status || partner.status === filters.status;
      const matchesCity = !filters.city || partner.city === filters.city;
      const matchesSearch = partner.BusinessName.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesMembership && matchesStatus && matchesCity && matchesSearch;
    });

    setFilteredData(updatedData);
  }, [filters, searchTerm]);

  const generateDropdownOptions = (key) => {
    return Array.from(new Set(partnersData.map(partner => partner[key]))).map(item => (
      <DropdownMenuItem key={item} onClick={() => handleFilterChange(key, item)}>
        {item}
      </DropdownMenuItem>
    ));
  };

  const columns = [
    {
      accessorKey: "BusinessName",
      header: 'Business name',
    },
    {
      accessorKey: "city",
      header: 'City',
    },
    {
      accessorKey: "staffCount",
      header: 'Staff',
    },
    {
      accessorKey: "businessType",
      header: 'Business type',
    },
    {
      accessorKey: "memberShipType",
      header: 'Membership Type',
    },
    {
      accessorKey: "totalBookings",
      header: 'Total Bookings',
    },
    {
      accessorKey: "pendingBookings",
      header: 'Pending Bookings',
    },
    {
      accessorKey: "status",
      header: 'Status',
    },
    {
      header: 'Actions',
      cell: ({ row }) => {
        console.log(row.original)
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 p-2">
              <FolderCog />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Select Action</DropdownMenuLabel>
              <DropdownMenuItem>
                <Button className='bg-gray-300'>
                    View
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className='bg-orange-300'>
                    Suspend
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className='bg-red-400'>
                    Delete
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ];

  return (
    <div className="w-[100%] h-screen">
        <div className="bg-white pb-4 px-6 rounded-md w-full md:w-[95vw] min-w-screen">
            <div className="my-6 flex justify-between items-center">
            <h2 className="text-3xl font-semibold">Partners</h2>
            <div className="flex items-center space-x-4">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Sort</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-black text-white w-20">
                        <DropdownMenuLabel>Sort By</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup value={'position'} onValueChange={'setPosition'}>
                        {/* <DropdownMenuRadioItem value="top">City</DropdownMenuRadioItem> */}
                        <div
                            onClick={() => setShowCityMenu(!showCityMenu)}
                            >
                            <span className='cursor-pointer font-bold'>City</span>
                            {showCityMenu && (
                                <DropdownMenu>
                                {generateDropdownOptions('city')}
                                </DropdownMenu>
                            )}
                        </div>
                        <div
                            onClick={() => setShowStatusMenu(!showStatusMenu)}
                            >
                            <span className='cursor-pointer font-bold'>Status</span>
                            {showStatusMenu && (
                                <DropdownMenu className='pl-4'>
                                {generateDropdownOptions('status')}
                                </DropdownMenu>
                            )}
                        </div>
                        <div
                            onClick={() => setShowMembershipMenu(!showMembershipMenu)}
                            >
                            <span className='cursor-pointer font-bold'>Membership</span>
                            {showMembershipMenu && (
                                <DropdownMenu>
                                {generateDropdownOptions('memberShipType')}
                                </DropdownMenu>
                            )}
                        </div>
                        {/* <DropdownMenuRadioItem value="bottom">Status</DropdownMenuRadioItem> */}
                        {/* <DropdownMenuRadioItem value="right">Membership</DropdownMenuRadioItem> */}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>

                <input
                type="text"
                placeholder="Search..."
                className="border p-2 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            </div>
            <DataTable data={filteredData} columns={columns} />
        </div>
    </div>
  );
};

export default PartnersTable;