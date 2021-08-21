# ucanuse-nitif

ucanuse number input type in firefox. ucanuse a custom polyfill for reactjs.

In the Firefox browser, the number type attribute may not support modern functionality in some versions. Of course, shouldn't be letters and characters in the number type.

### Install
Install using `npm i --save-dev ucanuse-nitif`

### Usage 
In a React app, use the Input component:

import { Input } from "ucanuse-nitif/dist/index";

```js
import { Input } from "ucanuse-nitif/dist/index";

<Input
  label="Price",
  input={{
    id: "price",
  }}
/>
```


### Input props

| Name        | Description      
| ----------- | -----------      
| label        | Input label name| 'Outline' | 'Inline' | 'Ghost' | ' Warning'            
| input     | object - id attribute must   
       


# What is Polyfill
> A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it. [See Details on MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Polyfill)