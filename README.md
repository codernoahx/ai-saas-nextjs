# AI SaaS Next.js App

This project is a landing page for an AI SaaS product built with Next.js. It features a modern design, responsive layout, and optimized performance.

## Features

* **Modern UI:**  Clean and professional design built with Tailwind CSS and Framer Motion.
* **Responsive Design:** Adapts seamlessly to different screen sizes.
* **Optimized Performance:**  Leverages Next.js features like `next/font` for optimal font loading and rendering.
* **Component-Based Architecture:**  Organized into reusable components for maintainability and scalability.
* **Easy Deployment:** Ready for deployment on Vercel.


## Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/coder-nian/ai-saas-nextjs
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit the files.

## Project Structure

The project follows a standard Next.js structure:

* `app/page.tsx`: Defines the main landing page layout, importing and rendering various sections.
* `components/`: Contains reusable components. (Note: This folder isn't explicitly shown in the provided files but is implied by the structure.)
* `sections/`: Contains larger sections of the landing page (e.g., Header, Hero, Pricing).  These likely reside within the `components` directory or a similar structure.
* `public/`: Contains static assets.  (Inferring its existence due to the project setup)
* `styles/`: Contains global styles (e.g. `globals.css`). (Again, implied but not directly shown in the code sample)
* `layout.tsx`: Defines the overall layout of the app including font imports and application of Tailwind styles.


## Technologies Used

* **Next.js:**  A React framework for building server-side rendered and static websites.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **Framer Motion:**  A production-ready motion library for React.
* **DM Sans (Google Font):** A clean and modern font for optimal readability.
* **clsx:** A utility for conditionally joining classNames.
* **tailwind-merge:** Utility for merging Tailwind CSS classes.


## Customization

You can customize the landing page by modifying the components and styles.  Key files to modify include:

* `sections/*`: Edit the content and styling of individual sections.
* `globals.css`:  Update global styles.
* `layout.tsx`:  Change the overall layout and font.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.