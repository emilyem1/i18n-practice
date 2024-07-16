
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome to the show!',
      blurb: 'Today you will be witness to a magical event, get excited.',
      ending: 'So what are you waiting for, get inside!'
    },
    fr: {
      welcome: 'Bienvenue au salon!',
      blurb: "Aujourd'hui, tu seras témoin d'un événement magique, réjouis-toi.",
      ending: "Alors, qu'attendez-vous pour entrer!"
    },
    es: {
      welcome: "¡Bienvenue au salon!",
      blurb: "Hoy serás testigo de un acontecimiento mágico, emociónate.",
      ending: "Así que a qué espera, ¡entre!"
    },
    ko: {
      welcome: "쇼에 오신 것을 환영합니다!",
      blurb: "오늘 여러분은 마법 같은 이벤트의 목격자가 될 것입니다.",
      ending: "그러니 뭘 망설이고 계십니까, 안으로 들어가세요!"
    }
  },
}));
