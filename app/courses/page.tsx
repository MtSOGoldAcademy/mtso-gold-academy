export default function Courses() {
  const courses = [
    { title: "Trading Basics", desc: "Learn the basic concepts of Smart Money Concept." },
    { title: "Professional Course", desc: "Advanced institutional analysis and private strategies." }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-center text-[#D4AF37] mb-12">MTSO Gold Courses</h1>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {courses.map((course, index) => (
          <div key={index} className="border border-[#D4AF37]/30 p-6 rounded-lg hover:border-[#D4AF37] transition-all">
            <h2 className="text-2xl text-[#D4AF37] mb-4">{course.title}</h2>
            <p className="text-gray-400 mb-6">{course.desc}</p>
            <button className="bg-[#D4AF37] text-black px-6 py-2 rounded font-bold">
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
