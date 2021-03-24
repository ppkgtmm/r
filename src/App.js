import MainCard from "./components/MainCard";
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
    </div>
  );
}

export default App;
