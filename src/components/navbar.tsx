import React from "react";
import { Link } from "react-router";

export default function Navbar() {
    return (
    <>
    {/* Navbar */}
    <nav className="bg-green-800 text-white px-8 py-4 flex justify-between items-center shadow-md">
    <ul className="hidden md:flex gap-8 text-lg items-center">
    <div className="text-2xl font-bold tracking-wider">Job Jai</div>
      <Link to={`/`}>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors duration-300">
            หน้าแรก
            </a>
          </li>
      </Link>
      <Link to={`/aboutus`}>
          <li>
            <a href="#" className="hover:text-yellow-300 transition-colors duration-300">
            เกี่ยวกับเรา
            </a>
          </li>
      </Link>
    </ul>
      <ul className='flex items-center gap-4'>
          <Link to={`/applicant_tracking`}>
              <button className="bg-white text-[#1dc400] font-semibold px-5 py-2 rounded-xl hover:bg-[#1dc400]-100 focus:outline-none focus:ring-4 transition-all duration-300 ease-in-out transform hover:scale-105">
                ติดตามผู้สมัคร
              </button>
          </Link>
        <Link to={`/register`}>
          <button className="bg-[#1dc400] text-white font-semibold px-5 py-2 rounded-xl hover:bg-[#1dc400]-100 focus:outline-none focus:ring-4 transition-all duration-300 ease-in-out transform hover:scale-105">
              ลงทะเบียน
            </button>
        </Link>
      </ul>
      
    </nav>
    </>
    )
}