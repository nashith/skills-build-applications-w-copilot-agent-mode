import { Router } from 'express';
import { User } from './models/user';
import { Team } from './models/team';
import { Activity } from './models/activity';
import { Leaderboard } from './models/leaderboard';
import { Workout } from './models/workout';

export function registerRoutes(app: Router): void {
  const createModelRouter = (model: any) => {
    const router = Router();

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

  app.use('/api/users', createModelRouter(User));
  app.use('/api/teams', createModelRouter(Team));
  app.use('/api/activities', createModelRouter(Activity));
  app.use('/api/leaderboard', createModelRouter(Leaderboard));
  app.use('/api/workouts', createModelRouter(Workout));
}
