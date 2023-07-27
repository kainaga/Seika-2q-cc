/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
document.addEventListener('DOMContentLoaded', function() {
	var animateImages = document.querySelectorAll('.animate-image');
    
	animateImages.forEach(function(image) {
	  image.addEventListener('click', function() {
		anime({
			targets: '.image-container img',
			translateX: 250
		    });
	  });
	});
    });
    
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxJQUFJO0FBQ0osRUFBRTtBQUNGLEtBQUs7QUFDTCxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcblx0dmFyIGFuaW1hdGVJbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5pbWF0ZS1pbWFnZScpO1xuICAgIFxuXHRhbmltYXRlSW1hZ2VzLmZvckVhY2goZnVuY3Rpb24oaW1hZ2UpIHtcblx0ICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdGFuaW1lKHtcblx0XHRcdHRhcmdldHM6ICcuaW1hZ2UtY29udGFpbmVyIGltZycsXG5cdFx0XHR0cmFuc2xhdGVYOiAyNTBcblx0XHQgICAgfSk7XG5cdCAgfSk7XG5cdH0pO1xuICAgIH0pO1xuICAgICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==