import Header from "./components/Header";
import PostImage from "./components/PostImage";
import PostContent from "./components/PostContent";
import Box from "./components/Box";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <PostImage />
          <PostContent />
        </div>
        <div className="col-12 col-sm-6">
          <PostImage />
          <PostContent />
        </div>
      </div>

      <div className="row">
        <div className="col-6 mb-2 col-sm-3">
          <Box />
        </div>
        <div className="col-6 mb-2 col-sm-3">
          <Box />
        </div>
        <div className="col-6 mb-2 col-sm-3">
          <Box />
        </div>
        <div className="col-6 mb-2 col-sm-3">
          <Box />
        </div>
      </div>
    </div>
  );
}
