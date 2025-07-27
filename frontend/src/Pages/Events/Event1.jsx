import React, { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

function Events() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const { role } = useContext(AuthContext);


  useEffect(() => {
    fetchEvents();
  }, []);

const fetchEvents = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/events`);
    const eventData = Array.isArray(res.data)
      ? res.data
      : Array.isArray(res.data.data)
      ? res.data.data
      : [];

    setEvents(eventData);
  } catch (error) {
    console.error("Failed to fetch events", error);
    setEvents([]); 
  }
};


  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/events/${id}`);
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
      alert("Event deleted successfully!");
    } catch (error) {
      console.error("Failed to delete event", error);
      alert("Failed to delete event.");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center mt-10 px-2 md:px-4 mb-20 space-y-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-base4">All Events</h2>

      {events.length === 0 ? (
        <p className="text-gray-500">No events yet. Be the first to add one!</p>
      ) : (
        events.map((event) => (
          <div
            key={event.id}
            className="w-full bg-white shadow-xl rounded-2xl overflow-hidden mb-8"
          >
            {event.image && (
              <img
                className="w-full h-[450px] "
                src={event.image}
                alt={event.title}
              />
            )}
            <div className="p-6">
              <h3 className="text-3xl font-bold mb-2 text-gray-800">{event.title}</h3>
              <p className="text-md text-gray-600 mb-4">{event.description}</p>
              <div className="text-md text-gray-500 mb-4">
                📅 {event.date} &nbsp; 📍 {event.location}
              </div>

                {role === "admin" && (

              <div className="flex gap-4">
                <button
                  onClick={() => navigate(`/edit-event/${event.id}`)}
                  className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
                  )}
            </div>
          </div>
        ))
      )}
    {role === "admin" && (
      <button
        onClick={() => navigate("/add-event")}
        className="bg-yellow-600 text-white px-8 py-3 text-lg rounded hover:bg-green-700"
      >
        Add Event
      </button>
      )}
    </div>

  );
}

export default Events;
