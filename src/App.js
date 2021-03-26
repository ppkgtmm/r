import "./index.css";
import { MainCard, BackgroundCard, Skills } from "./components";
import {
  urls,
  fullName,
  description,
  education,
  experience,
} from "./constants/constant.ts";
import { skillsData } from "./constants/constant";

function App() {
  return (
    <div className="mb-10">
      <MainCard
        contactUrls={urls}
        fullName={fullName}
        description={description}
      />
      <div className="block md:mx-10 lg:mx-20 mt-4 md:mt-10 md:grid grid-flow-col grid-cols-2 grid-rows-1 md:gap-x-3 lg:gap-x-7 items-stretch">
        <BackgroundCard
          bg={"bg-blue"}
          justify={"md:justify-self-end"}
          heading={"education"}
          info={education}
        />
        <BackgroundCard
          bg={"bg-orange"}
          justify={"md:justify-self-start"}
          heading={"experience"}
          info={experience}
        />
      </div>
      <div className="block md:mx-4 lg:mx-6 mt-4 md:mt-10 md:flex justify-center flex-wrap items-stretch">
        {(skillsData || []).map((skillData, index) => (
          <Skills key={index} info={skillData} />
        ))}
      </div>
    </div>
  );
}

export default App;
