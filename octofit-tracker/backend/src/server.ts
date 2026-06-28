import express from 'express';
import dotenv from 'dotenv';
import { registerRoutes } from './routes';
import { connectToDatabase } from './database';

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' });
});

app.get('/api/config', (_req, res) => {
  const codespaceName = process.env.CODESPACE_NAME;
  const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';

  res.json({ baseUrl, port });
});

registerRoutes(app);

async function startServer() {
  await connectToDatabase();

  app.listen(port, () => {
    console.log(`OctoFit backend listening on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error('Failed to start server', error);
  process.exit(1);
});
