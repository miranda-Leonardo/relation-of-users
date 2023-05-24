import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createUserSerializer } from "../serializers/user.serializer";

const { store, show, update } = userController

const userRoutes = Router()

userRoutes.post('', ensureDataIsValidMiddleware(createUserSerializer), store)
userRoutes.get('/:id', show)
userRoutes.patch('/:id', update)

export { userRoutes }
