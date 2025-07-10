import socrates from '../assets/socrates.jpeg'
import ergo from '../assets/ergo.png'
import screenBrightness from '../assets/screenBrightness.png'
import set from '../assets/set.png'
import react from '../assets/react.svg'
import NourishNexus from '../assets/NourishNexus.jpg'
export const projects = [
    {
      id: '1',
      title: 'SocraticAI',
      image: socrates,
      description: '• Led the development of a Python-based AI app using FastAPI to demonstrate Socratic dialogue by integrating GPT-4 as the core language model.\n•Tasked with enhancing input quality, implemented basic NLP preprocessing (tokenization, lemmatization) to improve response accuracy.\n•Built and deployed a minimal front-end interface on Vercel, making the AI app accessible to users via a live public link\n•Ensured reliability by adding robust error handling for API limits and documented clear installation and usage instructions on GitHub.',
      tech: ['React', 'OpenAI API', 'FastAPI'],
      github: 'https://github.com/EthanPascual/socraticAI',
      demo: 'https://socratic-ai-self.vercel.app/'
    },
    {
      id: '2',
      title: 'Grad Research',
      image: ergo,
      description: 'IN PROGRESS \n •Selected by professor to assist on a DARPA-funded research project using large language models (LLMs) to translate natural language statements into formal logic. \n•Tasked with designing a custom parser and syntax tree to convert first-order logic written in LaTeX into structured ErgoAI rule syntax. \n•Developed Lark-based grammars to parse nested quantifiers, logical connectives, and predicates; wrote transformers to output JSON trees.\n•Enabled automation of converting complex English policy statements into executable Ergo rules, streamlining knowledge engineering for AI reasoning.',
      tech: ['Python', 'LARK', 'ErgoAI'],
    },
    {
        id: '3',
        title: 'Context Aware Screen Brightness',
        image: screenBrightness,
        description: '• Developed a context-aware screen brightness adjustment system using OpenCV and the LAB color space, enabling precise ambient light detection for enhanced user comfort.\n• Implemented the Weber-Fechner Law to calculate optimal screen brightness based on ambient lighting and user tasks, dynamically adjusting brightness to reduce eye strain and improve productivity.\n• Built a sleek Tkinter-based GUI, allowing users to customize brightness settings and providing manual overrides.\n• Conducted validation through heuristic evaluation and performance testing, demonstrating high accuracy, fast response times, as well as improved usability in dynamic lighting environments.',
        tech: ['Python', 'Tkinter', 'OpenCV'],
        github: 'https://github.com/EthanPascual/HCI',
      },
      {
        id: '4',
        title: 'Set Bot',
        image: set,
        description: 'IN PROGRESS \n • Built a card-matching bot using OpenCV which processes video input to detect and match cards in the game “Set” by analyzing contours. \n • Utilized color-matching algorithms along with ORB for feature extraction, allowing for precise classification of “Set” cards based on color, shape, and shade. \n• Implemented dynamic programming to optimize the matching process and compute valid matches from features.\n• Through optimal matching algorithms and leveraging ORB for real-time card identification, enabling the bot to outperform 90% of human players.',
        tech: ['Python', 'OpenCV'],
        github: 'https://github.com/EthanPascual/SetBot',
      },
      {
        id: '5',
        title: 'Mediflow',
        image: react,
        description: '• Developed a fully deployed MERN process management web application, aimed at optimizing and automating Stony Brook Hospital’s ERAS (Enhanced Recovery After Surgery) pathway system. \n• Utilized Socket.io to streamline real-time chat functionalities and group chats, ensuring doctors received notifications when their involvement was needed; developed flexible frontend components for process creation using Material UI. \n• Leveraged Jest/Supertest and Cypress for full stack testing, as well as set up a GitHub Actions CI/CD to run tests. \n• Used cookies and JWT to ensure secure user authentication as well as maintaining session integrity. \n• Enhanced communication and coordination among healthcare providers, leading to more efficient patient care.',
        tech: ['React', 'MERN Stack', 'Javascript', 'Socket.io', 'HTML/CSS', 'FullCalender.js', 'JWT'],
        github: 'https://github.com/echen03-gif/Mediflow-CSE416',
        demo: 'https://mediflow-lnmh.onrender.com/login'
      },
      {
        id: '6',
        title: 'Nourish Nexus',
        image: NourishNexus,
        description: "• Developed a web app utilizing OpenAI's API to generate recipes based on fitness goals and available ingredients. \n• Led backend development, integrating MongoDB for database management and leveraging OpenAI's API to dynamically generate recipes. Contributed to frontend development, implementing modal functionalities using React.js for recipe display and management.\n• Orchestrated real-time communication with the OpenAI API, continuously updating user data to generate tailored recipes. Utilized the MERN stack for seamless integration and scalability. \n• Delivered a feature-rich application offering personalized recipe recommendations.",
        tech: ['MERN Stack', 'OpenAI  API', 'Material UI'],
        github: 'https://github.com/Edward-Chen03/Nourish-Nexus',
        demo: 'https://nourish-nexus.onrender.com/'
      },
  ];