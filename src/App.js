import "./index.css";
import { MainCard, BackgroundCard } from "./components";
import { urls, fullName, description } from "./constants/constant.ts";

function App() {
  return (
    <div>
      <MainCard
        contactUrls={urls}
        fullName={fullName}
        description={description}
      />
      <div className="block md:mx-10 lg:mx-20 md:grid grid-flow-col grid-cols-2 grid-rows-1 gap-3">
        <BackgroundCard bg={"bg-blue"} heading={"education"} />
        <BackgroundCard bg={"bg-orange"} heading={"experience"} />
      </div>
    </div>
  );
}

export default App;
