// globalState.js
document.addEventListener('alpine:init', () => {
    Alpine.store('global', {
      selectedTeam: null,
      teamColors: {
        warriors: { DEFAULT: '#1D428A', secondary: '#FFC72C', logo: '/src/assets/Images/Currylogo.webp' },
        'mclaren-2024': { DEFAULT: '#FF8700', secondary: '#000000', logo: '/src/assets/Images/Landologo.webp' },
        'malboro-mclaren': { DEFAULT: '#FF0000', secondary: '#FFFFFF', logo: '/src/assets/Images/Sennalogo.webp' },
        'hakkinen-mclaren': { DEFAULT: '#C0C0C0', secondary: '#000000', logo: '/src/assets/Images/Mikalogo.webp' }
      }
    });
  });