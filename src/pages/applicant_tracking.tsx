import React from 'react';
import Navbar from '../components/navbar';
import applicant_1 from '../assets/applicant_1.png';
import applicant_2 from '../assets/applicant_2.png';
import applicant_3 from '../assets/applicant_3.png';
import applicant_4 from '../assets/applicant_4.png';
import applicant_5 from '../assets/applicant_5.png';

// --- Mock Data for Applicants ---
const applicants = [
  {
    id: 1,
    name: 'คุณสมหญิง เก่งกาจ',
    role: 'ช่างฝีมือประดิษฐ์',
    experience: 'มีประสบการณ์ทำงานฝีมือกว่า 20 ปี เชี่ยวชาญด้านการเย็บปักถักร้อยและงานไม้ มีความละเอียดและใจเย็น',
    imageUrl: 'https://placehold.co/128x128/d1fae5/166534?text=SY'
  },
  {
    id: 2,
    name: 'คุณสมชาย ใจเย็น',
    role: 'พนักงานดูแลผู้สูงอายุ',
    experience: 'อดีตพยาบาล มีใจรักบริการและเข้าใจผู้สูงอายุเป็นอย่างดี สามารถช่วยเหลือกิจวัตรประจำวันและพูดคุยเป็นเพื่อนได้',
    imageUrl: 'https://placehold.co/128x128/d1fae5/166534?text=SC'
  },
  {
    id: 3,
    name: 'คุณมานะ อดทน',
    role: 'พนักงานคีย์ข้อมูล',
    experience: 'มีความสามารถในการพิมพ์ดีดอย่างรวดเร็วและแม่นยำ สามารถใช้โปรแกรม Microsoft Office ได้เป็นอย่างดี',
    imageUrl: 'https://placehold.co/128x128/d1fae5/166534?text=MN'
  },
   {
    id: 4,
    name: 'คุณปราณี มีสุข',
    role: 'บาริสต้า',
    experience: 'รักในการชงกาแฟและพบปะผู้คน มีมนุษยสัมพันธ์ดีเยี่ยมและเรียนรู้สูตรใหม่ๆ ได้อย่างรวดเร็ว',
    imageUrl: 'https://placehold.co/128x128/d1fae5/166534?text=PR'
  },
   {
    id: 5,
    name: 'คุณวิชัย แข็งแรง',
    role: 'พนักงานจัดเรียงสินค้า',
    experience: 'แม้จะใช้รถเข็น แต่มีความแข็งแรงและจัดเรียงสินค้าได้อย่างเป็นระเบียบ มีความรับผิดชอบต่องานสูง',
    imageUrl: 'https://placehold.co/128x128/d1fae5/166534?text=WC'
  }
];


function ApplicantTrackingPage() {
    return (
        <div className="bg-green-50 min-h-screen font-sans">
            <Navbar />
            
            <main className="container mx-auto px-6 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-green-800">
                        ติดตามรายชื่อผู้สมัคร
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        รายชื่อผู้สมัครที่สนใจตำแหน่งงานที่คุณประกาศ
                    </p>
                </div>

                {/* Applicants List */}
                <div className="space-y-6 max-w-4xl mx-auto">
                    {applicants.map((applicant) => (
                        <div key={applicant.id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col sm:flex-row items-center gap-6 transition-transform transform hover:scale-[1.02] hover:shadow-lg">
                            {/* Profile Image */}
                            <img 
                                src={applicant.imageUrl} 
                                alt={`Profile of ${applicant.name}`}
                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-4 ring-green-200 flex-shrink-0"
                            />

                            {/* Applicant Info */}
                            <div className="flex-grow text-center sm:text-left">
                                <h2 className="text-2xl font-bold text-green-800">{applicant.name}</h2>
                                <p className="text-md font-semibold text-green-600 mt-1">{applicant.role}</p>
                                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{applicant.experience}</p>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0 flex-shrink-0">
                                <button className="bg-green-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-green-600 transition-colors duration-300 w-full sm:w-auto">
                                    ดูโปรไฟล์
                                </button>
                                <button className="bg-gray-200 text-gray-700 font-bold py-2 px-5 rounded-lg hover:bg-gray-300 transition-colors duration-300 w-full sm:w-auto">
                                    ติดต่อ
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default ApplicantTrackingPage;