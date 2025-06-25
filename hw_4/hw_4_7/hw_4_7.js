"use strict";
function writer47(text, num) {
    document.write("<ul>");
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write("</ul>");
}
writer47("Lorem ipsum dolor sit amet, consectetur", 3);
