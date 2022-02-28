---
theme: ./
highlighter: shiki
---

# Slidev Theme Geist

The Vercel theme for Slidev

<div class="pt-24">
  Press <KBD>space</KBD> to go to the next page ->
</div>

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

-   📝 **Text-based** - focus on the content with Markdown, and then style them later
-   🎨 **Themeable** - theme can be shared and used with npm packages
-   🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
-   🤹 **Interactive** - embedding Vue components to enhance your expressions
-   🎥 **Recording** - built-in recording and camera view
-   📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
-   🛠 **Hackable** - anything possible on a webpage

Read more about [Slidev](https://sli.dev)

---

# Navigation

Hover over the bottom-left corner of your screen to see the control panel.

### Keyboard Shortcuts

| shortcut                                             | purpose                     |
| ---------------------------------------------------- | --------------------------- |
| <KBD>space</KBD> / <KBD>tab</KBD> / <KBD>right</KBD> | next animation or slide     |
| <KBD>left</KBD>                                      | previous animation or slide |
| <KBD>up</KBD>                                        | previous slide              |
| <KBD>down</KBD>                                      | next slide                  |

---

# Code

Use `code` snippets and get automatic highlighting!

```ts
// type
interface User {
    id: number;
    firstName: string;
    lastName: string;
    role: string;
}

// function
function updateUser(id: number, update: Partial<User>) {
    const user = getUser(id);
    const newUser = { ...user, ...update };
    saveUser(id, newUser);
}
```

---

# Theme Components

## Button

<Button>Button</Button>

## Keyboard Input

<KBD command shift>P</KBD>

## Note

<Note>Note</Note>

---

# Learn More

[Documentation](https://sli.dev) / [GitHub Repository](https://github.com/slidevjs/slidev)
