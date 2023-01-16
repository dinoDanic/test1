export default ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "135.181.214.24"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "brunobmb_test1"),
      user: env("DATABASE_USERNAME", "brunobmb_test1"),
      password: env("DATABASE_PASSWORD", "Ruda,actv1"),
      // ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
