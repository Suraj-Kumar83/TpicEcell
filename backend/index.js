const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const supabase = require('./supabaseClient.js');




dotenv.config();
const app = express();
app.use(express.json());
const storage = multer.memoryStorage();
const upload = multer({ storage });
const allowedOrigins = ['https://tpic.co.in', 'https://www.tpic.co.in'];
app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


app.post('/api/events', upload.single('image'), async (req, res) => {
  try {
    const { title, description, date, location } = req.body;

    let imageUrl = '';
    if (req.file) {
      const fileExt = path.extname(req.file.originalname);
      const fileName = `${Date.now()}${fileExt}`;

      // Upload to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase
        .storage
        .from('event-images')
        .upload(fileName, req.file.buffer, {
          contentType: req.file.mimetype
        });

      if (uploadError) {
        console.error("Image Upload Error:", uploadError);
        return res.status(500).json({ error: "Image upload failed" });
      }

      // Get Public URL
      const { data: publicUrlData } = supabase
        .storage
        .from('event-images')
        .getPublicUrl(fileName);

      imageUrl = publicUrlData.publicUrl;
    }

    // Insert event record
    const { data, error } = await supabase
      .from('events')
      .insert([{
        title,
        description,
        date,
        location,
        image: imageUrl
      }]);

    if (error) {
      console.error("DB Insert Error:", error);
      return res.status(500).json({ error: "Failed to save event" });
    }

    res.status(201).json({ message: "Event added successfully", event: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.get('/api/events', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      return res.status(500).json({ error: "Failed to fetch events" });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update event by ID
app.put('/api/events/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, date, location, image } = req.body;

  try {
    const { data, error } = await supabase
      .from('events')
      .update({ title, description, date, location, image })
      .eq('id', id)
      .select();

    if (error) throw error;

    res.status(200).json(data[0]);
  } catch (err) {
    console.error("Failed to update event:", err);
    res.status(500).json({ error: 'Failed to update event' });
  }
});


app.post('/api/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const fileExt = path.extname(req.file.originalname);
  const fileName = `${Date.now()}${fileExt}`;

  const { data, error } = await supabase
    .storage
    .from('event-images')
    .upload(fileName, req.file.buffer, {
      contentType: req.file.mimetype
    });

  if (error) {
    console.error(error);
    return res.status(500).send("Upload failed");
  }

  const { data: publicUrlData } = supabase
    .storage
    .from('event-images')
    .getPublicUrl(data.path);

  res.json({ imageUrl: publicUrlData.publicUrl });
});

// DELETE an event by ID
app.delete('/api/events/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { error } = await supabase
      .from('events')
      .delete()
      .eq('id', id);

    if (error) throw error;

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete event' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
