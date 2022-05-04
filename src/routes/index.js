import addonRoutes from "./addon";
import dashboardRoutes from "./dashboard";

export default function routes(app, addon) {
  // Handle root path
  app.get("/", (req, res) => {
    res.status(200).send("Hey, this is my cool ACE JIRA app!");
  });

  // Addon routes
  addonRoutes(app, addon);

  // Dashboard routes
  dashboardRoutes(app, addon);
}
