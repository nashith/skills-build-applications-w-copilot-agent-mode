"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("./routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = Number(process.env.PORT || 8000);
const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';
app.use(express_1.default.json());
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
(0, routes_1.registerRoutes)(app);
async function startServer() {
    await mongoose_1.default.connect(mongoUri);
    console.log(`Connected to MongoDB at ${mongoUri}`);
    app.listen(port, () => {
        console.log(`OctoFit backend listening on port ${port}`);
    });
}
startServer().catch((error) => {
    console.error('Failed to start server', error);
    process.exit(1);
});
