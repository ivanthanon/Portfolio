export type Locale = "en" | "es";

export type TranslationKeys = {
  nav: { about: string; experience: string; projects: string; skills: string; contact: string };
  hero: {
    greeting: string;
    name: string;
    role: string;
    craftsperson: string;
    tagline: string;
    cta: string;
    resume: string;
    downloadCv: string;
  };
  about: {
    title: string;
    intro: string;
    blocks: { title: string; description: string }[];
    closing: string;
  };
  experience: {
    title: string;
    roles: {
      company: string;
      title: string;
      period: string;
      highlights: string[];
    }[];
  };
  projects: {
    title: string;
    featured: {
      name: string;
      description: string;
      tags: string[];
      link: string;
      cta: string;
    };
  };
  skills: {
    title: string;
    categories: { name: string; items: string[] }[];
  };
  contact: {
    title: string;
    description: string;
    email: string;
    linkedin: string;
    github: string;
  };
  footer: { madeWith: string; rights: string };
  langSwitch: string;
};

const en: TranslationKeys = {
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    greeting: "Hello, I'm",
    name: "Iván Thanon Moreno",
    role: "Backend Software Engineer",
    craftsperson: "XP · Software Craftsmanship · Lean · TDD · DDD · CQRS · Hexagonal Architecture · CI/CD",
    tagline:
      "Building reliable, well-crafted software with a product mindset. Passionate about XP, TDD, Clean Architecture, and helping teams deliver real value.",
    cta: "Let's Talk",
    resume: "Resume",
    downloadCv: "Download CV",
  },
  about: {
    title: "About Me",
    intro:
      "Software Craftsperson with 3+ years of experience, a product-oriented mindset and a solid software engineering foundation. My approach bridges technical excellence with Lean principles: I focus on maximizing delivered value while minimizing waste, always iterating based on real-world feedback.",
    blocks: [
      {
        title: "🛠️ Technical Approach",
        description:
          "I am a strong advocate of the Outside-In TDD school, combined with a robust testing strategy that ensures confidence in every release (E2E, unit, integration, contract, smoke testing, etc.). Furthermore, I thrive in environments that practice true CI/CD through Feature Flags and Parallel Change, completely decoupling deployment from feature releasing.",
      },
      {
        title: "🧠 Mindset & Proactivity",
        description:
          "I am highly self-driven and deeply committed to continuous improvement. When a production error occurs, my immediate instinct is not just to fix it, but to analyze the root cause by asking: How could we have prevented this? How could we have caught it sooner? From there, I proactively propose enhancements to monitoring, alerting, or testing strategies to build increasingly resilient systems.",
      },
      {
        title: "🚀 The Human Element",
        description:
          "I enjoy enabling others and sharing knowledge to propel both the team and the company forward. I maintain effective communication with end-users and stakeholders through product discovery sessions, driving a cross-functional impact on both the product and the engineering culture.",
      },
      {
        title: "📚 Continuous Learning",
        description:
          "For me, continuous learning is non-negotiable: in software, to stop learning is to become professionally obsolete. I invest a portion of my free time in staying ahead of the curve through technical books, articles, and community events.",
      },
    ],
    closing:
      "If you want to exchange ideas about software craftsmanship, architecture, or simply connect, feel free to reach out!",
  },
  experience: {
    title: "Experience",
    roles: [
      {
        company: "AIDA",
        title: "Backend Software Engineer",
        period: "Jul 2025 — Present · 1 yr 2 mo",
        highlights: [
          "Developed product-oriented solutions for the automotive industry, focusing on warranties and campaigns for clients such as Volkswagen, Hyundai, Toyota, Renault and Citroën, managing an annual business value of €500k.",
          "Enhanced CI/CD pipelines, cutting execution times by 40% when handling transient errors.",
          "Actively participate in the testing strategy based on Hexagonal Architecture covering E2E, integration, contract, unit, and smoke testing.",
          "Contributed, as part of a 7-person team, to implementing a CI/CD workflow using Feature Flags and Parallel Change.",
          "Delivered technical training and provided mentorship to junior profiles to ensure a smooth onboarding process.",
          "Translated key engineering initiatives for the team, such as implementing system resilience practices and preparing software artifacts for Kubernetes environments with ArgoCD.",
          "Implemented full-stack observability across artifacts using the LGTM stack (Loki, Grafana, Tempo, Mimir), lowering the Mean Time To Resolution (MTTR) and preventing critical production downtime.",
          "Adopt AI tools to amplify productivity and capabilities using GitHub Copilot + MCPs.",
          "Led discovery meetings with end-users to deeply understand their needs and align them with product development"
        ],
      },
      {
        company: "AIDA",
        title: "Associate Backend Engineer",
        period: "Oct 2023 — Jul 2025 · 1 yr 10 mo",
        highlights: [
          "Developed the IMS software for Salvador Caetano Group (Toyota & Lexus Portugal), tailoring the solution to the brand's specific needs, such as integration with dealership and factory systems.",
          "Migrated data from the legacy system to the new microservices-based system.",
          "Resolved multiple bugs in the IMS for Renault Hungary by introducing regression tests.",
          "Developed a Change Request solution that impacted 30% of Renault Hungary's billing cost"
        ],
      },
    ],
  },
  projects: {
    title: "Featured Project",
    featured: {
      name: "HomeCareApi",
      description:
        "REST API for managing home care employees. Built with NestJS + TypeScript, following Domain-Driven Design (DDD) and Hexagonal Architecture (Ports & Adapters) principles.",
      tags: ["TypeScript", "NestJS", "Node.js", "REST API", "Testing"],
      link: "https://github.com/ivanthanon/HomeCareApi",
      cta: "View Repository",
    },
  },
  skills: {
    title: "Tech Stack & Skills",
    categories: [
      {
        name: "Backend",
        items: ["C# / .NET", "Java / Spring Boot", "TypeScript / NestJS", "SQLServer", "MySQL", "PostgreSQL", "Entity Framework"],
      },
      {
        name: "Architecture & Design",
        items: ["Hexagonal Architecture", "TDD", "Event Driven Architecture", "Microservices", "DDD", "CQRS", "Clean Code", "SOLID", "Design Patterns"],
      },
      {
        name: "Testing",
        items: ["Unit", "Integration", "Contract", "Smoke", "E2E", "TestContainers"],
      },
      {
        name: "DevOps & Tools",
        items: ["GitHub Actions", "Docker", "Kubernetes", "Grafana", "Azure DevOps", "ArgoCD"],
      },
      {
        name: "Practices & Methodologies",
        items: ["XP", "Lean", "Software Craftsmanship", "Pair Programming", "CI/CD", "Trunk-Based Development", "Scrum", "Agile"],
      },
    ],
  },
  contact: {
    title: "Let's Connect",
    description:
      "Interested in software architecture, craftsmanship, or just want to chat about building better software? I'm always open to meaningful conversations.",
    email: "Email Me",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: {
    madeWith: "Crafted with care",
    rights: "All rights reserved",
  },
  langSwitch: "ES",
};

const es: TranslationKeys = {
  nav: {
    about: "Sobre Mí",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
  },
  hero: {
    greeting: "Hola, soy",
    name: "Iván Thanon Moreno",
    role: "Backend Software Engineer",
    craftsperson: "XP · Software Craftsmanship · Lean · TDD · DDD · CQRS · Arquitectura Hexagonal · CI/CD",
    tagline:
      "Construyendo software fiable y bien construido con mentalidad de producto. Apasionado por XP, TDD, Arquitectura Limpia y ayudando a equipos a generar valor real.",
    cta: "Hablemos",
    resume: "Currículum",
    downloadCv: "Descargar CV",
  },
  about: {
    title: "Sobre Mí",
    intro:
      "Software Craftsperson con más de 3 años de experiencia, mentalidad de producto y una base sólida de ingeniería de software. Mi enfoque conecta la excelencia técnica con principios Lean: me enfoco en maximizar el valor entregado mientras minimizo el desperdicio, iterando siempre en base a feedback del mundo real.",
    blocks: [
      {
        title: "🛠️ Enfoque Técnico",
        description:
          "Soy un firme defensor de la escuela TDD Outside-In, combinado con una estrategia de testing robusta que garantiza confianza en cada release (E2E, unit, integration, contract, smoke testing, etc.). Además, prospero en entornos que practican CI/CD real mediante Feature Flags y Parallel Change, desacoplando completamente el despliegue del lanzamiento de funcionalidades.",
      },
      {
        title: "🧠 Mentalidad y Proactividad",
        description:
          "Soy altamente autodisciplinado y profundamente comprometido con la mejora continua. Cuando ocurre un error en producción, mi instinto inmediato no es solo arreglarlo, sino analizar la causa raíz preguntando: ¿Cómo podríamos haberlo prevenido? ¿Cómo podríamos haberlo detectado antes? A partir de ahí, propongo proactivamente mejoras en monitoring, alerting o estrategias de testing para construir sistemas cada vez más resilientes.",
      },
      {
        title: "🚀 El Elemento Humano",
        description:
          "Disfruto habilitando a otros y compartiendo conocimiento para impulsar tanto al equipo como a la empresa. Mantengo una comunicación efectiva con usuarios finales y stakeholders a través de sesiones de product discovery, generando impacto transversal tanto en el producto como en la cultura de ingeniería.",
      },
      {
        title: "📚 Aprendizaje Continuo",
        description:
          "Para mí, el aprendizaje continuo es innegociable: en software, dejar de aprender es volverse obsoleto profesionalmente. Invierto una parte de mi tiempo libre en mantenerme a la vanguardia a través de libros técnicos, artículos y eventos comunitarios.",
      },
    ],
    closing:
      "Si quieres intercambiar ideas sobre software craftsmanship, arquitectura o simplemente conectar, ¡no dudes en escribirme!",
  },
  experience: {
    title: "Experiencia",
    roles: [
      {
        company: "AIDA",
        title: "Backend Software Engineer",
        period: "Jul 2025 — Actualidad · 1 año 2 meses",
        highlights: [
          "Desarrollé soluciones orientadas a producto para la industria automotriz, enfocándome en garantías y campañas para clientes como Volkswagen, Hyundai, Toyota, Renault y Citroën, gestionando un valor de negocio anual de 500K€.",
          "Mejoré los pipelines de CI/CD, reduciendo los tiempos de ejecución en un 40% al gestionar errores transitorios.",
          "Participo activamente en la estrategia de testing basada en Arquitectura Hexagonal cubriendo E2E, integración, contrato, unit y smoke testing.",
          "Contribuí, junto con un equipo de 7 personas, en la implementación de un flujo de CI/CD utilizando Feature Flags y Parallel Change.",
          "Impartí formación técnica y proporcioné mentoría a perfiles junior para garantizar un proceso de onboarding fluido.",
          "Traduje iniciativas clave de ingeniería para el equipo, como la implementación de prácticas de resiliencia de sistemas y la preparación de artefactos de software para entornos de Kubernetes con ArgoCD.",
          "Implementé observabilidad full-stack en los artefactos usando la pila LGTM (Loki, Grafana, Tempo, Mimir), reduciendo el Mean Time To Resolution (MTTR) y previniendo tiempos de inactividad críticos en producción.",
          "Adopté herramientas de IA para amplificar la productividad y capacidades usando GitHub Copilot + MCPs.",
          "Lideré reuniones de discovery con usuarios finales para comprender profundamente sus necesidades y alinearlas con el desarrollo del producto.",
        ],
      },
      {
        company: "AIDA",
        title: "Associate Backend Engineer",
        period: "Oct 2023 — Jul 2025 · 1 año 10 meses",
        highlights: [
          "Desarrollé el software IMS para el Grupo Salvador Caetano (Toyota y Lexus Portugal), adaptando la solución a las necesidades específicas de la marca, como la integración con sistemas de concesionarias y fábricas.",
          "Migré datos del sistema legacy al nuevo sistema basado en microservicios.",
          "Resolví múltiples bugs en el IMS para Renault Hungría introduciendo tests de regresión.",
          "Desarrollé una solución de Change Request que impactó en un 30% los costes de facturación de Renault Hungría.",
        ],
      },
    ],
  },
  projects: {
    title: "Proyecto Destacado",
    featured: {
      name: "HomeCareApi",
      description:
        "API REST para la gestión de empleados de cuidado en el hogar. Construida con NestJS + TypeScript, siguiendo los principios de Domain-Driven Design (DDD) y Arquitectura Hexagonal (Puertos y Adaptadores).",
      tags: ["TypeScript", "NestJS", "Node.js", "REST API", "Testing"],
      link: "https://github.com/ivanthanon/HomeCareApi",
      cta: "Ver Repositorio",
    },
  },
  skills: {
    title: "Tech Stack & Skills",
    categories: [
      {
        name: "Backend",
        items: ["C# / .NET", "Java / Spring Boot", "TypeScript / NestJS", "SQLServer", "MySQL", "PostgreSQL"],
      },
      {
        name: "Architecture & Design",
        items: ["Hexagonal Architecture", "DDD", "CQRS", "Clean Code", "SOLID", "Design Patterns"],
      },
      {
        name: "Testing & Quality",
        items: ["TDD", "Unit", "Integration", "Contract", "E2E", "TestContainers"],
      },
      {
        name: "DevOps & CI/CD",
        items: ["GitHub Actions", "Docker", "Kubernetes", "Feature Flags", "Grafana", "Azure DevOps", "ArgoCD"],
      },
      {
        name: "Practices & Methodologies",
        items: ["XP", "Lean", "Software Craftsmanship", "Pair Programming", "CI/CD", "Trunk-Based Development"],
      },
    ],
  },
  contact: {
    title: "Conectemos",
    description:
      "¿Te interesa la arquitectura de software, el craftsmanship o simplemente quieres charlar sobre cómo construir mejor software? Siempre abierto a conversaciones significativas.",
    email: "Envíame un Email",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: {
    madeWith: "Hecho con dedicación",
    rights: "Todos los derechos reservados",
  },
  langSwitch: "EN",
};

const translations: Record<Locale, TranslationKeys> = { en, es };

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale];
}
