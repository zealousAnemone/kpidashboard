-- Add your SQL queries here.
-- See SQL documentation: https://docs.airplane.dev/creating-tasks/sql
SELECT 
    DATE_TRUNC('month', date) AS month,
    SUM(order_amount) AS sales
FROM 
    sales
GROUP BY 
    month
ORDER BY 
    month ASC;

