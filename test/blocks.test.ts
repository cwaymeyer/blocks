import * as cdk from "aws-cdk-lib";
import * as Blocks from "../lib/blocks-stack";

test("Stack created", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new Blocks.BlocksStack(app, "MyTestStack");
  // THEN
});
