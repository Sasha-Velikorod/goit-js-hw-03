
// Варіант 1

function slugify(title) {
     const titleLower = title.toLowerCase();
     const titleLowerSplit = titleLower.split(" ");
     const slug = titleLowerSplit.join("-");
     return slug;
}

// Варіант 2

// function slugify(title) {
//      const slug = title.toLowerCase();
//      return slug.replaceAll(' ', '-');
// }


console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

