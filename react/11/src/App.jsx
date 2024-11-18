import Header from "./components/Header";
import CardOne from "./components/CardOne";
import CardTwo from "./components/CardTwo";
import CardThree from "./components/CardThree";
import Info from "./components/Info";
import RecentPost from "./components/RecentPosts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <CardOne />
      <CardTwo />
      <CardThree />
      <Info />
      <RecentPost />
      <Footer />
    </div>
  );
}
