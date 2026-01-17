import React, { useState, useMemo } from "react";
import { Search, Filter, UserCheck, Mail, Phone, MapPin, Menu } from 'lucide-react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import Sidebar1 from "components/Sidebar1";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
import "primeicons/primeicons.css";
const INITIAL_USERS = [
    { id: "CUS-001", name: "Kristin Watson", time: "10:00 AM", status: "Active", email: "kristin@example.com", phone: "+1 234 567 890", location: "New York, USA" },
    { id: "CUS-002", name: "Kristin Watson", time: "10:00 AM", status: "Active", email: "kristin@example.com", phone: "+1 234 567 890", location: "London, UK" },
    { id: "CUS-003", name: "Kristin Watson", time: "10:00 AM", status: "Inactive", email: "kristin@example.com", phone: "+1 234 567 890", location: "Paris, France" },
    { id: "CUS-004", name: "Kristin Watson", time: "10:00 AM", status: "Inactive", email: "kristin@example.com", phone: "+1 234 567 890", location: "Berlin, Germany" },
    { id: "CUS-005", name: "Kristin Watson", time: "10:00 AM", status: "Inactive", email: "kristin@example.com", phone: "+1 234 567 890", location: "Dubai, UAE" },
    { id: "CUS-006", name: "Kristin Watson", time: "10:00 AM", status: "Active", email: "kristin@example.com", phone: "+1 234 567 890", location: "Tokyo, Japan" },
    { id: "CUS-007", name: "Kristin Watson", time: "10:00 AM", status: "Active", email: "kristin@example.com", phone: "+1 234 567 890", location: "Sydney, Australia" },
    { id: "CUS-008", name: "Kristin Watson", time: "10:00 AM", status: "Inactive", email: "kristin@example.com", phone: "+1 234 567 890", location: "Toronto, Canada" },
    { id: "CUS-009", name: "Kristin Watson", time: "10:00 AM", status: "Active", email: "kristin@example.com", phone: "+1 234 567 890", location: "Mumbai, India" },
];

const TOP_CUSTOMERS = [
  { id: 1, name: "Kristin Watson", visits: "26 Visits", orders: "11" },
  { id: 2, name: "Kristin Watson", visits: "26 Visits", orders: "11" },
  { id: 3, name: "Kristin Watson", visits: "26 Visits", orders: "11" },
  { id: 4, name: "Kristin Watson", visits: "26 Visits", orders: "11" },
  { id: 5, name: "Kristin Watson", visits: "26 Visits", orders: "11" },
];

export default function UserManagement() {
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
              User Management (Customers)
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
                  </div>
                ))}
              </div>
            </div>

            {/* Top Customers Sidebar */}
            <div style={{background:'white',boxShadow:'0px 0px 3px 0px #c3c3c3d1'}} className="bg-white p-6 rounded-[32px] border border-gray-50 shadow-sm h-fit">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-1.5 bg-red-50 rounded-lg"><UserCheck size={16} className="text-[#EA352B]" /></div>
                <h3 style={{fontFamily:'NeueMontreal'}} className="text-[20px] font-medium text-black">Top Customers</h3>
              </div>
              <div className="space-y-4">
                {TOP_CUSTOMERS.map((customer) => (
                  <div key={customer.id} style={{boxShadow:'rgb(172 168 168 / 82%) 0px 0px 2px 0px'}} className="bg-[#F9FAFB] p-3 rounded-2xl flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <img src={`https://i.pravatar.cc/150?u=c${customer.id}`} className="w-10 h-10 rounded-lg object-cover" alt="" />
                      <div>
                        <p style={{fontFamily:'NeueMontreal'}} className="text-[14px] font-medium text-black">{customer.name}</p>
                        <p style={{fontFamily:'NeueMontreal'}} className="text-[11px] text-black font-light">{customer.visits}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p style={{fontFamily:'NeueMontreal'}} className="text-[11px] text-black font-medium">Processed Orders</p>
                      <p style={{fontFamily:'NeueMontreal'}} className="text-sm font-black text-black">{customer.orders}</p>
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