export interface MenuItem {
  href: string;
  label: string;
  icon?: string;
  description?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
  titleColor: {
    light: string;
    dark: string;
  };
  gradientColors: {
    light: string;
    dark: string;
  };
  mobileColor: string;
  mobileBorderColor: string;
  hoverEffect: string;
}

export const menuData: MenuSection[] = [
  {
    title: 'Learn',
    items: [
      { 
        href: '/DeveloperPortal', 
        label: 'Developer Portal',
        icon: '🚀',
        description: 'Build on Kanari Network'
      },
      { 
        href: 'https://kanari.site/api', 
        label: 'API Reference',
        icon: '📚',
        description: 'Complete API documentation'
      },
      { 
        href: 'https://kanari.site/tutorials', 
        label: 'Tutorials',
        icon: '🎓',
        description: 'Step-by-step guides'
      }
    ],
    titleColor: {
      light: 'text-red-600',
      dark: 'text-red-300'
    },
    gradientColors: {
      light: 'bg-gradient-to-r from-red-500 via-purple-500 to-red-500',
      dark: 'bg-gradient-to-r from-red-400 via-purple-400 to-red-400'
    },
    mobileColor: 'text-red-500',
    mobileBorderColor: 'border-red-500/30',
    hoverEffect: 'hover:bg-red-50 dark:hover:bg-red-900/20'
  },
  {
    title: 'Build',
    items: [
      { 
        href: 'https://docs.kanari.site/', 
        label: 'Documentation',
        icon: '📖',
        description: 'Technical documentation'
      },
      { 
        href: 'https://kanari.site/build/tools', 
        label: 'Tools',
        icon: '🛠️',
        description: 'Development tools'
      },
      { 
        href: 'https://kanari.site/build/resources', 
        label: 'Resources',
        icon: '💎',
        description: 'Additional resources'
      }
    ],
    titleColor: {
      light: 'text-purple-600',
      dark: 'text-purple-300'
    },
    gradientColors: {
      light: 'bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500',
      dark: 'bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400'
    },
    mobileColor: 'text-purple-500',
    mobileBorderColor: 'border-purple-500/30',
    hoverEffect: 'hover:bg-purple-50 dark:hover:bg-purple-900/20'
  },
  {
    title: 'Connect',
    items: [
      { 
        href: '/connect/community', 
        label: 'Community Hub',
        icon: '🌐',
        description: 'Join our community'
      },
    ],
    titleColor: {
      light: 'text-blue-600',
      dark: 'text-blue-300'
    },
    gradientColors: {
      light: 'bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500',
      dark: 'bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400'
    },
    mobileColor: 'text-blue-500',
    mobileBorderColor: 'border-blue-500/30',
    hoverEffect: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
  }
];
