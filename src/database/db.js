import { Pool } from "pg";
import dotenv from 'dotenv';

dotenv.config(); //comando pra o arquivo conseguir ler as variáveis de ambiente

const pool = new Pool({
    user: process.env.DATABASE_USER,
    password: String(process.env.DATABASE_PASSWORD),
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_NAME
});

export default pool;