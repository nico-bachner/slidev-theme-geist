---
theme: none
---

# Slidev Theme Geist

A Vercel theme for Slidev

<div class="pt-12">
  Press <kbd>space</kbd> to go to the next page ->
</div>

---

# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

Read more about [Slidev](https://sli.dev)

---

# Navigation

Hover over the bottom-left corner of your screen to see the control panel.

### Keyboard Shortcuts

| shortcut                                             | purpose                     |
| ---------------------------------------------------- | --------------------------- |
| <kbd>space</kbd> / <kbd>tab</kbd> / <kbd>right</kbd> | next animation or slide     |
| <kbd>left</kbd>                                      | previous animation or slide |
| <kbd>up</kbd>                                        | previous slide              |
| <kbd>down</kbd>                                      | next slide                  |

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

<Button>Button</Button>

<Note>Note</Note>

---

# Learn More

[Documentation](https://sli.dev) / [GitHub Repository](https://github.com/slidevjs/slidev)
