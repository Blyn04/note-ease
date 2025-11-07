import React, { useState } from "react";

interface NoteInputProps {
  onSummarize: (text: string) => void;
  loading: boolean;
}

const NoteInput: React.FC<NoteInputProps> = ({ onSummarize, loading }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSummarize(text);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto mt-6 flex flex-col gap-3"
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or write your notes here..."
        rows={6}
        className="border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
      />
      <button
        type="submit"
        disabled={loading || !text.trim()}
        className={`px-5 py-2 rounded-xl text-white font-medium ${
          loading || !text.trim()
            ? "bg-indigo-300 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {loading ? "Summarizing..." : "Summarize Notes"}
      </button>
    </form>
  );
};

export default NoteInput;
