import React from "react";

interface SummaryOutputProps {
  summary: string;
}

const SummaryOutput: React.FC<SummaryOutputProps> = ({ summary }) => {
  if (!summary) return null;

  return (
    <div className="mt-6 w-full max-w-2xl mx-auto bg-white p-5 rounded-xl shadow-md border border-gray-100">
      <h2 className="text-lg font-semibold mb-2 text-indigo-700">
        🧩 Summary
      </h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
        {summary}
      </p>
    </div>
  );
};

export default SummaryOutput;
