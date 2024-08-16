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
    alert('User account created succesfully!')
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'column',  gap: "1em" }} onSubmit={handleSubmit}>
      <h2>TST User From</h2>
      <TextInput label="User Name" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <TextInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {
       password.length > 0 && <TextInput
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      }      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Create Account</button>
    </form>
  );
}

export default UserForm;
