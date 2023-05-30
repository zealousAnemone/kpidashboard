-- Add your SQL queries here.
-- See SQL documentation: https://docs.airplane.dev/creating-tasks/sql
SELECT SUM(order_amount) AS total_sales
FROM sales
GROUP BY country
ORDER BY country;

