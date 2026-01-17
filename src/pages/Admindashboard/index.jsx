import React from "react";
import { Helmet } from "react-helmet";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Briefcase, CheckCircle, Star, AlertTriangle, UserMinus, CheckCircle2 } from 'lucide-react';
import Sidebar1 from "components/Sidebar1";

// --- Mock Data ---
const revenueData = [
  { name: '16 Mar', value: 15000 }, { name: '18 Mar', value: 8000 },
  { name: '20 Mar', value: 35000 }, { name: '22 Mar', value: 18000 },
  { name: '24 Mar', value: 45000 },
];

const pieData = [
  { name: 'Oil Change', value: 1799, color: '#F87171' },
  { name: 'Wash', value: 1649, color: '#EF4444' },
  { name: 'Repair', value: 649, color: '#DC2626' },
  { name: 'Tires', value: 1280, color: '#B91C1C' },
  { name: 'Other', value: 153, color: '#991B1B' },
];

export default function AdmindashboardPage() {
  return (
    <div className="flex min-h-screen bg-[#F8F8F8]">
      <Helmet>
        <title>Fuelingo | Dashboard</title>
      </Helmet>

      <Sidebar1 />

      <main className="flex-1 p-6 lg:p-8 overflow-y-auto h-screen">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-medium text-black" style={{fontFamily:"'NeueMontreal', sans-serif"}}>Dashboard</h1>
          <img 
            src="https://randomuser.me/api/portraits/women/44.jpg" 
            alt="Profile" 
            className="w-12 h-12 rounded-xl object-cover border-2 border-white shadow-sm" 
          />
        </div>

        {/* 1. Stats Grid: 4 Columns on lg */}
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3  gap-6 mb-8">
          <StatCard icon={<Users size={20} className="text-[#EA352B]" />} label="Total Users" value="12,340" sub="+12% from last week" subColor="text-[#34C759]" />
          <StatCard icon={<Briefcase size={20} className="text-[#EA352B]" />} label="Active Providers" value="1,240" sub="85% active" subColor="text-[#34C759]" />
          <StatCard icon={<CheckCircle size={20} className="text-[#EA352B]" />} label="Jobs Completed" value="5,680" sub="+8% this week" subColor="text-[#34C759]" />
          <StatCard icon={<Star size={20} className="text-orange-400 fill-orange-400" />} label="Avg Provider Rating" value="4.6" showStar />
        </div>

        {/* 2. Middle Section: Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue (2/3 width) */}
          <div style={{background:'white',boxShadow:'0px 0px 3px 0px #c3c3c3d1'}} className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-light text-[1.5em] text-black" style={{fontFamily:"'NeueMontreal', sans-serif"}}>Revenue</h3>
              <p className="text-sm font-semibold text-black">AED 4,939.58 <span className="text-green-500 ml-1">+ AED 192.20 ↗</span></p>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#EF4444" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Jobs by Category (1/3 width) */}
          <div style={{background:'white',boxShadow:"0px 0px 3px 0px #c3c3c3d1"}} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="font-light text-[1.5em] mb-4 text-black" style={{fontFamily:"'NeueMontreal', sans-serif"}}>Jobs by Category</h3>
            <div className="h-[280px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} innerRadius={70} outerRadius={100} paddingAngle={2} dataKey="value">
                    {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                 <span className="text-xs text-gray-400">Oil Change</span>
                 <span className="text-xl font-bold">1799</span>
              </div>
            </div>
          </div>
        </div>

<div className="grid grid-cols-[65%_1fr] md:grid-cols-1 lg:grid-cols-[65%_1fr] gap-6">
    <div 
    style={{ background: 'white' }} 
    className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100"
  >
    <h3 
      className="font-light text-[1.5em] mb-6 text-black" 
      style={{ fontFamily: "'NeueMontreal', sans-serif" }}
    >
      Engagement Insights
    </h3>
        <div className="grid grid-cols-3 md:grid-cols-1  gap-4">
      <EngagementCard 
        title="Top Customer" 
        name="Sarah K." 
        meta="12 Visits" 
        img="https://randomuser.me/api/portraits/women/12.jpg" 
      />
      <EngagementCard 
        title="Top Provider" 
        name="Speedy Motors" 
        meta="209 Jobs Done" 
        img="https://images.unsplash.com/photo-1552650278-b0a4462076d0?w=100" 
      />
            <div 
        style={{ background: '#F6F6F6', boxShadow: '0px 0px 2px 0px #c3c3c3d1' }}  
        className="p-5 rounded-2xl border border-gray-50 flex flex-col justify-between min-h-[110px]"
      >
        <h4 className="text-sm font-medium text-black">Community</h4>
        <div className="flex items-center gap-3">
          <div>
            <p className="text-xl font-medium text-black leading-none">320</p>
            <p className="text-[12px] mt-1 font-light text-gray-500">Posts this week</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Right Section: Recent Activity (35% on LG/XL) */}
  <div  
    style={{ background: 'white', boxShadow: "0px 0px 3px 0px #c3c3c3d1" }} 
    className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100"
  >
    <h3 
      className="font-light text-[1.5em] mb-4 text-black" 
      style={{ fontFamily: "'NeueMontreal', sans-serif" }}
    >
      Recent Activity
    </h3>
    <div className="space-y-4">
      <ActivityItem 
        icon={<Briefcase size={16} className="text-green-500"/>} 
        bg="bg-green-50" 
        text="Job #4521 completed by <b>Mike Auto</b>" 
        time="24/07/24" 
      />
      <ActivityItem 
        icon={<UserMinus size={16} className="text-red-500"/>} 
        bg="bg-red-50" 
        text="User <b>John Doe</b> account suspended" 
        time="24/07/24" 
      />
      <ActivityItem 
        icon={<AlertTriangle size={16} className="text-yellow-500"/>} 
        bg="bg-yellow-50" 
        text="Post flagged in Community" 
        time="24/07/24" 
      />
      <ActivityItem 
        icon={<CheckCircle2 size={16} className="text-blue-500"/>} 
        bg="bg-blue-50" 
        text="New provider <b>AutoFix Ltd</b> approved" 
        time="24/07/24" 
      />
    </div>
  </div>

</div>
      </main>
    </div>
  );
}

// --- Helper Components ---

function StatCard({ icon, label, value, sub, subColor, showStar }) {
  return (
    <div style={{background:'white',boxShadow:'0px 0px 3px 0px #c3c3c3d1'}} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex justify-between items-start">
      <div className="p-3 bg-red-50 rounded-2xl">{icon}</div>
      <div className="text-right">
        <p style={{color:'#000000bf'}} className="text-[12px] font-medium mb-1">{label}</p>
        <div className="flex items-center justify-end gap-1">
            <h2 className="text-3xl xl:text-4xl font-medium text-black">{value}</h2>
            {showStar && <Star size={18} className="text-orange-400 fill-orange-400" />}
        </div>
        {sub && <p className={`text-[10px] mt-1 font-medium ${subColor}`}>{sub}</p>}
      </div>
    </div>
  );
}

function EngagementCard({ title, name, meta, img }) {
    return (
      <div  style={{background:'#F6F6F6',boxShadow:'0px 0px 2px 0px #c3c3c3d1'}} className="bg-[#F6F6F6] p-5 rounded-2xl border border-gray-50 min-h-[110px] flex flex-col justify-between">
        <h4 className="text-sm font-medium text-black">{title}</h4>
        <div className="flex items-center gap-3 mt-2">
          <img src={img} className="w-10 h-10 rounded-lg object-cover border border-gray-200" alt="" />
          <div>
            <p className="font-medium text-[14px] text-black leading-tight">{name}</p>
            <p className="text-[12px] mt-1 font-light text-gray-500">{meta}</p>
          </div>
        </div>
      </div>
    );
}

function ActivityItem({ icon, text, time, bg }) {
  return (
    <div style={{background:'#F6F6F6'}} className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3 overflow-hidden">
        <div className={`p-2 rounded-lg shrink-0 ${bg}`}>{icon}</div>
        <p className="text-[11px] text-gray-600 leading-tight truncate" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
      <span className="text-[9px] text-gray-400 whitespace-nowrap ml-2">{time}</span>
    </div>
  );
}