import { NavLink } from "react-router";
import Form from "./Form";
export default function Main() {
  return (
    <>
      <NavLink to="/form" end>
        Donor you blood
      </NavLink>
      <NavLink to="/list" end>
        Peoples who do not have blood
      </NavLink>

      <p>Because some one like drink it</p>
      <img
        src="https://www.science.org/do/10.1126/science.za6bz9o/abs/_20240705_nf_blood_stream2onblack_1600px.jpg"
        alt="Stream of blood"
      />
    </>
  );
}
