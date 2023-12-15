import { AccessTokenAdapter } from "@itwin/imodels-access-frontend";

export function main() {
  AccessTokenAdapter.toAuthorization("token");
}