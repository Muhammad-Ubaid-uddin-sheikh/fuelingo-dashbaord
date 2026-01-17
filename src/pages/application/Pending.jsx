import React, { useState } from 'react';
import Sidebar1 from "components/Sidebar1";
import ApplicationCard from './ApplicationCard';
import DocumentModal from './DocumentModal';


const PendingApplications = () => {
  const [selectedApp, setSelectedApp] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleView = (app) => {
    setSelectedApp(app);
    setModalVisible(true);
  };
// Dummy Data
const YOUR_DATA = [
  // Pending
  {
    id: 1,
    title: "Fuel Station Alpha",
    location: "Sheikh Zayed Road, Dubai, UAE",
    date: "12 June 2024 At 09:30 AM",
    status: "Pending",
    image: "https://s3.amazonaws.com/images.seroundtable.com/google-amp-1454071566.jpg",
    vat: "111222333",
    email: "alpha@fuelstation.com",
    phone: "+971 50 123 4567",
  },
  {
    id: 2,
    title: "Fuel Station Beta",
    location: "Al Barsha, Dubai, UAE",
    date: "14 June 2024 At 11:00 AM",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=150",
    vat: "222333444",
    email: "beta@fuelstation.com",
    phone: "+971 55 234 5678",
  },
  {
    id: 3,
    title: "Fuel Station Gamma",
    location: "Deira, Dubai, UAE",
    date: "15 June 2024 At 03:15 PM",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=150",
    vat: "333444555",
    email: "gamma@fuelstation.com",
    phone: "+971 52 345 6789",
  },
  {
    id: 4,
    title: "Fuel Station Delta",
    location: "Business Bay, Dubai, UAE",
    date: "10 June 2024 At 01:00 PM",
    // status: "Approved",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=150",
    vat: "444555666",
    email: "delta@fuelstation.com",
    phone: "+971 56 456 7890",
  },
  {
    id: 5,
    title: "Fuel Station Epsilon",
    location: "Jumeirah, Dubai, UAE",
    date: "08 June 2024 At 10:45 AM",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=150",
    vat: "555666777",
    email: "epsilon@fuelstation.com",
    phone: "+971 54 567 8901",
  },
  {
    id: 6,
    title: "Fuel Station Zeta",
    location: "Dubai Marina, Dubai, UAE",
    date: "09 June 2024 At 04:20 PM",
   status: "Pending",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=150",
    vat: "666777888",
    email: "zeta@fuelstation.com",
    phone: "+971 58 678 9012",
  },

  {
    id: 7,
    title: "Fuel Station Eta",
    location: "Al Qusais, Dubai, UAE",
    date: "05 June 2024 At 02:10 PM",
    // status: "Rejected",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=150",
    vat: "777888999",
    email: "eta@fuelstation.com",
    phone: "+971 50 789 0123",
  },
  {
    id: 8,
    title: "Fuel Station Theta",
    location: "International City, Dubai, UAE",
    date: "06 June 2024 At 12:00 PM",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=150",
    vat: "888999000",
    email: "theta@fuelstation.com",
    phone: "+971 55 890 1234",
  },
  {
    id: 9,
    title: "Fuel Station Iota",
    location: "Al Nahda, Dubai, UAE",
    date: "07 June 2024 At 05:30 PM",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=150",
    vat: "999000111",
    email: "iota@fuelstation.com",
    phone: "+971 52 901 2345",
  },
];

  return (
    <div className="flex h-screen bg-[#F9FAFB] overflow-hidden">
      <Sidebar1 />
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-medium mb-10">Pending Applications</h1>
        
        <div style={{background:'white',boxShadow:'0px 0px 3px 0px #c3c3c3d1'}} className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5  rounded-[10px]">
          {/* Loop over your data */}
          {YOUR_DATA.map(app => (
            <ApplicationCard 
              key={app.id} 
              data={app} 
              onView={() => handleView(app)} 
            />
          ))}
        </div>

        {/* Global Modal for this page */}
        <DocumentModal 
          visible={modalVisible} 
          onHide={() => setModalVisible(false)} 
          data={selectedApp} 
        />
      </main>
    </div>
  );
};
export default PendingApplications;

