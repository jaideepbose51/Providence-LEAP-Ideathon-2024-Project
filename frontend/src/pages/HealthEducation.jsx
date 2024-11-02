import React, { useState } from "react";

const HealthEducation = () => {
  const [language, setLanguage] = useState("English"); // Language selection
  const [offlineMode, setOfflineMode] = useState(false); // Offline toggle

  const topics = [
    {
      id: 1,
      title: "Hygiene",
      content: {
        video: "/videos/hygiene.mp4",
        article:
          "Good hygiene practices can prevent diseases. Always wash your hands...",
        interactive: "Quiz on hygiene practices...",
      },
    },
    {
      id: 2,
      title: "Nutrition",
      content: {
        video: "/videos/nutrition.mp4",
        article:
          "A balanced diet is key to good health. Include fruits and vegetables...",
        interactive: "Interactive chart for daily nutrition needs...",
      },
    },
    {
      id: 3,
      title: "Disease Prevention",
      content: {
        video: "/videos/disease_prevention.mp4",
        article:
          "Vaccinations and regular check-ups help prevent many illnesses...",
        interactive: "Preventive health checklist...",
      },
    },
  ];

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Fetch content in the selected language
  };

  return (
    <div className="p-4 mx-auto max-w-3xl text-gray-800">
      <h2 className="text-center text-3xl font-semibold py-6 text-gray-700">
        Digital Health Literacy & Preventive Health Education
      </h2>

      {/* Language Selector */}
      <div className="flex justify-end mb-4">
        <label className="text-sm mr-2">Select Language:</label>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="border p-1 rounded"
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Marathi</option>
          <option>Kannada</option>
          {/* Add more languages as needed */}
        </select>
      </div>

      {/* Offline Toggle */}
      <div className="flex justify-end mb-4">
        <label className="text-sm mr-2">Offline Mode:</label>
        <input
          type="checkbox"
          checked={offlineMode}
          onChange={() => setOfflineMode(!offlineMode)}
        />
      </div>

      {/* Educational Topics */}
      {topics.map((topic) => (
        <div key={topic.id} className="border rounded-lg p-4 mb-6 shadow-md">
          <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>

          {/* Video Content */}
          <div className="mb-4">
            <h4 className="font-semibold text-sm mb-1">Educational Video</h4>
            {offlineMode ? (
              <p>Video unavailable in offline mode</p>
            ) : (
              <video
                src={topic.content.video}
                controls
                className="w-full rounded"
              />
            )}
          </div>

          {/* Article Content */}
          <div className="mb-4">
            <h4 className="font-semibold text-sm mb-1">Article</h4>
            <p>{topic.content.article}</p>
          </div>

          {/* Interactive Content */}
          <div>
            <h4 className="font-semibold text-sm mb-1">Interactive Content</h4>
            <p>{topic.content.interactive}</p>
          </div>
        </div>
      ))}

      {/* CSR and Providence Branding Section */}
      <div className="border-t mt-8 pt-4">
        <p className="text-sm text-gray-600">
          <strong>Providence CSR Initiative:</strong> This educational platform
          is part of Providence’s commitment to improve health literacy and
          preventive healthcare. Providence aims to empower communities while
          collecting anonymized health insights to guide future developments.
        </p>
      </div>
    </div>
  );
};

export default HealthEducation;
