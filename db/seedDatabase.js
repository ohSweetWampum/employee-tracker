const fs = require("fs");
const path = require("path");
const promiseConnection = require("../assets/connector");

const seedDatabase = async () => {
  try {
    const seedSqlPath = path.join(__dirname, "seed.sql");
    const seedSql = fs.readFileSync(seedSqlPath, "utf8");

    const queries = seedSql
      .split(";")
      .map((query) => query.trim())
      .filter((query) => query.length > 0);

    for (const query of queries) {
      await promiseConnection.query(query);
    }

    console.log("Database seeded successfully");
  } catch (error) {
    console.error(`Error seeding database: ${error.message}`);
  } finally {
    promiseConnection.end();
  }
};

seedDatabase();
