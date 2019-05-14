function fearNotLetter(str) {
        let letters = "abcdefghijklmnopqrstuvwxyz";
        let begin = letters.indexOf(str[0]);
        let end = begin + str.length;
        let newStr = str.split("");
        let compS = letters.slice(begin,end);
        let newArr = [...newStr, ...compS].filter(item => !newStr.includes(item));
  if ( newArr == ""){
          return undefined;
        } else return newArr.toString();
    }
    fearNotLetter("abce");