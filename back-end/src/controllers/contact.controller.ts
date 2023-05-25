import { Request, Response } from "express"
import { contactService } from "../services/contact.service"

const { create } = contactService

const contactController = {
    store: async ( { body }: Request, res: Response) => {
        const contact = await create( body )

        return res.status( 201 ).json( contact )
    }
}

export { contactController }
