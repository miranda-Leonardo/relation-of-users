import { Request, Response } from "express"
import { AdditionalDataService } from "../services/additional-data.service"

const { create } = AdditionalDataService

const AdditionalDataController = {
    store: async ( { body }: Request, res: Response ) => {
        const data = await create( body )

        return res.status( 201 ).json( data )
    }
}

export { AdditionalDataController }
