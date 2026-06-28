import mongoose, { Schema, type Document } from 'mongoose';

export interface ILeaderboard extends Document {
  name: string;
  score: number;
  streak: number;
}

const leaderboardSchema = new Schema<ILeaderboard>({
  name: { type: String, required: true },
  score: { type: Number, required: true },
  streak: { type: Number, required: true },
});

export const Leaderboard = mongoose.model<ILeaderboard>('Leaderboard', leaderboardSchema);
