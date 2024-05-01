const data = [
  {
    id: 1,
    FAQ: "What is an accordion component in React?",
    ans: "An accordion is a UI component that allows users to toggle the visibility of content sections. Typically, only one section is expanded at a time, and clicking on a section header collapses any currently open section while expanding the clicked section.",
  },
  {
    id: 2,
    FAQ: "How do we structure the data for an accordion component?",
    ans: "We can structure the data as an array of objects, where each object represents a section in the accordion. Each object should contain properties for the section title and content.",
  },
  {
    id: 3,
    FAQ: "How do we handle state in an accordion component?",
    ans: "We can use React state to keep track of which section is currently open. This state can be a single value representing the index of the open section or an array of boolean values indicating whether each section is open or closed.",
  },
  {
    id: 4,
    FAQ: "How do we implement the toggle functionality for opening and closing sections?",
    ans: "We can use event handlers, such as onClick, on each section header to toggle the open state of the corresponding section. When a section header is clicked, you update the state to reflect whether the section should be open or closed.",
  },
  {
    id: 5,
    FAQ: "How can we animate the opening and closing of accordion sections for a smoother user experience?",
    ans: "We can use CSS transitions or animations to animate the height of the content area when opening or closing a section. By adjusting the height from 0 to its actual height (or vice versa), you can create a smooth animation effect.",
  },
];

export default data;
