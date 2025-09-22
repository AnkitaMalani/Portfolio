import React from "react";
import resume from "../assets/resume.pdf";

const Home = () => {
  return (
    <div className="hero py-20 bg-[#0E1320] from-primary to-secondary">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <p>Hello, I'm</p>
          <h1 className="text-5xl font-bold text-white">Ankita Malani</h1>
          <p className="py-6 text-lg text-white/90">
            I build responsive and dynamic web applications using modern
            technologies. Passionate about creating seamless user experiences
            and scalable backends
          </p>
          <div className="flex justify-center">
            <a href={resume}>
              <button className="btn btn-outline  border-[#CBACF9] hover:bg-[#CBACF9]">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
