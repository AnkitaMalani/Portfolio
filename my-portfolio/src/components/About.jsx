import React from 'react'
import picture from "../assets/picture.jpg"

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="avatar">
              <div className="w-64 rounded-full ring ring-[#CBACF9] ring-offset-base-100 ring-offset-2 mx-auto">
                <img src={picture} alt="Profile" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Hi, I'm a passionate developer!</h3>
            <p className="text-lg mb-6">
              I'm a full-stack developer with a passion for creating innovative web applications. 
              I love turning complex problems into simple, beautiful and intuitive solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="stat">
                <div className="stat-value text-primary">2+</div>
                <div className="stat-desc">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-value text-primary">10+</div>
                <div className="stat-desc">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body text-center">
                <h4 className="card-title justify-center">Frontend</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <div className="badge badge-primary">React</div>
                  <div className="badge badge-primary">JavaScript</div>
                  <div className="badge badge-primary">TypeScript</div>
                  <div className="badge badge-primary">Tailwind CSS</div>
                  <div className="badge badge-primary">HTML/CSS</div>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body text-center">
                <h4 className="card-title justify-center">Backend</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <div className="badge badge-secondary">Node.js</div>
                  <div className="badge badge-secondary">Express</div>
                  <div className="badge badge-secondary">MongoDB</div>
                  <div className="badge badge-secondary">PostgreSQL</div>
                  <div className="badge badge-secondary">REST APIs</div>
                </div>
              </div>
            </div>
            
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body text-center">
                <h4 className="card-title justify-center">Tools</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  <div className="badge badge-accent">Git</div>
                  <div className="badge badge-accent">AWS</div>
                  <div className="badge badge-accent">Figma</div>
                  <div className="badge badge-accent">VS Code</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
