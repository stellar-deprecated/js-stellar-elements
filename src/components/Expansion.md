```jsx
<div>
  <Expansion
    hasBorder
    expandIcon={
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg" />
    }
    title={
      <div>
        <span>Click me to see 2 lists</span>
      </div>
    }
  >
    <ul>
      <li>Imagine I'm a list</li>
      <li>Imagine I'm a list</li>
      <li>Imagine I'm a list</li>
      <li>Imagine I'm a list</li>
    </ul>
    <ul>
      <li>Imagine I'm a second list</li>
      <li>Imagine I'm a second list</li>
      <li>Imagine I'm a second list</li>
      <li>Imagine I'm a second list</li>
    </ul>
  </Expansion>
  <Expansion
    expandIcon={
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg" />
    }
    title="Click me to see a paragraph"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </Expansion>
</div>
```
