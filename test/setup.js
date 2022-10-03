import { afterEach } from "@jest/globals";
import mongoose from 'mongoose';

beforeAll(async () => {
    const mongoUrl = process.env.MONGO_URI ?? '';
    await mongoose.connect(mongoUrl);
});

afterAll(async () => {
    await mongoose.connection.close();
});

afterEach(async () => {
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
        await collection.drop();
    }
});