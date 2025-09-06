# 🎯 Events and Callbacks Practice

Welcome to your interactive JavaScript practice session! This project will help you master the fundamentals of **events** and **callbacks** in web development.

## 🚀 What You'll Learn

- How to attach event listeners to HTML elements
- How to use callback functions to respond to user interactions
- How to dynamically change CSS properties with JavaScript
- How to work with helper functions to make coding easier

## 📁 Project Structure

```
practice-events-and-callbacks/
├── index.html      # The main webpage with buttons and paragraphs
├── script.js       # Your JavaScript code goes here
├── helpers.js      # Helper functions to make coding easier
└── README.md       # This file!
```

## 🚀 How to Get Started

1. **Clone the repository**: Open your terminal and run:
   ```bash
   git clone https://github.com/rmccrear/practice-events-and-callbacks.git
   cd practice-events-and-callbacks
   ```

2. **Start a local server**: In your terminal, run:
   ```bash
   npx live-server
   ```
   This will automatically open your project in the browser and refresh when you make changes.
3. **Open the Developer Tools**: Press `F12` (or `Cmd + Option + I` on Mac) and click on the **Console** tab to see helpful messages from the helper functions
4. **Open your code editor**: Open `script.js` in Cursor IDE
5. **Turn off AI assistance**: Click the little person with a helmet icon in the bottom-right corner and uncheck "Code Completions" for JavaScript
6. **Start coding**: You goal is to make each button change the style of the paragraph above it. Be sure to use a `console.log("button clicked")` in your callback to test it.

## 🛠️ Helper Functions Guide

**📚 Need more help with the helper functions?** Check out the complete guide: [How to Use Helper Functions in Your VSCode Projects](https://rmccrear.github.io/codex-lv2-may-2025/guides/week5-event-driven-apps/helpers-how-to.html)

This guide includes:
- Detailed setup instructions
- Complete function reference
- Troubleshooting tips
- VSCode configuration for better development experience

## 📝 About These Helper Functions

**Note**: The helper functions in this project are based on **Code.org's APP Lab** functions. If you've used APP Lab before, you'll recognize functions like `onEvent()`, `setProperty()`, and `setText()`. These functions make it easier to work with HTML elements and events, especially when you're learning JavaScript for the first time.

The helper functions provide a simplified interface to common web development tasks, allowing you to focus on learning the core concepts of events and callbacks without getting overwhelmed by complex JavaScript syntax.

## 🎯 Your Mission

You have **6 buttons** on the webpage, each with a paragraph above it. Your job is to:

1. **Attach an event listener** to each button using the `onEvent()` function
2. **Change the styling** of the paragraph above each button when it's clicked
3. **Use the `setProperty()` function** to modify CSS properties like color, background, borders, etc.

## 🛠️ Helper Functions Available

The `helpers.js` file provides these useful functions:

### `onEvent(id, event, handler)`
Attaches an event listener to an HTML element.

```javascript
onEvent("button1", "click", function() {
    console.log("Button was clicked!");
});
```

### `setProperty(id, property, value)`
Changes a CSS property of an HTML element.

```javascript
setProperty("paragraph1", "color", "red");
setProperty("paragraph1", "background-color", "yellow");
setProperty("paragraph1", "border", "2px solid blue");
```

### Other Helper Functions
- `setText(id, text)` - Change text content
- `getText(id)` - Get text content
- `setValue(id, value)` - Set input values
- `getValue(id)` - Get input values
- `setImageURL(id, url)` - Change image sources
- `playSound(url)` - Play audio files

## 💡 Example Code

Here's how to make the first button change the first paragraph's color:

```javascript
onEvent("button1", "click", function() {
    setProperty("paragraph1", "color", "purple");
    setProperty("paragraph1", "font-weight", "bold");
});
```

## 🎨 CSS Properties You Can Change

- **Colors**: `color`, `background-color`, `border-color`
- **Text**: `font-size`, `font-weight`, `font-family`, `text-align`
- **Layout**: `padding`, `margin`, `border`, `border-radius`
- **Display**: `display`, `visibility`, `opacity`
- **Position**: `position`, `top`, `left`, `right`, `bottom`

## 🏆 Challenge Levels

### Level 1: Basic Styling
- Change the color of each paragraph when its button is clicked
- Try different colors: `red`, `blue`, `green`, `purple`, `orange`, `pink`

### Level 2: Advanced Styling
- Add borders, padding, and background colors
- Change font sizes and weights
- Add border-radius for rounded corners

### Level 3: Creative Styling
- Use gradients for background colors
- Add hover effects
- Create animations with CSS transitions
- Use different fonts and text decorations

## 🐛 Troubleshooting

**Problem**: Nothing happens when I click the button
- **Solution**: Check that the element ID in `onEvent()` matches the HTML element's `id` attribute exactly

**Problem**: I get an error in the console
- **Solution**: Open the browser's Developer Tools (F12) and check the Console tab for error messages

**Problem**: The styling doesn't apply
- **Solution**: Make sure you're using the correct CSS property names (use kebab-case like `background-color`, not `backgroundColor`)

## ✅ Success Criteria

You've mastered this lesson when you can:
- ✅ Attach event listeners to all 6 buttons
- ✅ Change at least one CSS property for each paragraph
- ✅ Use different styling for each button/paragraph pair
- ✅ Understand how events and callbacks work together

## 🚀 Next Steps

Once you've completed this practice:
1. Try adding more interactive elements
2. Experiment with different event types (`mouseover`, `mouseout`, `dblclick`)
3. Create your own helper functions
4. Build a small interactive game or tool

## 💡 Pro Tips

- **Read the error messages** - they'll tell you exactly what's wrong
- **Open the Developer Tools** - Press `F12` (or `Cmd + Option + I` on Mac) and check the **Console** tab to see helpful info messages from the helper functions
- **Experiment freely** - try different colors, sizes, and effects
- **Have fun** - coding should be enjoyable!

## 🔍 Explore the Code

**Curious about how the helper functions work?** Take a look at the `helpers.js` file! It's a great way to see how JavaScript interacts with HTML elements under the hood. You'll discover:

- How `document.getElementById()` finds HTML elements
- How `addEventListener()` attaches event handlers
- How CSS properties are changed with `element.style`
- How error checking and console logging work
- How to write clean, well-documented code

Understanding these helper functions will make you a better JavaScript developer and help you transition to writing "vanilla" JavaScript without helper functions in the future!

---

Happy coding! 🎉 Remember: every expert was once a beginner. Take your time, experiment, and don't be afraid to make mistakes - that's how you learn!
