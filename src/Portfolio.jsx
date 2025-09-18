
import React from 'react';

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="fixed w-full bg-gray-800 shadow-md z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-blue-400">Adham Aladwash</div>
          <div className="space-x-4">
            <a href="#about" className="hover:text-blue-300">About</a>
            <a href="#experience" className="hover:text-blue-300">Experience</a>
            <a href="#mechanical-projects" className="hover:text-blue-300">Mechanical</a>
            <a href="#projects" className="hover:text-blue-300">Projects</a>
            <a href="#skills" className="hover:text-blue-300">Skills</a>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
            <a href="/AdhamAladwash_CV.pdf" target="_blank" className="bg-blue-500 px-3 py-1 rounded text-white hover:bg-blue-600">Download CV</a>
          </div>
        </nav>
      </header>

      <main className="pt-24 max-w-6xl mx-auto px-6">

        <section id="about" className="grid md:grid-cols-2 gap-8 items-center py-12">
          <div>
            <h1 className="text-4xl font-bold text-blue-400">Mechatronics Engineer || Data Scientist</h1>
            <p className="mt-4 text-gray-300">
              I am a passionate Mechatronics Engineer with a strong interest in bridging the gap between mechanical systems, electronics, and data-driven solutions. My experience combines hands-on design using SolidWorks with practical implementation of control systems and automation.
            </p>
            <p className="mt-2 text-gray-300">
              Alongside my engineering background, I specialize in Data Science, where I apply machine learning and data analytics to solve real-world problems and optimize engineering processes.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/profile.jpg" alt="Adham Aladwash" className="rounded-xl shadow-lg w-64 h-64 object-cover" />
          </div>
        </section>

        <section id="experience" className="py-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Experience</h2>
          <div className="bg-gray-800 p-6 rounded-lg mb-4">
            <h3 className="text-xl font-semibold">Electrical Systems Intern — GB Auto</h3>
            <span className="text-gray-400">July 2025 – August 2025</span>
            <p className="mt-2 text-gray-300">
              Hands-on experience in automotive electrical systems, wiring harnesses, control units, and diagnostics.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">Data Science & AI Trainee — DEPI</h3>
            <span className="text-gray-400">June 2025 – Present</span>
            <p className="mt-2 text-gray-300">
              Training in Data Science and AI, working on datasets, predictive models, and end-to-end AI workflows.
            </p>
          </div>
        </section>

        <section id="mechanical-projects" className="py-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Mechanical Design Projects</h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
            <p className="text-gray-300 mb-4">
              Explore a collection of my mechanical design works created using SolidWorks and other CAD tools.
            </p>
            <a href="https://grabcad.com/adham.aladwash-2" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">View on GrabCAD</a>
          </div>
        </section>

        <section id="projects" className="py-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Projects</h2>
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-300">GitHub Projects</h3>
              <a href="https://github.com/ADHAMALADWASH" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg mt-3">View on GitHub</a>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-300">Clothing Store Database</h3>
              <p className="mt-2 text-gray-300">Relational database to manage clothing inventory, sales, and customer data.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-300">Automatic Car Headlights using LDR Sensor</h3>
              <p className="mt-2 text-gray-300">System that switches headlights ON/OFF based on light intensity using an LDR sensor.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="py-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Embedded C",
              "Python (Pandas, NumPy)",
              "React & Tailwind",
              "PCB Design",
              "Sensors & Actuators",
              "Git",
              "SolidWorks (Mechanical Design & Simulation)",
              "Machine Learning",
              "SQL & Database Design",
              "Database Structure",
              "OpenCV",
              "Data Visualization"
            ].map((skill, idx) => (
              <div key={idx} className="px-4 py-2 bg-gray-800 rounded-lg text-gray-200">{skill}</div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-12">
          <h2 className="text-3xl font-bold text-blue-400 mb-6">Contact</h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4 text-gray-300">
            <p><strong>Email:</strong> adhamaladwash71@gmail.com</p>
            <p><strong>Phone:</strong> +201068228935</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/adham-aladwash-8b3b8824a/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">adham-aladwash</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/ADHAMALADWASH" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">ADHAMALADWASH</a></p>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Adham Aladwash
      </footer>
    </div>
  );
}
