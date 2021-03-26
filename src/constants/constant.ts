interface constantObject {
  [key: string]: string;
}

interface skills {
  heading: string;
  bg: string;
  skills: [string, number][];
}

export const urls: constantObject = {
  linkedin: "https://www.linkedin.com/in/pinky-gautam-3a7234204/",
  fb: "https://www.facebook.com/pinky.gautam.92775/",
  email: "pinky.gtmm@gmail.com",
  gh: "https://github.com/ppkgtmm",
};

export const fullName: string = "Pinky Gautam";

export const description: string =
  " An enthusiastic engineering student with ability to learn fast and willingness to acquire new technological skills";

export const education: constantObject[] = [
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
];

export const experience: constantObject[] = [
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
];

export const skillsData: skills[] = [
  {
    heading: "front-end",
    bg: "bg-mgreen",
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
    heading: "back-end",
    bg: "bg-yellow",
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
    heading: "data",
    bg: "bg-bgrey",
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
