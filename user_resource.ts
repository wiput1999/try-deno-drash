import { Drash } from "https://deno.land/x/drash@v1.4.0/mod.ts";

export default class UserResource extends Drash.Http.Resource {
  static paths = [
    "/users/:id/:name?/:age?/:city?",
  ];

  public GET() {
    this.response.body = "GET request received!";

    const id   = this.request.getPathParam("id");
    const name = this.request.getPathParam("name");
    const age  = this.request.getPathParam("age");
    const city = this.request.getPathParam("city");

    this.response.body += ` You passed in the following path params: |${id}|${name}|${age}|${city}|`;

    return this.response;
  }
}
