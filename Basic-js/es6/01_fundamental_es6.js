// 1. No semicolon
// 2. new variable keyword >> var, let, const

let messages = ['Hello', 'JavaScript', 'es2015'];
for (let i = 0; i < messages.length; i++) {  
    // console.log(i)
    setTimeout(function() {
      // onsole.log(i)
      console.log(messages[i])
    }, 1000);
}