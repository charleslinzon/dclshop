import React from 'react';
import { MdCurrencyExchange } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";

const AdminDashboard = () => {
    return (
        <div className='px-2 md:px-7 py-5 '>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7' >

                <div className='flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5e]'>
                        <h2 className='text-3xl font-bold'>$2343</h2>
                        <span className='text-md font-medium'>Total Sales</span>                        
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg'/>
                    </div>
                </div>

                <div className='flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5e]'>
                        <h2 className='text-3xl font-bold'>50</h2>
                        <span className='text-md font-medium'>Products</span>                        
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#760077] flex justify-center items-center text-xl'>
                        <MdProductionQuantityLimits className='text-[#fae8e8] shadow-lg'/>
                    </div>
                </div>

                <div className='flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5e]'>
                        <h2 className='text-3xl font-bold'>10</h2>
                        <span className='text-md font-medium'>Sellers</span>                        
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl'>
                        <FaUsers className='text-[#fae8e8] shadow-lg'/>
                    </div>
                </div>

                <div className='flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#5c5a5e]'>
                        <h2 className='text-3xl font-bold'>43</h2>
                        <span className='text-md font-medium'>Orders</span>                        
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl'>
                        <FaCartArrowDown className='text-[#fae8e8] shadow-lg'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;<h1>Admin Dashboard</h1>