function formatName(character) {
  return character ? `${character.firstname} ${character.lastname !== 'null' ? character.lastname : ''}` : '' // string template
}

function getImage(id) {
  if (!id) {
    return ''
  }
  return IMAGES[id].url
}

export {getImage, formatName}

const IMAGES = {
  "5e93b4a43af44260882e33b0": {
    // michael
    url: "https://imagenes.elpais.com/resizer/chKCbCF2vAsg-ocin7kw-Yq97zE=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/BGRBZZZN6LLKZRU6FHJ6DUDI6Y.jpg",
  },
  "5e93b4f03af44260882e33b1": {
    // jim
    url: "https://pbs.twimg.com/profile_images/1354062918615261185/xtEdQIWL_400x400.jpg"
  },
  "5e93b4fa3af44260882e33b2": {
    "firstname": "Dwight",
    "lastname": "Schrute",
    url: "https://http2.mlstatic.com/D_NQ_NP_821545-MLM47310875690_082021-O.jpg"
  },
  "5e93b50a3af44260882e33b3": {
    "firstname": "Pam",
    "lastname": "Beesly",
    url: "https://images.thebrag.com/tb/uploads/2020/02/PAMHEAD-768x437.jpg"
  },
  "5e93b5183af44260882e33b4": {
    "firstname": "Ryan",
    "lastname": "Howard",
    url: "https://vader.news/__export/1616206384907/sites/gadgets/img/2021/03/19/ryan_howard.jpg_1406542873.jpg"
  },
  "5e93b51e3af44260882e33b5": {
    "firstname": "Kelly",
    "lastname": "Kapoor",
    url: "https://images.entertainment.ie/uploads/2019/01/24110225/Kelly-Kapoor.jpg?w=640&h=384&q=high"
  },
  "5e93b52b3af44260882e33b6": {
    "firstname": "Angela",
    "lastname": "Martin",
    url: "https://www.ecartelera.com/images/sets/43800/43816.jpg"
  },
  "5e93b5323af44260882e33b7": {
    "firstname": "Kevin",
    "lastname": "Malone",
    url: "https://i.blogs.es/face7f/kevin1/840_560.jpg"
  },
  "5e93b53b3af44260882e33b8": {
    "firstname": "Oscar",
    "lastname": "Martinez",
    url: "https://ocweekly.com/wp-content/uploads/2018/11/6587089_oscar.jpg"
  },
  "5e93b5453af44260882e33b9": {
    "firstname": "Andy",
    "lastname": "Bernard",
    url: "https://pbs.twimg.com/media/Ei9400DXYAAnhB_.jpg"
  },
  "5e93b54d3af44260882e33ba": {
    "firstname": "Stanley",
    "lastname": "Hudson",
    url: "https://productplacementblog.com/wp-content/uploads/2019/06/Wegmans-Cola-Enjoyed-by-Leslie-David-Baker-Stanley-Hudson-in-The-Office.jpg"
  },
  "5e93b5583af44260882e33bb": {
    "firstname": "Phyllis",
    "lastname": "Lapin",
    url: "https://gcdn.lanetaneta.com/wp-content/uploads/2019/11/The-Office-10-citas-m%C3%A1s-relacionadas-de-Phyllis-ScreenRant.jpg"
  },
  "5e93b55f3af44260882e33bc": {
    "firstname": "Toby",
    "lastname": "Flenderson",
    url: "https://www.cultture.com/pics/2020/11/parques-y-recreos-contra-la-oficina-de-quien-es-el-saco-de-boxeo-mas-odiado-de-toby-o-de-jerry-0.jpg"
  },
  "5e93b5653af44260882e33bd": {
    "firstname": "Erin",
    "lastname": "Hannon",
    url: "https://gcdn.lanetaneta.com/wp-content/uploads/2019/06/La-oficina-10-citas-de-Erin-Hannon-que-representan-a-780x405.jpg"
  },
  "5e93b56d3af44260882e33be": {
    "firstname": "Gabe",
    "lastname": "Lewis",
    url: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/03/The-Office-Gabe-Lewis-crying.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5"
  },
  "5e93b5783af44260882e33bf": {
    "firstname": "Darryl",
    "lastname": "Philbin",
    url: "https://pbs.twimg.com/media/EgDhrKdX0AEIHGx.jpg"
  },
  "5e93b5813af44260882e33c0": {
    "firstname": "Creed",
    "lastname": "Bratton",
    url: "https://es.web.img2.acsta.net/r_1280_720/newsv7/18/04/04/17/58/5734902.jpg"
  },
  "5e93b58b3af44260882e33c1": {
    "firstname": "Jo",
    "lastname": "Bennett",
    url: "https://www.looper.com/img/gallery/the-truth-about-kathy-bates-on-the-office/intro-1590523541.jpg"
  },
  "5e93b5913af44260882e33c2": {
    "firstname": "Holly",
    "lastname": "Flax",
    url: "https://productplacementblog.com/wp-content/uploads/2019/06/HP-Monitor-Used-by-Amy-Ryan-Holly-Flax-in-The-Office-7.jpg"
  },
  "5e93b5983af44260882e33c3": {
    "firstname": "Jan",
    "lastname": "Levinson",
    url: "https://www.datocms-assets.com/151/1471782419-jan.png?w=500&fm=jpg"
  },
  "5e93b5a13af44260882e33c4": {
    "firstname": "Todd",
    "lastname": "Packer",
    url: "https://static2.srcdn.com/wordpress/wp-content/uploads/2021/01/S9E17-The-Farm-Cropped.jpg?q=50&fit=crop&w=740&h=370&dpr=1.5"
  },
  "5e93b5a73af44260882e33c5": {
    "firstname": "Charles",
    "lastname": "Minor",
    url: "https://64.media.tumblr.com/791ec0bac93aba167a670501f9a05139/32a6fe210d52f37b-8d/s640x960/93aab16178cad024dfeb6d42db308edaf9a75830.jpg"
  },
  "5e93b5ad3af44260882e33c6": {
    "firstname": "Deangelo",
    "lastname": "Vickers",
    url: "https://gcdn.lanetaneta.com/wp-content/uploads/2019/08/La-oficina-lo-que-le-pas%C3%B3-a-Deangelo-Vickers-de.jpg"
  },
  "5e93b5b63af44260882e33c7": {
    "firstname": "Josh",
    "lastname": "Porter",
    url: "https://helios-i.mashable.com/imagery/articles/03M1HID3MXQSfREGSF3dE3c/images-4.fit_lim.size_2000x.v1611706028.png"
  },
  "5e93b5bb3af44260882e33c8": {
    "firstname": "Ed",
    "lastname": "Truck",
    url: "https://cinematicos.net/wp-content/uploads/%C2%BFQue-paso-realmente-con-el-gerente-de-Dunder-Mifflin-Ed.jpg"
  },
  "5e93b5c53af44260882e33c9": {
    "firstname": "Hunter",
    "lastname": "null",
    url: "https://tvline.com/wp-content/uploads/2020/08/the-office-hunter.png?w=800"
  },
  "5e93b5d13af44260882e33ca": {
    "firstname": "David",
    "lastname": "Wallace",
    url: "https://pbs.twimg.com/media/Ep2NeFtW8AE_5Hm.jpg"
  }
}