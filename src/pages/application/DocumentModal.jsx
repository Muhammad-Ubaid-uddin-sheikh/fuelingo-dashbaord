
import React from 'react';
import { Dialog } from 'primereact/dialog';
import { X, Download, Maximize2, ChevronRight } from 'lucide-react';

const DocumentModal = ({ visible, onHide, data }) => {
  if (!data) return null;
  
  const status = data.status?.toLowerCase();
  const isPending = status === 'pending';
  const isApproved = status === 'approved';
  const isRejected = status === 'rejected';

  const handleDownload = () => {
    const imageUrl = data.documentImage || "https://s3.amazonaws.com/images.seroundtable.com/google-amp-1454071566.jpg";
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${data.title || 'Document'}_Verification.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog 
      visible={visible} 
      onHide={onHide}
      draggable={false}
      closable={false}
      showHeader={false}
      className="w-[850px] md:w-[850px] lg:w-[950px] border-none shadow-none"
      contentClassName="p-0 rounded-[32px] overflow-hidden"
    >
      <div className="bg-white p-6 md:p-10 relative flex flex-row items-start gap-8 lg:gap-12" style={{ fontFamily: 'NeueMontreal, sans-serif' }}>
        
        <button onClick={onHide} className="absolute top-6 right-8 text-gray-400 hover:text-black transition-all z-10">
          <X size={24} />
        </button>

        <div className="flex-1 w-full">
          <h2 style={{fontFamily:"'NeueMontreal', sans-serif", color:'black'}} className="text-2xl lg:text-3xl font-medium mb-6">
            {data.title}
          </h2>
          
          <p style={{fontFamily:"'NeueMontreal', sans-serif", color:'black'}} className="text-lg font-light mb-4">Details</p>
          
          <div className="space-y-3 mb-8">
             <ModalRow label="VAT Number:" value={data.vat} isHighlighted={true} />
             <ModalRow label="Location:" value={data.location} />
             <ModalRow label="Email:" value={data.email} />
             <ModalRow label="Phone:" value={data.phone} /> 
             <ModalRow label="Services:" value={data.services || "Oil Change, Vehicle Inspection"} />
             <ModalRow label="Operating Hours:" value={data.hours || "9 AM - 9 PM, Daily"} />
          </div>

          <p style={{fontFamily:"'NeueMontreal', sans-serif", color:'black'}} className="text-lg font-light mb-4">Authorized Signatory</p>
          <div className="flex items-center gap-4 bg-[#F6F6F6] p-2 rounded-xl">
            <img 
              src={data.signatoryImg || "https://i.pravatar.cc/150?u=signatory"} 
              className="w-12 h-12 rounded-xl object-cover shadow-sm" 
              alt="Signatory" 
            />
            <div className="flex-1">
              <p style={{fontFamily:"'NeueMontreal', sans-serif", color:'black'}} className="text-[15px] font-medium text-black leading-tight">
                {data.signatoryName || "John Doe"}
              </p>
              <p style={{fontFamily:"'NeueMontreal', sans-serif", color:'black'}} className="text-[13px] font-light text-gray-500">
                {data.email}
              </p>
            </div>
            <div className="text-right">
              <p style={{fontFamily:"'NeueMontreal', sans-serif", color:'black'}} className="text-[11px] text-gray-400 font-medium">Position</p>
              <p style={{fontFamily:"'NeueMontreal', sans-serif", color:'black'}} className="text-[13px] font-light text-black uppercase">
                {data.position || "CEO"}
              </p>
            </div>
          </div>

          {/* Action Buttons - Logic Updated */}
          <div className="mt-8 flex gap-4">
            
            {/* 1. Case: Pending */}
            {isPending && (
              <>
                <button 
                  style={{fontFamily:"'NeueMontreal', sans-serif", fontWeight:400}} 
                  className="flex-1 py-2.5 bg-[#FFE4E4] text-[#EA352B] rounded-[8px] text-[15px] hover:opacity-90 transition-all"
                >
                  Reject Request
                </button>
                <button 
                  style={{fontFamily:"'NeueMontreal', sans-serif", fontWeight:400, color:'white'}} 
                  className="flex-1 py-2.5 bg-[#EA352B] text-white rounded-[8px] text-[15px] flex items-center justify-center gap-2 hover:opacity-95 shadow-lg shadow-red-100 transition-all"
                >
                  Approve Request <ChevronRight size={18} />
                </button>
              </>
            )}

            {/* 2. Case: Rejected (Approve ka option hona chahiye) */}
            {isRejected && (
              <button 
                style={{color:'white', fontFamily:"'NeueMontreal', sans-serif", fontWeight:400}} 
                className="w-full py-2.5 bg-[#EA352B] text-white rounded-[8px] font-bold text-[16px] flex items-center justify-center gap-2 hover:opacity-95 shadow-xl shadow-red-50 transition-all"
              >
                Approve Request <ChevronRight size={20} />
              </button>
            )}

            {/* 3. Case: Approved */}
            {isApproved && (
              <button 
                style={{color:'white', fontFamily:"'NeueMontreal', sans-serif", fontWeight:400}} 
                className="w-full py-2.5 bg-[#EA352B] text-white rounded-[8px] font-bold text-[16px] flex items-center justify-center gap-2 hover:opacity-95 shadow-xl shadow-red-50 transition-all"
              >
                Terminate Seller <ChevronRight size={20} />
              </button>
            )}

          </div>
        </div>

        {/* Right Section Image Part */}
        <div className="w-[320px] md:w-[320px] lg:w-[360px] flex-shrink-0" style={{marginTop:'3.5em'}}>
          <div className="flex justify-between items-center mb-4">
            <h3 style={{fontFamily:"'NeueMontreal', sans-serif", color:'black'}} className="text-lg font-light mb-4 text-black">Verification Document</h3>
          </div>
          <div className="aspect-[3/4] bg-[#F2F2F2] rounded-[24px] border border-gray-100 relative flex flex-col items-center justify-center shadow-inner overflow-hidden group">
              <button 
                onClick={handleDownload}
                className="absolute top-4 right-4 p-2 bg-[#EA352B] text-white rounded-lg shadow-md hover:scale-110 active:scale-95 transition-all z-20"
              >
                <Download size={18} style={{color:'white'}}/>
              </button>
              <div className="w-full h-full">
                  <img 
                    src={data.documentImage || "https://s3.amazonaws.com/images.seroundtable.com/google-amp-1454071566.jpg"} 
                    alt="Document" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
              </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

const ModalRow = ({ label, value, isHighlighted }) => (
  <div style={{background:"#F6F6F6"}} className={`flex justify-between items-center p-3 rounded-xl transition-all ${isHighlighted ? 'bg-white border border-red-200 shadow-sm' : ''}`}>
    <span style={{fontFamily:"'NeueMontreal', sans-serif"}} className="text-gray-500 text-[14px] lg:text-[15px] font-regular">{label}</span>
    <span style={{fontFamily:"'NeueMontreal', sans-serif", color:'black'}} className="font-regular text-black text-[14px] lg:text-[15px] text-right">{value}</span>
  </div>
);

export default DocumentModal;