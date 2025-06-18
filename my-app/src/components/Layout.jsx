import React from "react";
import NavItem from "./NavItems";
import HomeIcon from "./Icons/HomeIcon";
import NoteIcon from "./Icons/NoteIcon";
import TodoIcon from "./Icons/TodoIcon";
import FlashcardIcon from "./Icons/FlashcardIcon";
import QuizIcon from "./Icons/QuizIcon";
import ProfileIcon from "./Icons/ProfileIcon";
import { Outlet, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", icon: HomeIcon, to: "/app/home" },
  { label: "Notes", icon: NoteIcon, to: "/app/notes" },
  { label: "To-Do", icon: TodoIcon, to: "/app/todo" },
  { label: "Flashcards", icon: FlashcardIcon, to: "/app/flashcards" },
  { label: "Quizzes", icon: QuizIcon, to: "/app/quizzes" },
  { label: "Profile", icon: ProfileIcon, to: "/app/profile" },
];

export default function Layout() {
  const location = useLocation();

  return (
    <div
      className="min-h-screen flex flex-col font-sans"
      style={{ fontFamily: "Inter, Noto Sans, sans-serif" }}
    >
      <div className="flex flex-1 px-6 py-5">
        {/* Sidebar */}
        <aside className="w-80 flex flex-col justify-between bg-white p-4 border-r">
          <div>
            <h1 className="text-[#111518] text-base font-medium mb-4">
              SlideSage
            </h1>
            {navItems.map(({ label, icon, to }) => (
              <NavItem
                key={label}
                label={label}
                icon={icon}
                to={to}
                active={location.pathname
                  .toLowerCase()
                  .startsWith(to.toLowerCase())}
              />
            ))}
          </div>
          <div className="space-y-4">
            <button className="h-10 px-4 bg-[#0b80ee] text-white font-bold rounded-full text-sm">
              New
            </button>
            <NavItem label="Help and docs" to="/help" />
          </div>
        </aside>

        {/* Page content */}
        <main className="flex-1 max-w-[960px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
