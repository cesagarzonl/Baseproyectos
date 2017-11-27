var Demo = (function() {

	function output(node) {
		var existing = $('#result .croppie-result');
		if (existing.length > 0) {
			existing[0].parentNode.replaceChild(node, existing[0]);
		}	
		else {
			$('#result')[0].appendChild(node);
		}
	}

	function popupResult(result) {
		var html;
		if (result.html) {
			html = result.html;

		}
		if (result.src) {
			html = '<img id="pepepe" name="pepepe" src="' + result.src + '" />';
			$('#imgs').attr("src",result.src);
			$('#imgs22').attr("value",result.src);
       		document.getElementById('sectionnn').style.display = "none";			
		}
		swal({
			title: '',
			html: true,
			text: html,
			allowOutsideClick: true
		});

	}

	function demoUpload() {
		var $uploadCrop;
		function readFile(input) {
 			if (input.files && input.files[0]) {
	            var reader = new FileReader();
	            reader.onload = function (e) {
					$('.upload-demo').addClass('ready');
	            	$uploadCrop.croppie('bind', {
	            		url: e.target.result
	            	}).then(function(){
	            		console.log('jQuery bind complete');
	            		document.getElementById('upload-result').style.display = "block";
	            		document.getElementById('upload-result1').style.display = "none";
	            		document.getElementById('upload-result2').style.display = "none";
	            		document.getElementById('upload-result3').style.display = "none";
	            		document.getElementById('upload-result4').style.display = "none";
	            	});
	            }
	            reader.readAsDataURL(input.files[0]);
	        }
	        else {
		        swal("Sorry - you're browser doesn't support the FileReader API");
		    }
		}
		$uploadCrop = $('#upload-demo').croppie({
			viewport: {
				width: 500,
				height: 500
			},
			enableExif: true
		});

		$('#upload').on('change', function () { readFile(this); });
		$('.upload-result').on('click', function (ev) {
			$uploadCrop.croppie('result', {
				type: 'canvas',
				size: 'viewport'
			}).then(function (resp) {
				popupResult({
					src: resp
				});
			});
		});
}

	function demoUpload1() {
		var $uploadCrop1;
		function readFile(input) {
 			if (input.files && input.files[0]) {
	            var reader = new FileReader();
	            reader.onload = function (e) {
					$('.upload-demo').addClass('ready');
	            	$uploadCrop1.croppie('bind', {
	            		url: e.target.result
	            	}).then(function(){
	            		console.log('jQuery bind complete');
	            		document.getElementById('upload-result').style.display = "none";
	            		document.getElementById('upload-result1').style.display = "block";
	            		document.getElementById('upload-result2').style.display = "none";
	            		document.getElementById('upload-result3').style.display = "none";
	            		document.getElementById('upload-result4').style.display = "none";
	            	});
	            }
	            reader.readAsDataURL(input.files[0]);
	        }
	        else {
		        swal("Sorry - you're browser doesn't support the FileReader API");
		    }
		}
		$uploadCrop1 = $('#upload-demo').croppie({
			viewport: {
				width: 500,
				height: 500
			},
			enableExif: true
		});

		$('#upload1').on('change', function () { readFile(this); });
		$('.upload-result1').on('click', function (ev) {
			$uploadCrop1.croppie('result', {
				type: 'canvas',
				size: 'viewport'
			}).then(function (resp) {
				popupResult1({
					src: resp
				});
			});
		});
}

	function popupResult1(result) {
		var html;
		if (result.html) {
			html = result.html;

		}
		if (result.src) {
			html = '<img id="pepepe1" name="pepepe1" src="' + result.src + '" />';
			$('#imgs1').attr("src",result.src);
			$('#imgs11').attr("value",result.src);
       		document.getElementById('sectionnn').style.display = "none";			
		}
		swal({
			title: '',
			html: true,
			text: html,
			allowOutsideClick: true
		});
	}
	function demoUpload2() {
		var $uploadCrop2;
		function readFile(input) {
 			if (input.files && input.files[0]) {
	            var reader = new FileReader();
	            reader.onload = function (e) {
					$('.upload-demo').addClass('ready');
	            	$uploadCrop2.croppie('bind', {
	            		url: e.target.result
	            	}).then(function(){
	            		console.log('jQuery bind complete');
	            		document.getElementById('upload-result').style.display = "none";
	            		document.getElementById('upload-result1').style.display = "none";
	            		document.getElementById('upload-result2').style.display = "block";
	            		document.getElementById('upload-result3').style.display = "none";
	            		document.getElementById('upload-result4').style.display = "none";
	            	});
	            }
	            reader.readAsDataURL(input.files[0]);
	        }
	        else {
		        swal("Sorry - you're browser doesn't support the FileReader API");
		    }
		}
		$uploadCrop2 = $('#upload-demo').croppie({
			viewport: {
				width: 500,
				height: 500
			},
			enableExif: true
		});

		$('#upload2').on('change', function () { readFile(this); });
		$('.upload-result2').on('click', function (ev) {
			$uploadCrop2.croppie('result', {
				type: 'canvas',
				size: 'viewport'
			}).then(function (resp) {
				popupResult2({
					src: resp
				});
			});
		});
}

	function popupResult2(result) {
		var html;
		if (result.html) {
			html = result.html;

		}
		if (result.src) {
			html = '<img id="pepepe2" name="pepepe2" src="' + result.src + '" />';
			$('#imgs2').attr("src",result.src);
			$('#imgs12').attr("value",result.src);
       		document.getElementById('sectionnn').style.display = "none";			
		}
		swal({
			title: '',
			html: true,
			text: html,
			allowOutsideClick: true
		});
	}

	function demoUpload3() {
		var $uploadCrop3;
		function readFile(input) {
 			if (input.files && input.files[0]) {
	            var reader = new FileReader();
	            reader.onload = function (e) {
					$('.upload-demo').addClass('ready');
	            	$uploadCrop3.croppie('bind', {
	            		url: e.target.result
	            	}).then(function(){
	            		console.log('jQuery bind complete');
	            		document.getElementById('upload-result').style.display = "none";
	            		document.getElementById('upload-result1').style.display = "none";
	            		document.getElementById('upload-result2').style.display = "none";
	            		document.getElementById('upload-result3').style.display = "block";
	            		document.getElementById('upload-result4').style.display = "none";
	            	});
	            }
	            reader.readAsDataURL(input.files[0]);
	        }
	        else {
		        swal("Sorry - you're browser doesn't support the FileReader API");
		    }
		}
		$uploadCrop3 = $('#upload-demo').croppie({
			viewport: {
				width: 500,
				height: 500
			},
			enableExif: true
		});

		$('#upload3').on('change', function () { readFile(this); });
		$('.upload-result3').on('click', function (ev) {
			$uploadCrop3.croppie('result', {
				type: 'canvas',
				size: 'viewport'
			}).then(function (resp) {
				popupResult3({
					src: resp
				});
			});
		});
}

	function popupResult3(result) {
		var html;
		if (result.html) {
			html = result.html;

		}
		if (result.src) {
			html = '<img id="pepepe3" name="pepepe3" src="' + result.src + '" />';
			$('#imgs3').attr("src",result.src);
			$('#imgs13').attr("value",result.src);
       		document.getElementById('sectionnn').style.display = "none";			
		}
		swal({
			title: '',
			html: true,
			text: html,
			allowOutsideClick: true
		});
	}

	function demoUpload4() {
		var $uploadCrop4;
		function readFile(input) {
 			if (input.files && input.files[0]) {
	            var reader = new FileReader();
	            reader.onload = function (e) {
					$('.upload-demo').addClass('ready');
	            	$uploadCrop4.croppie('bind', {
	            		url: e.target.result
	            	}).then(function(){
	            		console.log('jQuery bind complete');
	            		document.getElementById('upload-result').style.display = "none";
	            		document.getElementById('upload-result1').style.display = "none";
	            		document.getElementById('upload-result2').style.display = "none";
	            		document.getElementById('upload-result3').style.display = "none";
	            		document.getElementById('upload-result4').style.display = "block";
	            	});
	            }
	            reader.readAsDataURL(input.files[0]);
	        }
	        else {
		        swal("Sorry - you're browser doesn't support the FileReader API");
		    }
		}
		$uploadCrop4 = $('#upload-demo').croppie({
			viewport: {
				width: 500,
				height: 500
			},
			enableExif: true
		});

		$('#upload4').on('change', function () { readFile(this); });
		$('.upload-result4').on('click', function (ev) {
			$uploadCrop4.croppie('result', {
				type: 'canvas',
				size: 'viewport'
			}).then(function (resp) {
				popupResult4({
					src: resp
				});
			});
		});
}

	function popupResult4(result) {
		var html;
		if (result.html) {
			html = result.html;

		}
		if (result.src) {
			html = '<img id="pepepe4" name="pepepe4" src="' + result.src + '" />';
			$('#imgs4').attr("src",result.src);
			$('#imgs14').attr("value",result.src);
       		document.getElementById('sectionnn').style.display = "none";			
		}
		swal({
			title: '',
			html: true,
			text: html,
			allowOutsideClick: true
		});
	}

	function init() {
		demoUpload();
		demoUpload1();
		demoUpload2();
		demoUpload3();
		demoUpload4();
	}

	return {
		init: init
	};
})();

	







// Full version of `log` that:
//  * Prevents errors on console methods when no console present.
//  * Exposes a global 'log' function that preserves line numbering and formatting.
(function () {
  var method;
  var noop = function () { };
  var methods = [
      'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
      'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
      'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
      'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});
 
  while (length--) {
    method = methods[length];
 
    // Only stub undefined methods.
    if (!console[method]) {
        console[method] = noop;
    }
  }
 
 
  if (Function.prototype.bind) {
    window.log = Function.prototype.bind.call(console.log, console);
  }
  else {
    window.log = function() { 
      Function.prototype.apply.call(console.log, console, arguments);
    };
  }
})();