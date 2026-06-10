import Database from 'better-sqlite3';
import fs from 'fs';

const db = new Database('corsair.db');

const sql = fs.readFileSync('migration.sql', 'utf8');

db.exec(sql);

console.log('✅ Corsair migration completed!');