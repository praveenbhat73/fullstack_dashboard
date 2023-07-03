// import React, { useMemo, useState } from "react";
// // import { useGetKpisQuery } from "@/state/api";
// import { useGetSalesQuery } from "state/api";
// import { Box, Button, Typography, useTheme } from "@mui/material";
// import {
//   CartesianGrid,
//   Label,
//   Legend,
//   Line,
//   LineChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";
// import regression from "regression";

// const Predictions = () => {
//     const { palette } = useTheme();
//     const [isPredictions, setIsPredictions] = useState(false);
//     const { data: kpiData } = useGetSalesQuery();
  
//     const formattedData = useMemo(() => {
//       if (!kpiData) return [];
//       const monthData = kpiData[0].monthlyData;
  
//       const formatted = monthData.map(({ revenue }, i) => {
//         return [i, revenue];
//       });
//       const regressionLine = regression.linear(formatted);
  
//       return monthData.map(({ month, revenue }, i) => {
//         return {
//           name: month,
//           "Actual Revenue": revenue,
//           "Regression Line": regressionLine.points[i][1],
//           "Predicted Revenue": regressionLine.predict(i + 12)[1],
//         };
//       });
//     }, [kpiData]);
  
//     return (
//       <div>
//         <Box width="100%" height="100%" p="1rem" overflow="hidden">
//           <div style={{ display: "flex", justifyContent: "space-between", margin: "1rem 2.5rem" }}>
//             <Box>
//               <Typography variant="h3">Revenue and Predictions</Typography>
//               <Typography variant="h6">
//                 Charted revenue and predicted revenue based on a simple linear regression model
//               </Typography>
//             </Box>
//             <Button
//               onClick={() => setIsPredictions(!isPredictions)}
//               sx={{
//                 color: palette.grey[900],
//                 backgroundColor: palette.grey[700],
//                 boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
//               }}
//             >
//               Show Predicted Revenue for Next Year
//             </Button>
//           </div>
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart
//               data={formattedData}
//               margin={{
//                 top: 20,
//                 right: 75,
//                 left: 20,
//                 bottom: 80,
//               }}
//             >
//               <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
//               <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }}>
//                 <Label value="Month" offset={-5} position="insideBottom" />
//               </XAxis>
//               <YAxis
//                 domain={[12000, 26000]}
//                 axisLine={{ strokeWidth: "0" }}
//                 style={{ fontSize: "10px" }}
//                 tickFormatter={(v) => `$${v}`}
//               >
//                 <Label
//                   value="Revenue in USD"
//                   angle={-90}
//                   offset={-5}
//                   position="insideLeft"
//                 />
//               </YAxis>
//               <Tooltip />
//               <Legend verticalAlign="top" />
//               <Line
//                 type="monotone"
//                 dataKey="Actual Revenue"
//                 stroke={palette.primary.main}
//                 strokeWidth={0}
//                 dot={{ strokeWidth: 5 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="Regression Line"
//                 stroke="#8884d8"
//                 dot={false}
//               />
//               {isPredictions && (
//                 <Line
//                   strokeDasharray="5 5"
//                   dataKey="Predicted Revenue"
//                   stroke={palette.secondary[500]}
//                 />
//               )}
//             </LineChart>
//           </ResponsiveContainer>
//         </Box>
//       </div>
//     );
//   };
  
//   export default Predictions;
// // export default Predictions;
// //render website to deploy the server
// // server deploy -> 
// //git hub authorize server root name npm install 
// //npm start 
// //connect to mongo using ip address  3 address 
// //client -> static then connect to server .env file -> change url to server url render 

