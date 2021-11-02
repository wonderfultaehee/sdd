const seedConfig = {
  type: "mongodb",
  // database: "database.sqlite",
  url: "mongodb+srv://admin:freeonboarding@onboarding.mv6lu.mongodb.net/aimmo?retryWrites=true&w=majority",
  useNewUrlParser: true,
  useUnifiedTopology: true,
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  seeds: ["src/app/seed/seeds/**/*.seeds.ts"],
  factories: ["src/app/seed/factories/**/*.factories.ts"],
};
export default seedConfig;
