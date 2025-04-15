"use client";

import { useState } from "react";
import { extractFlashcards } from "./extractFlashcards";
import { FlashcardGrid } from "./FlashcardGrid";
import { InfoGrid } from "./InfoGrid";
import { StepBox } from "./StepBox";

export default function Home() {
    const [inputText, setInputText] = useState("");
    const [flashcards, setFlashcards] = useState<
        { term: string; definition: string }[]
    >([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        setInputText(text);
        setFlashcards(extractFlashcards(text));
    };

    const downloadCSV = () => {
        const csvContent = flashcards
            .map((f) => `${f.term};${f.definition}`)
            .join("\n");
        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "flashcards.csv";
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="row-start-1 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Quizlet to Anki Converter
                </h1>
                <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-2">
                    Convert your Quizlet flashcard decks into a CSV file that
                    can be easily imported into Anki. Just copy all the content
                    from your Quizlet deck, paste it in, and download the
                    result.
                </p>
            </header>
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch justify-items-center text-center">
                        <StepBox
                            title="1. Paste your Quizlet content"
                            explanation="Go to your Quizlet deck, select all content (Ctrl+A), copy (Ctrl+C), and paste it into the input box below."
                        >
                            <textarea
                                className="w-full flex-1 min-h-[120px] max-h-[60vh] p-2 border rounded mb-4 resize-none"
                                placeholder="Paste your Quizlet content here..."
                                value={inputText}
                                onChange={handleInputChange}
                            ></textarea>
                        </StepBox>
                        <StepBox
                            title="2. Extracted Flashcards"
                            explanation="Check below to verify if all your cards have been extracted correctly."
                        >
                            <div className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                                {`Imported flashcards: ${flashcards.length}`}
                            </div>
                            {flashcards.length > 0 && (
                                <FlashcardGrid flashcards={flashcards} />
                            )}
                        </StepBox>
                        <StepBox
                            title="3. Download as CSV"
                            explanation="Download your deck and then import the CSV file into Anki."
                        >
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded w-auto min-w-0"
                                onClick={downloadCSV}
                            >
                                Download as CSV
                            </button>
                        </StepBox>
                    </div>
                    <div className="my-12 border-t border-gray-300 dark:border-gray-700 w-full max-w-5xl mx-auto"></div>

                    <InfoGrid />
                </div>
            </main>
        </div>
    );
}
