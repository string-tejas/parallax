# A Single Page Site with Parallax Scrolling

> Hosted at [www.google.com](https://google.com)

### Why ?

I just wanted to created a visually pleasing landing page. This is the first landing page I'm creating so I intend to use this markdown to note down the problems I face and the solution I implement.

# Packages Used

| Package        | Description       |
| -------------- | ----------------- |
| `react-spring` | Smooth animations |
| `tailwindcss`  | Just preference   |

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
