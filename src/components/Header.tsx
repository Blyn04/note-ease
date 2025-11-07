import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-indigo-600 text-white py-4 px-6 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">📝 NoteEase</h1>
      <p className="italic text-sm opacity-90">AI Summarizer</p>
    </header>
  );
};

export default Header;
