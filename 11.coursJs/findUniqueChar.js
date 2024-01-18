function uniqueChr(s1, s2) {
    // Première façon de faire
    const s3 = s1 + s2 // attentionintention
    let unique = [];
    for (let i=0; i < s3.length; i++) {
        let Lettre = s3[i] // a
        if (!unique.find((character) => character == Lettre /* a */) || !unique.includes(Lettre /* a */)) { // true
            unique.push(Lettre); // a 
        }
    }
    return unique.length

    // Deuxième façon de faire
    return new Set(s1 + s2).size

}

console.log(uniqueChr("attention", "intention"));
console.log(uniqueChr("plus", "tous"));
console.log(uniqueChr("bis", "lis"));