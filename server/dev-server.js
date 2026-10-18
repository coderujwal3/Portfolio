import 'dotenv/config';
import express from 'express';
import { ContactError, submitContactMessage } from './contact-service.js';

const app = express();
const port = Number(process.env.PORT || 3001);
app.disable('x-powered-by');
app.use(express.json({ limit: '12kb' }));

app.post('/api/contact', async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  try {
    await submitContactMessage(req.body);
    return res.status(200).json({ ok: true });
  } catch (error) {
    if (error instanceof ContactError) {
      return res.status(error.status || 400).json({ ok: false, error: error.code });
    }
    console.error('Unexpected local contact API error:', error?.name || 'unknown_error');
    return res.status(500).json({ ok: false, error: 'INTERNAL_ERROR' });
  }
});

app.listen(port, () => {
  console.log(`Local contact API listening on http://localhost:${port}`);
});
