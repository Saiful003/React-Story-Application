import "./App.css";
import BgPlayGround from "./component/BgPlayGround/BgPlayGround";
import Preview from "./component/Preview/Preview";
import Type from "./component/Type/Type";

function App() {
  return (
    <>
      <h2> What's On Your Mind ? </h2>
      <div className="app__container">
        <Type />
        <BgPlayGround />
        <Preview />
      </div>
    </>
  );
}

export default App;
