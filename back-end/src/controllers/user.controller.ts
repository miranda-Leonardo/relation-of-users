import { Request, Response, response } from "express";
import { userService } from "../services/user.service";

const { create, getById, update, delet } = userService

const userController = {
    store: async ( { body }: Request, res: Response ) => {
        const user = await create( body )

        return res.status( 201 ).json( user )
    },

    show: async ( { params:{ id }}: Request, res: Response ) => {
        const user = await getById( id )

        return res.json( user )
    },

    update: async ( { body, params: { id } }: Request, res: Response ) => {
        const user = await update( id, body )
        
        return res.json( user )
    },

    delet: async ( { params:{ id }}: Request, res: Response ) => {
        const user = await delet( id )

        return res.status( 204 ).json( user )
    },
}

export { userController }
