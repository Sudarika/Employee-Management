const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");

//staff management
const staffRoutes = require('./routes/staffRoutes')
//leave management
const leaveRoutes = require('./routes/leaveRoutes')
//payroll management
const payrollRoutes = require('./routes/payrollRoutes')

const port = process.env.PORT || 4000;  /* server start   */

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRoutes);

//staff management
app.use('/api/staff', staffRoutes);
//leave management
app.use('/api/leave', leaveRoutes);
//payroll management
app.use('/api/payroll', payrollRoutes);



app.use(errorHandler);

connectDB();

app.listen(port, () => console.log(`🚀 Server started on port ${port}`));