function closedropdown(element) {
    let dropdownHeight = element.scrollHeight
    let elementTransition = element.style.transition
    element.style.transition = ''

    requestAnimationFrame(function () {
        element.style.height = dropdownHeight + 'px'
        element.style.transition = elementTransition

        requestAnimationFrame(function () {
            element.style.height = 0 + 'px'
        })
    })
    element.setAttribute('collapsed', 'true')
}

function opendropdown(element) {
    let dropdownHeight = element.scrollHeight
    element.style.height = dropdownHeight + 'px'
    element.addEventListener('transitioned', function (e) {
        element.removeEventListener('transitioned', arguments.callee)
        element.style.height = null
    })
    element.setAttribute('collapsed', 'false')
}

function content_in_index(load) {
    let number_1 = Math.floor(Math.random() * 3) + 1
    let number_2 = Math.floor(Math.random() * 3) + 1
    let item_1 = document.getElementById("mobile_index_item_1")
    let item_2 = document.getElementById("mobile_index_item_2")
    let blackholes = '<a href="black_holes.html"><div class="index_header"><p class="index_header_text chakrafont themetexttarget">Black holes</p></div></a>'
    let planets = '<a href="planets.html"><div class="index_header"><p class="index_header_text chakrafont themetexttarget">Planets</p></div></a>'
    let pulsars = '<a href="pulsars.html"><div class="index_header"><p class="index_header_text chakrafont themetexttarget">Pulsars</p></div></a>'
    let first_item = true
    let i = 0

    if (item_1 == null || item_2 == null){
        return
    }

    if (number_1 == number_2) {
        number_2 += 1
        if (number_2 > 3) {
            number_2 = 1
        }
    }

    while (i < 2) {

        if (number_1 == 1 && first_item) {
            item_1.innerHTML = blackholes
            item_1.classList.add("index_blackhole")
            first_item = false

        } else if (number_1 == 2 && first_item) {
            item_1.innerHTML = planets
            item_1.classList.add("index_planet")
            first_item = false

        } else if (number_1 == 3 && first_item) {
            item_1.innerHTML = pulsars
            item_1.classList.add("index_pulsar")
            first_item = false

        } else if (number_2 == 1) {
            item_2.innerHTML = blackholes
            item_2.classList.add("index_blackhole")

        } else if (number_2 == 2) {
            item_2.innerHTML = planets
            item_2.classList.add("index_planet")

        } else if (number_2 == 3) {
            item_2.innerHTML = pulsars
            item_2.classList.add("index_pulsar")

        }
        i += 1
        
    }
}

function themesetter(event) {
    let themetarget = document.getElementsByClassName('themetarget')
    let themeheadertarget = document.getElementsByClassName('themeheadertarget')
    let themetexttarget = document.getElementsByClassName('themetexttarget')
    let theme = sessionStorage.getItem('theme')
    let headertheme = sessionStorage.getItem('headertheme')
    let texttheme = sessionStorage.getItem('texttheme')
    
    for (i = 0; i < themetarget.length || i < themeheadertarget.length || i < themetexttarget.length; i++){
        if(i < themetarget.length && themetarget != null && theme != null){
            themetarget[i].classList.remove('crab','godseye', 'messier')
            themetarget[i].classList.add(theme)
        }
        if(i < themeheadertarget.length && themeheadertarget != null && headertheme != null){
            themeheadertarget[i].classList.remove('crabheader','godseyeheader', 'messierheader')
            themeheadertarget[i].classList.add(headertheme)
        }
        if(i < themetexttarget.length && themetexttarget != null && texttheme != null){
            themetarget[i].classList.remove('crabtext','godseyetext', 'messiertext')
            themetexttarget[i].classList.add(texttheme)
        }
    }
    console.log("theme set")
}

function loadtheme(load) {
    console.log("loading theme")
    let theme = sessionStorage.getItem('theme')
    if(theme == null) {
        sessionStorage.setItem('theme', 'godseye')
        sessionStorage.setItem('headertheme', 'godseyeheader')
        sessionStorage.setItem('texttheme', 'godseyetext')
    }
    themesetter()
}

function manualthemesetter(string, event) {

    string = string || null

    togglebackgrounddelete = document.getElementsByClassName('themetoggle')
    toggleindicatordelete = document.getElementsByClassName('toggleindicator')

    for ( i = 0; i < togglebackgrounddelete.length || i < toggleindicatordelete.length; i++){
        if (i < togglebackgrounddelete.length){
            togglebackgrounddelete[i].classList.remove('crabbackgroundactive', 'godseyebackgroundactive', 'messierbackgroundactive')
        }
        if (i < toggleindicatordelete.length){
            toggleindicatordelete[i].classList.remove('crabindicatoractive', 'godseyeindicatoractive', 'messierindicatoractive')
        }
    }

    if (string != null) {
        let togglebackground = document.getElementById(string+'toggle')
        let toggleindicator = document.getElementById(string+'indicator')
        togglebackground.classList.add(string+'backgroundactive')
        toggleindicator.classList.add(string+'indicatoractive')
        sessionStorage.setItem('theme', string)
        sessionStorage.setItem('headertheme', string+'header')
        sessionStorage.setItem('texttheme', string+'text')
        themesetter()
    } else {
        currenttheme = sessionStorage.getItem('theme')
        let currentthemebackground = document.getElementById(currenttheme+'toggle')
        let currentthemeindicator = document.getElementById(currenttheme+'indicator')
        if (currentthemebackground != null && currentthemeindicator != null) {
            currentthemebackground.classList.add(currenttheme+'backgroundactive')
            currentthemeindicator.classList.add(currenttheme+'indicatoractive')
        }
    }
}

function languagesetter(string, event) {

    string = string || null

    togglebackgrounddelete = document.getElementsByClassName('languagetoggle')
    toggleindicatordelete = document.getElementsByClassName('languageindicator')

    for ( i = 0; i < togglebackgrounddelete.length || i < toggleindicatordelete.length; i++){
        if (i < togglebackgrounddelete.length){
            togglebackgrounddelete[i].classList.remove('swedishbackgroundactive', 'englishbackgroundactive', 'russianbackgroundactive', 'germanbackgroundactive', 'frenchbackgroundactive', 'spanishbackgroundactive')
        }
        if (i < toggleindicatordelete.length){
            toggleindicatordelete[i].classList.remove('swedishindicatoractive', 'englishindicatoractive', 'russianindicatoractive', 'germanindicatoractive', 'frenchindicatoractive', 'spanishindicatoractive')
        }
    }

    if (string != null) {
        let languagebackground = document.getElementById(string+'toggle')
        let languageindicator = document.getElementById(string+'indicator')
        languagebackground.classList.add(string+'backgroundactive')
        languageindicator.classList.add(string+'indicatoractive')
        sessionStorage.setItem('language', string)
    } else {
        currentlanguage = sessionStorage.getItem('language')
        let currentlanguagebackground = document.getElementById(currentlanguage+'toggle')
        let currentlanguageindicator = document.getElementById(currentlanguage+'indicator')
        if (currentlanguagebackground != null && currentlanguageindicator != null) {

        currentlanguagebackground.classList.add(currentlanguage+'backgroundactive')
        currentlanguageindicator.classList.add(currentlanguage+'indicatoractive')
        }
    }
}

function defaultlanguagesetter(event){

    let language = sessionStorage.getItem('language')

    if (language == null) {
        sessionStorage.setItem('language', 'english')
    }

    languagesetter()
}

function swedishapplier() {
    let target = document.getElementById('blackholelanguagetarget')
    if (target != null) {
        document.getElementById('contenttitlelanguagetarget').innerHTML = 'Svarta Hål'
        target.innerHTML = 'Ett svart hål är, enligt den allmänna relativitetsteorin, en koncentration av massa med ett så starkt gravitationsfält att ingenting, inte ens ljus, kan övervinna kroppens gravitation. Materia eller ljus som kommer in innanför det svarta hålets händelsehorisont förblir där och kan aldrig komma ut igen, förutom eventuellt oerhört långsamt i form av Hawkingstrålning. Man kan inte heller få en reflektion eller spegelbild genom att belysa det med en ljuskälla och inte få någon information om materia som försvunnit in i hålet. <br><br> Svarta hål upptäcktes först som en möjlig lösning till den allmänna relativitetsteorins ekvationer och var först en rent teoretisk konstruktion. Numera har man genom astronomiska observationer observerat svarta hål i universum genom deras effekter på omkringliggande materia. Det första säkra beviset på att svarta hål existerar publicerades 2016 när forskare lyckades upptäcka gravitationsvågor från en kollision mellan två svarta hål som ska ha varit 29 respektive 36 gånger så massiva som solen, smält samman 1,3 miljarder ljusår bort. <br><br> Den 10 april 2019 publicerade Event Horizon Telescope en bild av ett supermassivt svart hål i galaxen Messier 87. Bilden är resultatet av koordinerade observationer med ett nätverk av radioteleskop fördelade över jorden. Det svarta hålets massa uppskattas till 6,5 miljarder solmassor.'
    } else if (document.getElementById('planetlanguagetarget') != null) {
        document.getElementById('contenttitlelanguagetarget').innerHTML = 'Planeter'
        target = document.getElementById('planetlanguagetarget')
        target.innerHTML = 'En planet är en himlakropp som rör sig i en omloppsbana runt en stjärna, har tillräckligt stor massa för att vara nästintill rund, och dominerar sin omgivning. Om massan är så stor att kärnfusion sker, så räknas himlakroppen dock som stjärna och inte planet. Definitionen av vad som ska räknas som planet har varierat under årens lopp, och bestämdes senast 2006. Namnet planet kommer från grekiskans πλανήτης, planētēs, och betyder vandrare eftersom man observerade att planeterna ständigt ändrar sina relativa positioner i förhållande till den övriga stjärnhimlen. Ett annat namn för planeter är därför vandringsstjärnor. <br><br> Det är inte med säkerhet känt hur planeter skapas. Den förhärskande teorin är att planeter uppkommer i samband med att solen de kretsar runt bildas. En stjärna bildas, när jättelika instabila gas och stoftmoln genom sin egen gravitation drar sig samman, komprimeras och bildar en protostjärna. Allt material i det långsamt roterande gasmolnet komprimeras inte till en sol, utan mycket samlas i en protoplanetär skiva. Längre ut från centrum i det blivande solsystemet genomgår andra delar av gas och rymdstoft liknande ihopklumpningar, fast i mindre skala. De lokala koncentrationerna av materia komprimeras och bildar i sin tur protoplaneter. <br><br> Under tiden fortsätter sammandragningen av protostjärnan tills trycket och temperaturen ökar så mycket att kärnreaktioner (fusion) startas och stjärnan tänds. Solvinden som uppstått av den nytända stjärnan blåser bort det mesta av gasen från solsystemets inre delar. Resultatet blir att de inre planeterna Merkurius, Venus, jorden och Mars är små och steniga utan speciellt mycket gas eller vätska, medan de yttre Jupiter, Saturnus, Uranus och Neptunus är stora gasplaneter. Där finns nämligen gasen kvar och kan kondensera till planeter.'
    } else if (document.getElementById('pulsarlanguagetarget') != null) {
        document.getElementById('contenttitlelanguagetarget').innerHTML = 'Pulsarer'
        target = document.getElementById('pulsarlanguagetarget')
        target.innerHTML = 'En pulsar (av engelskans pulsating star) eller pulserande stjärna kallas en roterande neutronstjärna som genererar regelbundna pulser av strålning med våglängder från radiostrålning till gammastrålning. <br><br> Strålningen utgår från stjärnans båda magnetiska poler och bildar alltså två koner åt motsatta håll. Eftersom rotationsaxeln och de magnetiska polerna inte ligger på samma ställen, sveper dessa strålningsknippen över himlen med samma intervall som stjärnans rotationshastighet. Neutronstjärnor är endast några kilometer i diameter och extremt kompakta. Deras rotationshastighet kan komma upp i flera tusen varv i sekunden. <br><br> Strålningspulsernas period kan variera från några hundradelar av en sekund till några få sekunder men är vanligen mellan en halv och en sekund. Varaktigheten håller sig i genomsnitt till ca 0,01 sekund. Strålningen från en del av dessa objekt har visat sig vara polariserad, vilket tyder på närvaro av magnetfält. <br><br> Fenomenet upptäcktes år 1967 av Jocelyn Bell Burnell och hon lyckades till slut övertyga sin lärare Antony Hewish om att det var en viktig upptäckt. För denna fick Hewish nobelpriset i fysik 1974. När man först uppmätte de extremt regelbundna signalerna från yttre rymden, spekulerades det i om det kunde vara de första bevisen för utomjordiskt intelligent liv. Därför kallades objektet först inofficiellt för LGM-1, där LGM stod för "Little Green Men". Detta var Krabbpulsaren (PSR B0531+21), en relativt ung central neutronstjärna i Krabbnebulosan (M1), som sedan dess blivit ett populärt och mycket studerat objekt.'
    }
}

function englishapplier() {
    let target = document.getElementById('blackholelanguagetarget')
    if (target != null) {
        document.getElementById('contenttitlelanguagetarget').innerHTML = 'Black Holes'
        target.innerHTML = 'A black hole is a region of spacetime exhibiting gravitational acceleration so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole. The boundary of the region from which no escape is possible is called the event horizon. Although the event horizon has an enormous effect on the fate and circumstances of an object crossing it, no locally detectable features appear to be observed. In many ways, a black hole acts like an ideal black body, as it reflects no light. Moreover, quantum field theory in curved spacetime predicts that event horizons emit Hawking radiation, with the same spectrum as a black body of a temperature inversely proportional to its mass. This temperature is on the order of billionths of a kelvin for black holes of stellar mass, making it essentially impossible to observe.<br><br>Objects whose gravitational fields are too strong for light to escape were first considered in the 18th century by John Michell and Pierre-Simon Laplace. The first modern solution of general relativity that would characterize a black hole was found by Karl Schwarzschild in 1916, although its interpretation as a region of space from which nothing can escape was first published by David Finkelstein in 1958. Black holes were long considered a mathematical curiosity; it was during the 1960s that theoretical work showed they were a generic prediction of general relativity. The discovery of neutron stars by Jocelyn Bell Burnell in 1967 sparked interest in gravitationally collapsed compact objects as a possible astrophysical reality.<br><br>Black holes of stellar mass are expected to form when very massive stars collapse at the end of their life cycle. After a black hole has formed, it can continue to grow by absorbing mass from its surroundings. By absorbing other stars and merging with other black holes, supermassive black holes of millions of solar masses (M☉) may form. There is general consensus that supermassive black holes exist in the centers of most galaxies.<br><br>Despite its invisible interior, the presence of a black hole can be inferred through its interaction with other matter and with electromagnetic radiation such as visible light. Matter that falls onto a black hole can form an external accretion disk heated by friction, forming some of the brightest objects in the universe. If there are other stars orbiting a black hole, their orbits can be used to determine the black holes mass and location. Such observations can be used to exclude possible alternatives such as neutron stars. In this way, astronomers have identified numerous stellar black hole candidates in binary systems, and established that the radio source known as Sagittarius A*, at the core of the Milky Way galaxy, contains a supermassive black hole of about 4.3 million solar masses.<br><br>On 11 February 2016, the LIGO collaboration announced the first direct detection of gravitational waves, which also represented the first observation of a black hole merger. As of December 2018, eleven gravitational wave events have been observed that originated from ten merging black holes (along with one binary neutron star merger). On 10 April 2019, the first ever direct image of a black hole and its vicinity was published, following observations made by the Event Horizon Telescope in 2017 of the supermassive black hole in Messier 87s galactic centre.'
    } else if (document.getElementById('planetlanguagetarget') != null) {
        document.getElementById('contenttitlelanguagetarget').innerHTML = 'Planets'
        target = document.getElementById('planetlanguagetarget')
        target.innerHTML = 'A planet is an astronomical body orbiting a star or stellar remnant that is massive enough to be rounded by its own gravity, is not massive enough to cause thermonuclear fusion, and has cleared its neighbouring region of planetesimals.<br><br>The term planet is ancient, with ties to history, astrology, science, mythology, and religion. Five planets in the Solar System are visible to the naked eye. These were regarded by many early cultures as divine, or as emissaries of deities. As scientific knowledge advanced, human perception of the planets changed, incorporating a number of disparate objects. In 2006, the International Astronomical Union (IAU) officially adopted a resolution defining planets within the Solar System. This definition is controversial because it excludes many objects of planetary mass based on where or what they orbit. Although eight of the planetary bodies discovered before 1950 remain "planets" under the modern definition, some celestial bodies, such as Ceres, Pallas, Juno and Vesta (each an object in the solar asteroid belt), and Pluto (the first trans-Neptunian object discovered), that were once considered planets by the scientific community, are no longer viewed as such.<br><br>The planets were thought by Ptolemy to orbit Earth in deferent and epicycle motions. Although the idea that the planets orbited the Sun had been suggested many times, it was not until the 17th century that this view was supported by evidence from the first telescopic astronomical observations, performed by Galileo Galilei. About the same time, by careful analysis of pre-telescopic observational data collected by Tycho Brahe, Johannes Kepler found the planets orbits were elliptical rather than circular. As observational tools improved, astronomers saw that, like Earth, each of the planets rotated around an axis tilted with respect to its orbital pole, and some shared such features as ice caps and seasons. Since the dawn of the Space Age, close observation by space probes has found that Earth and the other planets share characteristics such as volcanism, hurricanes, tectonics, and even hydrology.<br><br>Planets are generally divided into two main types: large low-density giant planets, and smaller rocky terrestrials. There are eight planets in the Solar System. In order of increasing distance from the Sun, they are the four terrestrials, Mercury, Venus, Earth, and Mars, then the four giant planets, Jupiter, Saturn, Uranus, and Neptune. Six of the planets are orbited by one or more natural satellites.<br><br>Several thousands of planets around other stars ("extrasolar planets" or "exoplanets") have been discovered in the Milky Way. As of 1 May 2019, 4,058 known extrasolar planets in 3,033 planetary systems (including 658 multiple planetary systems), ranging in size from just above the size of the Moon to gas giants about twice as large as Jupiter have been discovered, out of which more than 100 planets are the same size as Earth, nine of which are at the same relative distance from their star as Earth from the Sun, i.e. in the circumstellar habitable zone. On December 20, 2011, the Kepler Space Telescope team reported the discovery of the first Earth-sized extrasolar planets, Kepler-20e and Kepler-20f, orbiting a Sun-like star, Kepler-20. A 2012 study, analyzing gravitational microlensing data, estimates an average of at least 1.6 bound planets for every star in the Milky Way. Around one in five Sun-like stars is thought to have an Earth-sized planet in its habitable zone.'
    } else if (document.getElementById('pulsarlanguagetarget') != null) {
        document.getElementById('contenttitlelanguagetarget').innerHTML = 'Pulsars'
        target = document.getElementById('pulsarlanguagetarget')
        target.innerHTML = 'A pulsar (from pulse and -ar as in quasar) is a highly magnetized rotating neutron star that emits a beam of electromagnetic radiation. This radiation can be observed only when the beam of emission is pointing toward Earth (much like the way a lighthouse can be seen only when the light is pointed in the direction of an observer), and is responsible for the pulsed appearance of emission. Neutron stars are very dense, and have short, regular rotational periods. This produces a very precise interval between pulses that ranges from milliseconds to seconds for an individual pulsar. Pulsars are believed to be one of the candidates for the source of ultra-high-energy cosmic rays (see also centrifugal mechanism of acceleration).<br><br>The periods of pulsars make them very useful tools. Observations of a pulsar in a binary neutron star system were used to indirectly confirm the existence of gravitational radiation. The first extrasolar planets were discovered around a pulsar, PSR B1257+12. Certain types of pulsars rival atomic clocks in their accuracy in keeping time. <br><br>The first pulsar was observed on November 28, 1967, by Jocelyn Bell Burnell and Antony Hewish. They observed pulses separated by 1.33 seconds that originated from the same location in the sky, and kept to sidereal time. In looking for explanations for the pulses, the short period of the pulses eliminated most astrophysical sources of radiation, such as stars, and since the pulses followed sidereal time, it could not be man-made radio frequency interference.'
    }
}

function languageapplier(load) {
    let languageselector = sessionStorage.getItem('language')
    
    if (languageselector == 'swedish') {
        swedishapplier()
    } else if (languageselector == 'english') {
        englishapplier()
    } else if (languageselector == 'russian') {
        console.log("Language not yet implemented.")
    } else if (languageselector == 'german') {
        console.log("Language not yet implemented.")
    } else if (languageselector == 'french') {
        console.log("Language not yet implemented.")
    } else if (languageselector == 'spanish') {
        console.log("Language not yet implemented.")
    }

}

function myFunction(element) {
    let dropdown = document.querySelector('.dropdownmenu')
    if (element.matches) { 
        closedropdown(dropdown)
        content_in_index()
    } else {
      
    }
}
  
  
document.querySelector('#dropdownbutton').addEventListener('click', function() {
    let dropdown = document.querySelector('.dropdownmenu')
    let isclosed = dropdown.getAttribute('collapsed') === 'true'
      
    if (isclosed) {
          opendropdown(dropdown)
          dropdown.setAttribute('collapsed', 'false')
    } else {
        closedropdown(dropdown)
    }
})

let element = window.matchMedia("(max-width: 600px)")
let dropdown = document.querySelector('.dropdownmenu')

myFunction(element) 
element.addListener(myFunction)
// window.onload = content_in_index()
window.onload = loadtheme()
window.onload = manualthemesetter()
window.onload = defaultlanguagesetter()
window.onload = languageapplier()



// Doesn't work, loads immediately and not after DOM load
// window.onload = imageload()

// function imageload(finished_loading) {
    //                 let locations = document.getElementsByClassName("loading")
//                 let i = 0
//                 let imagelocation
                
//                 if (locations != null) {
                    
//                     while (i < 2) {
//                         locations = document.getElementsByClassName("loading")
                        
//                         if (locations[0].classList.contains("index_blackhole_loading")) {
            
//                             imagelocation = document.getElementsByClassName("index_blackhole_loading")
//                             imagelocation[0].classList.add("index_blackhole")
//                             imagelocation[0].classList.remove("loading")
//                             imagelocation[0].classList.remove("index_blackhole_loading")
            
//                         }else if (locations[0].classList.contains("index_planet_loading")) {
            
//                             imagelocation = document.getElementsByClassName("index_planet_loading")
//                             imagelocation[0].classList.add("index_planet")
//                             imagelocation[0].classList.remove("loading")
//                             imagelocation[0].classList.remove("index_planet_loading")
                            
//                         }else if (locations[0].classList.contains("index_pulsar_loading")) {
            
//                             imagelocation = document.getElementsByClassName("index_pulsar_loading")
//                             imagelocation[0].classList.add("index_pulsar")
//                             imagelocation[0].classList.remove("loading")
//                             imagelocation[0].classList.remove("index_pulsar_loading")
                            
//                         }else if (locations[0].classList.contains("blackholeimage_loading")) {
            
//                             imagelocation = document.getElementsByClassName("blackholeimage_loading")
//                             imagelocation[0].classList.add("blackholeimage")
//                             imagelocation[0].classList.remove("loading")
//                             imagelocation[0].classList.remove("blackholeimage_loading")
                            
//                         }else if (locations[0].classList.contains("planetimage_loading")) {
            
//                             imagelocation = document.getElementsByClassName("planetimage_loading")
//                             imagelocation[0].classList.add("planetimage")
//                             imagelocation[0].classList.remove("loading")
//                             imagelocation[0].classList.remove("planetimage_loading")
                            
//                         }else if (locations[0].classList.contains("pulsarimage_loading")) {
            
//                             imagelocation = document.getElementsByClassName("pulsarimage_loading")
//                             imagelocation[0].classList.add("pulsarimage")
//                             imagelocation[0].classList.remove("loading")
//                             imagelocation[0].classList.remove("pulsarimage_loading")
                        
//                         }
//                         i += 1
//                     }
//                 }
//             }