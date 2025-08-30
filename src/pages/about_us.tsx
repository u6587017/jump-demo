import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import missionImage from '../assets/farmer_happy.png';
import js from '../assets/js.png';
import pkp from '../assets/pkp.png';
import pw from '../assets/pw.png';
import tj from '../assets/tj.png';
import ppete from '../assets/PPete.png';

// --- ภาพ Mockup (คุณสามารถเปลี่ยนเป็นภาพจริงได้) ---
// ภาพ Hero ควรเป็นภาพที่แสดงถึงความหลากหลายและพลังของคนทำงาน
const heroImage = 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'; 


// --- Animation Variants (เหมือนกับหน้า Home เพื่อความสอดคล้อง) ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 },
    },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0, opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" as const }
  },
};

function AboutUsPage() {
    return (
        <div className="bg-green-50 text-gray-900 font-sans">
            <Navbar />
            {/* Hero Section */}
            <header 
                className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div className="absolute inset-0 bg-white bg-opacity-50"></div>
                <motion.div 
                    className="relative z-10 max-w-4xl px-4"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold tracking-tight text-green-800">เกี่ยวกับ Job Jai</motion.h1>
                    <motion.p variants={itemVariants} className="mt-6 text-xl md:text-2xl font-light text-green-800">
                        เราเชื่อว่าทุกคนมีคุณค่าและสมควรได้รับโอกาสในการทำงานที่ใช่
                    </motion.p>
                </motion.div>
            </header>

            <main>
                {/* Our Mission Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={itemVariants}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">ภารกิจของเรา</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                ภารกิจของ <strong>Job Jai</strong> คือการทลายกำแพงอุปสรรคในการจ้างงาน และสร้างสะพานเชื่อมระหว่างนายจ้างที่มองเห็นคุณค่า กับกลุ่มแรงงานผู้สูงอายุและผู้พิการที่มีศักยภาพ แต่ยังขาดโอกาส
                                <br/><br/>
                                เรามุ่งมั่นที่จะเป็นแพลตฟอร์มที่ใช้งานง่าย ปลอดภัย และสร้างผลกระทบเชิงบวกให้แก่สังคมไทยอย่างยั่งยืน
                            </p>
                        </motion.div>
                        <motion.div 
                            className="w-full h-80 rounded-2xl overflow-hidden shadow-xl"
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6 }}
                        >
                            <img src={missionImage} alt="Happy team members" className="w-full h-120 object-cover"/>
                        </motion.div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-16 md:py-24 bg-green-50">
                    <div className="container mx-auto px-6 lg:px-8 text-center max-w-4xl">
                         <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={containerVariants}
                        >
                            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">เรื่องราวของเรา</motion.h2>
                            <motion.p variants={itemVariants} className="text-lg text-gray-700 leading-relaxed">
                                Job Jai เกิดขึ้นจากความตั้งใจที่จะแก้ปัญหาการว่างงานในกลุ่มผู้สูงวัยและผู้พิการ ซึ่งเป็นกลุ่มคนที่มีทั้งประสบการณ์ ความสามารถ และความมุ่งมั่น แต่กลับถูกมองข้ามจากตลาดแรงงาน เราเห็นถึง "ช่องว่าง" นี้และต้องการสร้างพื้นที่ที่จะเปลี่ยน "ใจ" ของสังคมให้มองเห็นคุณค่าและเปิดโอกาสให้คนทุกกลุ่มได้แสดงศักยภาพของตนเอง
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Our Team Section */}
                <section className="py-16 md:py-24 bg-white">
                    <div className="container mx-auto px-6 lg:px-8 text-center">
                        <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">ทีมของเรา</motion.h2>
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={containerVariants}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            
                            {/* Team Member 1 */}
                            <motion.div variants={itemVariants} className="bg-green-50 p-8 rounded-2xl shadow-md flex flex-col items-center h-full">
                                <img src={js} alt="Team Member 1" className="w-32 h-32 rounded-full mb-4 object-cover ring-4 ring-green-200 flex-shrink-0"/>
                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-green-800">เจษฎากร แสงแก้ว</h3>
                                    <p className="text-gray-600 mt-2 text-sm">คณะวิศวะกรรม สาขาปัญญาประดิษฐ์และวิทยาการข้อมูล ชั้นปีที่ 4 มหาวิทยาลัยกรุงเทพ</p>
                                </div>
                            </motion.div>

                            {/* Team Member 2 */}
                            <motion.div variants={itemVariants} className="bg-green-50 p-8 rounded-2xl shadow-md flex flex-col items-center h-full">
                                <img src={pkp} alt="Team Member 2" className="w-32 h-32 rounded-full mb-4 object-cover ring-4 ring-green-200 flex-shrink-0"/>
                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-green-800">ภัคคพงค์ ธงชัยสุรัชต์กูล</h3>
                                    <p className="text-gray-600 mt-2 text-sm">คณะวิศวะกรรม สาขาปัญญาประดิษฐ์และวิทยาการข้อมูล ชั้นปีที่ 4 มหาวิทยาลัยกรุงเทพ</p>
                                </div>
                            </motion.div>

                            {/* Team Member 3 */}
                            <motion.div variants={itemVariants} className="bg-green-50 p-8 rounded-2xl shadow-md flex flex-col items-center h-full">
                                <img src={pw} alt="Team Member 3" className="w-32 h-32 rounded-full mb-4 object-cover ring-4 ring-green-200 flex-shrink-0"/>
                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-green-800">พัชรพร วงค์คำ</h3>
                                    <p className="text-gray-600 mt-2 text-sm">คณะวิทยาศาสตร์ สาขาวิทยาการข้อมูล ชั้นปีที่ 4 มหาวิทยาลัยเชียงใหม่</p>
                                </div>
                            </motion.div>

                            {/* Team Member 4 */}
                            <motion.div variants={itemVariants} className="bg-green-50 p-8 rounded-2xl shadow-md flex flex-col items-center h-full">
                                <img src={tj} alt="Team Member 4" className="w-32 h-32 rounded-full mb-4 object-cover ring-4 ring-green-200 flex-shrink-0"/>
                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-green-800">ธนวิชญ์ จึงกิจธนวัฒน์</h3>
                                    <p className="text-gray-600 mt-2 text-sm">คณะเทคโนโลยีสารสนเทศและการสื่อสาร สาขาวิทยาการและเทคโนโลยีดิจิทัล ชั้นปีที่ 4 มหาวิทยาลัยมหิดล</p>
                                </div>
                            </motion.div>
                            {/* Team Member 5 */}
                            <motion.div variants={itemVariants} className="bg-green-50 p-8 rounded-2xl shadow-md flex flex-col items-center h-full">
                                <img src={ppete} alt="Team Member 4" className="w-32 h-32 rounded-full mb-4 object-cover ring-4 ring-green-200 flex-shrink-0"/>
                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-green-800">สหัสวรรษ นิจพันธ์</h3>
                                    <p className="text-gray-600 mt-2 text-sm">คณะเทคโนโลยีสารสนเทศและการสื่อสาร สาขาวิชาเทคโนโลยีสารสนเทศและการสื่อสาร(นานาชาติ) ชั้นปีที่ 3 มหาวิทยาลัยมหิดล</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default AboutUsPage;