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

### 2. Press enter to go to next page
