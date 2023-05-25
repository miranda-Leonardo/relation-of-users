import { NextFunction, Request, Response } from "express";
import { AppError } from "./app.error";

const handleError = async ( error: Error, req: Request, res: Response, next: NextFunction ) => {
    console.error(error);
    
    if( error instanceof AppError ){
        return res.status( error.statusCode ).json({ message: error.message })
    }
    
    return res.status( 500 ).json({ message: 'internal server error!' })
}

export { handleError }
