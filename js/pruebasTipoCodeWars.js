
Test.describe("Basic Tests",_=>{
	compareResults(generateBC("index.com/pintura/autor", " / "), 
		'<a href="/">HOME</a> / <a href="/pintura/">PINTURA</a> / <span class="active">AUTOR</span>');
	compareResults(generateBC('https://game.classcraft.com/student/class/action', ' / '), 
		'<a href="/">HOME</a> / <a href="/student/">STUDENT</a> / <a href="/student/class/">CLASS</a> / <span class="active">ACTION</span>');
	compareResults(generateBC('moodle.es/desarrollo-web-en-entorno-cliente.html', ' ? '), 
		'<a href="/">HOME</a> ? <span class="active">DWEEC</span>');
	compareResults(generateBC('moodle.es/desarrollo-web-en-entorno-cliente/index.es', ' ? '), 
		'<a href="/">HOME</a> ? <span class="active">DWEEC</span>');
	compareResults(generateBC('http://miau.phpaspmiau/migas/the-example-of-breadcrumbs-for-our-exercise-in-javascript/index.asp', ' >>> '), 
		'<a href="/">HOME</a> >>> <a href="/migas/">MIGAS</a> >>> <span class="active">EBOEJ</span>');
	compareResults(generateBC('https://migas.es/esto-es-un-ejemple-de-uso-de-migas-de-pan-o-breadcrumb/esto-es-otro-ejemplo-de-uso-de-migas-de-pan-o-breadcrumb/inicio/imagenes.htm', ' : '), 
		'<a href="/">HOME</a> : <a href="/esto-es-un-ejemple-de-uso-de-migas-de-pan-o-breadcrumb/">EEUEDUDMDPOB</a> : <a href="/esto-es-un-ejemple-de-uso-de-migas-de-pan-o-breadcrumb/esto-es-otro-ejemplo-de-uso-de-migas-de-pan-o-breadcrumb/">EEOEDUDMDPOB</a> : <a href="/esto-es-un-ejemple-de-uso-de-migas-de-pan-o-breadcrumb/esto-es-otro-ejemplo-de-uso-de-migas-de-pan-o-breadcrumb/inicio/">INICIO</a> : <span class="active">IMAGENES</span>');
	compareResults(generateBC('gmail.com/emails#info?sortBy=dest', ' / '), 
		'<a href="/">HOME</a> / <span class="active">EMAILS</span>');
	compareResults(generateBC('https://www.prueba.com/juegos/play/ciencia-ficcion/login.php?source=prueba.com', ' # '), 
		'<a href="/">HOME</a> # <a href="/juegos/">JUEGOS</a> # <a href="/juegos/play/">PLAY</a> # <a href="/juegos/play/ciencia-ficcion/">CIENCIA FICCION</a> # <span class="active">LOGIN</span>');
	compareResults(generateBC('http:linkedin.es/inicio/contactos/favoritos/index.html?i#', ' + '), 
		'<a href="/">HOME</a> + <a href="/inicio/">INICIO</a> + <a href="/inicio/contactos/">CONTACTOS</a> + <span class="active">FAVORITOS</span>');
	compareResults(generateBC('www.netflix.com/series/mas-vistas/similars-to-orphan-black-for-research?rank=recent_first&', ' : '), 
	'<a href="/">HOME</a> : <a href="/series/">SERIES</a> : <a href="/series/mas-vistas/">MAS VISTAS</a> : <span class="active">SOBR</span>');
})

