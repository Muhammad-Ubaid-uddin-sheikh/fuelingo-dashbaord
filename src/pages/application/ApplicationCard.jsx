
import React from 'react';
import { MapPin } from 'lucide-react';

const ApplicationCard = ({ data, onView }) => {
  const status = data.status?.toLowerCase();
  
  const isPending = status === 'pending';
  const isRejected = status === 'rejected';
  const isApproved = status === 'approved';

  return (
    <div 
      style={{ fontFamily: 'NeueMontreal' }} 
      className="bg-[#F6F6F6] p-5 rounded-[10px] border border-transparent hover:border-red-100 transition-all relative group h-full flex flex-col"
    >
      {/* Top Button: Pending aur Rejected dono mein dikhana behtar hai taake documents check ho sakein */}
      {(isPending || isRejected) && (
        <button 
          onClick={onView}
          style={{
            fontFamily: "'NeueMontreal', sans-serif",
            color: 'rgb(119 119 119 / 71%)',
            borderColor: '#777'
          }}
          className="absolute top-4 right-4 text-[10px] text-gray-400 border px-2 py-1 rounded-md bg-white hover:bg-gray-50 transition shadow-sm"
        >
          View Documents
        </button>
      )}

      {/* Info Section */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 bg-gray-200 rounded-xl overflow-hidden border border-gray-100 flex-shrink-0 shadow-sm">
          <img 
            src={data.image || "https://images.unsplash.com/photo-1486006396123-c77567104a91?q=80&w=150"} 
            className="w-full h-full object-cover" 
            alt="" 
          />
        </div>
        <div className="mt-1">
          <h3 style={{fontFamily:"'NeueMontreal', sans-serif"}} className="text-[15px] font-medium text-black leading-tight">{data.title}</h3>
          <p style={{fontFamily:"'NeueMontreal', sans-serif", color:'rgb(119 119 119 / 71%)'}} className="text-[12px] font-light">{data.date}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-black mb-6 flex-1">
        <MapPin size={15} className="text-black flex-shrink-0" />
        <p className="text-[12px] font-light truncate">{data.location}</p>
      </div>

      {/* Bottom Buttons - Logic Updated */}
      <div className="mt-auto flex items-center justify-end">
        
        {/* 1. Agar PENDING hai */}
        {isPending && (
          <div className="flex gap-3 w-full justify-end">
            <button style={{background:'white', maxWidth:'100px'}} onClick={onView} className="flex-1 py-2 bg-white text-black text-[13px] font-light rounded-[8px] shadow-sm border border-gray-50 hover:bg-gray-50 transition">Accept</button>
            <button style={{color:'white', maxWidth:'100px'}} onClick={onView} className="flex-1 py-2 bg-[#EA352B] text-white text-[13px] font-light rounded-[8px] hover:opacity-90 transition shadow-sm">Reject</button>
          </div>
        )}

        {/* 2. Agar REJECTED hai (Sirf Approve ka option) */}
        {isRejected && (
          <button 
            onClick={onView} 
            style={{color:'white', background:'#EA352B', maxWidth:'180px'}} 
            className="w-full py-2 bg-[#EA352B] text-white text-[13px] font-light rounded-[8px] hover:opacity-90 transition shadow-sm"
          >
            Approve Application
          </button>
        )}

        {/* 3. Agar APPROVED hai (Sirf View Documents) */}
        {isApproved && (
          <button 
            onClick={onView} 
            style={{
              fontFamily: "'NeueMontreal', sans-serif", 
              color: 'rgb(80 78 78)', 
              background: 'white', 
              maxWidth: '180px'
            }} 
            className="w-full py-2 bg-white border border-gray-100 text-gray-600 text-[13px] font-light rounded-[8px] hover:bg-gray-50 transition shadow-sm"
          >
            View Documents
          </button>
        )}
        
      </div>
    </div>
  );
};

export default ApplicationCard;