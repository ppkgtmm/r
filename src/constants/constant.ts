interface metaData {
  heading: string;
  bg?: string;
}

interface objectType {
  [key: string]: string;
}

interface background {
  meta?: metaData;
  data: objectType[];
}

interface skill {
  meta: metaData;
  skills: [string, number][];
}

interface project{
  name: string;
  description: string;
  img: {
    src: string,
    alt: string
  }
}

export const urls: objectType = {
  linkedin: "https://www.linkedin.com/in/pinky-gautam-3a7234204/",
  fb: "https://www.facebook.com/pinky.gautam.92775/",
  email: "pinky.gtmm@gmail.com",
  gh: "https://github.com/ppkgtmm",
};

export const fullName: string = "Pinky Gautam";

export const description: string =
  " An enthusiastic engineering student with ability to learn fast and willingness to acquire new technological skills";

export const education: background = {
  meta: {
    heading: "education",
    bg: "bg-blue",
  },
  data: [
    {
      title: "High School",
      place: "Assumption Convent Bangkok",
      start: "2014",
      end: "2017",
    },
    {
      title: "computer engineering",
      place: "king mongkut's university of technology thonburi",
      start: "2017",
      end: "2021",
    },
  ],
};

export const experience: background = {
  meta: {
    heading: "experience",
    bg: "bg-orange",
  },
  data: [
    {
      title: "full-stack developer intern",
      place: "donuts bangkok co., ltd",
      start: "jun 2020",
      end: "aug 2020",
    },
    {
      title: "machine learning & software engineering intern",
      place: "taskworld co., ltd",
      start: "aug 2020",
      end: "may 2021",
    },
  ],
};

export const skillsData: skill[] = [
  {
    meta:
    {
      heading: "front-end",
      bg: "bg-mgreen"
    },
    skills: [
      ["HTML", 4],
      ["CSS", 4],
      ["Javascript", 4],
      ["Bootstrap", 3],
      ["Tailwind", 3],
      ["React JS", 4],
    ],
  },
  {
    meta:
    {
      heading: "back-end",
      bg: "bg-yellow",
    },
    skills: [
      ["Java", 3],
      ["Node JS", 3],
      ["Express", 3],
      ["PHP", 3],
      ["Laravel", 4],
      ["Golang", 3],
      ["Python", 4],
      ["Typescript", 3],
      ["Nest JS", 3],
    ],
  },
  {
    meta:
    {
      heading: "data",
      bg: "bg-bgrey",
    },
    skills: [
      ["MongoDB", 3],
      ["MySQL", 4],
      ["PostgreSQL", 4],
      ["Machine Learning", 3],
      ["Tensorflow", 4],
      ["Pandas", 4],
      ["Airflow", 3],
      ["Hadoop", 3],
    ],
  },
];

export const fullscore: number = 5;

export const projects: project[] = [
  {
    name: 'Books API',
    description: 'Interface for querying, adding, editing and deleting books data',
    img: {
      src: 'https://firebasestorage.googleapis.com/v0/b/resume-the-work.appspot.com/o/books-api.png?alt=media&token=92c90d2e-de69-42af-8b2c-ca51c72705fd',
      alt: 'Books API'
    }
  },
  {
    name: 'Emotion based song recommender',
    description: 'Command line program help finding song from emotion and more with songs and emotions data you provide',
    img: {
      src: 'https://firebasestorage.googleapis.com/v0/b/resume-the-work.appspot.com/o/emo-based-song.png?alt=media&token=0735baa6-0e5a-4e9c-b4e8-51f793e0c82a',
      alt: 'Emotion based song recommender'
    }
  },
  {
    name: 'Flipping game',
    description: 'Web-based game that requires you to match blocks randomly placed in each game',
    img: {
      src: 'https://firebasestorage.googleapis.com/v0/b/resume-the-work.appspot.com/o/flip-game.png?alt=media&token=ac4bd76f-dfdf-4b60-9632-7a53e96f45a6',
      alt: 'Flipping game'
    }
  },
  {
    name: 'Go now',
    description: 'Website to help you come up with places to travel in each season',
    img: {
      src: 'https://firebasestorage.googleapis.com/v0/b/resume-the-work.appspot.com/o/go-now.png?alt=media&token=3ab5000b-0f67-409b-b3a4-d05d9a7b5dc4',
      alt: 'Go now'
    }
  },
  {
    name: 'Battleship',
    description: 'Bussiness logic and interface for people who want to play battleship game with 2 players',
    img: {
      src: 'https://firebasestorage.googleapis.com/v0/b/resume-the-work.appspot.com/o/battleship.png?alt=media&token=b508b78d-e514-4245-8e67-0a47564991c0',
      alt: 'Battleship'
    }
  },
  {
    name: 'Overwatch Heroes scraper',
    description: 'Overwatch game character information extractor from game website to help in data collection',
    img: {
      src: 'https://firebasestorage.googleapis.com/v0/b/resume-the-work.appspot.com/o/overwatch.png?alt=media&token=25bcf8f8-207a-4225-b88e-4e4e721769a4',
      alt: 'Battleship'
    }
  }
]
