import React from "react";

const InfoCard = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => (
    <div className="bg-white/80 dark:bg-black/30 border rounded shadow p-6 flex flex-col items-center w-full min-w-[440px] max-w-[800px] mx-auto">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p>{children}</p>
    </div>
);

export const InfoGrid = () => (
    <div className="mt-12 max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-base text-gray-700 dark:text-gray-300 text-center">
        <InfoCard title="What does this tool do?">
            Converts your Quizlet flashcard decks into a CSV file that can be
            easily imported into Anki. Just copy all the content from your
            Quizlet deck, paste it in, and download the result.
        </InfoCard>
        <InfoCard title="Why did I make it?">
            I personally prefer using Anki for spaced repetition and long-term
            learning, but found it frustrating to move decks from Quizlet. This
            tool makes the conversion process quick and simple for anyone.
        </InfoCard>
        <InfoCard title="Is my data safe?">
            No data is sent to any server—everything happens in your browser.
            Enjoy fast, private, and easy Quizlet to Anki conversion!
        </InfoCard>
        <InfoCard title="Does it work with all Quizlet decks?">
            Yes, as long as you can copy the terms and definitions from the
            Quizlet page, this tool will extract them for you.
        </InfoCard>
        <InfoCard title="Does it support images or audio?">
            No, this tool only extracts text. Images and audio from Quizlet are
            not included in the CSV export.
        </InfoCard>
        <InfoCard title="How do I import into Anki?">
            In Anki, go to File &gt; Import, select the CSV file, and follow the
            prompts to map columns to front and back of your cards.
        </InfoCard>
    </div>
);
