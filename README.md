# Atlassian Connect App using Express (ACE) and ReactJS

By default ACE comes bundled with Handlebar implementation. It also supports ReactJS but it's implemented with server-side rendering.

Server-side redering with React works well for most parts but there are issues if you want to use Atlaskit packages such as Editor Core (https://atlaskit.atlassian.com/packages/editor/editor-core).

This guide will help you if you are looking to have a separate client code using ReactJS and use ACE for your server APIs.

The directory structure looks like following:

- /client
  - /src
    - /views
- /public
- /src
    - /routes

**/client/src** - this folder contains the layout files

**/client/src/views** - this folder contains the React Components and CSS for your addon pages

**/src** - this folder contains all your ACE specific server code

**/src/routes** - this folder contains code to handle all your application routes such as the API calls that will be made from your React client to your server

**Installation steps:**
1. Clone the repo.
2. Update `/credentials.json` file in your project root directory to define the credentials of your JIRA account.
      - Please note, you need to use API token in the "password" attribute
4. Execute `npm install` followed by `npm run build` inside `/client` directory.
5. Execute `npm install` followed by `npm run build` at your project root directory.
6. Now execute `npm start` at your project root directory to run the application.
7. It should install an app named "ACE React" in your JIRA account and can be accessed from your project. 
