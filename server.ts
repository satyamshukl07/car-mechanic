import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

interface BookingRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  vehicleMakeModel?: string;
  vehicleRego?: string;
  message: string;
  createdAt: string;
  status: string;
}

const bookingsDatabase: BookingRecord[] = [
  {
    id: 'APX-782104',
    name: 'David Robinson',
    email: 'david.r@example.com.au',
    phone: '0412 889 211',
    service: 'logbook-servicing',
    date: '2025-06-18',
    time: '08:30',
    vehicleMakeModel: '2021 Toyota RAV4 Hybrid',
    vehicleRego: 'NSW-DX92B',
    message: 'Scheduled 60,000km logbook maintenance and brake fluid flush.',
    createdAt: '16 Jun 2025, 09:15 AM',
    status: 'Confirmed'
  }
];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Get all bookings endpoint
  app.get('/api/bookings', (req, res) => {
    res.json({ success: true, count: bookingsDatabase.length, bookings: bookingsDatabase });
  });

  // Submit new booking endpoint
  app.post('/api/bookings', (req, res) => {
    try {
      const { name, email, phone, service, date, time, vehicleMakeModel, vehicleRego, message } = req.body;

      if (!name || !email || !phone || !service || !message) {
        return res.status(400).json({ 
          success: false, 
          error: 'Please fill in all mandatory booking fields (name, email, phone, service, message).' 
        });
      }

      const newBooking: BookingRecord = {
        id: `APX-${Math.floor(100000 + Math.random() * 900000)}`,
        name: String(name).trim(),
        email: String(email).trim(),
        phone: String(phone).trim(),
        service: String(service).trim(),
        date: date || new Date().toISOString().split('T')[0],
        time: time || '08:30',
        vehicleMakeModel: vehicleMakeModel ? String(vehicleMakeModel).trim() : '',
        vehicleRego: vehicleRego ? String(vehicleRego).trim() : '',
        message: String(message).trim(),
        createdAt: new Date().toLocaleDateString('en-AU', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'Confirmed'
      };

      bookingsDatabase.unshift(newBooking);

      console.log(`[Apex Auto Care Server] New booking created: ${newBooking.id} for ${newBooking.name}`);

      return res.status(201).json({
        success: true,
        message: 'Appointment booking successfully received and registered.',
        booking: newBooking
      });
    } catch (err: any) {
      console.error('[Apex Auto Care Server Error]', err);
      return res.status(500).json({ success: false, error: 'Internal server error processing booking.' });
    }
  });

  // Contact message endpoint
  app.post('/api/contact', (req, res) => {
    const { name, email, phone, message } = req.body;
    console.log(`[Apex Auto Care Contact] Message from ${name} (${phone}, ${email}): ${message}`);
    return res.json({
      success: true,
      message: 'Thank you for your enquiry. A service technician will respond promptly.'
    });
  });

  // Vite middleware in dev or static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Apex Auto Care Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
