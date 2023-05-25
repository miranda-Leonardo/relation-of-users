import { Router } from "express";
import { AdditionalDataController } from "../controllers/additional-data.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { createAdditionalDataSerialzier } from "../serializers/additional-data.serializer";

const { store } = AdditionalDataController

const additionalDataRoutes = Router()

additionalDataRoutes.post('/', ensureDataIsValidMiddleware( createAdditionalDataSerialzier ), store)

export { additionalDataRoutes }
