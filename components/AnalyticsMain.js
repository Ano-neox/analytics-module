import React, { useState } from 'react';
import {
  Box, Typography, Card, CardContent, Grid, Select, MenuItem, FormControl, InputLabel
} from '@mui/material';
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
      chart: { 
        type: 'area', 
        height: 350,
        toolbar: { show: false },
        background: 'transparent'
      },
      dataLabels: { enabled: false },
      stroke: { 
        curve: 'smooth',
        width: 3
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.1,
          stops: [0, 90, 100]
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          style: {
            colors: '#8e8da4',
            fontSize: '12px'
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#8e8da4',
            fontSize: '12px'
          }
        }
      },
      grid: {
        borderColor: '#e7e7e7',
        strokeDashArray: 5
      },
      colors: ['#667eea', '#764ba2'],
      legend: {
        position: 'top',
        horizontalAlign: 'right'
      }
    }
  };

  const pieData = {
    series: [44, 55, 13, 43],
    options: {
      chart: { 
        type: 'donut',
        background: 'transparent'
      },
      labels: ['CRM', 'Sales', 'Projects', 'Billing'],
      colors: ['#667eea', '#f093fb', '#4facfe', '#43e97b'],
      plotOptions: {
        pie: {
          donut: {
            size: '70%',
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Total',
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#373d3f'
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '12px',
          fontWeight: 'bold'
        }
      },
      legend: {
        position: 'bottom',
        fontSize: '12px'
      }
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
            <Card sx={{ 
              backgroundColor: '#f0fff4',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#c6f6d5',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#38a169' }}>💰</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    ₹12,45,000
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Total Revenue
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#38a169', fontSize: '12px' }}>
                    +12.5%
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#f8f9ff',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#e8eaff',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#5a67d8' }}>👥</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    1,234
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Active Customers
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#38a169', fontSize: '12px' }}>
                    +8.2%
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#fff5f5',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#fed7d7',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#e53e3e' }}>📊</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    24.5%
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Conversion Rate
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#e53e3e', fontSize: '12px' }}>
                    -2.1%
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#fffbf0',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#fed7aa',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#d69e2e' }}>💵</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    ₹45,600
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Avg Deal Size
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#38a169', fontSize: '12px' }}>
                    +5.7%
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Card sx={{ 
              borderRadius: 3, 
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" mb={2} sx={{ fontWeight: 'bold', color: '#1a202c' }}>Sales & Revenue Trends</Typography>
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
            <Card sx={{ 
              borderRadius: 3, 
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" mb={2} sx={{ fontWeight: 'bold', color: '#1a202c' }}>Module Usage</Typography>
                <Chart
                  options={pieData.options}
                  series={pieData.series}
                  type="donut"
                  height={350}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ 
              borderRadius: 3, 
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" mb={2} sx={{ fontWeight: 'bold', color: '#1a202c' }}>Top Performing Products</Typography>
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
            <Card sx={{ 
              borderRadius: 3, 
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" mb={2} sx={{ fontWeight: 'bold', color: '#1a202c' }}>Recent Activities</Typography>
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