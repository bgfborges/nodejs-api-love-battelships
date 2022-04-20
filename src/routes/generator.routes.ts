import { Router } from 'express';

const generatorRoutes = Router();

// Resource "Generator" (as the requirment of defining resources by the API REST)

generatorRoutes.get('/', async (req, res) => {
  console.log('here');
  return res.status(201).json({ message: 'Ok' });
});

export { generatorRoutes };
