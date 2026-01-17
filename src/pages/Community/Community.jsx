import React, { useState, useMemo } from "react";
import { Search, Eye, EyeOff, Trash2, X, MessageSquare, BarChart3, ShieldAlert } from 'lucide-react';
import { InputText } from 'primereact/inputtext';
import Sidebar1 from "components/Sidebar1";

const ALL_POSTS = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    post: `Post number ${i + 1}: Has anyone tried the new eco-route feature?`,
    author: `user_${i + 100}`,
    date: `${10 + (i % 20)}/09/2024`,
    status: i % 3 === 0 ? "Inactive" : "Active",
    authorImg: `https://i.pravatar.cc/150?u=${i}`
}));

export default function CommunityManagement() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const filteredPosts = useMemo(() => {
    setCurrentPage(1); 
    return ALL_POSTS.filter((p) => 
      p.post.toLowerCase().includes(searchTerm.toLowerCase()) || 
      p.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // --- PAGINATION LOGIC ---
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex h-screen bg-[#F9FAFB] overflow-hidden font-sans relative">
      <Sidebar1 isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      {selectedPost && (
        <div 
          onClick={() => setSelectedPost(null)} 
          className="fixed inset-0 bg-white/10 backdrop-blur-[1px] z-[40]"
        />
      )}
      <main className={`flex-1 flex flex-col min-w-0 overflow-hidden transition-all duration-500 ${selectedPost ? 'blur-md pointer-events-none' : ''}`}>
        
        {/* Header */}
        <header className="flex items-center justify-between p-4 lg:px-10 lg:py-6">
          <h1 style={{fontFamily:'NeueMontreal'}} className="text-2xl lg:text-3xl font-medium text-gray-900">
            Community Management
          </h1>
          <div className="flex items-center gap-4">
             <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <InputText 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by Customer ID or Post"
                    className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm w-72 outline-none"
                />
             </div>
             <div className="w-10 h-10 rounded-xl overflow-hidden border shadow-sm">
                <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" className="w-full h-full object-cover" />
             </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 lg:px-10 pb-10">
          
          <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-8">
            <StatCard label="Total Posts Today" value="50" sub="10% from Yesterday" icon={<MessageSquare size={20} className="text-red-500" />} />
            <StatCard label="Flagged Posts" value="0" icon={<ShieldAlert size={20} className="text-red-500" />} />
            <StatCard label="Avg Mod Time" value="2h 12m" icon={<BarChart3 size={20} className="text-red-500" />} />
          </div>

          <div style={{background:'white',boxShadow:'0px 0px 3px 0px #c3c3c3d1'}} className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-sm overflow-hidden min-h-[600px] flex flex-col">
            <div className="flex-1 overflow-x-auto">
              <table className="w-full text-left border-separate border-spacing-y-3">
                <thead>
                  <tr style={{fontFamily:"'NeueMontreal', sans-serif"}} className="text-black text-[15px] font-light">
                    <th className="pb-4 pl-4 font-normal">Post</th>
                    <th className="pb-4 font-normal">Author</th>
                    <th className="pb-4 font-normal">Date</th>
                    <th className="pb-4 font-normal">Status</th>
                    <th className="pb-4 text-center font-normal">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item) => (
                    <tr key={item.id} className="group  transition-all rounded-2xl">
                      <td className="py-4 pl-4 text-sm max-w-[280px] truncate font-light text-gray-700">{item.post}</td>
                      <td className="py-4">
                        <div className="flex items-center gap-2">
                          <img src={item.authorImg} className="w-7 h-7 rounded-full" alt="" />
                          <span style={{fontFamily:"'NeueMontreal', sans-serif"}} className="text-[13px] font-medium">{item.author}</span>
                        </div>
                      </td>
                      <td style={{fontFamily:"'NeueMontreal', sans-serif"}} className="py-4 text-[13px] text-gray-500">{item.date}</td>
                      <td className="py-4">
                        <span style={{fontFamily:"'NeueMontreal', sans-serif",background:item.status === 'Active' ? '#CFF4DD' : '808080'}} className={`px-4 py-1 rounded-full text-[11px] font-medium ${item.status === 'Active' ? 'bg-green-50 text-[#12A54B]' : 'bg-gray-100 text-gray-400'}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex  justify-center gap-2">
                          <button style={{color:'white',fontFamily:'NeueMontreal'}} onClick={() => setSelectedPost(item)} className="bg-[#2D2D2D] text-white px-4 py-1.5 rounded-lg text-[11px] flex items-center gap-1.5 hover:opacity-85 transition">
                            <Eye size={12}/> View
                          </button>
                          <button style={{color:'white',fontFamily:'NeueMontreal'}} className="bg-[#ECD209] text-white px-4 py-1.5 rounded-lg text-[11px] flex items-center gap-1.5 hover:opacity-85 transition">
                            <EyeOff size={12}/> Hide
                          </button>
                          <button style={{color:'white',fontFamily:'NeueMontreal'}} className="bg-[#CE2920] text-white px-4 py-1.5 rounded-lg text-[11px] flex items-center gap-1.5 hover:opacity-85 transition">
                            <Trash2 size={12}/> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* --- FUNCTIONAL PAGINATION SECTION --- */}
            {totalPages > 1 && (
              <div className="flex justify-end mt-10 gap-2 items-center">
                  <button 
                    disabled={currentPage === 1}
                    onClick={() => paginate(currentPage - 1)}
                    className={`text-xs font-medium px-2 py-1 transition ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-black'}`}
                  >
                    ← Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => (
                    <button 
                      key={i + 1}
                      style={{fontFamily:"'NeueMontreal', sans-serif",color:currentPage === i + 1 ? 'white' : 'black'}}
                      onClick={() => paginate(i + 1)}
                      className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-medium transition ${
                        currentPage === i + 1 
                        ? 'bg-[#EA352B] text-white shadow-lg font-bold' 
                        : 'hover:bg-gray-100 text-gray-500'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button 
                    disabled={currentPage === totalPages}
                    onClick={() => paginate(currentPage + 1)}
                    className={`text-xs font-bold px-2 py-1 transition ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-black'}`}
                  >
                    Next →
                  </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* --- RIGHT SIDEBAR DETAIL DRAWER --- */}
      <div className={`fixed top-0 right-0 h-full w-[420px] bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.1)] z-[50] transition-transform duration-500 ease-out transform ${selectedPost ? 'translate-x-0' : 'translate-x-full'}`}>
        <div style={{background:'#F8F8F8'}} className="p-10 h-full flex flex-col relative">
            <button onClick={() => setSelectedPost(null)} className="absolute top-8 right-8 text-gray-300 hover:text-black transition">
              <X size={28} style={{color:'#EA352B'}} />
            </button>

            {selectedPost && (
              <div className="mt-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <img src={selectedPost.authorImg} className="w-14 h-14 rounded-full border border-gray-100 shadow-sm" alt="" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{selectedPost.author}</h3>
                    <p className="text-gray-400 text-[11px] font-light">2 hours ago</p>
                  </div>
                </div>

                <p className="text-[15px] text-gray-600 leading-[1.6] mb-10 font-light">
                  {selectedPost.post}
                </p>

                <div className="w-full h-48 rounded-[32px] overflow-hidden mb-12 border border-gray-100">
                   <img src="https://s3.amazonaws.com/images.seroundtable.com/google-amp-1454071566.jpg" className="w-full h-full object-cover" alt="" />
                </div>

                <div className="flex gap-3 mt-auto">
                  <button style={{color:'white',fontFamily:'NeueMontreal'}} className="flex-1 bg-[#17A210] text-white py-3.5 rounded-2xl font-light text-sm shadow-sm hover:opacity-90 transition">Approve</button>
                  <button style={{color:'white',fontFamily:'NeueMontreal'}} className="flex-1 bg-[#EAB72B] text-white py-3.5 rounded-2xl font-light text-sm shadow-sm hover:opacity-90 transition">Warn</button>
                  <button style={{color:'white',fontFamily:'NeueMontreal'}} className="flex-1 bg-[#EA352B] text-white py-3.5 rounded-2xl font-light text-sm shadow-sm hover:opacity-90 transition">Remove</button>
                </div>
              </div>
            )}
        </div>
      </div>

    </div>
  );
}

function StatCard({ label, value, sub, icon }) {
  return (
    <div style={{background:'white',boxShadow:'0px 0px 3px 0px #c3c3c3d1'}} className="bg-white p-5 rounded-[12px] border border-gray-50 shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <p style={{fontFamily:"'NeueMontreal', sans-serif"}} className="text-[rgba(0, 0, 0, 0.75)] text-[13px] font-normal">{label}</p>
        {/* <div className="p-2 bg-red-50 rounded-xl">{icon}</div> */}
      </div>
      <h2 style={{fontFamily:"'NeueMontreal', sans-serif"}} className="text-5xl font-medium text-black mb-1">{value}</h2>
      {sub && <p className="text-[10px] text-green-500 font-bold uppercase tracking-wider">{sub}</p>}
    </div>
  );
}