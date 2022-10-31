// https://leetcode.com/problems/multiply-strings/

export default function multiplyStrings(num1: string, num2: string): string {
  let rep1 = processIntegerString(num1); // rep for representation
  let rep2 = processIntegerString(num2);
  let result = ( new Array(num1.length + num2.length)).fill("0");

  // console.log(`rep1`, rep1)
  // console.log(`rep2`, rep2)
   
  for (let i = 0; i < rep1.length; ++i) {
    for (let j = 0; j < rep2.length; ++j) {
      const newBase = (Number(rep1[i]) * Number(rep2[j]))
      const targetMag = i + j;
      result[targetMag] = (Number(result[targetMag]) + newBase).toString();
    }
  }

  result = carryPlaces(result);
  // console.log(`after carries`, result);

  for (let i = result.length - 1; i > 0; --i) {
    if (result[i] === "0") {
      result.pop();
    } else {
      break;
    }
  }

  return result.reverse().join("");
}

function processIntegerString(s: string): number[] {
  let out = (new Array(s.length)).fill("0");
  for (let i = 0; i < s.length; ++i) {
    out[i] = s[s.length - 1 - i];
  }
  return out;
}

function carryPlaces(rep: string[]): string[] {
  // console.log(`rep.length`, rep.length)
  
  for (let i = 0; i < rep.length; ++i) {
    const base = rep[i];
    // console.log(`base`, base)
    
    if (base.length > 1) {
      // console.log(`carrying: ${base} * 10^${i}`, )
      
      for (let j = base.length; j > 1; --j) {
        const carryDigit = base[base.length - j];

        // j - 1 + i: curr base's mag + carry base's mag
        const targetBase = rep[j - 1 + i];
        const newBase = Number(targetBase) + Number(carryDigit);
        // console.log(`targetBase:${targetBase} newBase:${newBase}`, )

        rep[j - 1 + i] = newBase.toString();
      }

      // rid carry digits from value
      rep[i] = base[base.length - 1];

      // console.log(`fixed mag:${i} to`, rep.get(i));
    }
  }
  // console.log(`rep in carryPlaces`, rep)
  
  return rep;
}