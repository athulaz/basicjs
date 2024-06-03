

function reverseString(s) {
    var c = ' ';
    for (var i = s.length-1; i >= 0; i--) {
        c += s[i];
    }
    return c;
}

var a = "luminar";
console.log(reverseString(a));


// function flattenNested(a) {
//     return a.reduce(function(flat, tofl) {
//         return flat.concat(Array.isArray(toFlatten) ? flattenNested(toFlatten) : toFlatten);
//     }, []);
// }

// var as = [[5, 9], [54, 89, 8], [12, 65, 32], [1, 2, 44]];
// console.log(flattenNested(as));


countryData=[
    {
      name: "India",
      topLevelDomain: [
        ".in"
      ],
      alpha2Code: "IN",
      alpha3Code: "IND",
      callingCodes: [
        "91"
      ],
      capital: "New Delhi",
      altSpellings: [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya"
      ],
      subregion: "Southern Asia",
      region: "Asia",
      population: 1380004385,
      latlng: [
        20,
        77
      ],
      demonym: "Indian",
      area: 3287590,
      gini: 35.7,
      timezones: [
        "UTC+05:30"
      ],
      borders: [
        "AFG",
        "BGD",
        "BTN",
        "MMR",
        "CHN",
        "NPL",
        "PAK",
        "LKA"
      ],
      nativeName: "भारत",
      numericCode: "356",
      flags: {
        svg: "https://flagcdn.com/in.svg",
        png: "https://flagcdn.com/w320/in.png"
      },
      currencies: [
        {
          code: "INR",
          name: "Indian rupee",
          symbol: "₹"
        }
      ],
      languages: [
        {
          iso639_1: "hi",
          iso639_2: "hin",
          name: "Hindi",
          nativeName: "हिन्दी"
        },
        {
          iso639_1: "en",
          iso639_2: "eng",
          name: "English",
          nativeName: "English"
        }
      ],
      translations: {
        br: "India",
        pt: "Índia",
        nl: "India",
        hr: "Indija",
        fa: "هند",
        de: "Indien",
        es: "India",
        fr: "Inde",
        ja: "インド",
        it: "India",
        hu: "India"
      },
      flag: "https://flagcdn.com/in.svg",
      regionalBlocs: [
        {
          acronym: "SAARC",
          name: "South Asian Association for Regional Cooperation"
        }
      ],
      cioc: "IND",
      independent: true
    }
  ]



// Find The Capital

// console.log(countryData.map(i=> i.capital));


// Find Population

// console.log(countryData.map(i=> i.population));



// // Display list of borders

// console.log(countryData.map(i=> i.borders));

// // // Find Language name

// console.log(countryData.map(i=> i.languages.map(lang => lang.name)));



// // Find Currency Code



console.log(countryData.map(i => i.currencies.map(i=>i.code)));

// // Find Total count of borders

// console.log(countryData.map(i =>i.borders.length));

// def reverse_vowels(s):
//     vowels = "aeiouAEIOU"
//     s = list(s)
//     i, j = 0, len(s) - 1
    
//     while i < j:
//         if s[i] in vowels and s[j] in vowels:
//             s[i], s[j] = s[j], s[i]
//             i += 1
//             j -= 1
//         elif s[i] in vowels:
//             j -= 1
//         else:
//             i += 1
    
//     return ''.join(s)


// print(reverse_vowels("hello"))      
// print(reverse_vowels("leetcode"))  



// input  a=[[5,9],[54,89,8],[12,65,32],[1,2,44]]
// var ab= [...a,...b]
// console.log(ab);

//  output = [5,9,54,89,8,12,65,32,1,2,44]

//  Write a java-script function to convert a nested array to single array without using flat()