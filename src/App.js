import "./index.css";
import { MainCard, BackgroundCard } from "./components";
import { urls, fullName, description, education, experience } from "./constants/constant.ts";

function App() {
  return (
    <div>
      <MainCard
        contactUrls={urls}
        fullName={fullName}
        description={description}
      />
      <div className="block md:mx-10 lg:mx-20 md:grid grid-flow-col grid-cols-2 grid-rows-1 gap-3 items-stretch">
        <BackgroundCard bg={"bg-blue"} heading={"education"} info={education}/>
        <BackgroundCard bg={"bg-orange"} heading={"experience"} info={experience}/>
      </div>
    </div>
  );
}

export default App;
