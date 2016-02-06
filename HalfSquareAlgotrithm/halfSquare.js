function generateRandom(){

		var digits = parseInt(document.getElementById("MSM_digits").value);
		var count = parseInt(document.getElementById("MSM_count").value);
		var seed = parseInt(document.getElementById("MSM_seed").value);
		var seperator = "\n";
		var list = []
		paddedLength = digits*2;

		if(seed.toString().length>digits){
			alert("La semilla es muy grande. Aumenta el numero de digitos o disminuye la semilla");
			return;
		}

		if(digits%2!=0){
			alert("Digitos deben ser pares");
			return;
		}

		if(count<=0){
			alert("Debe ser un valor positivo mayor a 0");
			return;
		}

		for(var i=0; i<count; i++){        
			seed = String(Array(paddedLength).join("0") + (seed*seed).toString()).slice(-paddedLength).substring(digits/2, digits*3/2);
			list.push(seed);
		}

		document.getElementById("MSM_output").value = list.join(seperator);

	}