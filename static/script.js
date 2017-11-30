$(document).ready(function(){
	console.log("Ready");
	$.get("https://api.chess.com/pub/player/stevopar/stats", function(data){
		// console.log(data);
		var arr = [];
		$.each(data, function(){
			arr.push(this.last.rating);
		})
		// console.log(arr);
		$("#stats").append(`
			<p>Current Ratings:<br></p>
			<table id="stats_list">
			<tr>
				<td>Daily: </td>
				<td>${arr[0]}</td>
			<tr>	
				<td>960: </td>
				<td>${arr[1]}</td>
			<tr>
				<td>Rapid: </td>
				<td>${arr[2]}</td>
			<tr>	
				<td>Bullet: </td>
				<td>${arr[3]}</td>
			<tr>	
				<td>Blitz: </td>
				<td>${arr[4]}</td>
			</table>
		`)
	})
	$.get("https://api.chess.com/pub/player/stevopar/games/2017/08/", function(data){
		var pgn = data.games[70].pgn;
		// console.log(pgn);
		new PgnViewer(  
		  { boardName: "demo",  
		    // pgnFile: ,  
		    pgnString: pgn,
		    pieceSet: 'leipzig',   
		    pieceSize: 46  
	 	}  
	);  	
	})	
})