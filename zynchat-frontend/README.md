# ZynChat Frontend

ZynChat is a neon-styled messaging interface that highlights a glassmorphism shell, immersive cyan + purple tsParticles background, and responsive layout. This repository contains only the static frontend so you can preview a luxurious messaging experience without any backend dependencies.

## Project Structure
```
zynchat-frontend/
├── index.html        # Landing hero
├── login.html        # Authentication entry
├── signup.html       # Account creation
├── chat.html         # Messaging view
├── profile.html      # Profile editor
├── settings.html     # Preferences hub
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── particles.js
│       └── app.js
└── README.md
```

## Running Locally
1. Clone or download this folder.
2. Open any of the `.html` files (start with `index.html`) directly in your browser.
3. No build tools, servers, or backend services are required—everything is vanilla HTML + CSS + JS.

## Pages Overview
- **Landing (`index.html`)** – Hero callout with neon CTAs for Get Started and Preview App.
- **Login (`login.html`)** – Glassmorphic login form with email + password fields.
- **Signup (`signup.html`)** – Account creation card with username, email, password, and confirmation.
- **Chat (`chat.html`)** – Full messaging UI featuring conversation header, sample messages, and input bar.
- **Profile (`profile.html`)** – Avatar preview, personal fields, timezone selector, and save/discard actions.
- **Settings (`settings.html`)** – Theme selector, density picker, notification toggle, and security mode control.

Every page automatically loads the neon tsParticles background (`assets/js/particles.js`), glow overlay, shared sidebar, and main content pane, ensuring visual consistency across the entire experience.
