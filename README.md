# A Single Page Site with Parallax Scrolling

> Hosted [here!](https://parallax-rose.vercel.app/)

### Why ?

I just wanted to created a visually pleasing landing page. This is the first landing page I'm creating so I intend to use this markdown to note down the problems I face and the solution I implement.

# Packages Used

| Package                    | Description                                     |
| -------------------------- | ----------------------------------------------- |
| `tailwindcss`              | Just preference                                 |
| `react-icons`              | Icons Package                                   |
| `react-toastify`           | Easily create and manage toasts                 |
| `react-simple-typewriter`  | To create the automatic text typing effect      |
| `react-syntax-highlighter` | Highlight code syntax                           |
| ~~`react-tsparticles`~~    | ~~Add snowy background~~ PC dies while using it |

# Problems

### 1. Snapping Slides

Use the CSS snap attributes

```css
.container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
}
.slide {
  scroll-snap-align: center;
}
```

---

### 2. Use Keyboard keys to navigate slides

This problem can be broken down into

1. Do an action when a key is pressed
1. Logic to Scroll to a given point

Adding event listener for 'keydown' event solves the first problem

> _keypress_ event doesn't register ArrowKeys, backspace, etc.  
> They are only captured in _keydown_ event.

This implementation can be made reusable if I turn it into a custom hook.
Check keycode of any key on [keycode.info](https://keycode.info)

```jsx
export const useKey = (code, cb) => {
  const callbackRef = useRef(cb);
  useEffect(() => {
    callbackRef.current = cb;
  });

  const handle = (event) => {
    // code refers to keycode
    // eg. KeyD for D
    // e.g Enter for Enter
    if (event.code === code) {
      callbackRef.current(event);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handle);
    return () => {
      document.removeEventListener("keydown", handle);
    };
  });
};
```

The scrolling Logic is achieved using the `element.scrollTo()` method and scrolling to appropriate value

```jsx
// eg. got to next page
ref.current.scrollTo({
  behavior: "smooth",
  top: top + pageHeight,
});
```

---

### 3. Particle background

To implement snowy particle background, I used the `react-tsparticles` package. I followed their
[documentation](https://www.npmjs.com/package/react-tsparticles). I altered the
`particles-config.js` file to style the canvas so that the effect will
continue even when the slides are scrolled down.

#### Ended up not using this because my PC Lagged to death with all those particles

---

### 4. Parallax Effect

I followed [this](https://www.youtube.com/watch?v=Q5y6pwoE3cM) video to implement simple parallax effect. It is noticable while scrolling slowly but the [key press scroll](#2-use-keyboard-keys-to-navigate-slides) is too fast for someone to notice it.

---

### 5. Curtain Effect

It was relatively simple to implement. Only thing notable about it would be the `skew` effect of the `transform` property of css.

```css
.left-curtain {
  transform: skew(-20deg);
}
```

This effect if used properly with the `transition` property, can make a rigid rectangular image behave a bit like a cloth being dragged.

---

### 6. Typing Effect and Syntax Highlighting

The `react-simple-typewriter` makes it really simple to implement this effect. Although I preferred to use their [hook](https://www.npmjs.com/package/react-simple-typewriter) implementation and styled the text myself.

The [documentation](https://www.npmjs.com/package/react-syntax-highlighter) of `react-syntax-highlighter` is also thorough. And it pretty much does what it says.

This textbook packages do what they were intended to do with simple copy paste, however the most noteworthy (and gratifying) thing has to be how I was able to combine both of these packages and get a _code being typed_ effect.
