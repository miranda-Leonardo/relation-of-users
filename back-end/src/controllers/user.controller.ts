import { Request, Response, response } from "express";
import { userService } from "../services/user.service";

const { create } = userService

const userController = {
    store: async ( req: Request, res: Response ) => {
        const user = await create( req.body )

        return res.json(user)
    }
}

export { userController }
