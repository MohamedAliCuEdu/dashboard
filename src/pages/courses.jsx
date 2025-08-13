// json files:
import allCourses from "../json/courses.json";

// style files:
import "../styles/pages/other.scss";
import "../styles/library/classes.scss";

import { useSearchParams, Link } from "react-router-dom";

function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const trackParam = searchParams.get("track");
  // const priceParam = searchParams.get("price");

  const displayingCourses = trackParam
    ? allCourses.filter((e) => e.track === trackParam)
    : allCourses;

    // function handleChangeParam(key, value){
    //   setSearchParams((prev) => {
    //     value === null? prev.delete(key) : prev.set(key, value);
    //     return prev;
    //   })
    // }

  const courses = displayingCourses;

  return (
    <>
      <h1>Courses</h1>
      <div className="courses-page">
        <div className="categories widget">
          <h2>categories:</h2>
          <button onClick={() => setSearchParams({})}>all</button>
          <button onClick={() => setSearchParams({track: "frontend" })}>
            frontend
          </button>
          <button onClick={() => setSearchParams({ track: "backend" })}>
            backend
          </button>
          {/* <button onClick={() => handleChangeParam("price", "free" )}>
            free
          </button> */}
        </div>
        <div className="all-courses">
          {courses.map((course) => {
            // destructure the course object.
            const {
              id,
              courseName,
              avatar,
              courseImg,
              about,
              price,
              learnersCount,
            } = course;
            return (
              <div key={id} className="course">
                <div className="head">
                  <img
                    src={require(`../imgs/${courseImg}`)}
                    alt="cource-background"
                    className="cover"
                  />
                  <img
                    src={require(`../imgs/${avatar}`)}
                    alt="instructor"
                    className="instructor"
                  />
                </div>
                <div className="about">
                  <h4>{courseName}</h4>
                  <p>{about}</p>
                </div>
                <div className="info">
                  <span>
                    <i className="fa-regular fa-user"></i> {price}
                  </span>
                  <Link to={`/courses/:${encodeURIComponent(courseName)}`}>
                    <button className="btn-blue">course info</button>
                  </Link>
                  <span>
                    <i className="fa-solid fa-dollar-sign"></i> {learnersCount}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Courses;
