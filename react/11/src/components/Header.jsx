export default function Header() {
  return (
    <div className="d-flex justify-content-between bg-dark">
      <h1 className="header-title text-light">Marketer</h1>
      <div>
        <button>
          <img src="/src/components/images/search.svg" alt="Search button" />
        </button>
        <button>
          <img src="/src/components/images/menu.svg" alt="Menu button" />
          Menu
        </button>
      </div>
    </div>
  );
}
