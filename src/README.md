
# 🎨 Dynamic Vue 3 Color Blob Dashboard

An interactive, responsive single-page web application built with **Vue 3 (Composition API)** and **Vite**. The application communicates with an external REST API to fetch live color data, tracks user exploration history dynamically, and features runtime design logic to guarantee perfect UI readability.

---

## 🚀 Key Features Covered & Mastered

During the development of this application, I tackled and mastered several core concepts of the modern Vue framework:

* **Component Communication (Props & Custom Emits):** Built a reusable decoupled child component (`Button.vue`) that receives design data down via `props` and signals state modifications back up to the parent layout using custom `emits`.
* **Conditional Rendering (`v-if` / `v-else`):** Implemented an asynchronous network lifecycle tracking mechanism (`isLoading`) that dynamically switches user-facing typography and interface components while fetching external data.
* **List Rendering (`v-for`):** Maintained an active application history layout. By utilizing reactive arrays and loop mutations (`.unshift()`), the UI dynamically renders real-time tracking swatches chronologically.
* **Computed Properties (`computed`):** Created a smart luminance calculation function. It monitors the active background hex code at runtime, parses its RGB channels, and automatically flips text color between high-contrast black and white for accessibility.
* **Lifecycle Hooks (`onMounted`):** Integrated automatic component initialization. The application leverages the mounting phase to fetch live background variations immediately when the document object model lands on the browser screen.

---

## 🛠️ Tech Stack & Architecture

* **Framework:** Vue 3 (Script Setup Syntax)
* **Build Tool:** Vite
* **Styling:** Scoped CSS (featuring organic CSS border-radius blob layout structures and smooth transitions)
* **Data Source:** [The Color API](https://www.thecolorapi.com/) (External REST API)

---

## 💻 How to Run the Project Locally

### 1. Clone the repository
```bash
git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
cd your-repository-name
2. Install dependencies
Bash
npm install
3. Start the Vite development server
Bash
npm run dev
Open your browser to the local address displayed in your terminal (typically http://localhost:5173) to interact with the application.
