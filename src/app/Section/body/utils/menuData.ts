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
      light: 'text-blue-700',
      dark: 'text-blue-300'
    },
    gradientColors: {
      light: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600',
      dark: 'bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500'
    },
    mobileColor: 'text-blue-600',
    mobileBorderColor: 'border-blue-600/30',
    hoverEffect: 'hover:bg-blue-100 dark:hover:bg-blue-800/20'
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
      light: 'text-indigo-700',
      dark: 'text-indigo-300'
    },
    gradientColors: {
      light: 'bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600',
      dark: 'bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500'
    },
    mobileColor: 'text-indigo-600',
    mobileBorderColor: 'border-indigo-600/30',
    hoverEffect: 'hover:bg-indigo-100 dark:hover:bg-indigo-800/20'
  },
  // {
  //   title: 'Connect',
  //   items: [
  //     {
  //       href: '/connect/ecosystem',
  //       label: 'Ecosystem Hub',
  //       icon: '🌐',
  //       description: 'Join our ecosystem'
  //     },
  //     {
  //       href: '/connect/community',
  //       label: 'Community Hub',
  //       icon: '🤝',
  //       description: 'Join our community'
  //     },
  //   ],
  //   titleColor: {
  //     light: 'text-blue-600',
  //     dark: 'text-blue-300'
  //   },
  //   gradientColors: {
  //     light: 'bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500',
  //     dark: 'bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400'
  //   },
  //   mobileColor: 'text-blue-500',
  //   mobileBorderColor: 'border-blue-500/30',
  //   hoverEffect: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
  // }
];
