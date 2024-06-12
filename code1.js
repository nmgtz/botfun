function codeWords(matchedcodeWord) {
    let botResponse = "";
    if (matchedcodeWord === "html"){
                            botResponse = `"HTML" (Hypertext Markup Language), Is the standard markup language used for creating web pages and web applications. It provides the structure and content of a web page by using a system of tags and attributes to define elements such as headings, paragraphs, links, images, and multimedia content. HTML documents are interpreted by web browsers to display the content as formatted web pages. HTML is often used in conjunction with CSS (Cascading Style Sheets) for styling and layout, as well as JavaScript for interactivity and dynamic content.`;
                            } else if(matchedcodeWord === "javascript"){
                            botResponse = `"JavaScript" - Is a high-level programming language primarily used for developing web applications. It is an essential component of web development alongside HTML and CSS. JavaScript allows developers to add dynamic behavior to web pages, interact with the Document Object Model (DOM) to modify page content, handle user interactions, and communicate with servers to retrieve or send data asynchronously.

JavaScript is a versatile language that can be used both on the client-side (in web browsers) and on the server-side (with environments like Node.js). It supports various programming paradigms, including procedural, functional, and object-oriented programming.

Some key features of JavaScript include:

/ Dynamic Typing: /  Variables in JavaScript can hold values of any data type without explicit declaration.

/ Prototypal Inheritance: /  Objects in JavaScript can inherit properties and methods from other objects through prototype chains.

/ First-Class Functions: / Functions in JavaScript are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

/ Closures: /  Functions in JavaScript retain access to the variables in their lexical scope even after the parent function has finished executing.

/ Asynchronous Programming: / JavaScript supports asynchronous programming using callbacks, promises, and async/await syntax to handle tasks that take time to complete, such as fetching data from servers or executing I/O operations.

JavaScript is widely used in web development, but its versatility extends beyond the web, as it is also used in server-side development, mobile app development, game development, and more.`;
                            } else if(matchedcodeWord === "css"){
                            botResponse = `CSS stands for Cascading Style Sheets. It is a style sheet language used to define the presentation and layout of HTML documents, including colors, fonts, spacing, and other visual aspects. CSS allows developers to separate the structure of a web page (defined with HTML) from its style and presentation, making it easier to maintain and update the appearance of a website across multiple pages.

Key features of CSS include:

/ Selectors: / CSS selectors are used to target HTML elements and apply styles to them. Selectors can target elements based on their tag names, class names, IDs, attributes, and relationships with other elements.

/ Properties and Values: / CSS properties define the visual characteristics of HTML elements, such as color, font size, margin, padding, and border. Each property is assigned a value that specifies how the characteristic should be styled.

/ Cascading: / CSS follows a cascading model, meaning that styles can be inherited from parent elements and overridden by more specific styles defined later in the document or in an external style sheet.

/ Specificity: / CSS specificity determines which styles are applied to an element when conflicting styles are defined. Styles with higher specificity (eg, those targeting IDs or inline styles) take precedence over styles with lower specificity (eg, those targeting tag names or classes).

/ Units and Values: / CSS supports various units and values for specifying measurements, such as pixels (px), percentages (%), ems (em), rems (rem), and viewport units (vw and vh).

/ Box Model: / CSS uses a box model to describe the layout of elements on a web page, including their content, padding, border, and margin. Developers can adjust these properties to control the spacing and alignment of elements.

CSS is an essential part of web development, allowing developers to create visually appealing and responsive websites that adapt to different screen sizes and devices. It is often combined with HTML and JavaScript to create modern and interactive web experiences.`;
                            }
    return botResponse;
}
