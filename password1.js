export function makePassword1(f_word, s_word, th_word, password) {
    let sum_word_length = f_word.length + th_word.length;
    //console.log(sum_word_length);
    let f_letter = String.fromCharCode("a".charCodeAt(0) + sum_word_length-1);
    //console.log(f_letter);

    let s_letter = String.fromCharCode(s_word.slice(-1).charCodeAt(0)-1);
    //console.log(s_letter);
    let th_letter;
    let middle;

    if ((th_word.length) % 2 == 0) {
        middle = th_word[(th_word.length/2)-1];
        th_letter = String.fromCharCode(middle.charCodeAt(0)-1);
        if (th_letter == 'a') {
            th_letter = 'z'; //fix 
        }    
    }  else {
        middle = th_word[Math.ceil(th_word.length/2)-1];
        th_letter = String.fromCharCode(middle.charCodeAt(0)+1);
        if (th_letter = 'z') {
            th_letter = 'a'; //fix
        }    
    }
   //console.log(th_letter);

    let ft_letter;
    if(f_word[0] != 'z'){
        ft_letter = String.fromCharCode(f_word[0].charCodeAt(0)+1);
    } else {
        ft_letter = 'a';
    }
    //console.log(ft_letter);

    let result = password.push(f_letter, s_letter, th_letter, ft_letter);
    return result;
    
}




