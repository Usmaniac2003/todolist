const Example = require("../models/example");

// Controller function to create a new Example document
const HelloWorld = async (req, res) => {
  try {
    const exampleData = {
      shortID: 'abc123', // Example shortID
      Name: 'Example Name' // Example Name
    };

    // Create a new Example document using Mongoose `create` method
    const newExample = await Example.create(exampleData);

    console.log('Inserted Example document:', newExample);
    res.status(201).json(newExample); // Respond with the created Example document
  } catch (error) {
    console.error('Error inserting Example document:', error);
    res.status(500).json({ error: 'Failed to create Example document' });
  }
};

module.exports = { HelloWorld };
