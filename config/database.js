module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cet166g2i3mj6pgqcco0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_l8rt'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'QzcjVG2ian5jEcDx4JsSMBgQ2bEtyHPX'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
