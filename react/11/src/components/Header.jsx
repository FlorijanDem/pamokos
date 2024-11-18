import "/src/components/Header.css";

export default function Header() {
  return (
    <div className="d-flex justify-content-between bg-dark">
      <h1 className="header-title text-light">Marketer</h1>
      <div className="d-block d-md-none">
        <button>
          <img src="/src/components/images/search.svg" alt="Search button" />
        </button>
        <button>
          <img src="/src/components/images/menu.svg" alt="Menu button" />
          Menu
        </button>
      </div>
      <div className="d-block d-md-flex d-none">
        <button className="btn btn-link text-light hoverEffect">
          Home
        </button>
        <button className="btn btn-link text-light hoverEffect">
          About
        </button>
        <button className="btn btn-link text-light hoverEffect">
          Best Deals
        </button>
        <button className="btn btn-link text-light hoverEffect">
          Tools
        </button>
        <button className="btn btn-link text-light hoverEffect">
          Contact
        </button>
        <button className="btn btn-link text-light hoverEffect">
          <img src="/src/components/images/search.svg" alt="Search icon" />
        </button>
      </div>
    </div>
  );
}
