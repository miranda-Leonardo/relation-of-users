import { Router } from 'express';
import { contactController } from '../controllers/contact.controller';

const { store } = contactController;

const contactRoutes = Router();

contactRoutes.post( '/', store );

export { contactRoutes };
