import { useParams, NavLink, Outlet } from "react-router-dom";

// import courses data:
import courses from "../json/courses.json";

// import scss file:
import "../styles/pages/course-info.scss";

function Description() {
  return (
    <>
      <ul>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          veritatis, sit voluptatum molestiae iste distinctio, impedit eos dicta
          reprehenderit quod accusamus voluptatem. Beatae quisquam similique
          maiores totam aut nostrum laborum.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          veritatis, sit voluptatum molestiae iste distinctio, impedit eos dicta
          reprehenderit quod accusamus voluptatem. Beatae quisquam similique
          maiores totam aut nostrum laborum.
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          veritatis, sit voluptatum molestiae iste distinctio, impedit eos dicta
          reprehenderit quod accusamus voluptatem. Beatae quisquam similique
          maiores totam aut nostrum laborum.
        </li>
      </ul>
    </>
  );
}
function Tasks() {
  return (
    <>
      <ul>
        <li>task: 1.</li>
        <li>task: 2.</li>
        <li>task: 3.</li>
        <li>task: 4.</li>
        <li>task: 5.</li>
        <li>task: 6.</li>
        <li>task: 7.</li>
        <li>task: 8.</li>
        <li>task: 9.</li>
        <li>task: 10.</li>
      </ul>
    </>
  );
}
function Unites() {
  return (
    <>
      <ul>
        <li>unite: 1.</li>
        <li>unite: 2.</li>
        <li>unite: 3.</li>
        <li>unite: 4.</li>
        <li>unite: 5.</li>
        <li>unite: 6.</li>
        <li>unite: 7.</li>
        <li>unite: 9.</li>
        <li>unite: 8.</li>
        <li>unite: 10.</li>
      </ul>
    </>
  );
}
// console.log(courses);
function CourseInfo() {
  const params = useParams();
  const course = courses.filter((e) => ":" + e.courseName === params.course)[0];

  if (course !== undefined) {
    const { courseName, avatar, about, price, learnersCount } = course;
    return (
      <>
        {/* <i class="fa-solid fa-pen-to-square"></i> */}
        <h1>course info:</h1>
        <NavLink to=".." relative="path">back to all courses</NavLink>
        <main className="course-all">
          <section className="course-info widget">
            <div className="banner">
              <img src={require(`../imgs/${avatar}`)} alt="" />
            </div>
            <div className="course-details">
              <div className="heading">
                <h1>{courseName}</h1>
                <div className="nums">
                  <span className="btn-grey">price: {price}</span>
                  <span className="btn-grey">learner: {learnersCount}</span>
                </div>
              </div>
              <div className="about">
                <h3>about:</h3>
                <p className="about">{about}</p>
                <div className="link">
                  link: <a href="settings">example/course.com</a>
                </div>
              </div>
              <div className="nav-content">
                <nav>
                  <NavLink to="." end>
                    Description
                  </NavLink>
                  <NavLink to="unites">Unites</NavLink>
                  <NavLink to="tasks">Tasks</NavLink>
                </nav>
                <div className="content">
                  <Outlet />
                </div>
              </div>
            </div>
          </section>
          <section className="course-settings widget">
            <h3>course settings:</h3>
          </section>
        </main>
      </>
    );
  } else {
    return (
      <>
        <h1>course info:</h1>
        <h2 style={{ margin: "20px" }}>page not found!</h2>
      </>
    );
  }
}

export { CourseInfo, Description, Unites, Tasks };
