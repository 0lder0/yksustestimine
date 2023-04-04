export function täishäälikud_sõnas(word:string){
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === 'a' || word[i].toLowerCase() === 'e' || word[i].toLowerCase() === 'i' || word[i].toLowerCase() === 'o' || word[i].toLowerCase() === 'u' || word[i].toLowerCase() === 'õ' || word[i].toLowerCase() === 'ä' || word[i].toLowerCase() === 'ö' || word[i].toLowerCase() === 'ü') {
            count++;
        }
    }
    return count;
}