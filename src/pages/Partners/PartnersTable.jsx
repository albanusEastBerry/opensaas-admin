import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import partnersData from '../../data/partnersData';
import { DataTable } from '../../components/data-table/PartnersDataTable';
import { FolderCog, ArrowUpDown } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { 
    DropdownMenu,
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuLabel,  
    DropdownMenuTrigger 
} from '../../components/ui/dropdown-menu';

const PartnersTable = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(partnersData);

  useEffect(() => {
    const updatedData = partnersData.filter((partner) => {
      const matchesSearch = partner.BusinessName.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesSearch;
    });

    setFilteredData(updatedData);
  }, [searchTerm]);
  const navigate = useNavigate();
  const partnerSelected = (partner) => {
    navigate(`/partner/${partner.id}`);
  };
  const columns = [
    {
      accessorKey: "BusinessName",
      header: 'Business name',
    },
    {
      accessorKey: "city",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            City
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
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
              <Button onClick={() => navigate(`/partner/${row.original.id}`)}>
                View
              </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant="secondary">
                    Suspend
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button variant='destructive'>
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
        <div className="pb-4 px-6 rounded-md w-full md:w-[95vw] min-w-screen">
            <div className="my-6 flex justify-between items-center bg-black border p-3 rounded-md text-white">
            <h2 className="text-3xl font-semibold">Partners</h2>
            <div className="flex items-center space-x-4">
                <input
                type="text"
                placeholder="Search..."
                className="border p-2 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            </div>
            <DataTable 
              data={filteredData} 
              columns={columns} 
              partnerSelected={partnerSelected}
            />
        </div>
    </div>
  );
};

export default PartnersTable;