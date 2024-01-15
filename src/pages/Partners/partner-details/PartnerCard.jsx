import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Home, User } from "lucide-react";

export function CardDemo({ partnerDetails, className, ...props }) {
  const {
    first_name,
    last_name,
    mobile_number,
    address,
  } = partnerDetails;

  return (
    <Card className='w-fit border-l-4 border-blue-500'>
      <CardHeader className="bg-blue-500">
        <CardTitle className="text-white">Partner Details</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center space-x-4">
          <User className="w-6 h-6 text-blue-500" />
          <div className="space-y-1">
            <p className="text-lg font-semibold">{first_name} {last_name}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Phone className="w-6 h-6 text-blue-500" />
          <p className="text-sm text-gray-600">{mobile_number}</p>
        </div>
        <div className="flex items-center space-x-4">
          <Home className="w-6 h-6 text-blue-500" />
          <p className="text-sm text-gray-600">{address}</p>
        </div>
      </CardContent>
    </Card>
  );
}