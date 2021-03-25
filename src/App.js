import "./index.css";
import { MainCard, BackgroundCard, Skills } from "./components";
import {
  urls,
  fullName,
  description,
  education,
  experience,
} from "./constants/constant.ts";

function App() {
  return (
    <div>
      <MainCard
        contactUrls={urls}
        fullName={fullName}
        description={description}
      />
      <div className="block md:mx-10 lg:mx-20 md:grid grid-flow-col grid-cols-2 grid-rows-1 md:gap-x-3 lg:gap-x-7 items-stretch">
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
      <div className="block md:mx-10 lg:mx-20 md:flex justify:center items-stretch">
        <Skills bg={"bg-mgreen"} />
        <Skills bg={"bg-yellow"} />
        <Skills bg={"bg-bgrey"} />
      </div>
    </div>
  );
}

export default App;
