import React, { useState } from "react";
import useLocalStorage from "@hooks/useLocalStorage";
import TextInput from "@components/shared/FormInput/FormInput";

interface User {
  username: string;
  email: string;
  password: string;
}

const UserForm = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [users, setUsers] = useLocalStorage<User[]>("users", []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const newUser: User = { username, email, password };

    // Add the new user to the list of users
    setUsers([...users, newUser]);

    // Clear form fields and error
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");

    // User added
    alert("User account created succesfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>TST User From</h1>
      <TextInput
        label="Name"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <TextInput
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextInput
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {password.length > 0 && (
        <TextInput
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      )}{" "}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Create Account</button>
    </form>
  );
};

export default UserForm;
