import "dotenv/config"
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./entities/user.entity";
import { Contact } from "./entities/contact.entity";
import { AdditionalData } from "./entities/additional-data.entity";
import { initialMigration1684939340742 } from "./migrations/1684939340742-initial-migration";

const dataSourceConfig = (): DataSourceOptions => {
    const entities = [ User, Contact, AdditionalData ]
    const migrations = [ initialMigration1684939340742 ]

    const entitiesPath: string = path.join(__dirname, "./entities/**.{js,ts}")
    const migrationsPath: string = path.join(__dirname, "./migrations/**.{js,ts}")

    return process.env.NODE_ENV === "test" ?
    {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: entities,
        migrations: migrations
    } : {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: false,
        synchronize: false,
        entities: entities,
        migrations: migrations
    }
}

const AppDataSource = new DataSource(dataSourceConfig())

export { AppDataSource }
