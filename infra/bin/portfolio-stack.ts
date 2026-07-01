#!/usr/bin/env node

import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PortfolioStack } from '../lib/portfolio-stack';

const app = new cdk.App();

new PortfolioStack(app, 'PortfolioStack', {
  env: {
    region: process.env.AWS_REGION || 'us-east-1',
  },
  description: 'CDK stack for static Next.js portfolio site hosted on S3 + CloudFront',
});
