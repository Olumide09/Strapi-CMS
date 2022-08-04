module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7590ab78c89962eb905bfaf3ce2cf975'),
  },
});
