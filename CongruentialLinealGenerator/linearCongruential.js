function generateRandom(){
			var modulus = parseInt(document.getElementById("MCM_modulus").value);
			var multiplier = parseInt(document.getElementById("MCM_multiplier").value);
			var increment = parseInt(document.getElementById("MCM_increment").value);
			var seed = parseInt(document.getElementById("MCM_seed").value);
			var count = parseInt(document.getElementById("MCM_count").value);
			var separator = "\n";
			var list = [];
			if(!isCoprime(modulus, increment)) {
				alert("El modulo y el incremento deben ser co-primos.");
			return;
			}
			if(!isDivisibleByModPrimeFactors(multiplier-1, modulus)) {
				alert("El multiplicador - 1 debe ser divisible por los factores primos del modulo");
			return;
			}

			for (var i = 0; i < count; i++) {
				seed = (multiplier * seed + increment) % modulus;
				list.push(seed);
			};			
			document.getElementById("MCM_output").value = list.join(separator);
		}

	function isCoprime(modulus, increment) {
		if(((modulus | increment) & 1) == 0) return false;
		while((modulus & 1) == 0) modulus >>= 1; 
		if(modulus == 1) return true;
		do {
			while ((increment & 1) == 0) increment >>= 1;
			if(increment == 1) return true;
			if(modulus > increment) {
				var temp = increment;
				increment = modulus;
				modulus = temp;
			}
			increment -= modulus;
		} while(increment != 0);
		return false;
	}

	function isDivisibleByModPrimeFactors(multiplierLessOne, modulus) {
		var primeFactors = getPrimeFactors(modulus);
		for (var i = primeFactors.length - 1; i >= 0; i--) {
			if(multiplierLessOne % primeFactors[i] == 0) {
				return true;
		};
		return false;
	}
}

	function getPrimeFactors(modulus) {
		var factors = [];        
        for (var i = 2; i <= modulus; i++) {
            while ((modulus % i) === 0) {
                factors.push(i);
                modulus /= i;
            }
        }        
        return factors;
	}