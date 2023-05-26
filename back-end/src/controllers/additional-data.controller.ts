import { Request, Response } from 'express';
import { AdditionalDataService } from '../services/additional-data.service';

const { create, getById, update, delet } = AdditionalDataService;

const AdditionalDataController = {
  store: async ({ body }: Request, res: Response ) => {
    const data = await create( body );

    return res.status( 201 ).json( data );
  },

  show: async ({ params: { id } }: Request, res: Response ) => {
    const data = await getById( id );

    return res.json( data );
  },

  update: async ({ body, params: { id } }: Request, res: Response ) => {
    const data = await update( id, body );

    return res.json( data );
  },

  delet: async ({ params: { id } }: Request, res: Response ) => {
    const data = await delet( id );

    return res.status( 204 ).json( data );
  },
};

export { AdditionalDataController };
