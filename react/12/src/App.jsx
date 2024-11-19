import Header from "./components/Header";
import PostImage from "./components/PostImage";
import PostContent from "./components/PostContent";
import Box from "./components/Box";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header
            title="Labas, aš mokausi"
            link="src/assets/cat-under-tree.webp"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6">
          <PostImage
            src="src/assets/hedgehog.png"
            alt="Hedgehog"
            bsClasses="header-img w-100 object-fit-cover rounded-pill border border-3 border-success"
          />
          <PostContent
            headOfText="Hedgehog"
            text="There are seventeen species of hedgehog in five genera found throughout parts of Europe, Asia, and Africa, and in New Zealand by introduction."
          />
        </div>
        <div className="col-12 col-sm-6">
          <PostImage
            src="src/assets/fox.webp"
            alt="Fox"
            bsClasses="header-img w-100 vh-50 object-fit-cover rounded-pill border border-3 border-warning"
          />
          <PostContent
            headOfText="Fox"
            text="Foxes are small-to-medium-sized omnivorous mammals belonging to several genera of the family Canidae. They have a flattened skull; upright, triangular ears; a pointed, slightly upturned snout; and a long, bushy tail."
          />
        </div>
      </div>

      <div className="row">
        <div className="col-6 mb-2 col-lg-3">
          <Box
            type="m-5 p-5 bg-success"
            src="src/assets/hamster.jpg"
            alt="Hamster"
          />
        </div>
        <div className="col-6 mb-2  col-lg-3">
          <Box
            type="m-4 p-5 bg-warning"
            src="src/assets/hamsterNumberTwo.png"
            alt="Hamster"
          />
        </div>
        <div className="col-6 mb-2 col-lg-3">
          <Box
            type="m-4 p-5 bg-success"
            src="src/assets/hamsterNumberTwo.png"
            alt="Hamster"
          />
        </div>
        <div className="col-6 mb-2 col-lg-3">
          <Box
            type="m-5 p-5 bg-warning"
            src="src/assets/hamster.jpg"
            alt="Hamster"
          />
        </div>
      </div>
    </div>
  );
}
