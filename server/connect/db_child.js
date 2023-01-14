import {connectToCluster} from './db_connect.js';
import { db_url } from './getENV.js';

export async function executeDBchildOperations() {
    let mongoClient;
    try {
        mongoClient = await connectToCluster(db_url);
    } finally {
        await mongoClient.close();
    }
}