import { Router } from 'express';
import userRoutes from './user-routes.js';
import chatRoutes from './chat-routes.js';

const appRouter = Router();

appRouter.use("/user", userRoutes);//domain.com/api/v1/user
appRouter.use("/chat", chatRoutes);//domain.com/api/v1/chat

export default appRouter;