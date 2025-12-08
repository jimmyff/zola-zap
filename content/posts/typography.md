+++
title = "Typography"
description = "You can include post descriptions"
date = 2023-01-16
[taxonomies]
tags= ["Zola", "Theme", "Markdown", "Typography"]
+++


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

# Heading 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Heading 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

### Heading 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

---

This is [an example link](http://example.com/ "Title"). Here is **bold text** and *emphasised text*.

Following is the syntax highlighted code block

```rust
fn main() {
    let x = 5u32;

    let y = {
        let x_squared = x * x;
        let x_cube = x_squared * x;

        // This expression will be assigned to `y`
        x_cube + x_squared + x
    };

    let z = {
        // The semicolon suppresses this expression and `()` is assigned to `z`
        2 * x;
    };

    println!("x is {:?}", x);
    println!("y is {:?}", y);
    println!("z is {:?}", z);
}

```

Inline code looks like `this` and can include things like `fn main()` or `const x = 42`.

Blockquotes:

> 'I want to do with you what spring does with the cherry trees.' — Pablo Neruda

> Lorem ipsum *dolor sit amet*, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Unordered list

* Red
* Green
* Blue

Ordered list

1. Red
2. Green
3. Blue
