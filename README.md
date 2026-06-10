# Corsair POC
npm i pnpm

npm install corsair

------------------------
for windows 
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

for linux
openssl rand -base64 32

-------------------------
Setup DB
pnpm install better-sqlite3

pnpm install --save-dev @types/better-sqlite3

-------------------------

create migrtion.sql file


# Read migration.sql and Create coirsair.db file
sqlite3 corsair.db < migration.sql

-------------------------

pnpm install @corsair-dev/github

-------------------------




