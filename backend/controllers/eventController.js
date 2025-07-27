const supabase = require('../supabaseClient');
const path = require('path');

exports.addEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    let imageUrl = '';

    if (req.file) {
      const fileExt = path.extname(req.file.originalname);
      const fileName = `${Date.now()}${fileExt}`;

      const { error: uploadError } = await supabase
        .storage
        .from('event-images')
        .upload(fileName, req.file.buffer, {
          contentType: req.file.mimetype
        });

      if (uploadError) {
        console.error('Image upload failed', uploadError);
        return res.status(500).json({ error: 'Failed to upload image' });
      }

      const { data: publicUrlData } = supabase
        .storage
        .from('event-images')
        .getPublicUrl(fileName);

      imageUrl = publicUrlData.publicUrl;
    }

    const { data, error } = await supabase
      .from('events')
      .insert([{ title, description, date, location, image: imageUrl }]);

    if (error) {
      console.error('Error inserting event', error);
      return res.status(500).json({ error: 'Failed to create event' });
    }

    res.status(201).json({ message: 'Event created successfully', event: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      return res.status(500).json({ error: 'Failed to fetch events' });
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
