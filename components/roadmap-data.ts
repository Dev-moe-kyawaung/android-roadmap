export type Track = "foundations" | "architecture" | "advanced" | "growth";

export type Skill = {
  id: string;
  category: Track;
  name: string;
  shortDescription: string;
  example: string;
  junior: string;
  senior: string;
  weight: number;
};

export const tracks: { id: Track; title: string; description: string }[] = [
  {
    id: "foundations",
    title: "Foundations",
    description: "Kotlin, Compose, and Lifecycle fundamentals for day-to-day Android work.",
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "MVVM/MVI, Hilt, and Clean Architecture for maintainable production apps.",
  },
  {
    id: "advanced",
    title: "Advanced Engineering",
    description: "KMP, on-device AI, Macrobenchmark, and performance ownership.",
  },
  {
    id: "growth",
    title: "Professional Growth",
    description: "Testing, CI/CD, mentorship, and team-level engineering maturity.",
  },
];

export const skills: Skill[] = [
  {
    id: "kotlin",
    category: "foundations",
    name: "Kotlin",
    shortDescription: "Idiomatic Kotlin for Android app logic.",
    example: "Build a feature with coroutines, sealed UI state, and null-safe APIs.",
    junior: "Write syntax correctly and use coroutines safely.",
    senior: "Choose the right abstraction, scope concurrency correctly, and reduce accidental complexity.",
    weight: 1,
  },
  {
    id: "compose",
    category: "foundations",
    name: "Jetpack Compose",
    shortDescription: "Declarative UI, state, and recomposition.",
    example: "Ship a responsive profile screen with state hoisting and animated transitions.",
    junior: "Create screens with basic state and Material components.",
    senior: "Control recomposition, manage state lifecycles, and optimize complex UI flows.",
    weight: 1,
  },
  {
    id: "lifecycle",
    category: "foundations",
    name: "Lifecycle",
    shortDescription: "State survival and lifecycle-aware behavior.",
    example: "Prevent duplicated collectors when a screen returns from background.",
    junior: "Understand activity/composable lifecycle events.",
    senior: "Use lifecycle-aware collection, avoid leaks, and preserve UI state correctly.",
    weight: 1,
  },
  {
    id: "mvvm",
    category: "architecture",
    name: "MVVM / MVI",
    shortDescription: "State-driven architecture and unidirectional flow.",
    example: "Model a search screen with clear events, state, and side effects.",
    junior: "Separate UI from business logic.",
    senior: "Design state machines that scale and remain debuggable.",
    weight: 2,
  },
  {
    id: "hilt",
    category: "architecture",
    name: "Hilt",
    shortDescription: "Dependency injection for Android apps.",
    example: "Inject repositories and replace them with fakes in tests.",
    junior: "Use Hilt to wire dependencies.",
    senior: "Design scopes and modules to support modular, testable systems.",
    weight: 2,
  },
  {
    id: "clean",
    category: "architecture",
    name: "Clean Architecture",
    shortDescription: "Boundaries, use cases, and dependency direction.",
    example: "Keep business rules independent from Compose and Android framework code.",
    junior: "Know repository and use-case layers.",
    senior: "Draw boundaries that survive team growth and product change.",
    weight: 2,
  },
  {
    id: "kmp",
    category: "advanced",
    name: "KMP",
    shortDescription: "Shared business logic across platforms.",
    example: "Reuse validation and networking in Android and iOS targets.",
    junior: "Understand what code can be shared.",
    senior: "Structure shared modules for scale, maintainability, and platform-specific escape hatches.",
    weight: 3,
  },
  {
    id: "ai",
    category: "advanced",
    name: "On-device AI",
    shortDescription: "Private, low-latency intelligence on the device.",
    example: "Run offline text classification inside a support workflow.",
    junior: "Understand the use cases and limitations.",
    senior: "Balance model size, latency, privacy, and UX tradeoffs.",
    weight: 3,
  },
  {
    id: "macrobenchmark",
    category: "advanced",
    name: "Macrobenchmark",
    shortDescription: "Measure startup, scroll, and jank regressions.",
    example: "Track cold-start time before and after a startup optimization.",
    junior: "Run benchmarks and read results.",
    senior: "Create repeatable performance gates in CI and act on regressions.",
    weight: 3,
  },
  {
    id: "performance",
    category: "advanced",
    name: "Performance",
    shortDescription: "Memory, rendering, startup, and battery discipline.",
    example: "Fix a slow feed by reducing overdraw and unnecessary recomposition.",
    junior: "Notice when an app feels slow.",
    senior: "Diagnose bottlenecks using traces, benchmarks, and profiling data.",
    weight: 3,
  },
  {
    id: "testing",
    category: "growth",
    name: "Testing",
    shortDescription: "Unit, UI, and integration confidence.",
    example: "Cover ViewModel logic and Compose behavior with stable tests.",
    junior: "Write basic tests for small units.",
    senior: "Build a test pyramid and keep suites reliable in CI.",
    weight: 2,
  },
  {
    id: "cicd",
    category: "growth",
    name: "CI / CD",
    shortDescription: "Automated build, test, and delivery.",
    example: "Run Gradle tests on pull requests and distribute QA builds automatically.",
    junior: "Understand what a pipeline does.",
    senior: "Design release-safe pipelines with signing, caching, and fast feedback.",
    weight: 2,
  },
  {
    id: "mentorship",
    category: "growth",
    name: "Mentorship",
    shortDescription: "Team communication and engineering leadership.",
    example: "Pair with a junior engineer on a feature and review the design together.",
    junior: "Ask good questions and document your work.",
    senior: "Raise team quality through reviews, guidance, and technical alignment.",
    weight: 2,
  },
];
