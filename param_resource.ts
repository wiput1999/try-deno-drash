import { Drash } from "https://deno.land/x/drash@v1.4.0/mod.ts";

export default class ParamResource extends Drash.Http.Resource {
  static paths = [
    "/:param",
  ];

  public GET() {
    this.response.body = "GET request received!";

    let param = this.request.getPathParam("param");

    this.response.body += ` You passed in the following path param: ${param}`;

    return this.response;
  }
}
