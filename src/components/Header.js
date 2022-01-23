const Header = () => {
  const links = [
    {
      name: "home",
      id: "home",
    },
    {
      name: "about",
      id: "about",
    },
    {
      name: "work",
      id: "work",
    },
    {
      name: "contact",
      id: "contact",
    },
  ];
  return (
    <header>
      <a href="/" className="logo">
        Lunar
      </a>
      <ul className="nav-menu">
        {links.map((link) => (
          <li className="nav-item">
            <a href="/" className="nav-link">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
