const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        Lunar
      </a>
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="/" className="active nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Work
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
