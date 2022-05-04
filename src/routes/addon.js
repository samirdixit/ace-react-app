import _ from "lodash";

export default function addonRoutes(app, addon) {
  app.get("/", (req, res) => {
    res.redirect("/atlassian-connect.json");
  });

  app.get("/atlassian-connect.json", (req, res, next) => {
    const isHttps = req.secure || req.header("x-forwarded-proto") === "https";
    let baseUrl = `${isHttps ? "https" : "http"}://${req.get("host")}`;
    const rootDir = process.env.ROOT_DIR ? `/${process.env.ROOT_DIR}` : "";

    baseUrl = _.trimEnd(baseUrl, rootDir);
    baseUrl = _.trimEnd(baseUrl, "/");

    return res.status(200).json({
      key: "my-ace-react-app",
      name: "My ACE React App",
      description: "Server code for the ACE ReactJS app",
      baseUrl: `${baseUrl}${rootDir}`,
      authentication: {
        type: "jwt",
      },
      links: {
        self: `${baseUrl}${rootDir}/atlassian-connect.json`,
      },
      lifecycle: {
        installed: `/installed`,
      },
      scopes: ["ADMIN", "ACT_AS_USER"],
      modules: {
        jiraProjectPages: [
          {
            url: "/dashboard?projectKey={project.key}",
            name: {
              value: "ACE React",
            },
            key: "dashboard",
          },
        ],
      },
    });
  });
}
