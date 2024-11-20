export default function PostContent({
  title,
  content,
  img,
  setLearnt,
  id,
  status,
}) {
  return (
    <div className="col-12 col-md-6 col-lg-4 p-4">
      <h2>{title}</h2>
      <img src={img} style={{ width: 300,  height:200}} alt={title} />
      <p>{content}</p>
      <p>{status ? "Išmokau" : "Mokausi"}</p>
      <button className="btn btn-light focus-ring focus-ring-dark border rounded-2" onClick={()=> setLearnt(id)}>OK</button>
    </div>
  );
}
