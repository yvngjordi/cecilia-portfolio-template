"use-client"
import { Button } from "../ui/button"

export default function Main() {
  return (
    <div className="flex flex-col">
      <nav className="flex justify-between items-center py-4 px-6 bg-white shadow-md">
        <span className="text-xl font-bold">Cecilia</span>
        <div className="hidden md:flex space-x-4">
          <a className="text-gray-600 hover:text-black" href="#">
            Home
          </a>
          <a className="text-gray-600 hover:text-black" href="#">
            About
          </a>
          <a className="text-gray-600 hover:text-black" href="#">
            Project
          </a>
          <a className="text-gray-600 hover:text-black" href="#">
            Contact
          </a>
          <a className="text-gray-600 hover:text-black" href="#">
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a className="text-gray-600 hover:text-black" href="#">
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
        <div className="md:hidden">
          <MenuIcon className="text-black" />
        </div>
      </nav>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-gray-100 p-6">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">Hi there! I&apos;m Cecilia, a STEM Engineer.</h1>
          <p className="text-gray-600">
            I&apos;m a STEM Engineer based in  Florida. I specialize in developing innovative solutions for
            complex scientific and technological challenges.
          </p>
          <div className="flex space-x-2">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Email Me</Button>
            <Button className="bg-transparent hover:bg-gray-200 text-black">Download CV</Button>
          </div>
        </div>
        <div className="mb-6 md:mb-0">
          <img
            alt="Cecilia"
            className="rounded-full"
            height="300"
            src="/x.jpg"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
      </div>
      <div className="bg-white py-6 px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-600">
          I have a passion for solving problems using science and technology. With a strong background in both
          theoretical and applied engineering, I love diving into new challenges and pushing the boundaries of what&apos;s
          possible.
        </p>
      </div>
      <div className="bg-gray-100 py-6 px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-4">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <span className="inline-block bg-white rounded px-3 py-1 text-sm font-semibold text-gray-700">
            Problem Solving
          </span>
          <span className="inline-block bg-white rounded px-3 py-1 text-sm font-semibold text-gray-700">
            Data Analysis
          </span>
          <span className="inline-block bg-white rounded px-3 py-1 text-sm font-semibold text-gray-700">
            Project Management
          </span>
          <span className="inline-block bg-white rounded px-3 py-1 text-sm font-semibold text-gray-700">
            Scientific Research
          </span>
          <span className="inline-block bg-white rounded px-3 py-1 text-sm font-semibold text-gray-700">
            Communication
          </span>
          <span className="inline-block bg-white rounded px-3 py-1 text-sm font-semibold text-gray-700">
            Engineering Design
          </span>
        </div>
      </div>
      <div className="bg-white py-6 px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
        <p className="text-gray-600 mb-4">Get in touch with me on LinkedIn or check out my projects on Github.</p>
        <div className="flex space-x-2">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full flex items-center justify-center">
            <LinkedinIcon className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
          <Button className="bg-black hover:bg-gray-800 text-white w-full flex items-center justify-center">
            <GithubIcon className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>
      <div className="bg-white py-6 px-4 md:px-6">
        <h2 className="text-2xl font-bold mb-4">Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <img
            alt="Project 1"
            className="w-full"
            height="200"
            src="x.jpg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <img
            alt="Project 2"
            className="w-full"
            height="200"
            src="x.jpg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <img
            alt="Project 3"
            className="w-full"
            height="200"
            src="x.jpg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
          <img
            alt="Project 4"
            className="w-full"
            height="200"
            src="x.jpg"
            style={{
              aspectRatio: "300/200",
              objectFit: "cover",
            }}
            width="300"
          />
        </div>
      </div>
      <footer className="bg-black text-white py-6 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-center">Ready to build new things?</span>
          </div>
          <div className="space-x-4">
            <a className="hover:text-gray-400" href="#">
              LinkedIn
            </a>
            <a className="hover:text-gray-400" href="#">
              Github
            </a>
            <a className="hover:text-gray-400" href="#">
              Twitter
            </a>
          </div>
        </div>
        <div className="text-center mt-4">
          <a className="hover:text-gray-400" href="#">
            Back to Top ↑
          </a>
        </div>
      </footer>
    </div>
  )
}


function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
