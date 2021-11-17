$.fn.pictureViewer = function(speed) {
	var cache = {
'https://via.placeholder.com/800x450/0000FF' : {
'$img': jquery object,
'isLoading': false
},
'https://via.placeholder.com/800x450/FFFFFF' : {
'$img': jquery object,
'isLoading': false
},
'https://via.placeholder.com/800x450/008000' : {
'$img': jquery object,
'isLoading': false
},
}
var request; 
var $current; 
var cache = {}; 
var $frame = $('#photo-viewer'); 
var $thumbs = $('.thumb'); 

function crossfade($img) { 
if ($current) { 
$current.stop().fadeOut('slow'); 
}
$img.css({ 
marginLeft: -$img.width() / 2, 
marginTop: -$img.height() / 2 
});
$img.stop().fadeTo('slow', 1); 
$current = $img; 
}


$(document).on('click', '.thumb', function(e) { 
var $img; 
var src = this.href; 
var request = src; 
e.preventDefault(); 
$thumbs.removeClass('active'); 
$(this).addClass('active'); 
if (cache.hasOwnProperty(src)) { 
if (cache[src].isLoading === false) { 
crossfade(cache[src].$img); 
}
} else { 
$img = $('<img/>'); 
cache[src] = {
$img: $img, 
isLoading: true 
};



$img.on('load', function() { 
$img.hide(); 

$frame.removeClass('is-loading').append($img);
cache[src].isLoading = false; 

if (request === src) {
crossfade($img); 
} 
});
$frame.addClass('is-loading'); 
$img.attr({ 
'src': src, 
'alt': this.title || '' 
});
return this;
}

