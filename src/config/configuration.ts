export default () => ({
  app: {
    port: Number(process.env.PORT ?? 3000),
  },
  database: {
    url:
      process.env.DATABASE_URL ??
      'postgres://postgres:postgres@localhost:5433/membership_downgrade_assignment',
  },
});
