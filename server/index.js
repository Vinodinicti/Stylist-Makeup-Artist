import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// In-memory store for enquiries
const enquiriesStore = [];

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Stylist Makeup Artist API', time: new Date() });
});

// Post Enquiry Route (Appointments & Academy Enrolments)
app.post('/api/enquiry', (req, res) => {
  const { name, email, phone, serviceOrCourse, date, message, type } = req.body;
  
  if (!name || !phone || !serviceOrCourse) {
    return res.status(400).json({ error: 'Name, phone number, and service/course are required.' });
  }

  const newEnquiry = {
    id: 'ENQ-' + Date.now().toString(36).toUpperCase(),
    name,
    email: email || 'N/A',
    phone,
    serviceOrCourse,
    date: date || 'Flexible',
    message: message || '',
    type: type || 'Appointment',
    createdAt: new Date().toISOString()
  };

  enquiriesStore.push(newEnquiry);
  console.log('📌 New Enquiry Received:', newEnquiry);

  // Generate pre-filled WhatsApp link
  const cleanPhone = '919876543210'; // Representative WhatsApp Business number
  const encodedText = encodeURIComponent(
    `Hello Stylist Makeup Artist! ✨\nMy name is ${name}.\nI would like to inquire about: *${serviceOrCourse}* (${type}).\nDate/Batch Preferred: ${date || 'Flexible'}\nPhone: ${phone}\nNotes: ${message}`
  );
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedText}`;

  return res.json({
    success: true,
    message: 'Enquiry received successfully!',
    enquiry: newEnquiry,
    whatsappUrl
  });
});

app.get('/api/enquiry', (req, res) => {
  res.json({ count: enquiriesStore.length, enquiries: enquiriesStore });
});

// Serve static assets in production if built
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`✨ Express server running on port ${PORT}`);
});
