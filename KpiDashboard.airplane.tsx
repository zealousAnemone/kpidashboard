import { Loader, Stack, Card, Text, Table, Chart, useTaskQuery, Heading } from "@airplane/views";
import airplane from "airplane";


const KpiDashboard = () => {
  return (
    <Stack>
      <Stack direction="row" wrap>
        <TotalRevenue />
        <RevenueByCountry />
      </Stack>
      <Stack direction="row" wrap>
        <SalesByMonth />
      </Stack>
    </Stack>
  );
};

const SalesByMonth = () => {
  return (
    <Card grow>
      <Chart type="bar" title="Sales by month" task="get_revenue_by_month" ></Chart>
    </Card>
  )
}

const RevenueByCountry = () => {
  return (
    <Card grow>
      <Chart type="pie" title="Revenue by Country" task="get_countries" 
        labels={["Canada", "Denmark", "Germany", "Japan", "United States"]}
        outputTransform={(output) => output.map((country) => ({total_sales: country.total_sales}))} />
    </Card>
  )
}
const TotalRevenue = () => {
  const { output, loading, error } = useTaskQuery({slug: "get_total_revenue"});
  console.log(output)
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Text color="error">{error.message}</Text>;
  }
  return (
    <Card grow>
      <Heading level={2}>Total Revenue</Heading>
      <Heading level={3} color="green">{`$${output.Q1[0].sum.toFixed(2)}`}</Heading>
    </Card>
  )
  
}

export default airplane.view(
  {
    slug: "kpi_dashboard",
    name: "KPI-Dashboard",
  },
  KpiDashboard
);
