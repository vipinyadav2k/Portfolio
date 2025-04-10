import React from "react";

interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  details: string[];
  icon: string;
}

const timelineData: TimelineItem[] = [
  {
    title: "B.Tech Computer Science (B.Tech )",
    subtitle: "The Northcap University, Gurugram, India",
    date: "2020 – 2024",
    details: ["CGPA – 8.5"],
    icon: "/uni-icon.png",
  },
  {
    title: "High School",
    subtitle: "Lord Jesus Public School, Gurugram, India",
    date: "2008 – 2020",
    details: [""],
    icon: "/school-icon.png",
  },
];

const EducationTimeline: React.FC = () => {
  return (
    <section className="relative py-20 text-white ">
      <h3 className="text-center text-gray-400 text-sm mb-2 tracking-wider">
        WHAT I HAVE STUDIED SO FAR
      </h3>
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
        Education.
      </h1>

      <div className="relative max-w-full mx-auto">
        {/* Center Line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-[2px] bg-white z-100" />

        <div className="flex flex-col gap-15 relative z-10">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative flex items-start">
                {/* Timeline Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-black rounded-full flex items-center justify-center z-20">
                  {/* <img src={item.icon} alt="icon" className="w-6 h-6 object-contain" /> */}
                </div>

                {/* Content Container */}
                <div
                  className={`w-[80%] ${
                    isLeft
                      ? " mr-12 pr-80 justify-end flex"
                      : " pl-80 justify-start flex ml-auto"
                  }`}
                >
                  <div className="bg-[#0c4b70] rounded-xl border-b-2 border-white shadow-lg px-8 py-6 w-full">
                    <p className="text-sm text-gray-400 mb-2 tracking-wide">
                      {item.date}
                    </p>
                    <h2 className="text-xl md:text-2xl font-bold mb-1 leading-snug">
                      {item.title}
                    </h2>
                    <h3 className="text-sm text-gray-300 mb-4">
                      {item.subtitle}
                    </h3>
                    <ul
                      className={`text-sm leading-relaxed text-gray-200`}
                    >
                      {item.details.length > 0 && (
                        <div >
                          {item.details.map((detail, i) => (
                            <p key={i}>{detail}</p>
                          ))}
                        </div>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;
