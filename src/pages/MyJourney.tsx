import { useState } from "react";
import { journeyData } from "../data/journeyData";

function MyJourney() {
  const [activeHighlight, setActiveHighlight] = useState<Record<number, number>>({});
  return (
    <div className="min-h-screen bg-[#100001] text-white flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center animate-fade-in">My Journey</h1>

      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl animate-fade-in">

        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#CA0000]"></div>

        {/* Timeline Items */}
        <div className="flex flex-col space-y-24">

          {journeyData.map((item, index) => (
            <div key={index} className={`relative w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>

              {/* Card */}
              <div className="w-full md:w-5/12 bg-[#1a1a1a] p-6 rounded-lg shadow-lg relative z-10">
                {/* Tag inside box */}
                <span className={`absolute -top-4 left-4 px-3 py-1 text-xs font-bold rounded-full z-20 ${item.type === 'Education' ? 'bg-gray-600' : 'bg-[#CA0000]'}`}>
                  {item.type}
                </span>

                <p className="text-[#CA0000] text-xl font-bold mb-2 mt-4">{item.year}</p>
                <h2 className="text-2xl font-semibold mb-1">{item.title}</h2>
                <h3 className="text-gray-400 text-sm mb-4">{item.subtitle}</h3>
                <p className="text-gray-300 text-sm mb-4">{item.description}</p>

                {/* Highlights in separate floating box */}
                {/* Highlights in separate floating box */}
                {/* Highlights Carousel */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="mt-4">
                    <div className="relative">
                      <div className="bg-[#CA0000]/10 border border-[#CA0000] rounded-xl px-4 py-3 text-left text-gray-200 min-h-[120px] transition-all duration-300">
                        <p className="font-semibold text-white mb-1">
                          {item.highlights[activeHighlight[index] || 0].label}
                        </p>
                        <p className="text-xs text-gray-300 leading-snug">
                          {item.highlights[activeHighlight[index] || 0].detail}
                        </p>
                      </div>

                      {/* Pagination Dots */}
                      <div className="flex justify-center gap-2 mt-3">
                        {item.highlights.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() =>
                              setActiveHighlight((prev) => ({ ...prev, [index]: idx }))
                            }
                            className={`w-2 h-2 rounded-full ${
                              (activeHighlight[index] || 0) === idx
                                ? "bg-[#CA0000]"
                                : "bg-gray-500"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Connector Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#CA0000] w-6 h-6 rounded-full border-4 border-[#100001] top-8"></div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default MyJourney;
