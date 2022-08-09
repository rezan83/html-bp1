describe('HTML file', () => {
    test('The file `index.html` exists', () => {
        const fs = require('fs');
        const path = require('path');
        expect(fs.existsSync(path.join(__dirname, '../index.html'))).toBeTruthy();
    })
})
describe('Document type', () => {
    test('Document type has been declared', () => {
        const fs = require('fs');
        const path = require('path');
        const htmlDoc = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
        expect(htmlDoc).toMatch(/<[ ]?!DOCTYPE[ ]{1,2}html[ ]?>/gmi);
    })
})
describe('Markup', () => {
    test('The root element exists', () => {
        const fs = require('fs');
        const path = require('path');
        const htmlDoc = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
        const dom = new DOMParser().parseFromString(htmlDoc, "text/xml");
        const htmlRoot = dom.querySelector('html');
        expect(htmlRoot).toBeTruthy();
    })
    test('The `head` element exists inside the root element', () => {
        const fs = require('fs');
        const path = require('path');
        const htmlDoc = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
        const dom = new DOMParser().parseFromString(htmlDoc, "text/xml");
        const headTag = dom.querySelector('html').querySelector('head');
        expect(headTag).toBeTruthy();
    })
    test('The `body` element exists inside the root element', () => {
        const fs = require('fs');
        const path = require('path');
        const htmlDoc = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
        const dom = new DOMParser().parseFromString(htmlDoc, "text/xml");
        const bodyTag = dom.querySelector('html').querySelector('body');
        expect(bodyTag).toBeTruthy();
    })
})