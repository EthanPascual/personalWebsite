import YHack from '../assets/yhack.jpeg';
import Rock from '../assets/rock.jpeg';

function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 min-h-screen">
      <div className="md:w-1/2 w-full md:pl-8 order-1 md:order-2">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-4">
          Hi, I’m Ethan — a problem solver at heart. Growing up, I loved puzzles like Rubik’s Cubes and chess, so it was only natural for me to find my way into programming — especially with my dad working as a software engineer.
        </p>
        <p className="mb-4">
          I hold a Bachelor of Science in Computer Science and Applied Mathematics from Stony Brook University, where I’m now pursuing my Master’s in Computer Science. I’m always exploring new technologies and enjoy applying them to real-world projects. Along the way, I’ve gained experience with tools and frameworks like OpenCV, OpenAI’s API, Lark parser, ErgoAI, Django, LangChain, and AWS.
        </p>
        <p>
          Outside of coding, I love rock climbing, lifting weights, watching UFC, and anime. I believe in growth — both personally and professionally — and I enjoy taking on new challenges to keep learning and pushing myself forward.
        </p>
      </div>

      <div className="md:w-1/2 w-full flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0 order-2 md:order-1">
        <div className="w-[80%] md:w-1/2 max-w-[300px]">
          <img src={YHack} alt="YHack" className="rounded-lg shadow-lg object-cover w-full" />
          <p className="text-sm text-gray-500 mt-2 text-center">Taking a picture with friends after YHack.</p>
        </div>
        <div className="w-[80%] md:w-1/2 max-w-[300px]">
          <img src={Rock} alt="Rock Climbing" className="rounded-lg shadow-lg object-cover w-full" />
          <p className="text-sm text-gray-500 mt-2 text-center">Rock Climbing with friends.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
