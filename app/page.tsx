"use client";
import { useState } from "react";

export default function Home() {
  const [experience, setExperience] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const recommendJob = async () => {
    if (!experience) {
      alert("Please enter your experience level.");
      return;
    }

    try {
      setRecommendation(recommendation || "No recommendation available");
    } catch (error) {
      console.error("Error fetching recommendation:", error);
      setRecommendation("Error fetching recommendation");
    }
  };

  return (
    <div className="p-8 font-sans">
      <h1 className="text-2xl font-bold mb-4">Job Recommendation System</h1>
      <p className="mb-4">
        Enter your experience level (e.g., Beginner, Intermediate, Expert):
      </p>
      <input
        type="text"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        placeholder="Your experience level"
        className="p-2 w-72 mb-4 border border-gray-300 rounded"
      />
      <br />
      <button
        onClick={recommendJob}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Recommend Job
      </button>
      {recommendation && (
        <div className="mt-5 text-lg text-gray-800">
          <strong>Recommended Job:</strong> {recommendation}
        </div>
      )}
    </div>
  );
}
