"use client";

import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Loader2 } from "lucide-react";

export default function BackgroundBeamsDemo() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    let processedEmail = email.trim().toLowerCase();
    if (processedEmail.endsWith(".")) {
      processedEmail = processedEmail.slice(0, -1);
    }

    if (!processedEmail.endsWith("@bennett.edu.in")) {
      setError("Only Bennett University emails are allowed.");
      setTimeout(() => setError(""), 3000);
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: processedEmail }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "An error occurred.");
        setTimeout(() => setError(""), 3000);
      } else {
        setSuccessMessage(data.message || "You've been added to the waitlist!");
        setTimeout(() => setSuccessMessage(""), 3000);
        setEmail("");
      }
    } catch {
      setError("An unexpected error occurred.");
      setTimeout(() => setError(""), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[25rem] md:h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Junior Core Waitlist
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-md text-center relative z-10">
          Sign up for our waitlist and we&apos;ll notify you on your college
          email as soon as applications go live. Don&apos;t miss your chance to
          be among the first to join our team, learn hands-on skills, and
          contribute to exciting projects and events!
        </p>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-row w-full items-center">
            <input
              type="email"
              placeholder="enrollmentNumber@bennett.edu.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              maxLength={50}
              className="rounded-lg border p-2 border-neutral-800 focus:ring-2 focus:ring-neutral-500 w-full text-white relative z-10 mt-4 outline-none bg-neutral-950 placeholder:text-neutral-700"
            />
            <button
              onClick={handleSubmit}
              disabled={isLoading || email.trim() === ""}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 ml-2 relative z-10 disabled:bg-blue-800 flex items-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </div>
          {error && <p className="text-red-500 mt-2 relative z-10">{error}</p>}
          {successMessage && (
            <p className="text-blue-500 mt-2 relative z-10">{successMessage}</p>
          )}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
