import { config } from 'dotenv';
// dotenv.config();
config();
export const db_url = process.env.MONGODB_URL;
export const db_port = process.env.PORT;