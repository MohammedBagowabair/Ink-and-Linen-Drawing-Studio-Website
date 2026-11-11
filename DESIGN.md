---
name: Ink & Linen Studio
description: A colourman's sample card opened on a linen-bound sketchbook.
colors:
  walnut: "#6e3b28"
  walnut-deep: "#4e291c"
  ink: "#241c16"
  graphite: "#4a3b32"
  paper: "#f6efe4"
  linen: "#e7d6c2"
  binding: "#d7c4aa"
  tape: "rgba(232, 214, 176, 0.78)"
typography:
  display:
    fontFamily: '"Shantell Sans", "Segoe Print", "Bradley Hand", cursive'
    fontSize: "clamp(2.7rem, 8vw, 5.4rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  headline:
    fontFamily: '"Shantell Sans", "Segoe Print", "Bradley Hand", cursive'
    fontSize: "clamp(2.1rem, 5vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: '"Shantell Sans", "Segoe Print", "Bradley Hand", cursive'
    fontSize: "1.55rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  wordmark:
    fontFamily: '"Shantell Sans", "Segoe Print", "Bradley Hand", cursive'
    fontSize: "1.45rem"
    fontWeight: 600
    letterSpacing: "-0.03em"
  body:
    fontFamily: '"Source Serif 4", Palatino, "Palatino Linotype", "Book Antiqua", serif'
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  caption:
    fontFamily: '"Source Serif 4", Palatino, "Palatino Linotype", "Book Antiqua", serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: '"Shantell Sans", "Segoe Print", "Bradley Hand", cursive'
    fontSize: "1.08rem"
    fontWeight: 600
    letterSpacing: "-0.02em"
  nav:
    fontFamily: '"Shantell Sans", "Segoe Print", "Bradley Hand", cursive'
    fontSize: "1.05rem"
    fontWeight: 500
    letterSpacing: "-0.02em"
  meta:
    fontFamily: '"Shantell Sans", "Segoe Print", "Bradley Hand", cursive'
    fontSize: "1.02rem"
    fontWeight: 400
    letterSpacing: "-0.02em"
rounded:
  sheet: "0"
  stamp: "255px 18px 225px 18px / 18px 225px 18px 255px"
  float: "50%"
spacing:
  tight: "0.35rem"
  inset: "0.65rem"
  stack: "0.85rem"
  measure: "1.1rem"
  group: "1.25rem"
  leaf: "3.2rem"
components:
  button-stamp:
    backgroundColor: transparent
    textColor: "{colors.walnut-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    padding: "0.65rem 1.15rem"
    height: "48px"
  button-stamp-hover:
    backgroundColor: "{colors.walnut}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    padding: "0.65rem 1.15rem"
    height: "48px"
  button-text:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sheet}"
    height: "44px"
  button-text-hover:
    backgroundColor: transparent
    textColor: "{colors.walnut-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.sheet}"
    height: "44px"
  button-lightbox:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "0.4rem 0.8rem"
    height: "44px"
  button-lightbox-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sheet}"
    padding: "0.4rem 0.8rem"
    height: "44px"
  button-float:
    backgroundColor: "{colors.walnut}"
    textColor: "{colors.paper}"
    rounded: "{rounded.float}"
    size: "3.5rem"
    width: "3.5rem"
    height: "3.5rem"
  button-float-hover:
    backgroundColor: "{colors.walnut-deep}"
    textColor: "{colors.paper}"
    rounded: "{rounded.float}"
    size: "3.5rem"
    width: "3.5rem"
    height: "3.5rem"
  chip:
    backgroundColor: transparent
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.sheet}"
    padding: "0.35rem 0.55rem 0.15rem"
    height: "48px"
  chip-pressed:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sheet}"
    padding: "0.35rem 0.55rem 0.15rem"
    height: "48px"
  nav-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.nav}"
    rounded: "{rounded.sheet}"
    padding: "0.35rem 0.5rem"
    height: "44px"
  nav-link-hover:
    backgroundColor: transparent
    textColor: "{colors.walnut-deep}"
    typography: "{typography.nav}"
    rounded: "{rounded.sheet}"
    padding: "0.35rem 0.5rem"
    height: "44px"
  card-study:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "0.65rem 0.65rem 0.95rem"
  price-line:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.meta}"
  dialog:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "0.85rem"
    width: "min(920px, calc(100% - 1.2rem))"
---

# Design System: Ink & Linen Studio

## Overview

**Creative North Star: "The Linen-Bound Sample Card"**

The page is a colourman's sample card lying open in a linen-bound sketchbook. The ground is a warm basket-weave: linen (`#e7d6c2`) tiled from `images/linen.webp` at 270px. Each study is a speckled rag sheet, paper (`#f6efe4`) tiled from `images/sheet.webp` at 260px, taped at the top and turned a degree off square, with the price left blank. The density is a book. One spread, then leaves, with the binding stitches on the left.

Ink writes. Graphite qualifies. Walnut is the only accent, and it stays scarce: the stamp, the pencil, the focus ring, the selection, the floating button. Shantell Sans is the artist's hand. Source Serif 4 is the reading voice. The confirmed rejection is the centered artist template and the sibling dark editorial grid.

Mara Ellison and Ink & Linen Studio are fictional. The pictures are photographic stand-ins sitting on the sheets, credited in the colophon.

**Key Characteristics:**

- Linen basket-weave ground and speckled rag sheets, with the sheet lighter than the cloth
- One walnut accent against ink and graphite
- Shantell Sans for the artist's voice, Source Serif 4 for reading
- Pinned, taped, slightly tilted studies and a blank price line
- Walnut pencil strokes, hand-cut WhatsApp stamps, and binding stitches on the left
- One soft ink shadow; a stroke draws in, then yields to reduced motion

## Colors

Warm cloth, warm paper, and one sepia. The weave and the rag tooth are images; the hex is the color under the tile.

### Primary

- **Walnut** (`#6e3b28`): The only chromatic accent. It borders the stamp, draws every pencil stroke, underlines a text link, thumbs the scrollbar, and fills the selection and the floating button. On stamp hover it fills the stamp and the label turns paper.
- **Deep Walnut** (`#4e291c`): The pressed and linked step of the same accent. Link text, the stamp's resting label, the price-line value, nav and text-link hover, the focus outline, and the floating button's hover.

### Neutral

- **Ink** (`#241c16`): Body text, the artist's hand, pressed filter words, and the lightbox control's border. Hairlines are this ink at partial strength: the price line at 28% opacity, the colophon rule at 22%, the binding's inner edge at 16%. The dialog scrim is ink at 72%.
- **Graphite** (`#4a3b32`): The aside. Medium lines, resting filter words, the study count, the about caption, and the colophon.
- **Rag Paper** (`#f6efe4`): The sheet in hand, the dialog, selection text, the stamp's hover label, and the floating mark. It is the lightest surface.
- **Linen** (`#e7d6c2`): The page ground under the weave, the scrollbar track, and the theme color.
- **Binding Cloth** (`#d7c4aa`): The 14px stitch strip down the left edge of the book.
- **Masking Tape** (`rgba(232, 214, 176, 0.78)`): The translucent strip across the top of a pinned sheet.

### Named Rules

**The One Walnut Rule.** Walnut is the only accent hue. Ink and graphite do the reading. A second chromatic color does not belong on the page.

**The Lightest Sheet Rule.** The sheet in hand is rag paper, lighter than the linen ground. A study sits on the cloth; it does not darken into a card.

## Typography

**Display / artist voice:** Shantell Sans, with Segoe Print, Bradley Hand, then cursive. The file covers weights 500–700.
**Reading voice:** Source Serif 4, with Palatino, Palatino Linotype, Book Antiqua, then serif. The file covers weights 400–700.

**Character:** The hand is warm, slightly tight, and a little taller than it is wide. The serif is a book face, quiet, and set in a comfortable measure. They never trade jobs.

### Hierarchy

- **Display** (600, `clamp(2.7rem, 8vw, 5.4rem)`, line-height 1.05, tracking `-0.03em`): The studio name on the title page. It stays inside about 11 characters.
- **Headline** (600, `clamp(2.1rem, 5vw, 3.4rem)`, line-height 1.05, tracking `-0.03em`): A leaf heading. It stays inside about 16 characters.
- **Title** (600, `1.55rem`, line-height 1.05, tracking `-0.03em`): The handwritten name of a study, a process station, or a commission kind.
- **Wordmark** (600, `1.45rem`, tracking `-0.03em`): "Ink & Linen" in the margin, in ink. The signature "Mara Ellison" is the same size in walnut; because it wears the hand, its line-height is 1.05. The margin mark inherits the body line-height.
- **Body** (400, `1.125rem`, line-height 1.6): Paragraphs. The measure is 62ch; the studies introduction is 58ch. The opening lede is the same face at `1.2rem`. The colophon drops to `0.98rem` in graphite. An empty filter result is italic.
- **Caption** (400, `1rem`, line-height 1.6): The medium line under a title, in graphite. The about-page caption is the hand at this same size, also graphite.
- **Label** (600, `1.08rem`, tracking `-0.02em`): Stamps, text links, and filter words. The stamp's line-height is 1.1.
- **Nav** (500, `1.05rem`, tracking `-0.02em`): The margin index. Lighter than a label, still the hand.
- **Meta** (400, `1.02rem`, tracking `-0.02em`): The price line and the study count. The price value and the card's inquire link use this size at weight 600.

A featured sheet title, on the hero and in the dialog, is the hand above the title size: the hero uses `clamp(1.7rem, 4vw, 2.15rem)` and the lightbox title uses `clamp(1.7rem, 4vw, 2.3rem)`.

### Named Rules

**The Two Voices Rule.** Shantell Sans speaks only in the artist's voice: names, titles, the margin, stamps, filters, the price line, counts. Source Serif 4 speaks only when there is something to read: the lede, prose, the medium line, the colophon. A paragraph does not go into the hand, and the studio name does not go into the serif.

## Layout

The page is one book, centered, `min(1180px, calc(100% - 0.8rem))`, with `6rem` of air at the bottom so the floating button can sit clear. From 900px the book is `min(1180px, calc(100% - 2rem))`. Padding is `0.4rem` on top, `0.85rem` on the right, and `0.85rem` plus the binding on the left.

The binding is a 14px strip on the left edge, binding cloth, full height. Stitches repeat every 34px: an 8px walnut dash, 1.4 wide, round caps, centered in the strip. An inset hairline of ink at 16% marks the inner edge.

The margin index sits on the top edge: the wordmark, then Work, Process, Commissions, About, Contact, and WhatsApp. It wraps. Links are at least 44px tall.

The first viewport is one spread. On a narrow screen the pinned drawing comes first (`order: -1`), then the title page. From 900px the spread is two columns, `1.12fr` and `0.88fr`, gap `clamp(1.5rem, 3vw, 3rem)`, at least `calc(100svh - 6.5rem)` tall. The drawing is the left page. The title page is the right page, held to `38rem`. The hero image is `min(34vh, 280px)` tall, and `min(52vh, 560px)` from 900px.

Each leaf after the spread starts with `3.2rem` of air. The gallery is one column, then two from 700px, then three from 1040px, with `2.4rem` between rows and `1.3rem` between columns. Process stations stack, then sit side by side from 700px (`0.9fr` / `1.1fr`, the image flipping to the outside on even rows), with `2.2rem` between stations. The about block becomes `0.8fr` / `1.2fr` from 900px.

Reading rhythm, in the order it actually repeats: `0.35rem` for tight index and filter gaps, `0.65rem` to inset a sheet, `0.85rem` between sentences and as the page's side margin, `1.1rem` beside an action, `1.25rem` inside the mobile spread, `3.2rem` before a leaf.

### Named Rules

**The Open Book Rule.** One book, one gutter, stitches on the left. From 900px the first viewport is a two-page spread: the pinned drawing on the left, the title page on the right. Later leaves stack. The page does not become a centered single column of type, and it does not become a dark editorial grid.

## Elevation & Depth

Depth is a sheet lifted off cloth. One soft shadow, cast down and to the right in ink, does that work. Tape has a thinner contact shadow. The floating button, because it hovers over the page, carries a smaller and darker shadow. There is no hard offset and no stacked second shadow on a resting sheet.

The dialog scrim is ink at 72% opacity. A photograph in the process and about sections is not wrapped in a sheet; it takes the same pin shadow and sits on the linen.

### Shadow Vocabulary

- **Pin** (`box-shadow: 0.45rem 0.7rem 1.15rem rgba(36, 28, 22, 0.16)`): The hero sheet, a study, the commission sheet, the workshop note, the dialog, and an unsheeted photograph.
- **Tape** (`box-shadow: 0 1px 1px rgba(36, 28, 22, 0.12)`): The masking tape where it meets the sheet.
- **Float** (`box-shadow: 0.25rem 0.4rem 0.9rem rgba(36, 28, 22, 0.28)`): The floating WhatsApp button.
- **Binding** (`box-shadow: inset -1px 0 0 rgba(36, 28, 22, 0.16)`): The inner edge of the stitch strip.

### Named Rules

**The Pin Shadow Rule.** A sheet at rest uses the pin shadow and nothing else. The shadow is soft and warm. It is not a hard offset, and it does not appear in a second layer under the same sheet.

## Shapes

Sheets, the dialog, filter chips, and lightbox controls are square (`0`). The stamp is the one irregular outline: `255px 18px 225px 18px / 18px 225px 18px 255px`, a hand-cut rubber stamp rotated `-1deg`, with a `2px` walnut border. The floating control is a circle (`50%`) at `3.5rem`.

Tape is a short rectangle, `1.15rem` tall, rotated `-3deg`, centered on the top edge and overlapping it by `0.55rem`. On the hero it is `4.4rem` wide. On a study it is `3.4rem` wide.

Studies tilt per sheet, from `-1.5deg` to `1.4deg` (the shared default is `-1deg`). The hero sheet is `-0.7deg`. The commission sheet is `-0.4deg`. The workshop note is `0.8deg`. On hover, when the pointer is real and motion is allowed, a study eases flat and up `4px` over `280ms`.

Pencil marks are walnut, `2.2` wide, round caps, measured with `pathLength` 1. A title underline, the process thread, and the pressed filter word are one unbroken stroke (`stroke-dasharray: 1`). A resting filter word carries a gapped stroke (`stroke-dasharray: 0.62 0.16`).

### Named Rules

**The Square Sheet Rule.** Rag sheets, the dialog, and the filter chips stay square. The only curves are the hand-cut stamp and the circular floating button.

**The Slight Tilt Rule.** A pinned sheet sits about a degree off square, each study on its own angle inside `-1.5deg` to `1.4deg`. Hover, when motion is allowed, settles the study flat. The tilt is small enough that the type stays easy to read.

## Components

Controls feel pinned and handwritten: a stamp you press, a pencil mark under a word, a price written on a ruled line. There is no text field on the page. WhatsApp is the action.

Focus, everywhere, is a `2px` deep-walnut outline, `3px` outside the control. Selection is walnut with paper text. The easing for draw and lift is `cubic-bezier(0.16, 1, 0.3, 1)`.

### Buttons

- **Shape:** The primary action is the hand-cut stamp (the irregular radius above), rotated `-1deg`. Text links are square, with a `1.5px` walnut underline. Lightbox controls are square, with a `1.5px` ink border. The floating control is a `3.5rem` circle.
- **Primary:** Transparent ground, `2px` walnut border, deep-walnut label in the label voice, padding `0.65rem 1.15rem`, line-height 1.1, at least 48px tall. The label is the sentence: "Inquire on WhatsApp", "Request a commission on WhatsApp", "Ask about dates", "Write on WhatsApp".
- **Hover / Focus:** The stamp fills with walnut and the label turns paper. Focus keeps the shared deep-walnut outline.
- **Text link:** Ink, the label voice, weight 600, a walnut underline, at least 44px tall. Hover turns the words deep walnut. Used for "Turn to the studies" and "Look closer".
- **Lightbox:** Transparent ground, `1.5px` ink border, the hand at the body size, weight 600, tracking `-0.02em`, padding `0.4rem 0.8rem`, at least 44px each way. Hover fills with ink and paper text. Close, Previous, and Next share this.
- **Floating:** Walnut ground, paper mark, the float shadow, fixed `0.8rem` from the right and bottom. The mark is a drawn speech bubble, not a logo. Hover deepens the ground to deep walnut. While the hero sheet is more than a quarter in view, the button fades and stops taking clicks.

### Chips

- **Style:** No fill and no border. Graphite words in the label voice, padding `0.35rem 0.55rem 0.15rem`, at least 48px tall. Under the word, a gapped walnut stroke at 75% opacity (`stroke-dasharray: 0.62 0.16`).
- **State:** The pressed chip turns the word ink and replaces the gap with one unbroken stroke (`stroke-dasharray: 1`). When motion is allowed, that stroke draws in over `0.7s`. Reduced motion shows the stroke already drawn.

### Cards / Containers

- **Corner Style:** Square.
- **Background:** Rag paper, with `images/sheet.webp` tiled at 260px. Tape across the top, in the tape color.
- **Shadow Strategy:** The pin shadow. See Elevation & Depth.
- **Border:** None. The price line carries its own hairline.
- **Internal Padding:** A study is `0.65rem 0.65rem 0.95rem`. The hero sheet is `0.7rem 0.7rem 1.05rem`. The commission sheet is `1.3rem 1.1rem 1.4rem`, and `1.8rem` from 900px. The workshop note is `1.15rem 1.1rem 1.25rem`, held to `36rem`.
- **What is a sheet:** The hero, each study, the commission, and the workshop note. Process photographs and the about photograph sit on the linen with the pin shadow, no tape, and no rag tile.
- **Study contents:** The picture, cropped to cover and held to `22rem` tall; the handwritten title; the graphite medium line; the price line; an inquire link in deep walnut with a `1.5px` walnut underline, the meta size at weight 600.
- **Hover:** When hover is available and motion is allowed, the study eases to flat and rises `4px` over `280ms`. Reduced motion leaves the tilt where it is.

### Navigation

The margin index is the hand, not a bar. The wordmark is the wordmark size in ink, with no underline. Links are the nav voice, ink, padding `0.35rem 0.5rem`, at least 44px tall, wrapping in a row. Hover turns a link deep walnut. There is no separate mobile menu. The same row wraps.

### Price line

A study, the hero, the commission sheet, and the lightbox each end on the same ruled line. "Price" on the left, "Quote on request" on the right in deep walnut at weight 600. The line is the meta voice, with `1rem` between the two sides and a `1px` bottom border of ink at 28% opacity. On a study card the line is a hair smaller, `0.98rem`. The commission line is `1.2rem`.

### Dialog

The lightbox is a square rag-paper frame, padding `0.85rem`, width `min(920px, calc(100% - 1.2rem))`, the pin shadow, no border. The scrim is ink at 72%. Inside: Close at the right, the picture contained up to `min(62vh, 740px)` on the gallery well, then the handwritten title, an unbroken pencil stroke, the medium, the price line, the stamp, and Previous / Next. The count under them is the meta voice in graphite.

### Pencil and motion

A title underline and the process thread are one unbroken walnut stroke. The thread draws once, over `1.1s`, when it is well into view. A resting filter word stays gapped; the pressed word becomes one unbroken stroke and draws in. Reduced motion turns scroll snapping off, skips both draws, and leaves every stroke fully shown.

### Named Rules

**The Blank Price Rule.** The price line names the blank and then says "Quote on request". It never carries a figure.

**The Pencil Rule.** A stroke is walnut, 2.2 wide, round-capped, with `pathLength` 1. Under a title, along the process thread, and under the pressed filter word, it is one unbroken stroke (`stroke-dasharray: 1`). Under a resting filter word it is gapped (`stroke-dasharray: 0.62 0.16`) at 75% opacity.

## Do's and Don'ts

### Do:

- **Do** tile the ground with linen (`#e7d6c2`) and `images/linen.webp` at 270px, and tile every sheet with paper (`#f6efe4`) and `images/sheet.webp` at 260px.
- **Do** keep Shantell Sans on the artist's voice and Source Serif 4 on reading, at the sizes in the frontmatter.
- **Do** pin a study on a square rag sheet with tape at the top, the pin shadow, and a tilt between `-1.5deg` and `1.4deg`.
- **Do** end each study on the blank price line: "Price" at the left, "Quote on request" in deep walnut, on a 1px line of ink at 28% opacity.
- **Do** use the hand-cut stamp for a WhatsApp action and the 3.5rem walnut circle for the floating control.
- **Do** draw focus as a 2px deep-walnut outline, 3px outside the control, and cancel the pencil draw and the hover lift when the visitor prefers reduced motion.

### Don't:

- **Don't** add a second accent hue, a dark editorial ground, or a centered single-column hero.
- **Don't** set a reading paragraph in Shantell Sans, or the studio name and piece titles in Source Serif 4.
- **Don't** round the rag sheets, the dialog, or the filter chips.
- **Don't** replace the pin shadow with a hard offset shadow.
- **Don't** print a price on the blank line.
