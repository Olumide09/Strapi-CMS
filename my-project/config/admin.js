module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6dda3d4f543b3bbfe16016783854d9b6'),
  },
});
