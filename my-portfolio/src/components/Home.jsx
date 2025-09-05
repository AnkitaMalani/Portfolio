import React from 'react'

const Home = () => {
  return (
    <div className="hero min-h-screen bg-[#0E1320] from-primary to-secondary">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white">Hello, I'm Ankita Malani</h1>
          <p className="py-6 text-lg text-white/90">
            Full Stack Developer passionate about creating amazing web experiences
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn btn-outline border-[#CBACF9] hover:bg-[#CBACF9]">View My Work</button>
            <button className="btn btn-outline  border-[#CBACF9] hover:bg-[#CBACF9]">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home