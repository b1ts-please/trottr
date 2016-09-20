trottr.controller('MapController', function($scope){
  var map;
  var ajaxRequest;
  var plotlist;
  var plotlayers = [];

  map = new L.Map('map',{zoomControl:false});

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		subdomains: 'abcd',
		minZoom: 15,
		maxZoom: 16,
		touchZoom: false,
		ext: 'png'
	});
  map.setView(new L.LatLng(51.7711375, 19.4732066),15);
	map.addLayer(osm);

  // Create icons
  var PoIIcon = L.Icon.extend({
    options: {
			shadowUrl: 'img/shadow.png',
			iconSize:     [110, 110],
	    shadowSize:   [100, 100],
	    iconAnchor:   [45, 30],
	    shadowAnchor: [15, 60],
	    popupAnchor:  [-3, -76]
		}
	});

	var museumIcon = new PoIIcon({iconUrl:"img/museums.png"});
  var parkIcon = new PoIIcon({iconUrl:"img/parks.png"});
  var jewishIcon = new PoIIcon({iconUrl:"img/jewish.png"});
  var christianIcon = new PoIIcon({iconUrl:"img/christian.png"});
  var sportsIcon = new PoIIcon({iconUrl:"img/sports.png"});
  var monumentsIcon = new PoIIcon({iconUrl:"img/monuments.png"});
  var foodIcon = new PoIIcon({iconUrl:"img/food.png"});
  var entertainmentIcon = new PoIIcon({iconUrl:"img/entertainment.png"});
  var drinkIcon = new PoIIcon({iconUrl:"img/drinks.png"});

  //Put Icons on Map and bind Popups to icons
  L.marker([51.771791, 19.478403], {icon: museumIcon}).addTo(map);
  var parkMarker = L.marker([51.773472, 19.476705], {icon: parkIcon}).addTo(map);
  L.marker([51.775422, 19.461213], {icon: jewishIcon}).addTo(map);
  L.marker([51.774771, 19.481104], {icon: christianIcon}).addTo(map);
  L.marker([51.781408, 19.457570], {icon: sportsIcon}).addTo(map);
  L.marker([51.776790, 19.454710], {icon: monumentsIcon}).addTo(map);
  L.marker([51.779498, 19.482959], {icon: foodIcon}).addTo(map);
  L.marker([51.780841, 19.448379], {icon: entertainmentIcon}).addTo(map);
  var drinkMarker = L.marker([51.771252, 19.468391], {icon: drinkIcon}).addTo(map);

  drinkMarker.on('click', function(){
    openModal('img/church.jpg', 'St. Joseph Church', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.');
  });
  parkMarker.on('click', function(){
    openModal('img/church.jpg', 'St. Joseph Church', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.');
  });

  $scope.ghostClose = function(){
    angular.element(document.querySelector('.ghost')).css('display', 'none');
  }

  function openModal(imageSrc, head, body){
    angular.element(document.querySelector('#ghost-map .ghost-head img')).attr('src', imageSrc);
    angular.element(document.querySelector('#ghost-map .ghost-head h2')).text(head);
    angular.element(document.querySelector('#ghost-map .ghost-body')).text(body);
    angular.element(document.querySelector('#ghost-map')).css('display', 'block');
  }
});
