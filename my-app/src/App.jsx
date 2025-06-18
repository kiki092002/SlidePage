import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import ToDoPage from "./components/Todo";
import Note from "./components/Note";
import Quiz from "./components/Quizzes";
import Profile from "./components/Profile";

import LandingPage from "./components/LandingPage"; // ⬅ import your landing

function App() {
  return (
    <Routes>
      {/* Landing page outside layout */}
      <Route path="/" element={<LandingPage />} />

      {/* App with sidebar layout */}
      <Route path="/app" element={<Layout />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="notes" element={<Note />} />
        <Route path="todo" element={<ToDoPage />} />
        <Route path="quizzes" element={<Quiz />} />

        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
