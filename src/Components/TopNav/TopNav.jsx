import "./TopNav.css";

const TopNav = () => {
  return (
    <nav className="top-nav">
      <h1 className="logo">
        <span className="underscore">_</span>underscore
      </h1>
      <ul className="nav-socials">
        <li className="nav-item">
          <a href="https://github.com/sandy5738" target="_blank">
            <i className="nav-social-icon fa-brands fa-github"></i>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="https://www.linkedin.com/in/sandeep-h-m-8817b157/"
            target="_blank"
          >
            <i className="nav-social-icon fa-brands fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default TopNav;
