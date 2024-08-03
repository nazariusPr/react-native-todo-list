import { AppContent } from "./AppContent";
import { GoalsProvider } from "./context/GoalsContext";

export default function App() {
  return (
    <GoalsProvider>
      <AppContent />
    </GoalsProvider>
  );
}
