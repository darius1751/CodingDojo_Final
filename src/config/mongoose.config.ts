import { connect } from "mongoose"

export const openConnection = async () => {
    try {
        await connect(process.env.MONGO_URI || '', {
            // maxPoolSize: 10,
            // user: process.env.MONGO_INITDB_ROOT_USERNAME,
            // pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
            dbName: process.env.MONGO_INITDB_DATABASE,
            // directConnection: true,
        });
        console.log(`Connection to DB Works!`);
    } catch (error) {
        console.warn(`Error: ${error}`);
    }
}