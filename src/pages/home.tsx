import React from 'react';
import { motion } from 'framer-motion'; // เพิ่มการ import framer-motion
import { Link } from "react-router"; 
import home_graphic from '../assets/home_graphic.png';
import Prasert from '../assets/prasert.png';
import Somsri from '../assets/somsri.png';
import Wichai from '../assets/wichai.png';
import Navbar from '../components/navbar';

function Home() {
    // --- Animation variants for Framer Motion ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // ทำให้ element ลูกแสดงผลทีละตัว
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
    };

    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
            <Navbar />

            {/* Hero Section */}
            <main className="flex-grow flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-32">
                <motion.div 
                    className="max-w-4xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                        {/* แก้ไข: ใช้ Placeholder สำหรับรูปภาพ */}
                        <img src={home_graphic} alt="Home Graphic" className="mx-auto w-3/4 md:w-1/2 rounded-lg" />
                    </motion.div>
                    
                    <motion.h1 variants={itemVariants} className="mt-4 text-4xl md:text-6xl font-extrabold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                        หาคนทำงาน และติดตามผลง่าย<br />แค่<strong className='text-[#1dc400]'>ปลายนิ้ว</strong>
                    </motion.h1>
                    
                    <motion.div variants={itemVariants} className='text-left mt-6 max-w-3xl mx-auto'>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-bold">
                            มอบโอกาส สร้างคุณค่า เชื่อมผู้สูงอายุและผู้พิการ เข้าสู่ตลาดแรงงาน
                        </p>
                        <div className='mt-4 text-base md:text-lg text-gray-700 leading-relaxed'>
                            หาคนช่วยงานได้ง่ายๆ เพียงลงประกาศใน <strong>Job Jai </strong>
                            ทั้งงานพาร์ทไทม์ งานดูแล งานฝีมือ งานบริการ ไปจนถึงงานออฟฟิศ
                            ไม่ว่าคุณจะเป็น <strong>บริษัทใหญ่</strong>, <strong>SME</strong> หรือ <strong>บุคคลทั่วไป</strong>
                            ก็สามารถเชื่อมต่อกับแรงงานผู้สูงอายุและผู้พิการที่พร้อมทำงาน
                            สร้างโอกาสและคุณค่าให้สังคม
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-12">
                        <Link to={`/register`}>
                            <button className="bg-[#1dc400] text-white text-xl md:text-2xl font-bold px-10 py-4 rounded-2xl hover:bg-[#1bb400] focus:outline-none focus:ring-4 focus:ring-green-300 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
                                ลงทะเบียนเลย
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Stacked Cards Section - NEW */}
                <section className="py-24 w-full">
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={containerVariants}
                        >
                            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
                                ความสำเร็จที่เราภูมิใจ
                            </motion.h2>
                            <motion.p variants={itemVariants} className="text-center text-gray-600 text-lg mb-12">
                                ตัวอย่างของผู้ที่ได้รับโอกาสและกลับเข้าสู่ตลาดแรงงานอีกครั้ง
                            </motion.p>
                        </motion.div>

                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={containerVariants}
                        >
                            {/* Card 1 */}
                            <motion.div variants={itemVariants} className="bg-green-50 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                                <img src={Somsri} alt="Elderly person who got a job" className="w-full h-96 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-green-800 mb-2">ป้าสมศรี</h3>
                                    <p className="text-gray-700 mb-4">"ดีใจที่ได้ใช้ความสามารถด้านงานฝีมือที่รักอีกครั้ง ขอบคุณ Job Jai ที่เชื่อมโอกาสให้ค่ะ"</p>
                                    <div className="text-sm font-semibold text-gray-600">ตำแหน่ง: ช่างฝีมือประดิษฐ์</div>
                                </div>
                            </motion.div>
                            {/* Card 2 */}
                            <motion.div variants={itemVariants} className="bg-green-50 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                                <img src={Wichai} alt="Disabled person who got a job" className="w-full h-96 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-green-800 mb-2">ตาวิชัย</h3>
                                    <p className="text-gray-700 mb-4">"ถึงจะเคลื่อนไหวไม่สะดวก แต่ผมยังทำงานเอกสารได้ดี ที่นี่ให้โอกาสผมได้พิสูจน์ตัวเอง"</p>
                                    <div className="text-sm font-semibold text-gray-600">ตำแหน่ง: พนักงานธุรการ</div>
                                </div>
                            </motion.div>
                            {/* Card 3 */}
                            <motion.div variants={itemVariants} className="bg-green-50 rounded-xl shadow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                                <img src={Prasert} alt="Elderly person working as a barista" className="w-full h-96 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-green-800 mb-2">ลุงประเสริฐ</h3>
                                    <p className="text-gray-700 mb-4">"เกษียณแล้วแต่ยังมีไฟ ได้มาทำงานร้านกาแฟ เจอผู้คนทุกวัน ทำให้รู้สึกมีชีวิตชีวามากครับ"</p>
                                    <div className="text-sm font-semibold text-gray-600">ตำแหน่ง: บาริสต้า</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-green-800 text-white text-center py-5">
                <p>&copy; 2025 Job Jai</p>
            </footer>
        </div>
    )
}

export default Home;

