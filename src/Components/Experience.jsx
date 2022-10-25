import "../Styles/experience.css";
import BulletPoint from "../Images/Point.png";

const Experience = () => {
  return (
    <div className="experienceContainer">
      <div className="TitleExperience">
        / Experience
        <div className="c">Fill</div>
      </div>
      <div className="ExperienceRoleContainer">
        <div className="ExperienceTitleContainer">
          <div className="title">Software Developer @</div>
          <div
            onClick={() => window.open("https://www.gobolt.com/", "_blank")}
            className="company"
          >
            GoBolt
          </div>
        </div>
        <div className="ExperienceTimeLine"></div>
        <div className="timeLine">MAY 2022 - OCT 2022</div>
        <div className="ResponsibilitiesContainer">
          <div className="IndividualResponsibilty">
            <div className="BulletContainer">
              <img className="Bullet" src={BulletPoint} alt="Bullet" />
            </div>
            <div className="ResponsibiltyText">
              Developed and maintained a transportation routing system using
              React, Typescript, React Query and RecoilJS.
            </div>
          </div>
          <div className="IndividualResponsibilty">
            <div className="BulletContainer">
              <img className="Bullet" src={BulletPoint} alt="Bullet" />
            </div>
            <div className="ResponsibiltyText">
              Collaborated with engineers, and UX/UI, designers to help delivery
              a new emailing notification system for package updates; Reaching
              +1000 customers daily.
            </div>
          </div>
          <div className="IndividualResponsibilty">
            <div className="BulletContainer">
              <img className="Bullet" src={BulletPoint} alt="Bullet" />
            </div>
            <div className="ResponsibiltyText">
              Followed test-driven development best practices and leveraged the
              React testing library to write 100+ maintainable unit tests for
              React components, ensuring more code coverage.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
