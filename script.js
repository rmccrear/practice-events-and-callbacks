// IMPORTANT: remember to turn of AI Code Assistant when yoy are practicing coding.
// Click the little man with a helmet icon to the bottom right of the screen.
// Then untick the "Code Completions" for JavaScript..


// For each of the buttons, set an event listener with onEvent.
// When the button is clicked, use setProperty to change at least one CSS property of the paragraph above it.
// Pay close attention to the ID of the element you are changing and the ID of the button that was clicked.

// Example 1:
onEvent("bananaButton", "click", function() {
    console.log("banana button clicked");
    setProperty("banana", "color", "yellow");
    setProperty("banana", "background-color", "black");
});

// Example 2:
onEvent("button1", "click", function() {
    console.log("button 1 clicked");
    setProperty("paragraph1", "color", "maroon");
    setProperty("paragraph1", "border-style", "solid");
    setProperty("paragraph1", "padding", "5px");
});

