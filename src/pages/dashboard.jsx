// react components:
import { useState } from "react";
import { Link } from "react-router-dom";

// json files:
import tasks from "../json/tasks.json";
import table from "../json/table.json";

// style files:
import "../styles/pages/dashboard.scss";
import "../styles/library/classes.scss";

// img:
import pdf from "../imgs/pdf.svg";

// components:
function Tasks() {
  const [allTasks, setAllTasks] = useState(tasks);

  // a btn using function for delete task or no.
  function taskDone(btn) {
    const newTasks = []; // make new array to clone the origin array.
    allTasks.map((task) => {
      if (task.id === btn) {
        // chane done if true or false.
        task.done = !task.done;
      }
      return newTasks.push(task);
    });
    setAllTasks([...newTasks]);
  }

  // return the result.
  return (
    <div className="tasks widget">
      <h2 className="widget-info">latest tasks</h2>
      {tasks.map((task) => {
        return (
          <div
            key={task.id}
            id={task.id}
            className={`task-row ${task.done ? "task-done" : ""}`}
          >
            <div className="txt">
              <h3>{task.title}</h3>
              <p>{task.content}</p>
            </div>
            <i
              className="fa-regular fa-trash-can"
              onClick={() => taskDone(task.id)}
            ></i>
          </div>
        );
      })}
    </div>
  );
}

function Dashboard() {
  return (
    <>
      <h1>dashboard</h1>
      <div className="dashboard-page">
        <div className="all-widgets">
          <div className="welcome widget">
            <div className="banner">
              <div className="widget-info">
                <h2>welcome</h2>
                <p>elzero</p>
              </div>
              <img
                className="avatar"
                src={require("../imgs/welcome.png")}
                alt="welcome"
              />
            </div>
            <img
              src={require("../imgs/avatar.png")}
              className="avatar"
              alt="avatar"
            />
            <div className="details">
              <div className="data">
                osama elzero<p>developer</p>
              </div>
              <div className="data">
                80<p>projects</p>
              </div>
              <div className="data">
                $8500<p>earned</p>
              </div>
            </div>
            <Link className="btn-blue fs-14" to="/profile">
              profile
            </Link>
          </div>
          <div className="draft widget">
            <div className="widget-info">
              <h2>quick draft</h2>
              <p>write a draft for your ideas</p>
            </div>
            <form action="">
              <input type="text" name="title" placeholder="title" />
              <textarea
                name="idea"
                id=""
                placeholder="your  thought"
              ></textarea>
              <input className="btn-blue fs-14" type="submit" value="save" />
            </form>
          </div>
          <div className="targets widget">
            <div className="widget-info">
              <h2>yearly targets</h2>
              <p>targets of the year</p>
            </div>
            <div className="target-row money">
              <div className="icon">
                <i className="fa-solid fa-dollar-sign"></i>
              </div>
              <div className="data">
                <p className="name">money</p>
                <p className="value">$20.000</p>
                <div className="progress">
                  <span>80%</span>
                </div>
              </div>
            </div>
            <div className="target-row projects-count">
              <div className="icon">
                <i className="fa-solid fa-code"></i>
              </div>
              <div className="data">
                <p className="name">projects</p>
                <p className="value">24</p>
                <div className="progress">
                  <span>55%</span>
                </div>
              </div>
            </div>
            <div className="target-row team">
              <div className="icon">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="data">
                <p className="name">team</p>
                <p className="value">12</p>
                <div className="progress">
                  <span>75%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tickets widget">
            <div className="widget-info">
              <h2>tickets statistics</h2>
              <p>everything about support tickets</p>
            </div>
            <div className="boxes">
              <div className="total box">
                <i className="fa-regular fa-rectangle-list fa-2x c-orange"></i>
                <span>2500</span>
                <p>total</p>
              </div>
              <div className="pending box">
                <i className="fa-solid fa-spinner fa-2x c-blue"></i>
                <span>500</span>
                <p>pending</p>
              </div>
              <div className="closed box">
                <i className="fa-regular fa-circle-check fa-2x c-green"></i>
                <span>1900</span>
                <p>closed</p>
              </div>
              <div className="deleted box">
                <i className="fa-regular fa-rectangle-xmark fa-2x c-red"></i>
                <span>100</span>
                <p>deleted</p>
              </div>
            </div>
          </div>
          <div className="news widget">
            <h2 className="widget-info">latest news</h2>
            <div className="news-row">
              <div>
                <img src={require("../imgs/news-01.png")} alt="news-1" />
                <div className="txt">
                  <h3>created SASS section</h3>
                  <p>new SASS examples & tutorials</p>
                </div>
              </div>
              <div className="time btn-grey fs-13">3 days ago</div>
            </div>
            <div className="news-row">
              <div>
                <img src={require("../imgs/news-02.png")} alt="news-2" />
                <div className="txt">
                  <h3>changed the design</h3>
                  <p>a brand new website design</p>
                </div>
              </div>
              <div className="time btn-grey fs-13">5 days ago</div>
            </div>
            <div className="news-row">
              <div>
                <img src={require("../imgs/news-03.png")} alt="news-3" />
                <div className="txt">
                  <h3>team increased</h3>
                  <p>3 developers joined the team</p>
                </div>
              </div>
              <div className="time btn-grey fs-13">7 days ago</div>
            </div>
            <div className="news-row">
              <div>
                <img src={require("../imgs/news-04.png")} alt="news-4" />
                <div className="txt">
                  <h3>added payment gateway</h3>
                  <p>many new payment gateways added</p>
                </div>
              </div>
              <div className="time btn-grey fs-13">9 days ago</div>
            </div>
          </div>
          <Tasks />
          <div className="top-search widget">
            <h2 className="widget-info">top search items</h2>
            <div className="items-head">
              <span>keyword</span>
              <span>search count</span>
            </div>
            <div className="item">
              <span className="key">programming</span>
              <span className="count btn-grey fs-13">220</span>
            </div>
            <div className="item">
              <span className="key">javaScript</span>
              <span className="count btn-grey fs-13">180</span>
            </div>
            <div className="item">
              <span className="key">PHP</span>
              <span className="count btn-grey fs-13">160</span>
            </div>
            <div className="item">
              <span className="key">code</span>
              <span className="count btn-grey fs-13">145</span>
            </div>
            <div className="item">
              <span className="key">design</span>
              <span className="count btn-grey fs-13">110</span>
            </div>
            <div className="item">
              <span className="key">logic</span>
              <span className="count btn-grey fs-13">95</span>
            </div>
          </div>
          <div className="uploads widget">
            <h2 className="widget-info">latest uploads</h2>
            <ul>
              <li>
                <div className="file">
                  <img src={pdf} alt="" />
                  <div className="file-name">
                    <h4 className="name">my-file.pdf</h4>
                    <p className="author">elzero</p>
                  </div>
                </div>
                <div className="btn-grey fs-13">2.9mb</div>
              </li>
              <li>
                <div className="file">
                  <img src={pdf} alt="" />
                  <div className="file-name">
                    <h4 className="name">My-Video-File.avi</h4>
                    <p className="author">admin</p>
                  </div>
                </div>
                <div className="btn-grey fs-13">4.9mb</div>
              </li>
              <li>
                <div className="file">
                  <img src={pdf} alt="" />
                  <div className="file-name">
                    <h4 className="name">My-Psd-File.pdf</h4>
                    <p className="author">osama</p>
                  </div>
                </div>
                <div className="btn-grey fs-13">4.5mb</div>
              </li>
              <li>
                <div className="file">
                  <img src={pdf} alt="" />
                  <div className="file-name">
                    <h4 className="name">My-Zip-File.pdf</h4>
                    <p className="author">user</p>
                  </div>
                </div>
                <div className="btn-grey fs-13">8.9mb</div>
              </li>
              <li>
                <div className="file">
                  <img src={pdf} alt="" />
                  <div className="file-name">
                    <h4 className="name">My-DLL-File.pdf</h4>
                    <p className="author">admin</p>
                  </div>
                </div>
                <div className="btn-grey fs-13">4.9mb</div>
              </li>
              <li>
                <div className="file">
                  <img src={pdf} alt="" />
                  <div className="file-name">
                    <h4 className="name">My-Eps-File.pdf</h4>
                    <p className="author">designer</p>
                  </div>
                </div>
                <div className="btn-grey fs-13">8.9mb</div>
              </li>
            </ul>
          </div>
          <div className="last-project widget">
            <h2 className="widget-info">last project progress</h2>
            <ul>
              <li className="finished">got the project</li>
              <li className="finished">started the project</li>
              <li className="finished">the project about to finished</li>
              <li className="load">test the project</li>
              <li>finish the project & get money</li>
            </ul>
            <img src={require("../imgs/project.png")} alt="" />
          </div>
          <div className="reminders widget">
            <h2 className="widget-info">reminders</h2>
            <ul>
              <li className="blue">
                <span className="point bg-blue"></span>
                <div>
                  <p>check my tasks list</p>
                  <span>28/09/2022 - 12:00am</span>
                </div>
              </li>
              <li className="green">
                <span className="point bg-green"></span>
                <div>
                  <p>check my projects</p>
                  <span>26/10/2022 - 12:00am</span>
                </div>
              </li>
              <li className="orange">
                <span className="point bg-orange"></span>
                <div>
                  <p>call all my clients</p>
                  <span>05/11/2022 - 12:00am</span>
                </div>
              </li>
              <li className="red">
                <span className="point bg-red"></span>
                <div>
                  <p>finish the development workshop</p>
                  <span>20/12/2022 - 12:00am</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="latest-post widget">
            <h2 className="widget-info">latest post</h2>
            <div className="person">
              <img src={require("../imgs/avatar.png")} alt="avatar" />
              <div className="name">
                <h4>osama elzero</h4>
                <span>about 3 hours ago</span>
              </div>
            </div>
            <p className="content">
              you can fool all of the people some of the time, and some of the
              people all of the time, but you can't fool all of the people all
              of the time.
            </p>
            <div className="stats">
              <div className="like">
                <i className="fa-regular fa-heart"></i>
                <span> 1.8K</span>
              </div>
              <div className="comment">
                <i className="fa-regular fa-comments"></i>
                <span> 500</span>
              </div>
            </div>
          </div>
          <div className="social widget">
            <h2 className="widget-info">social media stats</h2>
            <div className="social-row twitter">
              <div>
                <i className="fa-brands fa-twitter fa-2x"></i>
              </div>
              <p>90K followers</p>
              <Link to="/" className="btn fs-13">
                follow
              </Link>
            </div>
            <div className="social-row facebook">
              <div>
                <i className="fa-brands fa-facebook-f fa-2x"></i>
              </div>
              <p>2M like</p>
              <Link to="/" className="btn fs-13">
                like
              </Link>
            </div>
            <div className="social-row youtube">
              <div>
                <i className="fa-brands fa-youtube fa-2x"></i>
              </div>
              <p>1M subs</p>
              <Link to="/" className="btn fs-13">
                subscribe
              </Link>
            </div>
            <div className="social-row linkedin">
              <div>
                <i className="fa-brands fa-linkedin fa-2x"></i>
              </div>
              <p>70K followers</p>
              <Link to="/" className="btn fs-13">
                follow
              </Link>
            </div>
          </div>
        </div>
        <div className="all-project widget">
          <h2 className="widget-info">projects</h2>
          <div className="container">
            <table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>finish date</th>
                  <th>client</th>
                  <th>price</th>
                  <th>team</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {table.map((project) => {
                  const { id, name, date, client, price, team, status } =
                    project;
                  return (
                    <tr key={id}>
                      <td>{name}</td>
                      <td>{date}</td>
                      <td>{client}</td>
                      <td>${price}</td>
                      <td>
                        {team.map((person) => {
                          return (
                            <img
                              key={person}
                              src={require(`../imgs/${person}.png`)}
                              alt="team"
                            />
                          );
                        })}
                      </td>
                      <td>
                        <span className={`${status.btn} fs-13`}>
                          {status.name}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
