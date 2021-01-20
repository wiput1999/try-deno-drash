import { Drash } from "https://deno.land/x/drash@v1.4.0/mod.ts";

import HomeResource from "./home_resource.ts";
import ParamResource from "./param_resource.ts";

const server = new Drash.Http.Server({
  resources: [HomeResource, ParamResource],
});

server.run({
  hostname: "localhost",
  port: 1447,
});
