trottr.controller('MapController', function($scope){
  var map;
  var ajaxRequest;
  var plotlist;
  var plotlayers=[];

  map = new L.Map('map');


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
});
