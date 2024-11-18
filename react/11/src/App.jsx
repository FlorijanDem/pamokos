import Header from "./components/Header";
import CardOne from "./components/CardOne";
import CardTwo from "./components/CardTwo";
import CardThree from "./components/CardThree";
import Info from "./components/Info";
import RecentPost from "./components/RecentPosts";
import Footer from "./components/Footer";
import "/src/App.css";
export default function App() {
  return (
    <div className="app-theme">
      <Header />
      <div className="container windows-theme">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <CardOne />
              <CardTwo />
              <CardThree />
            </div>
            <div className="col-xl-4">
              <Info />
              <RecentPost />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
