export function extractFlashcards(text: string) {
    let lines = text
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean);

    // Section header for terms in this set in multiple languages
    const sectionHeaders = [
        // English
        "terms in this set",
        // Spanish
        "términos en este conjunto",
        // French
        "termes de cet ensemble",
        // German
        "begriffe in diesem set",
        // Italian
        "termini in questo set",
        // Dutch
        "termen in deze set",
    ];
    let startIdx = lines.findIndex((l) =>
        sectionHeaders.some((header) => l.toLowerCase().startsWith(header))
    );
    if (startIdx === -1) {
        startIdx = lines.findIndex(
            (l, i) => i < lines.length - 1 && l && lines[i + 1]
        );
    } else {
        startIdx++;
    }

    // Support for multiple languages: add more footer markers and section headers
    const footerMarkers = [
        // English
        "About us",
        "About Quizlet",
        "For Students",
        "For teachers",
        "Resources",
        "Quizlet for Schools",
        "Language",
        // Spanish
        "Acerca de Quizlet",
        "Para estudiantes",
        "Para profesores",
        "Recursos",
        "Quizlet para escuelas",
        "Idioma",
        // French
        "À propos de Quizlet",
        "Pour les étudiants",
        "Pour les enseignants",
        "Ressources",
        "Quizlet pour les écoles",
        "Langue",
        // German
        "Über Quizlet",
        "Für Schüler",
        "Für Lehrer",
        "Ressourcen",
        "Quizlet für Schulen",
        "Sprache",
        // Italian
        "Informazioni su Quizlet",
        "Per studenti",
        "Per insegnanti",
        "Risorse",
        "Quizlet per le scuole",
        "Lingua",
        // Dutch
        "Over Quizlet",
        "Voor studenten",
        "Voor docenten",
        "Bronnen",
        "Quizlet voor scholen",
        "Taal",
    ];
    let footerIdx = lines.findIndex((l) =>
        footerMarkers.some((marker) =>
            l.toLowerCase().startsWith(marker.toLowerCase())
        )
    );
    if (footerIdx !== -1) {
        lines = lines.slice(0, footerIdx);
    }

    let flashcardsArr = [];
    for (let i = startIdx; i < lines.length - 1; i += 2) {
        const term = lines[i];
        const def = lines[i + 1];
        if (
            !term ||
            !def ||
            term.toLowerCase().includes("profile picture") ||
            def.toLowerCase().includes("profile picture")
        )
            break;
        if (/^\d+$/.test(term) || /^\d+$/.test(def)) continue;
        if (term.length > 100 || def.length > 300) break;
        flashcardsArr.push({ term, definition: def });
    }
    return flashcardsArr;
}
