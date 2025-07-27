import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddEvent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('date', formData.date);
    data.append('location', formData.location);
    if (imageFile) {
      data.append('image', imageFile);
    }

const response = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/events`,
  data,
  {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }
);


    alert("Event added successfully!");
    navigate("/events");
  } catch (error) {
    console.error("Error adding event:", error);
    alert("Failed to add event. Please try again.");
  }
};


  return (
    <div className="max-w-screen-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Create New Event</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Event Title" value={formData.title} onChange={handleChange} className="w-full p-3 border rounded text-sm" required />
        <textarea name="description" placeholder="Event Description" value={formData.description} onChange={handleChange} className="w-full p-3 border rounded text-sm" required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-3 border rounded text-sm" required />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className="w-full p-3 border rounded text-sm" required />

        <input type="file" accept="image/*" onChange={handleImageChange} className="w-full  p-3 border rounded text-sm" />

        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover rounded" />
        )}

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full md:w-auto">
          Submit Event
        </button>
      </form>
    </div>
  );
}

export default AddEvent;
