export default function addonEventsHandler(app, addon) {
  addon.on("host_settings_saved", async function (clientKey, data) {
    // Do anything here after add on is installed
  });
}
