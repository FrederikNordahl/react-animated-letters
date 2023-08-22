# React animated letters

An extremely simplified way to have letters animate, when entering the viewport. Right now it animates in the same way always, but I will add support for more, if it gets used by anyone!

This repo is tag-agnostic, it will take whatever tag you give it, and split the words and letters into spans in order to animate. It will then re-apply your tag, so your styling isn't lost :)

## Demo

https://desperate.dk/

(The headlines that animates in, is using this exact repo)

## Installation

Install with npm

```bash
npm i react-animated-letters
```

## Usage/Examples

```javascript
import AnimatedText from "react-animated-letters";

<AnimatedText>
  <h1>Hello world!</h1>
</AnimatedText>;
```

There's also a few props, for controlling the behaviour of the component:

```javascript
import AnimatedText from "react-animated-letters";

<AnimatedText
  between={15} //Amount of ms between each letter
  delay={200} //Delay for the entire animation to start in ms
  offset="100px" //Offset for the intersection observer
  threshold={0.2} //Threshold for the intersection observer
>
  <h1>Hello world!</h1>
</AnimatedText>;
```
