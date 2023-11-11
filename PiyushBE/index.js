const express = require("express");
const fs = require("fs");
const users = require("./users.json");
const app = express();
const PORT = 8000;
// middleware -plugin
app.use(express.urlencoded({ extended: false }));

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `<ul>${users
    .map(users => `<li>${users.first_name}</li>`)
    .join("")}</ul>`;
  res.send(html);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    const id = Number(req.params.id);
    let updatedUser = req.body;
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }

    // Update the user's data by merging the existing user data with the new data
    users[userIndex] = { ...users[userIndex], ...updatedUser };
    fs.writeFile("./users.json", JSON.stringify(users), (err, data) => {
      return res.json({ success: "success" });
    });
  })
  .delete((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);
  
    if (userIndex === -1) {
      return res.status(404).json({ error: "User not found" });
    }
  
    // Remove the user with the specified ID
    users.splice(userIndex, 1);
  
    // Save the updated user data to a JSON file (if needed)
    fs.writeFile("./users.json", JSON.stringify(users), (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to delete user" });
      }
  
      return res.json({ success: "User deleted successfully" });
    });
  });
  

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./users.json", JSON.stringify(users), (err, data) => {
    return res.json({ success: "success", id: users.length });
  });
});
app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
