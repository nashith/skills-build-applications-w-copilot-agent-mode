import { User } from '../models/user';
import { Team } from '../models/team';
import { Activity } from '../models/activity';
import { Leaderboard } from '../models/leaderboard';
import { Workout } from '../models/workout';
import { connectToDatabase } from '../database';

// Seed the octofit_db database with test data
async function seed() {
  await connectToDatabase();
  console.log('Connected to MongoDB for seeding');

  await Promise.all([
    User.deleteMany({}),
    Team.deleteMany({}),
    Activity.deleteMany({}),
    Leaderboard.deleteMany({}),
    Workout.deleteMany({}),
  ]);

  await Promise.all([
    User.create([
      { name: 'Avery Chen', email: 'avery.chen@example.com', role: 'captain' },
      { name: 'Jordan Rivera', email: 'jordan.rivera@example.com', role: 'member' },
      { name: 'Sam Patel', email: 'sam.patel@example.com', role: 'member' },
    ]),
    Team.create([
      { name: 'Ocean Striders', members: 12, goal: 'Prepare for the city marathon' },
      { name: 'Peak Pioneers', members: 8, goal: 'Build strength for summer hikes' },
    ]),
    Activity.create([
      { type: 'run', duration: 35, calories: 320, date: new Date('2026-06-24') },
      { type: 'strength', duration: 45, calories: 280, date: new Date('2026-06-25') },
      { type: 'cycling', duration: 60, calories: 410, date: new Date('2026-06-26') },
    ]),
    Leaderboard.create([
      { name: 'Avery Chen', score: 980, streak: 12 },
      { name: 'Jordan Rivera', score: 915, streak: 8 },
      { name: 'Sam Patel', score: 902, streak: 6 },
    ]),
    Workout.create([
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
