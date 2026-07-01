#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PortfolioStack } from '../lib/portfolio-stack';

const app = new cdk.App();

new PortfolioStack(app, 'PortfolioStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1',
  },
  description: 'Brian portfolio — static Next.js 15 site on S3 + CloudFront',
});

app.synth();
