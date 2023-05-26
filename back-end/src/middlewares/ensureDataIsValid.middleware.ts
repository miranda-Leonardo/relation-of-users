import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'yup';
import { AppError } from '../errors/app.error';

const ensureDataIsValidMiddleware =
  ( schema: AnySchema ) =>
  async ( req: Request, res: Response, next: NextFunction ) => {
      await schema.validate( req.body, {
        stripUnknown: true,
        abortEarly: false,
      }).then( res => next()).catch( err => {
        throw new AppError( err.errors );
      })

      return next();
  };

export { ensureDataIsValidMiddleware };
