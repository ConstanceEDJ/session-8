var app = new Vue({
  el: '#app',
  data: {
    firstName: "Constance",
    lastName: "Daire",
    description: "Etudiante en journalisme à Sciences Po",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/005/0b7/264/277ebec.jpg",
    twitter: "constance_daire",
    github: "ConstanceEDJ",
    mail: "constance.daire@gmail.com",
    experiences: [{
      dateBegin: "Juin 2017",
      dateEnd: "Juillet 2017",
      name: "Libération",
      title: "Stagiaire",
      logo: "http://s1.libe.com/newsite/images/logo-libe.svg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }, {
      dateBegin: "Avril 2017",
      dateEnd: "Mai 2017",
      name: "Neon",
      title: "Stagiaire",
      logo: "http://www.neonmag.fr/content/uploads/2016/06/cropped-LOGO-NEON-NOIR-2016-page-001.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }, {
      dateBegin: "Décembre 2016",
      dateEnd: "Mars 2017",
      name: "L'Orient-Le Jour",
      title: "Stagiaire",
      logo: "https://s.olj.me/interface/french/images/logo_large.png?",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }],
    formations: [{
      dateBegin: "2015",
      dateEnd: false,
      name: "Master Journalisme",
      logo: "http://www.sciencespo.fr/sites/default/files/logo%20site.jpg",
      width: 30,
      university: "Sciences Po Paris"
    }, {
      dateBegin: "2012",
      dateEnd: false,
      name: "Bachelor Sciences Politiques",
      university: "Sciences Po Paris"
    }],
    languages: ["Anglais", "Espagnol"],
    skills: ["Adobe Photoshop", "Adobe Premiere",]
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
})