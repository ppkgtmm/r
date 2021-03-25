interface constantObject {
  [key: string]: string;
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
