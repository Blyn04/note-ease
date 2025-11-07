import React, { useState } from "react";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import SummaryOutput from "./components/SummaryOutput";
import Loader from "./components/Loader";

const App: React.FC = () => {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummarize = async (text: string) => {
    setLoading(true);
    setSummary("");

    // 🧠 Placeholder logic (replace later with OpenAI API)
    setTimeout(() => {
      const fakeSummary = `Here’s a brief summary:\n\n${
        text.split(" ").slice(0, 30).join(" ")
      }...`;
      setSummary(fakeSummary);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-4 flex flex-col items-center">
        <NoteInput onSummarize={handleSummarize} loading={loading} />
        {loading && <Loader />}
        <SummaryOutput summary={summary} />
      </main>
    </div>
  );
};

export default App;
