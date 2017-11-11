


describe("the behavior of the code in the examples", function(){

  it("primera", function(){
      expect(generateBC("www.20minutos.es", " / ")).toEqual('<span class="active">HOME</span>');      
  });
  it("segunda", function(){
      expect(generateBC("https://www.codewars.com/kata/breadcrumb-generator/train/javascript", " / ")).toEqual('<a href="/">HOME</a> / <a href="/kata/">KATA</a> / <a href="/kata/breadcrumb-generator/">BREADCRUMB GENERATOR</a> / <a href="/kata/breadcrumb-generator/train/">TRAIN</a> / <span class="active">JAVASCRIPT</span>');
  });
  it("tercera", function(){
      expect(generateBC("http://www.toshiba.com/esto-es-a-example-for-prueba-de-migas-de-pan/migas/prueba/index.htm#top", " : ")).toEqual('<a href="/">HOME</a> : <a href="/esto-es-a-example-for-prueba-de-migas-de-pan/">EEEPDMDP</a> : <a href="/esto-es-a-example-for-prueba-de-migas-de-pan/migas/">MIGAS</a> : <span class="active">PRUEBA</span>');
  });
  it("cuarta", function(){
      expect(generateBC("https://empresa.nestle.es/sala-de-prensa/actualidad-nestle/nestle-compromete-usar-huevos-gallinas-libertad-europa", " | ")).toEqual('<a href="/">HOME</a> | <a href="/sala-de-prensa/">SALA DE PRENSA</a> | <a href="/sala-de-prensa/actualidad-nestle/">ACTUALIDAD NESTLE</a> | <span class="active">NCUHGLE</span>');
  });
  it("quinta", function(){
      expect(generateBC("www.msn.com/es-es/noticias/espana/puigdemont-denuncia", " > ")).toEqual('<a href="/">HOME</a> > <a href="/es-es/">ES ES</a> > <a href="/es-es/noticias/">NOTICIAS</a> > <a href="/es-es/noticias/espana/">ESPANA</a> > <span class="active">PUIGDEMONT DENUNCIA</span>');
  });
  it("sexta", function(){
      expect(generateBC("http://www.elmundo.es/deportes/futbol.html", " + ")).toEqual('<a href="/">HOME</a> + <a href="/deportes/">DEPORTES</a> + <span class="active">FUTBOL</span>');
  });
  it("septima", function(){
      expect(generateBC("https://www.mrwonderfulshop.es/es/album-the-viaje-vamos-a-jugar.html", " : ")).toEqual('<a href="/">HOME</a> : <a href="/es/">ES</a> : <span class="active">ALBUM THE VIAJE VAMOS A JUGAR</span>');
  });
  it("octava", function(){
      expect(generateBC("holaGemurris.org/", " : ")).toEqual('<span class="active">HOME</span>');
  });
  it("novena", function(){
      expect(generateBC("www.holaGemurris.es/espana/esta-agenda-esta-llena-of-ideas-para-conquistar-the-world/paz/index.php", " > ")).toEqual('<a href="/">HOME</a> > <a href="/espana/">ESPANA</a> > <a href="/espana/esta-agenda-esta-llena-of-ideas-para-conquistar-the-world/">EAELIPCW</a> > <span class="active">PAZ</span>');
  });
  it("decima", function(){
      expect(generateBC("https://tiendas.mediamarkt.es/informatica.asp", " * ")).toEqual('<a href="/">HOME</a> * <span class="active">INFORMATICA</span>');
  });

});


