# Markdown Benchmark

A realistic document exercises **strong**, *emphasis*, ~~strikethrough~~, `inline code`, [links](https://example.com), and an image:

![Example image](https://example.com/image.png "Example")

## Lists

- one
- two
  - nested one
  - nested two
- three

1. first
2. second
3. third

## Quotes

> This is a blockquote.
>
> It has multiple paragraphs and **inline formatting**.

## Code

```rust
fn main() {
    println!("hello, markdown");
}
```

## Table

| Name | Value | Notes |
| --- | ---: | --- |
| Alpha | 1 | first |
| Beta | 2 | second |
| Gamma | 3 | third |

## Tasks

- [x] completed
- [ ] pending

## Raw HTML

<div class="notice">Raw HTML is part of the test fixture.</div>

## More prose

Markdown parsers need to handle ordinary paragraphs efficiently. This paragraph contains entities such as &copy;, escaped punctuation like \*, and a URL such as <https://example.com>. It also includes a line break.

Another paragraph follows with enough text to make this closer to a normal article than a microbenchmark.
