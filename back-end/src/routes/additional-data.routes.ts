import { Router } from "express";
import { AdditionalDataController } from "../controllers/additional-data.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createAdditionalDataSerialzier } from "../serializers/additional-data.serializer";

const { store, show, update, delet } = AdditionalDataController

const additionalDataRoutes = Router()

additionalDataRoutes.post('/', ensureDataIsValidMiddleware( createAdditionalDataSerialzier ), store)
additionalDataRoutes.get('/:id', show)
additionalDataRoutes.patch('/:id', update)
additionalDataRoutes.delete('/:id', delet)

export { additionalDataRoutes }
