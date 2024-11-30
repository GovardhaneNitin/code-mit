import { Code2, Home, Layout, LogIn, UserPlus, Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
              CodeMIT
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="/"
              className="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Home className="h-5 w-5 mr-1" />
              Home
            </a>
            <a
              href="/problems"
              className="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <Layout className="h-5 w-5 mr-1" />
              Problems
            </a>
            <a
              href="/login"
              className="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <LogIn className="h-5 w-5 mr-1" />
              Login
            </a>
            <a
              href="/signup"
              className="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <UserPlus className="h-5 w-5 mr-1" />
              Sign Up
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
