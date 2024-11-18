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
      {/* On big screen */}
      <div className="row">
        <div className="col-6 d-none d-sm-block">
          <PostImage />
          <PostContent />
        </div>
        <div className="col-6 d-none d-sm-block">
          <PostImage />
          <PostContent />
        </div>
      </div>

      {/* On small screens */}
      <div className="row">
        <div className="col-12 d-block d-sm-none">
          <PostImage />
          <PostContent />
        </div>
        <div className="col-12 d-block d-sm-none">
          <PostImage />
          <PostContent />
        </div>
      </div>

      {/* On big Screens */}
      <div className="row">
        <div className="col-3 d-none d-sm-block">
          <Box />
        </div>
        <div className="col-3 d-none d-sm-block">
          <Box />
        </div>
        <div className="col-3 d-none d-sm-block">
          <Box />
        </div>
        <div className="col-3 d-none d-sm-block">
          <Box />
        </div>
      </div>

      {/* On small screens */}
      <div className="row">
        <div className="col-6 d-block d-sm-none">
          <Box />
        </div>
        <div className="col-6 d-block d-sm-none">
          <Box />
        </div>
        <div className="col-6 d-block d-sm-none">
          <Box />
        </div>
        <div className="col-6 d-block d-sm-none">
          <Box />
        </div>
      </div>

    </div>
    
  );
}
