import EthanPascual from '../assets/EthanPascual.jpeg';

function Home({ scrollToProjects }) {
    return (
      <div className="flex flex-col md:flex-row items-center justify-between p-8 min-h-screen">
        {/* Text */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Ethan Pascual</h1>
          <p className="text-lg mb-6">
            I’m a software engineer passionate about building modern web applications.
          </p>
          <button
            onClick={scrollToProjects}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            View My Work
          </button>
        </div>
  
        {/* Image */}
        <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center">
          <img
            src={EthanPascual}
            alt="Ethan Pascual"
            className="rounded-lg shadow-lg w-[80%] max-w-[600px] object-cover"
          />
        </div>
      </div>
    )
  }
  
  export default Home