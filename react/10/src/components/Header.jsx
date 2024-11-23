import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1 className="header-title">Page title</h1>
      <img
        src="src/assets/header-cat.jpg"
        alt="Domestic cat"
        className="header-img w-100 object-fit-cover"
      />
    </header>
  );
}
