export interface MenuItem {
  href: string;
  label: string;
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
}

export const menuData: MenuSection[] = [
  {
    title: 'Learn',
    items: [
      { href: '/DeveloperPortal', label: 'DeveloperPortal' },
      { href: 'https://kanari.site/api', label: 'API Reference' },
      { href: 'https://kanari.site/tutorials', label: 'Tutorials' }
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
    mobileBorderColor: 'border-purple-500/30'
  },
  {
    title: 'Build',
    items: [
      { href: 'https://docs.kanari.site/', label: 'Documentation' },
      { href: 'https://kanari.site/build/tools', label: 'Tools' },
      { href: 'https://kanari.site/build/resources', label: 'Resources' }
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
    mobileBorderColor: 'border-blue-500/30'
  },
  {
    title: 'Connect',
    items: [
      { href: '/connect/community', label: 'Community Hub' },
    ],
    titleColor: {
      light: 'text-purple-600',
      dark: 'text-purple-300'
    },
    gradientColors: {
      light: 'bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500',
      dark: 'bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400'
    },
    mobileColor: 'text-indigo-500',
    mobileBorderColor: 'border-indigo-500/30'
  }
];
