(function(){ // protect the lemmings!

	console.log( 'hello' );

	var lis = document.querySelectorAll('.way-one');

	for ( var i = 0; i < lis.length; ++i ) {
		lis[i].addEventListener(
			'click', 
			(function( theVal ){
				function foo() {
					console.log( theVal );
					alert(lis[theVal].innerHTML);
				}
				return foo;
			})( i )
		);
	}

	var wayTwo = document.querySelectorAll('.way-two');
	for ( i = 0; i < wayTwo.length; ++i ) {
		wayTwo[ i ].addEventListener(
			'click',
			(function( theVal ) {
				return function() {
					alert(wayTwo[ theVal ].innerHTML);
				}
			})( i )
		);
	}

	function doClick( obj ) {
		return function( e ) {
			alert( obj.innerHTML );
		}
	}

	var wayThree = document.querySelectorAll('.way-three');
	for( var i = 0, len = wayThree.length; i < len; ++i ) {
		wayThree[ i ].addEventListener( 'click', doClick( wayThree[ i ] ) );
	}

	function onItemClicked( obj, e ) {
		console.log( e );
		alert( obj.innerHTML );
	}

	var wayFour = document.querySelectorAll('.way-four');
	for ( var i = 0, len = wayFour.length; i < len; ++i ) {
		wayFour[ i ].addEventListener('click', onItemClicked.bind(null, wayFour[ i ] ) );
	}

	// app specific logic
})(); // IIFE - immediately invoked function expression






















