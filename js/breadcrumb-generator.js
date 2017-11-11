// Maria Villalobos y Paz Rubio
  function generateBC(url, separator) {

    //Funcion para formar un acronimo con las iniciales excluyendo los articulos
    function acronimo(direccion){
      var acronimo="";
      // pasamos la direccion a mayusculas y lo separamos por guiones
      var larga=direccion.toUpperCase().split("-");

      // eliminamos las palabras que debe omitir el acronimo con un filtro
      filtrado = larga.filter(palabra => !/^(THE|OF|IN|FROM|BY|WITH|AND|OR|FOR|TO|AT|A)$/gi.test(palabra));
      
      // para cada palabra filtrada acumulamos la inicial
      for(var j=0; j<filtrado.length; j++){
        acronimo+=filtrado[j].charAt(0);
      }
      return acronimo;
    }

	// url sin http(s), index, barra oblicua final, extensiones (html, php, ...), ni anclas y parametros
	var urlLimpia=url.replace(/http:\/\/|https:\/\//gi).replace(/\/index\.[^\/]+/, "").replace(/\/$/, "")
	            .replace(/.html|.htm|.php|.asp|\?.+|#.+/gi,"");

  // despues de limpiar la direccion, la separamos por / guardandola en un array 
	var partesUrl = urlLimpia.split("/");

	/* migaCompleta para devolver la cadena completa 
    acumulador para ir formando la direccion del href
    miga para escribir la parte de direccion en mayuscula y sin guiones */
	var migaCompleta="", acumulador ="/", miga="";

	// Si solo tenemos HOME : 
	if(partesUrl.length==1){
    return "<span class=\"active\">HOME</span>";
	}
	else{
      // primera direccion : <a href="/">HOME</a>separator
      migaCompleta = "<a href=\"/\">HOME</a>"+separator; 
        
      // Bucle de intermedios: de 1 al tamanio menos uno (el ultimo sera el span)
      for(var i=1; i<partesUrl.length-1; i++){
  			// direccion para formar el acumulador, comprobar el tamanio y formar la miga
        var direccion=partesUrl[i]; 
  			acumulador += direccion+"/";

  			// si es menor o igual a 30 la miga es la direccion en mayuscula y cambiando guiones por espacios
  			if(direccion.length <= 30){
  				miga = direccion.replace(/-/g, ' ').toUpperCase();
  			}
        // si es mayor que 30 la miga es el acronimo
  			else{ 
  				miga = acronimo(direccion);
  			}

  			migaCompleta += "<a href=\""+acumulador+"\">"+miga+"</a>"+separator;
      }
        
      // Ultimo caso: la miga es igual que en los intermedios pero formamos la completa con SPAN ACTIVE
      var ulti = partesUrl[partesUrl.length-1];
      
      if(ulti.length <= 30){
	    	miga = ulti.replace(/-/g, ' ').toUpperCase();
	    } else{
	    	miga = acronimo(ulti);
	    }

	    migaCompleta += "<span class=\"active\">"+miga+"</span>";
    }
    
    return migaCompleta;   
  }
