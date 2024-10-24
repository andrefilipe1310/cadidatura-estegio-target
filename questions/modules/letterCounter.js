export const countLetterOccurrences = (letterSearch, text) => {
    const lowerLetter = letterSearch.toLowerCase();
    const lowerText = text.toLowerCase();
    let count = 0;
    
    for (let i = 0; i < lowerText.length; i++) {
        if (lowerText[i] === lowerLetter) {
            count++;
        }
    }

    return count;
};