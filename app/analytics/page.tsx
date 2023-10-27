'use client';

import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import Chart from './chart';

const personal = [
  { name: 'Home Improvement', value: 1230 },
  { name: 'Debt Consolidation', value: 751 },
  { name: 'Education', value: 471 },
  { name: 'Medical Expenses', value: 280 },
  { name: 'Other', value: 78 }
];

const business = [
  { name: 'Business Expansion', value: 453 },
  { name: 'Equipment Purchase', value: 351 },
  { name: 'Working Capital', value: 271 },
  { name: 'Startup Funding', value: 191 }
];

const snapscan = [
  { name: 'Online Shopping', value: 789 },
  { name: 'Procurement Topup', value: 676 },
  { name: 'Company Registratiion fees', value: 564 },
  { name: 'Marketing Campaign', value: 234 },
  { name: 'Other', value: 191 }
];

const data = [
  {
    category: 'Personal Loans',
    stat: '10,234',
    data: personal
  },
  {
    category: 'Business Loans',
    stat: '12,543',
    data: business
  },
  {
    category: 'Snapscan Loans',
    stat: '2,543',
    data: snapscan
  }
];

export default function PlaygroundPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {data.map((item) => (
          <Card key={item.category}>
            <Title>{item.category}</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              <Metric>{item.stat}</Metric>
              <Text>Total views</Text>
            </Flex>
            <Flex className="mt-6">
              <Text>Pages</Text>
              <Text className="text-right">Views</Text>
            </Flex>
            <BarList
              data={item.data}
              valueFormatter={(number: number) =>
                Intl.NumberFormat('us').format(number).toString()
              }
              className="mt-2"
            />
          </Card>
        ))}
      </Grid>
      <Chart />
    </main>
  );
}
