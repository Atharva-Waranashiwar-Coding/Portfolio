const journeyData = [
    {
      year: "2017 - 2021",
      title: "Bachelor's Degree",
      subtitle: "Pune University — Electronics & Telecommunication",
      description: "Graduated with a strong foundation in electronics, signal processing, embedded systems, and computer architecture. Active member of the IEEE student branch and completed multiple academic projects integrating software and hardware solutions.",
      type: "Education"
    },
    {
      year: "2021 - 2023",
      title: "Software Engineer",
      subtitle: "Persistent Systems — Pune, India",
      description: "Developed and maintained scalable backend web applications using FastAPI, PostgreSQL, and SQLAlchemy. Led the design of a dynamic laboratory data directory system, improving data accessibility by 40%. Streamlined ORM interactions and optimized database performance for enterprise-grade deployments.",
      type: "Work"
    },
    {
      year: "2024 - Present",
      title: "Master's Degree",
      subtitle: "Northeastern University — Software Engineering",
      description: "Pursuing a Master's degree focused on full-stack engineering, cloud-native application development, distributed systems, and AI-driven technologies. Enhancing expertise in GCP, AWS, React, FastAPI, and serverless architectures while engaging in research-driven projects.",
      type: "Education"
    },
    {
      year: "2025 - Present",
      title: "Co-op - Fullstack / Data Engineer",
      subtitle: "10th Inning Ventures - Boston, MA",    
      description: "Building scalable full-stack web platforms for athlete management using React, Firebase, GCP, and Python. Designing serverless data pipelines for real-time video analysis and performance tracking. Implementing AI-driven modules to optimize user experience and automate operational workflows.",
      type: "Work"
    }
];
  
  function MyJourney() {
    return (
      <div className="min-h-screen bg-[#100001] text-white flex flex-col items-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center animate-fade-in">My Journey</h1>
  
        {/* Timeline Container */}
        <div className="relative w-full max-w-4xl animate-fade-in">
  
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#CA0000]"></div>
  
          {/* Timeline Items */}
          <div className="flex flex-col space-y-16">
  
            {journeyData.map((item, index) => (
              <div
                key={index}
                className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'} relative`}
              >
                <div className="w-5/12 bg-[#1a1a1a] p-6 rounded-lg shadow-lg">
                  {/* Tag */}
                  <span className={`absolute top-2 ${index % 2 === 0 ? 'left-[-60px]' : 'right-[-60px]'} px-3 py-1 text-xs font-bold rounded-full ${
                    item.type === 'Education' ? 'bg-gray-600' : 'bg-[#CA0000]'
                  }`}>
                    {item.type}
                  </span>
  
                  {/* Year */}
                  <p className="text-[#CA0000] text-xl font-bold mb-2">{item.year}</p>
  
                  {/* Title */}
                  <h2 className="text-2xl font-semibold mb-1">{item.title}</h2>
  
                  {/* Subtitle */}
                  <h3 className="text-gray-400 text-sm mb-4">{item.subtitle}</h3>
  
                  {/* Description */}
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
  
                {/* Connector Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#CA0000] w-6 h-6 rounded-full border-4 border-[#100001]"></div>
              </div>
            ))}
  
          </div>
        </div>
      </div>
    );
  }
  
  export default MyJourney;