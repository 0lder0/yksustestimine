export function a_loendaja(word:string){
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === 'a' || word[i] === 'A') {
            count++;
        }
    }
    return count;
}