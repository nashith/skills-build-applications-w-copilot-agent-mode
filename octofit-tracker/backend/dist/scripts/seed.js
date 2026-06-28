"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const team_1 = require("../models/team");
const activity_1 = require("../models/activity");
const leaderboard_1 = require("../models/leaderboard");
const workout_1 = require("../models/workout");
const database_1 = require("../database");
// Seed the octofit_db database with test data
async function seed() {
    await (0, database_1.connectToDatabase)();
    console.log('Connected to MongoDB for seeding');
    await Promise.all([
        user_1.User.deleteMany({}),
        team_1.Team.deleteMany({}),
        activity_1.Activity.deleteMany({}),
        leaderboard_1.Leaderboard.deleteMany({}),
        workout_1.Workout.deleteMany({}),
    ]);
    await Promise.all([
        user_1.User.create([
            { name: 'Avery Chen', email: 'avery.chen@example.com', role: 'captain' },
            { name: 'Jordan Rivera', email: 'jordan.rivera@example.com', role: 'member' },
            { name: 'Sam Patel', email: 'sam.patel@example.com', role: 'member' },
        ]),
        team_1.Team.create([
            { name: 'Ocean Striders', members: 12, goal: 'Prepare for the city marathon' },
            { name: 'Peak Pioneers', members: 8, goal: 'Build strength for summer hikes' },
        ]),
        activity_1.Activity.create([
            { type: 'run', duration: 35, calories: 320, date: new Date('2026-06-24') },
            { type: 'strength', duration: 45, calories: 280, date: new Date('2026-06-25') },
            { type: 'cycling', duration: 60, calories: 410, date: new Date('2026-06-26') },
        ]),
        leaderboard_1.Leaderboard.create([
            { name: 'Avery Chen', score: 980, streak: 12 },
            { name: 'Jordan Rivera', score: 915, streak: 8 },
            { name: 'Sam Patel', score: 902, streak: 6 },
        ]),
        workout_1.Workout.create([
            { title: 'Morning Mobility Flow', difficulty: 'easy', duration: 20 },
            { title: 'HIIT Intervals', difficulty: 'hard', duration: 30 },
            { title: 'Recovery Yoga', difficulty: 'medium', duration: 25 },
        ]),
    ]);
    console.log('Seed data inserted successfully');
}
seed().catch((error) => {
    console.error('Seeding failed', error);
    process.exit(1);
});
