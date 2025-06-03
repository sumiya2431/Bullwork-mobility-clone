const express = require("express");
const cors = require("cors");
require("dotenv").config();

const productRoutes = require("./routes/productRoutes");
const subscribeRoutes = require("./routes/subscribeRoutes");
const orderRoutes = require("./routes/orderRoutes");
const jobRoutes = require("./routes/jobRoutes");
// const exploreRoutes = require('./routes/exploreRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/subscribe", subscribeRoutes);
app.use("/orders", orderRoutes);
app.use("/jobs", jobRoutes); // ✅ Jobs API is active

// app.use('/', exploreRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));






// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const productRoutes = require("./routes/productRoutes");
// const subscribeRoutes = require("./routes/subscribeRoutes");
// const orderRoutes = require("./routes/orderRoutes");
// const jobRoutes = require("./routes/jobRoutes")


// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// app.use("/products", productRoutes);
// app.use("/subscribe", subscribeRoutes);
// app.use("/orders", orderRoutes);
// app.use("/jobs", jobRoutes);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
