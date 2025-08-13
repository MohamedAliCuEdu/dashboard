import { NavLink } from "react-router-dom";

// scss file:
import "../styles/layouts/layouts.scss";

function Nav() {
  const links = [
    {
      id: "1",
      path: "",
      pageName: "dashboard",
      icon: "fa-regular fa-chart-bar fa-fw",
    },
    {
      id: "2",
      path: "settings",
      pageName: "settings",
      icon: "fa-solid fa-gear fa-fw",
    },
    {
      id: "3",
      path: "profile",
      pageName: "profile",
      icon: "fa-regular fa-user fa-fw",
    },
    {
      id: "4",
      path: "projects",
      pageName: "projects",
      icon: "fa-solid fa-diagram-project fa-fw",
    },
    {
      id: "5",
      path: "courses",
      pageName: "courses",
      icon: "fa-solid fa-graduation-cap fa-fw",
    },
    {
      id: "6",
      path: "friends",
      pageName: "friends",
      icon: "fa-regular fa-circle-user fa-fw",
    },
    {
      id: "7",
      path: "files",
      pageName: "files",
      icon: "fa-regular fa-file fa-fw",
    },
    {
      id: "8",
      path: "plans",
      pageName: "plans",
      icon: "fa-regular fa-credit-card fa-fw",
    },
  ];

  return (
    <nav>
      <h3>elzero</h3>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <NavLink to={link.path ? `/${link.path}` : "/"} end={link.path === ""}>
                <i className={link.icon}></i>
                <span>{link.pageName}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
