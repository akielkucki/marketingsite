// projectData.js - Project data storage
window.projects = {
    1: {
        id: 1,
        title: "Modern E-commerce Solution",
        category: "E-commerce Platform",
        description: "Complete redesign and development of high-performance e-commerce platform with custom checkout flow, inventory management, and mobile optimization.",
        longDescription: "This comprehensive e-commerce solution was built from the ground up to address the client's need for a modern, scalable online store. The project involved complete redesign of the user experience, implementation of advanced inventory management systems, and integration of multiple payment gateways. The result was a 285% increase in conversion rates and significantly improved user engagement.",
        image: "/api/placeholder/800/600",
        gallery: [
            "/api/placeholder/800/600",
            "/api/placeholder/800/600",
            "/api/placeholder/800/600"
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "AWS"],
        features: [
            "Custom checkout flow optimization",
            "Real-time inventory management",
            "Mobile-first responsive design",
            "Advanced SEO optimization",
            "Payment gateway integration",
            "Admin dashboard with analytics"
        ],
        results: {
            conversionIncrease: "285%",
            loadTimeImprovement: "60%",
            mobileEngagement: "340%",
            customerSatisfaction: "95%"
        },
        duration: "4 months",
        client: "TechStore Inc.",
        year: "2024",
        liveUrl: "https://example-store.com",
        githubUrl: "https://github.com/example/ecommerce"
    },
    2: {
        id: 2,
        title: "Professional Services Site",
        category: "Corporate Website",
        description: "Brand refresh with lead-optimized design and integrated quote generation system.",
        longDescription: "A complete digital transformation for a professional services company, featuring modern design principles, automated lead generation systems, and streamlined client onboarding processes. The new website incorporates advanced analytics and conversion optimization techniques.",
        image: "/api/placeholder/800/600",
        gallery: [
            "/api/placeholder/800/600",
            "/api/placeholder/800/600"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
        features: [
            "Automated quote generation",
            "Lead capture optimization",
            "Content management system",
            "Client portal integration",
            "SEO-optimized architecture",
            "Performance monitoring"
        ],
        results: {
            leadIncrease: "150%",
            bounceRateReduction: "45%",
            pageLoadSpeed: "3x faster",
            clientSatisfaction: "98%"
        },
        duration: "2 months",
        client: "Professional Services Co.",
        year: "2024",
        liveUrl: "https://example-services.com",
        githubUrl: null
    },
    3: {
        id: 3,
        title: "SaaS Dashboard Platform",
        category: "Web Application",
        description: "Enterprise-grade dashboard with real-time analytics, user management, and API integrations.",
        longDescription: "A sophisticated SaaS platform designed for enterprise clients, featuring comprehensive analytics, user role management, and seamless third-party integrations. The platform handles millions of data points daily while maintaining optimal performance.",
        image: "/api/placeholder/800/600",
        gallery: [
            "/api/placeholder/800/600",
            "/api/placeholder/800/600",
            "/api/placeholder/800/600",
            "/api/placeholder/800/600"
        ],
        technologies: ["Vue.js", "Laravel", "Redis", "Docker", "AWS"],
        features: [
            "Real-time data visualization",
            "Advanced user role management",
            "API rate limiting and security",
            "Automated reporting system",
            "Multi-tenant architecture",
            "Enterprise SSO integration"
        ],
        results: {
            userAdoption: "92%",
            dataProcessing: "10M+ daily",
            uptime: "99.9%",
            clientRetention: "96%"
        },
        duration: "6 months",
        client: "Enterprise Corp.",
        year: "2023",
        liveUrl: "https://example-saas.com",
        githubUrl: "https://github.com/example/saas-platform"
    }
};