import React, { useState, useMemo } from "react";
import { Search, Filter, UserCheck, Mail, Phone, MapPin, Menu, Warehouse } from 'lucide-react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import Sidebar1 from "components/Sidebar1";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
import "primeicons/primeicons.css";
const INITIAL_USERS = [
    { id: "CUS-001", name: "Kristin Watson", time: "10:00 AM", status: "Active", email: "kristin@example.com", phone: "+1 234 567 890", location: "New York, USA", verification: "Completed" },
    { id: "CUS-002", name: "Kristin Watson", time: "10:00 AM", status: "Active", email: "kristin@example.com", phone: "+1 234 567 890", location: "London, UK", verification: "Completed" },
    { id: "CUS-003", name: "Kristin Watson", time: "10:00 AM", status: "Inactive", email: "kristin@example.com", phone: "+1 234 567 890", location: "Paris, France", verification: "UnCompleted" },
    { id: "CUS-004", name: "Kristin Watson", time: "10:00 AM", status: "Inactive", email: "kristin@example.com", phone: "+1 234 567 890", location: "Berlin, Germany", verification: "Completed" },
    { id: "CUS-005", name: "Kristin Watson", time: "10:00 AM", status: "Inactive", email: "kristin@example.com", phone: "+1 234 567 890", location: "Dubai, UAE", verification: "UnCompleted" },
    { id: "CUS-006", name: "Kristin Watson", time: "10:00 AM", status: "Active", email: "kristin@example.com", phone: "+1 234 567 890", location: "Tokyo, Japan", verification: "Completed" },
    { id: "CUS-007", name: "Kristin Watson", time: "10:00 AM", status: "Active", email: "kristin@example.com", phone: "+1 234 567 890", location: "Sydney, Australia", verification: "Completed" },
    { id: "CUS-008", name: "Kristin Watson", time: "10:00 AM", status: "Inactive", email: "kristin@example.com", phone: "+1 234 567 890", location: "Toronto, Canada", verification: "Unverified" },
    { id: "CUS-009", name: "Kristin Watson", time: "10:00 AM", status: "Active", email: "kristin@example.com", phone: "+1 234 567 890", location: "Mumbai, India", verification: "Completed" },
];

const TOP_COMPANIES = [
  { id: 1, name: "Oil Change", totalJobs: "226", completed: "203", rating: "4.6" },
  { id: 2, name: "Brake Repair", totalJobs: "150", completed: "142", rating: "4.8" },
  { id: 3, name: "Tire Rotation", totalJobs: "95", completed: "90", rating: "4.5" },
  { id: 4, name: "Engine Tune-up", totalJobs: "60", completed: "55", rating: "4.9" },
];

export default function ServiceProvider() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);
  const [visible, setVisible] = useState(false);

  // Search & Filter Logic
  const filteredUsers = useMemo(() => {
    return INITIAL_USERS.filter((user) => {
      const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            user.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === "All" || user.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const toggleFilter = () => {
    const statuses = ["All", "Active", "Inactive"];
    const currentIndex = statuses.indexOf(statusFilter);
    setStatusFilter(statuses[(currentIndex + 1) % statuses.length]);
  };

  return (
    <div className="flex h-screen bg-[#F9FAFB] overflow-hidden font-sans">
      
      {/* 1. Integrated Sidebar */}
      <Sidebar1 isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Navbar (For Mobile & Header) */}
        <header className="flex items-center justify-between p-4 lg:px-10 lg:py-6 bg-transparent">
          <div className="flex items-center gap-4">
            
            <h1 style={{fontFamily:'NeueMontreal'}} className="text-2xl lg:text-3xl font-medium text-gray-900 tracking-tight">
              User Management (Service Providers)
            </h1>
          </div>
          <div className="w-10 h-10 rounded-xl overflow-hidden border shadow-sm flex-shrink-0">
            <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" className="w-full h-full object-cover" />
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto  pt-0 pl-5 pr-5">
          <div className="grid grid-cols-[65%_calc(35%-2rem)] md:grid-cols-1 lg:grid-cols-[65%_calc(35%-2rem)] gap-5">
            
            {/* Grid Section */}
            <div style={{background:'white',boxShadow:'0px 0px 3px 0px #c3c3c3d1'}} className="xl:col-span-2 bg-white p-5 lg:p-8 rounded-[32px] border border-gray-50 shadow-sm self-start">
              
              <div className="flex items-center justify-between mb-8 gap-4">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <InputText 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by Customer ID or Name"
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:ring-1 focus:ring-red-400"
                  />
                </div>
                <Button 
                  icon={<Filter size={18} className={statusFilter !== 'All' ? 'text-white' : 'text-[#EA352B]'} />}
                  onClick={toggleFilter}
                  className={`p-2.5 rounded-xl border transition-all ${statusFilter !== 'All' ? 'bg-red-500' : 'bg-white'}`}
                  tooltip={`Current: ${statusFilter}`}
                />
              </div>

              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-4">
                {filteredUsers.map((user) => (
                  <div style={{boxShadow:"rgb(172 168 168 / 82%) 0px 0px 2px 0px"}}
                    key={user.id} 
                    onClick={() => { setSelectedUser(user); setVisible(true); }}
                    className="bg-[#F6F6F6] p-4 rounded-[20px] border border-transparent hover:border-red-100 hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <img src={`https://i.pravatar.cc/150?u=${user.id}`} className="w-10 h-10 rounded-lg object-cover" alt="" />
                      <div>
                        <p style={{fontFamily:'NeueMontreal'}} className="text-[14px] font-medium text-black group-hover:text-red-600">{user.name}</p>
                        <p style={{fontFamily:'NeueMontreal'}} className="text-[12px] text-black font-light">{user.time}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-gray-200/50">
                      <span style={{fontFamily:'NeueMontreal'}} className="text-[11px] text-[black] font-light">Status</span>
                      <span style={{fontFamily:'NeueMontreal'}} className={`text-[14px] font-medium ${user.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                        {user.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-gray-200/50">
                      <span style={{fontFamily:'NeueMontreal'}} className="text-[11px] text-[black] font-light">Verification</span>
                      <span style={{fontFamily:'NeueMontreal'}} className={`text-[14px] font-medium text-[black]`}>
                        {user.verification}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Customers Sidebar */}
            <div style={{background:'white',boxShadow:'0px 0px 3px 0px #c3c3c3d1'}} className="bg-white p-6 rounded-[32px] border border-gray-50 shadow-sm h-fit">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-1.5 bg-red-50 rounded-lg"><Warehouse  size={16} className="text-[#EA352B]" /></div>
                <h3 style={{fontFamily:'NeueMontreal'}} className="text-[20px] font-medium text-black">Top Companies</h3>
              </div>
              <div className="space-y-6">
      {TOP_COMPANIES.map((company) => (
        <div 
          key={company.id} 
          style={{boxShadow:'rgb(172 168 168 / 82%) 0px 0px 2px 0px'}} className="bg-[#F9FAFB] p-3 rounded-2xl  items-center justify-between group"
        >   <h2 style={{fontFamily:'NeueMontreal'}} className="text-[15px] font-light text-black mb-5">{company.name}</h2>
          <div className="grid grid-cols-3 gap-0">
            <div> <p className="text-[13px] text-gray-500 font-normal mb-3 truncate block w-full">Total Jobs Offer</p>
              <p className="text-[15px] font-light text-black leading-none">{company.totalJobs} </p>
            </div>
            <div><p className="text-[13px] text-gray-500 font-normal mb-3 truncate block w-full"> Jobs Completed </p>
              <p className="text-[15px] font-light text-black leading-none"> {company.completed}</p>
            </div>
            <div>
              <p className="text-[13px] text-gray-500 font-normal mb-3 truncate block w-full">
                Customer Rating
              </p>
              <p className="text-[15px] font-light text-black leading-none">
                {company.rating}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
            </div>
          </div>
        </div>
      </main>

      {/* Details Modal */}
      <Dialog  
        header="Customer Profile" visible={visible} onHide={() => setVisible(false)}
        className="w-[50vw] md:w-[450px]" draggable={false}
      >
        {selectedUser && (
          <div className="text-center">
            <img src={`https://i.pravatar.cc/150?u=${selectedUser.id}`} className="w-24 h-24 rounded-2xl mx-auto mb-4 border-4 border-red-50" alt="" />
            <h2 className="text-xl font-bold">{selectedUser.name}</h2>
            <Tag value={selectedUser.status} severity={selectedUser.status === 'Active' ? 'success' : 'danger'} className="mt-1" />
            
            <div className="mt-8 text-left space-y-4 border-t pt-6">
              <div className="flex gap-4"><Mail className="text-gray-400" size={18}/> <div><p className="text-[10px] text-gray-400 font-bold uppercase">Email</p><p className="text-sm">{selectedUser.email}</p></div></div>
              <div className="flex gap-4"><Phone className="text-gray-400" size={18}/> <div><p className="text-[10px] text-gray-400 font-bold uppercase">Phone</p><p className="text-sm">{selectedUser.phone}</p></div></div>
              <div className="flex gap-4"><MapPin className="text-gray-400" size={18}/> <div><p className="text-[10px] text-gray-400 font-bold uppercase">Location</p><p className="text-sm">{selectedUser.location}</p></div></div>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
}