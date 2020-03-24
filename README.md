# Noah's Javascript Debugging tools

These are just three functions that help me debug Javascript code, which I found myself re-implementing over and over. Now I add them to my `devDependencies`. I don't pretend these are useful for anyone else, they're just what I like.

`taplog(label, x)` prints the label and `x`, then returns `x`. Useful when you want to log a value nested in.

`trace(fn)` transforms a function to print its name, the arguments it received, and its return value, before returning.

`trace(name, fn)` is like `trace` except you provide a function name. (Useful for unnamed functions.)

`repr(x)` returns a string representation of `x`. For arrays, this is `[n]`, where _n_ is the length of the array. For objects, this is a list of keys in braces, like `{foo, bar, baz}`.
