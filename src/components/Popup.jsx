import { useState, useEffect } from "react";

export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  // Show popup on page load
  useEffect(() => {
    setIsOpen(true);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-md bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-lg shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-4">Welcome! I'm Uthira Muthu, the developer of this web application.</h2>
        <p className="text-gray-700">This is <strong>Selavu</strong>, a Personal Finance Management application designed to showcase my skills in full-stack web development.</p>
        <p className="text-red-700">Note: This is a prototype currently under development. Frequent updates are being released as part of continuous improvement.</p>
      </div>
    </div>
  );
}
