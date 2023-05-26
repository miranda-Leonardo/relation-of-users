import { Router } from 'express';
import { userController } from '../controllers/user.controller';
import { ensureDataIsValidMiddleware } from '../middlewares/ensureDataIsValid.middleware';
import { createUserSerializer } from '../serializers/user.serializer';
import { additionalDataRoutes } from './additional-data.routes';
import { contactRoutes } from './contact.routes';

const { store, show, update, delet } = userController;

const userRoutes = Router();

userRoutes.post( '/', ensureDataIsValidMiddleware( createUserSerializer ), store );
userRoutes.get( '/:id', show );
userRoutes.patch( '/:id', update );
userRoutes.delete( '/:id', delet );

userRoutes.use( '/additional-data', additionalDataRoutes );
userRoutes.use( '/contacts', contactRoutes );

export { userRoutes };
