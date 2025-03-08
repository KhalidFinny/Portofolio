// globalState.js
document.addEventListener('alpine:init', () => {
    Alpine.store('global', {
      selectedTeam: null,
      teamColors: {
        warriors: { DEFAULT: '#1D428A', secondary: '#FFC72C', logo: '/Images/Currylogo.webp' },
        'mclaren-2024': { DEFAULT: '#FF8700', secondary: '#000000', logo: '/Images/Landologo.webp' },
        'malboro-mclaren': { DEFAULT: '#FF0000', secondary: '#FFFFFF', logo: '/Images/Sennalogo.webp' },
        'hakkinen-mclaren': { DEFAULT: '#C0C0C0', secondary: '#000000', logo: '/Images/Mikalogo.webp' }
      }
    });
  });