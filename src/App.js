import MainCard from "./components/MainCard";
import BackgroundCard from './components/BackgroundCard'
import "./index.css";
import { urls, fullName, description } from "./constant";
function App() {
  return (
    <div>
      <MainCard
        contactUrls={urls}
        fullName={fullName}
        description={description}
      />
      <div className="block md:mx-10 lg:mx-20 md:grid grid-flow-col grid-cols-2 grid-rows-1 gap-3">
        <BackgroundCard heading={"education"} />
        <BackgroundCard heading={"experience"}/>
      </div>
    </div>
  );
}

export default App;
