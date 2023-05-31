import { Router } from 'express';
import { contactController } from '../controllers/contact.controller';

const { store, show, delet } = contactController;

const contactRoutes = Router();

contactRoutes.post( '/', store );
contactRoutes.get( '/:id', show );
contactRoutes.delete( '/:id', delet );

export { contactRoutes };
