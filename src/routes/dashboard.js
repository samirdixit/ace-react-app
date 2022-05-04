export default function dashboardRoutes(app, addon) {
  app.get("/dashboard", async (req, res) => {
    //app.get("/dashboard", addon.checkValidToken(), async (req, res) => {
    const rootDir = process.env.ROOT_DIR ? `/${process.env.ROOT_DIR}` : "";

    res.render("dashboard", {
      title: "Requirements Management Dashboard",
      jsfile: rootDir + "/index.js",
      cssfile: rootDir + "/index.css",
    });
  });
}
