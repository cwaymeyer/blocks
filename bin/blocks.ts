#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { BlocksStack } from "../lib/blocks-stack";

const app = new cdk.App();

new BlocksStack(app, "BlocksStack");
