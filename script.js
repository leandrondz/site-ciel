
// script.js
document.addEventListener('DOMContentLoaded', function(){
  // menu toggle
  var btn = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  btn && btn.addEventListener('click', function(){
    if(nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });

  // ScrollReveal (if loaded)
  try {
    ScrollReveal().reveal('.hero-left',{duration:900, origin:'left', distance:'40px'});
    ScrollReveal().reveal('.hero-card',{duration:900, origin:'right', distance:'40px'});
    ScrollReveal().reveal('.feature',{interval:120});
    ScrollReveal().reveal('.card',{interval:140});
  } catch(e){ console.warn('ScrollReveal not available',e) }

  // Leaflet map initialization for pages that have map id
  try {
    if(document.getElementById('map-france')) {
      var map = L.map('map-france').setView([46.5, 2.5], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap' }).addTo(map);

      var lycees = [
        {name:"Lycée Fourcade (Gardanne)", coords:[43.4583,5.5490], phone:"04 42 65 90 70", addr:"Avenue Groupe Manouchian, 13120 Gardanne"},
        {name:"Lycée Coëtlogon (Rennes)", coords:[48.12,-1.68], phone:"02 99 00 00 00", addr:"Rennes"},
        {name:"Lycée Champollion (Lattes)", coords:[43.61,3.87], phone:"04 67 00 00 00", addr:"Lattes"},
        {name:"Lycée Léonard de Vinci (Roubaix)", coords:[50.70,3.17], phone:"03 20 00 00 00", addr:"Roubaix"},
        {name:"Lycée Jules Siegfried (Le Havre)", coords:[49.49,0.11], phone:"02 35 00 00 00", addr:"Le Havre"},
        {name:"Lycée Édouard Branly (Châtellerault)", coords:[46.82,0.40], phone:"05 49 00 00 00", addr:"Châtellerault"}
      ];

      lycees.forEach(function(l){
        var m = L.marker(l.coords).addTo(map);
        var html = '<strong>'+l.name+'</strong><br/>'+l.addr+'<br/>Tel: '+l.phone;
        m.bindPopup(html);
      });
    }

    if(document.getElementById('map-partners')){
      var m2 = L.map('map-partners').setView([46.5,2.5],5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap' }).addTo(m2);
      var partners = [
        {name:"Entreprise Réseau X", coords:[43.3,5.4], info:"Partenaire local - stages", site:"#"},
        {name:"Société IoT Y", coords:[45.7,4.85], info:"Collaboration projets", site:"#"}
      ];
      partners.forEach(function(p){
        L.marker(p.coords).addTo(m2).bindPopup('<strong>'+p.name+'</strong><br/>'+p.info);
      });
    }
  } catch(e){ console.warn('Leaflet error', e) }
});
