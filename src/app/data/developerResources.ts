export interface DeveloperResource {
    id: string;
    title: string;
    description: string;
    url: string;
    icon: string;
    category: 'quick-start' | 'tools' | 'popular';
}

export const developerResources: DeveloperResource[] = [
    // Quick Start Resources
    {
        id: 'quick-start-guide',
        title: 'Quick Start Guide',
        description: 'Get up and running with Kanari Network in minutes with our comprehensive quick start guide and examples.',
        url: 'https://docs.kanari.site/quick-start',
        icon: 'lightning',
        category: 'quick-start'
    },
    {
        id: 'api-documentation',
        title: 'API Documentation',
        description: 'Explore our detailed API blockchain documentation with examples, endpoints, and integration guides.',
        url: 'https://docs.kanari.site/api',
        icon: 'document',
        category: 'quick-start'
    },
    {
        id: 'sdks-tools',
        title: 'SDKs & Tools',
        description: 'Access our developer tools and SDKs for multiple programming languages and platforms.',
        url: 'https://github.com/kanari-network/kanari-sdk',
        icon: 'tools',
        category: 'quick-start'
    },
    // Popular Resources
    {
        id: 'installation-guide',
        title: 'Installation Guide',
        description: 'Step-by-step guide to install and configure Kanari Network development environment.',
        url: 'https://docs.kanari.site/installation',
        icon: 'download',
        category: 'popular'
    },
    {
        id: 'api-reference',
        title: 'API Reference',
        description: 'Complete API documentation with examples, endpoints, and integration patterns.',
        url: 'https://docs.kanari.site/api-reference',
        icon: 'document',
        category: 'popular'
    },
    {
        id: 'best-practices',
        title: 'Best Practices',
        description: 'Learn about recommended practices, security guidelines, and optimization tips.',
        url: 'https://docs.kanari.site/best-practices',
        icon: 'check',
        category: 'popular'
    }
];

export const getResourcesByCategory = (category: DeveloperResource['category']) => {
    return developerResources.filter(resource => resource.category === category);
};
