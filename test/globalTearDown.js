
export default async () => {
    await globalThis.__MONGOD__.stop();
};
