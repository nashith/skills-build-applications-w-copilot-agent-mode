"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = registerRoutes;
const express_1 = require("express");
const user_1 = require("./models/user");
const team_1 = require("./models/team");
const activity_1 = require("./models/activity");
const leaderboard_1 = require("./models/leaderboard");
const workout_1 = require("./models/workout");
function registerRoutes(app) {
    const createModelRouter = (model) => {
        const router = (0, express_1.Router)();
        router.get('/', async (_req, res) => {
            const items = await model.find({});
            res.json(items);
        });
        router.get('/:id', async (req, res) => {
            const item = await model.findById(req.params.id);
            if (!item) {
                res.status(404).json({ message: 'Not found' });
                return;
            }
            res.json(item);
        });
        router.post('/', async (req, res) => {
            const newItem = await model.create(req.body);
            res.status(201).json(newItem);
        });
        return router;
    };
    app.use('/api/users', createModelRouter(user_1.User));
    app.use('/api/teams', createModelRouter(team_1.Team));
    app.use('/api/activities', createModelRouter(activity_1.Activity));
    app.use('/api/leaderboard', createModelRouter(leaderboard_1.Leaderboard));
    app.use('/api/workouts', createModelRouter(workout_1.Workout));
}
