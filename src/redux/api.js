import axios from "axios";

export const createUserApi = async (user) =>
  await axios.post("http://localhost:5000/users", user);

export const loadUsersApi = async () =>
  await axios.get("http://localhost:5000/users");

export const updateUserApi = async (userId, user) =>
  await axios.put(`http://localhost:5000/users/${userId}`, user);

export const deleteUserApi = async (userId) =>
  await axios.delete(`http://localhost:5000/users/${userId}`);
