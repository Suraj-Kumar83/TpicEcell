import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    image: ''
  });
  const [newImageFile, setNewImageFile] = useState(null);

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/events`);
      const event = res.data.find(e => e.id === parseInt(id));
      if (event) {
        setFormData(event);
      } else {
        console.error("Event not found");
        navigate('/events');
      }
    } catch (err) {
      console.error("Error fetching event:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewImageFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imageUrl = formData.image;

      if (newImageFile) {
        const uploadData = new FormData();
        uploadData.append('file', newImageFile);

        const uploadRes = await axios.post(`${import.meta.env.VITE_API_URL}/api/upload`, uploadData);
        imageUrl = uploadRes.data.imageUrl;
      }

      await axios.put(`${import.meta.env.VITE_API_URL}/api/events/${id}`, {
        ...formData,
        image: imageUrl
      });

      alert("Event updated successfully!");
      navigate("/events");
    } catch (error) {
      console.error("Failed to update event", error);
      alert("Failed to update event.");
    }
  };

  // Handler for cancel button
  const handleCancel = () => {
    navigate('/events');
  };

  return (
    <div className="max-w-screen-md mx-auto mt-10 p-4 bg-white shadow rounded relative">
      {/* Cross Icon for Cancel */}
      <button
        onClick={handleCancel}
        className="absolute top-4 right-4 text-600 text-md hover:text-red-800"
        title="Cancel Editing"
      >
        &#10005; 
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center">Edit Event</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Event Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Existing Image Preview */}
        {formData.image && (
          <div>
            <p className="text-gray-700">Current Image:</p>
            <img src={formData.image} alt="Current Event" className="w-full h-48 object-cover rounded mb-2" />
          </div>
        )}

        {/* New Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Update Event
        </button>
      </form>
    </div>
  );
}

export default EditEvent;
