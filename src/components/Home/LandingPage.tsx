import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Education Hub</h1>
          <nav className="space-x-4">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#courses" className="hover:underline">Courses</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-white py-20 text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Welcome to Education Hub</h2>
            <p className="text-gray-700 mb-8">
              Your one-stop solution for all educational needs. Discover courses, track your progress, and achieve your goals.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-200">
              Get Started
            </button>
          </div>
        </section>

        <section id="features" className="bg-gray-200 py-20">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Features</h3>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-2xl font-bold mb-2">Interactive Courses</h4>
                  <p className="text-gray-700">
                    Engage with interactive lessons and track your progress.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-2xl font-bold mb-2">Expert Tutors</h4>
                  <p className="text-gray-700">
                    Learn from industry experts with years of experience.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 p-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-2xl font-bold mb-2">Certification</h4>
                  <p className="text-gray-700">
                    Earn certificates to showcase your achievements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className="bg-white py-20">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Popular Courses</h3>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/4 p-4">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold mb-2">Course 1</h4>
                  <p className="text-gray-700">Description of Course 1</p>
                </div>
              </div>
              <div className="w-full md:w-1/4 p-4">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold mb-2">Course 2</h4>
                  <p className="text-gray-700">Description of Course 2</p>
                </div>
              </div>
              <div className="w-full md:w-1/4 p-4">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold mb-2">Course 3</h4>
                  <p className="text-gray-700">Description of Course 3</p>
                </div>
              </div>
              <div className="w-full md:w-1/4 p-4">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold mb-2">Course 4</h4>
                  <p className="text-gray-700">Description of Course 4</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-gray-200 py-20">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
            <p className="text-gray-700 mb-4">Have questions or need assistance? Get in touch with us.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-200">
              Contact Us
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white p-4 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 Education Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
