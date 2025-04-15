import React from "react";

type StepBoxProps = {
    title: string;
    explanation: string;
    children: React.ReactNode;
    className?: string;
};

export const StepBox = ({
    title,
    explanation,
    children,
    className = "",
}: StepBoxProps) => (
    <div className={`flex flex-col h-full ${className}`}>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {explanation}
        </p>
        {children}
    </div>
);
