type Flashcard = {
    term: string;
    definition: string;
};

function truncate(str: string, max: number) {
    return str.length > max ? str.slice(0, max - 1) + "..." : str;
}

export const FlashcardGrid = ({ flashcards }: { flashcards: Flashcard[] }) => (
    <div className="mb-4 max-h-[60vh] overflow-y-auto pr-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {flashcards.map((card, index) => (
            <div
                key={index}
                className="bg-white dark:bg-black/30 border rounded shadow p-6 flex flex-col items-center min-h-[180px] max-h-[240px] w-full max-w-[600px] mx-auto"
                style={{ boxSizing: "border-box" }}
            >
                <div
                    className="text-xl font-bold mb-2 text-center break-words overflow-hidden text-ellipsis w-full max-h-[3.5em]"
                    style={{ lineHeight: "1.2", wordBreak: "break-word" }}
                >
                    {card.term}
                </div>
                <div
                    className="text-base text-center break-words text-gray-700 dark:text-gray-200 overflow-hidden text-ellipsis w-full max-h-[4.5em]"
                    style={{ lineHeight: "1.2", wordBreak: "break-word" }}
                >
                    {card.definition}
                </div>
            </div>
        ))}
    </div>
);
