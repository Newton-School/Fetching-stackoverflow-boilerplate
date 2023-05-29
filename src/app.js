const fs = require("fs");
const express = require("express");
const app = express();

// Importing blog from blog.json file
const Blog = JSON.parse(fs.readFileSync(`data/blog.json`));

// Middlewares
app.use(express.json());

// Write GET endpoint for sending all the blog to user here

/*

Endpoint - /api/v1/blogs

Return 200 Status code
json = {
  status: "Success",
  message: "Blog fetched successfully",
  data: [
    {
      id: 1,
      heading: 'Binary Search',
      body: 'How we can prove time complexity of BS is log(n) ?',
      tags: 'msbksbn'
      creator_id: 'xyz1'
    },
    {
      id: 2,
      heading: 'Binary Search',
      body: 'Is BS a imp topic ?',
      tags: 'msbksbn'
      creator_id: 'xyz2'
    }
  ]
}

*/


module.exports = app;
