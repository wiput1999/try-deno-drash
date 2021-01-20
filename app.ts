import { Drash } from "https://deno.land/x/drash@v1.4.0/mod.ts";

import HomeResource from "./home_resource.ts";
import ParamResource from "./param_resource.ts";
import UserResource from "./user_resource.ts";

const server = new Drash.Http.Server({
  resources: [HomeResource, ParamResource, UserResource],
});

server.run({
  hostname: "localhost",
  port: 1447,
}).then(() => console.log('Server is listening on port 1447'));
