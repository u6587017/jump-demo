import Navbar from '../components/navbar';

function Register() {
    return (
        
        <div>
            <Navbar />
            <div className="bg-green-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
            
                    {/* Header Section */}
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800">
                            ลงประกาศงานของคุณ
                        </h1>
                        <p className="mt-4 text-lg text-gray-600">
                            ร่วมเป็นส่วนหนึ่งในการสร้างโอกาสให้กับผู้สูงอายุและผู้พิการ
                        </p>
                    </div>
                    {/* Form Container */}
                    <div className="mt-12 bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                        <form className="space-y-8">
            
                            {/* Employer Type Section */}
                            <div>
                                <label className="block text-lg font-bold text-gray-800 mb-3">
                                    1. ประเภทผู้ว่าจ้าง
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {/* Option 1: Company */}
                                    <div>
                                        <input type="radio" name="employer_type" id="company" value="company" className="peer hidden" defaultChecked />
                                        <label htmlFor="company" className="block cursor-pointer text-center p-4 rounded-xl border-2 border-gray-200 peer-checked:bg-green-600 peer-checked:text-white peer-checked:border-green-600 transition-all duration-300 hover:border-green-400">
                                            <span className="font-semibold">บริษัท</span>
                                        </label>
                                    </div>
                                     {/* Option 2: SME */}
                                    <div>
                                        <input type="radio" name="employer_type" id="sme" value="sme" className="peer hidden" />
                                        <label htmlFor="sme" className="block cursor-pointer text-center p-4 rounded-xl border-2 border-gray-200 peer-checked:bg-green-600 peer-checked:text-white peer-checked:border-green-600 transition-all duration-300 hover:border-green-400">
                                            <span className="font-semibold">SME</span>
                                        </label>
                                    </div>
                                    {/* Option 3: Individual */}
                                    <div>
                                        <input type="radio" name="employer_type" id="individual" value="individual" className="peer hidden" />
                                        <label htmlFor="individual" className="block cursor-pointer text-center p-4 rounded-xl border-2 border-gray-200 peer-checked:bg-green-600 peer-checked:text-white peer-checked:border-green-600 transition-all duration-300 hover:border-green-400">
                                            <span className="font-semibold">บุคคลทั่วไป</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* Job Title Section */}
                            <div>
                                <label htmlFor="job-title" className="block text-lg font-bold text-gray-800 mb-2">
                                    2. ตำแหน่งงาน
                                </label>
                                <input
                                    type="text"
                                    id="job-title"
                                    name="job-title"
                                    placeholder="เช่น พนักงานดูแลผู้สูงอายุ, บาริสต้า, พนักงานคีย์ข้อมูล"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                                />
                            </div>
                            {/* Job Description Section */}
                            <div>
                                <label htmlFor="job-description" className="block text-lg font-bold text-gray-800 mb-2">
                                    3. รายละเอียดงาน (Job Description)
                                </label>
                                <textarea
                                    id="job-description"
                                    name="job-description"
                                    rows={6}
                                    placeholder="อธิบายหน้าที่ความรับผิดชอบ, คุณสมบัติที่ต้องการ, และเวลาทำงาน"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                                ></textarea>
                            </div>
            
                            {/* Location Section */}
                            <div>
                                <label htmlFor="location" className="block text-lg font-bold text-gray-800 mb-2">
                                    4. สถานที่ทำงาน (Location)
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    placeholder="เช่น กรุงเทพมหานคร, เชียงใหม่, หรือ 'ทำงานจากที่บ้าน'"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
                                />
                            </div>
            
                            {/* Submit Button */}
                            <div className="text-center pt-4">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white text-xl font-bold px-12 py-4 rounded-xl hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 inline-flex items-center gap-3"
                                >
                                    {/* --- NEW: Inline SVG Icon --- */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                        />
                                    </svg>
                                    {/* --- End of SVG Icon --- */}
                                    ลงประกาศงาน
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;