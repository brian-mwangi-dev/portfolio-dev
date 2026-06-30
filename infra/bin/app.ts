#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PortfolioStack } from '../lib/portfolio-stack';

const app = new cdk.App();

new PortfolioStack(app, 'PortfolioStack', {
  env: {
    region: 'us-east-1',
  },
});

app.synth();
