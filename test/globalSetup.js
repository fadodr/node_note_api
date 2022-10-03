import { MongoMemoryServer } from 'mongodb-memory-server';

export default async () => {
    const mongo = await MongoMemoryServer.create();
    const uri = mongo.getUri();

    globalThis.__MONGOD__ = mongo;
    process.env.MONGO_URI = uri;
}