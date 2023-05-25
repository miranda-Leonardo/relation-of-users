import { NextFunction, Request, Response } from "express";
import { AnySchema } from 'yup'
import { AppError } from "../errors/app.error";

const ensureDataIsValidMiddleware = ( schema: AnySchema ) => async ( req: Request, res: Response, next: NextFunction ) => {
    try {
        await schema.validate( req.body, {
            stripUnknown: true,
            abortEarly: false
        })
        
        return next()
    } catch ( err: any ) {
        throw new AppError( err.errors )
    }
}

export { ensureDataIsValidMiddleware }
