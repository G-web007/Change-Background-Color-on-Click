# 🎨 Change Background Color on Click

## 🖱️ Background Color Changer
A beginner-friendly project that changes the background color of the webpage when a button is clicked, using JavaScript.

## 📘 Javascript Explanation

if (!!x.addEventListener) { 
    // Continue if addEventListener is available
}
- !!x.addEventListener - Checks if the browser supports the addEventListener method on the element x (x is a variable)
- element is an HTML element (like a button, div, or even document)

#💡 In summary:
- ✅ addEventListener depends on the browser (modern browsers support it; old ones might not).
- ✅ if (x.addEventListener) checks if the method exists.
- ✅ if (!!x.addEventListener) does the same, but ensures a clean true/false value.
- ❌ if (!x.addEventListener) means “run this only if addEventListener does not exist,” which is useful only if you're doing compatibility code for very old browsers.

x.addEventListener("click", function() {
    // Code to run when the button (or element) is clicked
    x.addEventListener("click", changeColor) //x.addEventListener is a method used to attach an event handler (like a click, mouseover, keydown, etc.) 
});

- ✅ Attaches an event listener to the element x.
- ✔️ This is where you're telling the browser:
- “When the user clicks this element, run this function.”
- 🔥 This is where the user interaction (click) is handled.

## 📝 Features
- ✅ Click event handling using addEventListener()
- ✅ Changes background color to black (#000)
- ✅ Simple and clean UI
- ✅ Beginner-friendly code

## 🎯 Technologies Used
- HTML5 for basic page structure
- CSS3 for minimal styling (optional)
- JavaScript (ES6) for DOM interaction and event handling

## 📂 Project Structure
```
/Background-Color-Changer  
│── index.html         # Main webpage structure  
│── js/                # JavaScript  
│   └── script.js      # JavaScript logic for event handling  
│── css/               # Stylesheet  
│   └── style.css      # Optional styling (background, button, etc.)
```

## 📌 How to Use
1. Clone the repository:
```sh
    git clone https://github.com/yourusername/Background-Color-Changer.git
```
2. Open index.html in your browser
3. Click the button to change the background color

## 📜 Author
- 👨‍💻 Vincent Y. Ygbuhay
