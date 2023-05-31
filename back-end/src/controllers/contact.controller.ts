import { Request, Response } from 'express';
import { contactService } from '../services/contact.service';

const { create, getById, delet } = contactService;

const contactController = {
  store: async ({ body }: Request, res: Response ) => {
    const contact = await create( body );

    return res.status( 201 ).json( contact );
  },

  show: async ({ params: { id }}: Request, res: Response ) => {
    const contact = await getById( id )

    return res.json( contact )
  },

  delet: async ({ params: { id }}: Request, res: Response ) => {
    const contact = await delet( id )

    return res.status( 204 ).json( contact )
  },
};

export { contactController };
