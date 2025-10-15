import React, { useState } from 'react';
import {
  Box, Typography, Card, CardContent, Grid, Select, MenuItem, FormControl, InputLabel
} from '@mui/material';
import { IconTrendingUp, IconTrendingDown, IconUsers, IconCurrencyRupee } from '@tabler/icons-react';
import PageContainer from '../../../../modernize-dashboard/src/components/container/PageContainer';
import Chart from 'react-apexcharts';

const AnalyticsMain = () => {
  const [timeRange, setTimeRange] = useState('30');

  const salesData = {
    series: [{
      name: 'Sales',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'Revenue',
      data: [11, 32, 45, 32, 34, 52, 41]
    }],
    options: {
      chart: { type: 'area', height: 350 },
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth' },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      },
      colors: ['#1976d2', '#2e7d32']
    }
  };

  const pieData = {
    series: [44, 55, 13, 43],
    options: {
      chart: { type: 'pie' },
      labels: ['CRM', 'Sales', 'Projects', 'Billing'],
      colors: ['#1976d2', '#2e7d32', '#ed6c02', '#9c27b0']
    }
  };

  return (
    <PageContainer title="Analytics" description="Business Intelligence Dashboard">
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4">Analytics Dashboard</Typography>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Time Range</InputLabel>
            <Select
              value={timeRange}
              label="Time Range"
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <MenuItem value="7">Last 7 days</MenuItem>
              <MenuItem value="30">Last 30 days</MenuItem>
              <MenuItem value="90">Last 3 months</MenuItem>
              <MenuItem value="365">Last year</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" gap={1}>
                  <IconCurrencyRupee />
                  <Typography variant="h6">Total Revenue</Typography>
                </Box>
                <Typography variant="h4" color="success.main">₹12,45,000</Typography>
                <Box display="flex" alignItems="center" gap={0.5} mt={1}>
                  <IconTrendingUp size={16} color="green" />
                  <Typography variant="body2" color="success.main">+12.5%</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center" gap={1}>
                  <IconUsers />
                  <Typography variant="h6">Active Customers</Typography>
                </Box>
                <Typography variant="h4" color="primary">1,234</Typography>
                <Box display="flex" alignItems="center" gap={0.5} mt={1}>
                  <IconTrendingUp size={16} color="green" />
                  <Typography variant="body2" color="success.main">+8.2%</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Conversion Rate</Typography>
                <Typography variant="h4" color="info.main">24.5%</Typography>
                <Box display="flex" alignItems="center" gap={0.5} mt={1}>
                  <IconTrendingDown size={16} color="red" />
                  <Typography variant="body2" color="error.main">-2.1%</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Avg Deal Size</Typography>
                <Typography variant="h4" color="warning.main">₹45,600</Typography>
                <Box display="flex" alignItems="center" gap={0.5} mt={1}>
                  <IconTrendingUp size={16} color="green" />
                  <Typography variant="body2" color="success.main">+5.7%</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" mb={2}>Sales & Revenue Trends</Typography>
                <Chart
                  options={salesData.options}
                  series={salesData.series}
                  type="area"
                  height={350}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" mb={2}>Module Usage</Typography>
                <Chart
                  options={pieData.options}
                  series={pieData.series}
                  type="pie"
                  height={350}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" mb={2}>Top Performing Products</Typography>
                <Box>
                  {['Web Development', 'Mobile App', 'Consulting', 'Support'].map((product, index) => (
                    <Box key={product} display="flex" justifyContent="space-between" alignItems="center" py={1}>
                      <Typography>{product}</Typography>
                      <Typography color="success.main" fontWeight="bold">
                        ₹{(Math.random() * 100000 + 50000).toFixed(0)}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" mb={2}>Recent Activities</Typography>
                <Box>
                  {[
                    'New customer registered',
                    'Invoice INV-001 paid',
                    'Project milestone completed',
                    'Quotation sent to client'
                  ].map((activity, index) => (
                    <Box key={index} py={1} borderBottom="1px solid #eee">
                      <Typography variant="body2">{activity}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {Math.floor(Math.random() * 60)} minutes ago
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default AnalyticsMain;