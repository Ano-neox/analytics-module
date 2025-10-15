# Analytics Module

## Overview
Business intelligence dashboard with charts, KPIs, and performance metrics.

## Features
- **Revenue Analytics**: Track sales and revenue trends
- **Customer Metrics**: Active customers, conversion rates
- **Performance KPIs**: Deal sizes, growth percentages
- **Interactive Charts**: Area charts, pie charts with ApexCharts
- **Time Range Filters**: 7 days, 30 days, 3 months, 1 year
- **Module Usage**: Track which modules are used most
- **Top Products**: Performance ranking
- **Activity Feed**: Recent business activities

## Components
- `AnalyticsMain.js` - Main dashboard with charts and metrics

## Integration
```js
import { moduleConfig } from './modules/analytics/index.js';
// Module will be available at /analytics route
```

## Charts Used
- Area Chart: Sales & Revenue trends
- Pie Chart: Module usage distribution
- Progress indicators for KPIs

## Dependencies
- Material-UI components
- ApexCharts for data visualization
- React hooks for state management
- Tabler icons