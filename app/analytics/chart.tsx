'use client';

import { Card, AreaChart, Title, Text } from '@tremor/react';

const data = [
  {
    Month: 'Jan 23',
    Accepted: 2890,
    Denied: 2400
  },
  {
    Month: 'Feb 23',
    Accepted: 1890,
    Denied: 1398
  },
  {
    Month: 'Mar 23',
    Accepted: 3890,
    Denied: 2981
  },
  {
    Month: 'Apr 23',
    Accepted: 4890,
    Denied: 2970
  },
  {
    Month: 'May 23',
    Accepted: 2890,
    Denied: 2580
  },
  {
    Month: 'Jun 23',
    Accepted: 3890,
    Denied: 2980
  },
  {
    Month: 'Jul 23',
    Accepted: 2890,
    Denied: 2375
  },
  {
    Month: 'Aug 23',
    Accepted: 2590,
    Denied: 2160
  },
  {
    Month: 'Sep 23',
    Accepted: 3190,
    Denied: 2605
  }
  
];

export default function Example() {
  return (
    <Card className="mt-8">
      <Title>Performance</Title>
      <Text>Comparison between Loan Applications Accepted and Denied</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={['Accepted', 'Denied']}
        index="Month"
        colors={['indigo', 'fuchsia']}
        valueFormatter={(number: number) =>
          `$ ${Intl.NumberFormat('us').format(number).toString()}`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}
