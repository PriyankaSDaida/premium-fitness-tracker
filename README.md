# Premium Fitness Tracker

A premium, high-performance fitness tracking application built with **Next.js** and **Vanilla CSS**. This project features a visually stunning, glassmorphic dark theme, interactive activity rings, and a comprehensive workout logging system designed to provide users with a delightful and motivating experience.

![Dashboard Preview](./public/dashboard-preview.png)

## ✨ Features

- **Dynamic & Interactive Dashboard**: 
  - **Activity Rings**: SVG-based animated progress rings for daily goals (Move, Exercise, Stand).
  - **Daily Stats**: Interactive cards displaying Steps, Heart Rate, Water Intake, and Sleep.
  - **Quick Actions**: Log workouts, water, and sleep directly from the dashboard with intuitive modals.
  - **Customization**: Toggle "Edit Layout" mode to visualize widget arrangement.
- **Workout Tracking**:
  - **Exercise Library**: Curated list of exercises with muscle group tags.
  - **Activity History**: Detailed log of recent workouts with duration and calorie stats.
- **Premium UX/UI**:
  - **Dark Mode**: Deep, elegant color palette with vibrant gradients.
  - **Glassmorphism**: Translucent panels and blurs for a modern aesthetic.
  - **Micro-animations**: Smooth entrance animations and hover effects.
  - **Responsive Design**: Flawless experience across mobile, tablet, and desktop.

## 🛠 Tech Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS (CSS Modules & Variables)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Outfit](https://fonts.google.com/specimen/Outfit) (via `next/font`)

## 🏗 Architecture

The application follows a component-based architecture optimized for performance and maintainability.

```mermaid
graph TD
    User[User] -->|Visits| App[Next.js App]
    
    subgraph "Core Layout"
        App --> Sidebar[Sidebar Navigation]
        App --> Layout[Layout Wrapper]
    end

    subgraph "Pages"
        Layout --> Dashboard[Dashboard Page]
        Layout --> Workouts[Workouts Page]
    end

    subgraph "Dashboard Components"
        Dashboard --> ActivityRings[Activity Rings]
        Dashboard --> StatCards[Stat Cards]
        Dashboard --> HealthCharts[Health Charts]
        Dashboard --> Modals[Log Modals]
    end

    subgraph "Workout Components"
        Workouts --> WorkoutList[Workout Log]
        Workouts --> ExerciseLib[Exercise Library]
    end

    subgraph "Design System"
        Sidebar -.-> CSS[Global CSS Variables]
        ActivityRings -.-> CSS
        StatCards -.-> CSS
        Modals -.-> CSS
    end
```

### 🧩 Architecture Overview

The **Premium Fitness Tracker** is architected as a **Next.js 15** application leveraging the **App Router** for efficient routing and server-side rendering capabilities.

-   **Data Flow**: The application uses a unidirectional data flow. The `Dashboard` page serves as the connection point (container), managing state for modals and data distribution to child components like `ActivityRings` and `StatCards`.
-   **Component Design**:
    -   **Atomic Components**: Small, reusable UI elements (e.g., `ActivityRing`, `StatCard`) are built to be stateless and presentational.
    -   **Layout Handling**: A persistent `Sidebar` and `LayoutWrapper` ensure navigation remains consistent across page transitions.
    -   **Modals**: The `LogModal` component is implemented as a portal-like overlay, allowing users to interact with the application without leaving the current context.
-   **Styling Strategy**: We utilize **CSS Modules** for component-level style isolation, combined with **Global CSS Variables** for theming. This ensures the "Premium Dark Mode" is consistent and easily maintainable across the entire application.


## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone git@github.com:PriyankaSDaida/premium-fitness-tracker.git
   cd premium-fitness-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
