import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import UserContext from "../contexts/UserContext";
import AppointmentForm from "./AppointmentForm";
import { useErrorBoundary } from "react-error-boundary";

const API_URL = import.meta.env.VITE_API_URL;

const AppointmentCard = ({ appointment }) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [currentAppointment, setCurrentAppointment] = useState(appointment);
  const [deleteAppointment, setDeleteAppointment] = useState(false);
  const [editAppointment, setEditAppointment] = useState(false);
  const { showBoundary } = useErrorBoundary();

  const openEdit = () => {
    setEditAppointment(!editAppointment);
    setDeleteAppointment(false);
  };

  const openDelete = () => {
    setDeleteAppointment(!deleteAppointment);
    setEditAppointment(false);
  };

  const confirmAppointment = async () => {
    try {
      const { data: result } = await axios.patch(
        `${API_URL}/appointments/${appointment.id}`,
        { confirmed: !currentAppointment.confirmed },
        {
          withCredentials: true,
        }
      );

      setCurrentAppointment(result.data);
    } catch (err) {
      showBoundary(err);
    }
  };

  const cancelAppointment = async () => {
    try {
      await axios.delete(`${API_URL}/appointments/${appointment.id}`, {
        withCredentials: true,
      });

      navigate(0);
    } catch (err) {
      showBoundary(err);
    }
  };

  return (
    <>
      <div className="appointment-card">
        <div className="appointment-card__details">
          <div>
            <h2>{currentAppointment?.pet_name}</h2>
            <p>
              Owner: {currentAppointment?.first_name}{" "}
              {currentAppointment?.last_name}
            </p>
            <p className="notes">Notes: {currentAppointment?.notes}</p>
          </div>
          <div className="appointment-card__info">
            <p>
              {new Date(currentAppointment?.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </p>
            <p>
              {new Date(currentAppointment?.date).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: false,
              })}
            </p>
            <p>
              {currentAppointment?.confirmed ? "confirmed" : "not confirmed"}
            </p>
            <p>Rating: {currentAppointment?.rating || "not rated"}</p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="appointment-card__controls">
          <button onClick={openEdit} className="appointment-edit-button">edit</button>
          {user?.role === "admin" && (
            <button onClick={confirmAppointment}>confirm</button>
          )}
          {user?.role !== "admin" &&
            currentAppointment?.confirmed &&
            new Date(currentAppointment?.date) < new Date() && (
              <button onClick={openRating}>rate</button>
            )}
          <button onClick={openDelete} className="appointment-delete-button">delete</button>
        </div>
      </div>
      {deleteAppointment && (
        <div className="confirm-delete">
          <p className="confirm-delete__message">
            Are you sure you want to cancel appointment for{" "}
            {currentAppointment?.pet_name} on{" "}
            {new Date(currentAppointment?.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
            ?
          </p>
          <div className="confirm-delete__controls">
            <button onClick={() => setDeleteAppointment(false)}>No</button>
            <button onClick={cancelAppointment}>Yes</button>
          </div>
        </div>
      )}
      {editAppointment && (
        <AppointmentForm
          appointment={currentAppointment}
          setCurrentAppointment={setCurrentAppointment}
          setEditAppointment={setEditAppointment}
          action="edit"
        />
      )}

    </>
  );
};

export default AppointmentCard;
