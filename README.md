
# React animated letters

An extremely simplified way to have letters animate, when entering the viewport. Right now it animates in the same way always, but I will add support for more, if it gets used by anyon!

This repo is tag-agnostic, it will take whatever tag you give it, and split the words and letters into spans in order to animate. It will then re-apply your tag, so your styling isn't lost :)

## Demo

https://desperate.dk/

(The headlines that animates in, is using this exact repo)
## Installation

Install my-project with npm

```bash
  npm i react-animated-letters
```

    import AnimatedText from "react-animated-letters";



    <AnimatedText>
        <h1>Hello world!</h1>
    </AnimatedText>
