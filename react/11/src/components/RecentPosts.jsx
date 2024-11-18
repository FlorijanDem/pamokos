export default function RecentPosts() {
  return (
    <>
      <h3>Recent Posts</h3>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img
              src="/src/components/images/small-high-speed.png"
              alt="Small high speed icon"
            />
          </div>
          <div className="col-9">
            <p>The Fastest WordPress Theme</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <img
              src="/src/components/images/small-paper-plane.png"
              alt="Small high speed icon"
            />
          </div>
          <div className="col-9">
            <p>Top 10 Contact Form Plugins</p>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <img
              src="/src/components/images/small-shield.png"
              alt="Small high speed icon"
            />
          </div>
          <div className="col-9">
            <p>3 Awesome Security Plugins for WordPress</p>
          </div>
        </div>
      </div>
    </>
  );
}
