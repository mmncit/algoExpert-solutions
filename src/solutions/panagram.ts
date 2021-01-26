import flip from "ramda/src/flip";
import any from "ramda/src/any";
import lt from "ramda/src/lt";

const isEmpty = (s: string) => s === "";
const isLengthSmall = (s: string) => s.length < 26;
const validatePangram = (s: string) => {
  let indexOfLetters = new Array(26);
  indexOfLetters.fill(0);
  let indexOfCurrentLetter: number = 0;
  for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i);
    if (65 <= ascii && ascii <= 90) {
      indexOfCurrentLetter = ascii - 65;
    } else if (97 <= ascii && ascii <= 122) {
      indexOfCurrentLetter = ascii - 97;
    }
    indexOfLetters[indexOfCurrentLetter] = 1;
  }
  const lessThan1 = flip(lt)(1);
  if (any(lessThan1)(indexOfLetters)) {
    return false;
  }
  return true;
};

export function createPangram(s: string) {
  return {
    isPangram() {
      return isEmpty(s) || isLengthSmall(s) ? false : validatePangram(s);
    },
  };
}
