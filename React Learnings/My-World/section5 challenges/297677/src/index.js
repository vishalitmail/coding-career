import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <div className="skill-list">
          <SkillList skill="HTML+CSS 💪" name={{ backgroundColor: "blue" }} />
          <SkillList
            skill="JavaScript 💪 "
            name={{ backgroundColor: "yellow" }}
          />
          <SkillList
            skill="Web Design 💪"
            name={{ backgroundColor: "lightgreen" }}
          />
          <SkillList
            skill="Git and GitHub 👍"
            name={{ backgroundColor: "red" }}
          />
          <SkillList skill="React 💪" name={{ backgroundColor: "skyblue" }} />
          <SkillList
            skill="Svelte 👶"
            name={{ backgroundColor: "orangered" }}
          />
        </div>
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="./download.jpg" alt="johnImg" />;
}
function Intro() {
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <strong>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course , I like to play board games , to cook (and eat) , or
        to just enjoy the Portuguese sun at the beach.{" "}
      </strong>
    </div>
  );
}
function SkillList(props) {
  return (
    <span style={props.name} className="skill">
      {props.skill}
    </span>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
