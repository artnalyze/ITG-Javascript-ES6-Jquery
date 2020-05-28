// ES5
var htmlContent = 
'<html>'+
'<title>Homr</title>'+
'<body>My Page</body>'+
'</html>';

// ES6
const content = "Hello my site";

const htmlContent1 = `
<html>
    <head>
        <title>Home</title>
    </head>
    <body>My Page
    ${content}
    ${5 + 3}
    </body>
</html>
`

console.log(htmlContent1);