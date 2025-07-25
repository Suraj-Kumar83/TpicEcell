import React, { useEffect, useState, useContext } from "react";
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
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/events`);
    console.log("Fetched data:", res.data); // <-- important!

    if (Array.isArray(res.data)) {
      setEvents(res.data);
    } else {
      console.warn("API did not return an array", res.data);
      setEvents([]); // fallback to prevent crash
    }
  } catch (error) {
    console.error("Fetch failed", error);
    setEvents([]); // fallback to prevent crash
  }
};


  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/api/events/${id}`);
      setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id));
      alert("Event deleted successfully!");
    } catch (error) {
      console.error("Failed to delete event", error);
      alert("Failed to delete event.");
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center mt-10 px-2 md:px-4 mb-20 space-y-8">
      <h2 className="text-3xl font-bold mb-4 text-center text-base4 drop-shadow-lg">All Events</h2>

      {events.length === 0 ? (
        <p className="text-gray-400 italic">No events yet. Be the first to add one!</p>
      ) : (
        events.map((event) => (
          <div
            key={event.id}
            className="w-full bg-white shadow-xl rounded-3xl overflow-hidden mb-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            {event.image && (
              <img
                className="w-full h-[450px]  rounded-t-3xl"
                src={event.image}
                alt={event.title}
              />
            )}
            <div className="p-6 space-y-4">
              <h3 className="text-3xl font-extrabold text-gray-800 border-b pb-2">{event.title}</h3>
              <p className="text-md text-gray-600">{event.description}</p>
              <div className="text-sm text-gray-500 font-medium">
                📅 {event.date} &nbsp; &nbsp; 📍 {event.location}
              </div>

              {role === "admin" && (
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => navigate(`/edit-event/${event.id}`)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 shadow-md transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 shadow-md transition"
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
          className="bg-yellow-600 text-white px-8 py-3 text-lg rounded-xl hover:bg-green-700 transition-all shadow-md hover:shadow-lg"
        >
          Add Event
        </button>
      )}
    </div>
  );
}

export default Events;
