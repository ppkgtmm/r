import "./index.css";
import { MainCard, BackgroundSection, SkillSection, ProjectSection} from "./components";
import { urls, fullName, description } from "./constants/constant.ts";

function App() {
  return (
    <div className="mb-4">
      <MainCard
        contactUrls={urls}
        fullName={fullName}
        description={description}
      />
      <BackgroundSection />
      <SkillSection />
      <ProjectSection />
      </div>
  );
}

export default App;
