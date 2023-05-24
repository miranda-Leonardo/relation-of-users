import { Request, Response, response } from "express";
import { userService } from "../services/user.service";

const { create, getByEmail } = userService

const userController = {
    store: async ( req: Request, res: Response ) => {
        const user = await create( req.body )

        return res.json( user )
    },

    show: async ( req: Request, res: Response ) => {
        const user = await getByEmail( req.params.id )

        return res.json( user )
    }
}

export { userController }
