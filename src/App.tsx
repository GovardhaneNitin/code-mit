import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProblemList from "./components/ProblemList";
import ProblemPage from "./pages/ProblemPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  // Simple routing logic (in a real app, use a proper router)
  const path = window.location.pathname;

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Navbar />
        {path === "/" && <HomePage />}
        {path === "/problems" && <ProblemList />}
        {path.startsWith("/problem/") && (
          <ProblemPage problemId={parseInt(path.split("/")[2])} />
        )}
        {path === "/login" && <LoginPage />}
        {path === "/signup" && <SignUpPage />}
      </div>
    </ThemeProvider>
  );
}
