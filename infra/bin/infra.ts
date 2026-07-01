#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { PortfolioStack } from '../lib/portfolio-stack';

const app = new cdk.App();

new PortfolioStack(app, 'PortfolioStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
  description: 'Brian Mwangi portfolio — S3 + CloudFront static site',
});

app.synth();
