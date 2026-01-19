# IMAGIO: AI Image Generator (Next.js + RapidAPI)

A simple AI image generation web app built with **Next.js** that takes a user text prompt and generates a single image using an AI image generation API via **RapidAPI**.

This project is currently an **MVP (Minimum Viable Product)** and will be improved incrementally.

---

## Features

- Text-based prompt input  
- Generates a single AI image per prompt  
- Loading state while the image is being generated  

---

## 🛠️ Tech Stack

- **Next.js (App Router)**
- **React**
- **RapidAPI** (AI image generation API)
- **JavaScript / TypeScript**
- **CSS / Tailwind / custom styles**

---

## ![RocketGIF](https://github.com/user-attachments/assets/df56f85a-1817-41ff-9297-a729ae6bc8b8) Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Saloni581/ImagIO.git
cd ImagIO

````

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Add environment variables

Create a `.env.local` file in the root directory and add:

```env
RAPIDAPI_KEY=your_api_key_here
```

> ⚠️ Make sure not to commit your API key.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Current Limitations

* Generates only **one image per prompt**
* Not fully responsive yet
* No image download option
* Not deployed yet
* Error handling for failed or invalid API requests  

These are planned improvements.

---

## Roadmap for Future Improvements

* Deploy the application once the UI is more polished
* Make the UI fully responsive (mobile & tablet)
* Add image download functionality
* Allow generating multiple images per prompt
* Improve overall UI/UX
* Handle Errors for failed or invalid API requests  

---

## 📄 Notes

This project was built to practice:

* Working with third-party APIs
* Handling async operations
* Managing loading and error states
* Building an MVP with Next.js

---

## 📜 License

This project is for learning and personal use.
