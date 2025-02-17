import axios from "axios";
import { NavLink, Link } from "react-router";
import { useContext } from "react";
import { useErrorBoundary } from "react-error-boundary";
import UserContext from "../contexts/UserContext";
import AppointmentContext from "../contexts/AppointmentContext";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const { setAppointments } = useContext(AppointmentContext);
  const { showBoundary } = useErrorBoundary();

  const logout = async () => {
    try {
      await axios.get(`${API_URL}/users/logout`, {
        withCredentials: true,
      });

      setUser(null);
      setAppointments([]);
      toast.success("Logout successful");
    } catch (err) {
      showBoundary(err);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <img className="logo" src="/src/assets/Icons/logo-full.svg" alt="logo" />
        <nav>
          <NavLink to="/" >
            Home
          </NavLink>

          {!user && (
            <NavLink to="/login" >
              Login
            </NavLink>
          )}

          {!user && (
            <NavLink to="/signup" >
              Signup
            </NavLink>
          )}

          {user && (
            <NavLink to="/appointments" >
              Appointments
            </NavLink>
          )}

          {user && <Link onClick={logout}>Logout</Link>}
        </nav>
      </div>
    </header>
  );
};

export default Header;
