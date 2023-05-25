import 'dotenv/config'
import { app } from "./app";
import { AppDataSource } from "./data-source"
import { debug } from 'debug'

const PORT = process.env.PORT || 3000;

( async () => {
    await AppDataSource.initialize()
        .then( res => {
            console.log("Database connected");
        })
        .catch( err => {
            console.error( "Error during Data Source initialization", err );
        })

    app.listen( PORT, () => {
        console.log( `Server running at http://localhost:${PORT}` );
        debug('listening')
    })
})()
