var myExpRegu =  `<a href="../apuntes/JsJonMircha/js31.html">Clase 31: Expresiones Regulares </a>
<br>
<div class = "paragraph05 litle" > 
<div><span>&lt;</span><span>script</span><span>&gt;</span><span>&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>cadena</span><span>&nbsp;=&nbsp;</span><span>"Lorem&nbsp;Ipsum&nbsp;es&nbsp;simplemente&nbsp;el&nbsp;texto&nbsp;de&nbsp;relleno&nbsp;de&nbsp;las&nbsp;imprentas&nbsp;y&nbsp;archivos&nbsp;de&nbsp;texto."</span><span>&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+&nbsp;</span><span>"&nbsp;Lorem&nbsp;Ipsum&nbsp;ha&nbsp;sido&nbsp;el&nbsp;texto&nbsp;de&nbsp;relleno&nbsp;est&aacute;ndar&nbsp;de&nbsp;las&nbsp;industrias&nbsp;desde&nbsp;el&nbsp;a&ntilde;o&nbsp;1500,&nbsp;"</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span><span>"&nbsp;cadena&nbsp;un&nbsp;impresor&nbsp;(N.&nbsp;del&nbsp;T.&nbsp;persona&nbsp;que&nbsp;se&nbsp;dedica&nbsp;a&nbsp;la&nbsp;imprenta)&nbsp;desconocido&nbsp;us&oacute;&nbsp;una&nbsp;galer&iacute;a&nbsp;de&nbsp;textos&nbsp;y"</span><span>&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span><span>"&nbsp;los&nbsp;mezcl&oacute;&nbsp;de&nbsp;tal&nbsp;manera&nbsp;que&nbsp;logr&oacute;&nbsp;hacer&nbsp;un&nbsp;libro&nbsp;de&nbsp;textos&nbsp;especimen.&nbsp;No&nbsp;s&oacute;lo&nbsp;sobrevivi&oacute;&nbsp;500&nbsp;a&ntilde;os,&nbsp;"</span><span>&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span><span>"&nbsp;sino&nbsp;que&nbsp;tambien&nbsp;ingres&oacute;&nbsp;como&nbsp;texto&nbsp;de&nbsp;relleno&nbsp;en&nbsp;documentos&nbsp;electr&oacute;nicos,&nbsp;quedando&nbsp;esencialmente&nbsp;igual&nbsp;al&nbsp;original."</span><span>&nbsp;&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span><span>"&nbsp;Fue&nbsp;popularizado&nbsp;en&nbsp;los&nbsp;60s&nbsp;con&nbsp;la&nbsp;creaci&oacute;n&nbsp;de&nbsp;las&nbsp;hojas&nbsp;"</span><span>Letraset</span><span>",&nbsp;las&nbsp;cuales&nbsp;contenian&nbsp;pasajes&nbsp;de&nbsp;Lorem&nbsp;Ipsum,"</span><span>&nbsp;&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span><span>"&nbsp;y&nbsp;m&aacute;s&nbsp;recientemente&nbsp;con&nbsp;software&nbsp;de&nbsp;autoedici&oacute;n,&nbsp;como&nbsp;por&nbsp;ejemplo&nbsp;Aldus&nbsp;PageMaker,&nbsp;el&nbsp;cual&nbsp;incluye&nbsp;versiones&nbsp;de&nbsp;Lorem&nbsp;Ipsum.&nbsp;"</span><span>;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>expReg</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>RegExp</span><span>(</span><span>"lorem"</span><span>,</span><span>"ig"</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;i&nbsp;ignora&nbsp;mayusculas&nbsp;y&nbsp;minusculas&nbsp;g&nbsp;busca&nbsp;todoas&nbsp;las&nbsp;coincidencias</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>expReg2</span><span>&nbsp;=</span><span>&nbsp;/lorem/</span><span>ig</span><span>;&nbsp;</span><span>//&nbsp;formato&nbsp;en&nbsp;js</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>expReg</span><span>.</span><span>test</span><span>(</span><span>cadena</span><span>));</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>expReg</span><span>.</span><span>exec</span><span>(</span><span>cadena</span><span>));&nbsp;</span><span>//&nbsp;proporciona&nbsp;mucha&nbsp;informacion&nbsp;de&nbsp;la&nbsp;busqueda&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>expReg2</span><span>.</span><span>test</span><span>(</span><span>cadena</span><span>));</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>expReg2</span><span>.</span><span>exec</span><span>(</span><span>cadena</span><span>));&nbsp;</span></div>
<br />
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>expReg3</span><span>&nbsp;=</span><span>&nbsp;/\d/</span><span>ig</span><span>;&nbsp;</span><span>//&nbsp;[0-9]</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>expReg3</span><span>.</span><span>test</span><span>(</span><span>cadena</span><span>));</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>expReg3</span><span>.</span><span>exec</span><span>(</span><span>cadena</span><span>));&nbsp;</span></div>
<br />
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>expReg4</span><span>&nbsp;=</span><span>&nbsp;/lorem</span><span>{1,2}</span><span>/</span><span>ig</span><span>;&nbsp;&nbsp;</span><span>//&nbsp;{}&nbsp;between</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>expReg4</span><span>.</span><span>test</span><span>(</span><span>cadena</span><span>));</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>expReg4</span><span>.</span><span>exec</span><span>(</span><span>cadena</span><span>));&nbsp;</span></div>
<br />
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>expReg5</span><span>&nbsp;=</span><span>&nbsp;/lorem</span><span>{1,}</span><span>/</span><span>ig</span><span>;&nbsp;&nbsp;</span><span>//&nbsp;{}&nbsp;between</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>expReg5</span><span>.</span><span>test</span><span>(</span><span>cadena</span><span>));</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>expReg5</span><span>.</span><span>exec</span><span>(</span><span>cadena</span><span>));&nbsp;</span></div>
<br />
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
</div> `;
var myFunAnoAuto = `<a href="../apuntes/JsJonMircha/js32.html">Clase 32: Funciones Anónimas Autoejecutables </a>
<br>
<div class = "paragraph05 litle">  <div>
<div><span>&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span><span>&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Funciones&nbsp;An&oacute;nimas&nbsp;Autoejecutables&nbsp;o&nbsp;Patr&oacute;n&nbsp;del&nbsp;modulo&nbsp;autoejecutable</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(</span><span>function</span><span>(){</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Mi&nbsp;primer&nbsp;IIFE"</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})();&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Importante&nbsp;el&nbsp;;&nbsp;final</span></div>
<br />
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(</span><span>function</span><span>(</span><span>d</span><span>,</span><span>w</span><span>,</span><span>c</span><span>){</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Mi&nbsp;segundo&nbsp;IIFE"</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>d</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>w</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>c</span><span>.</span><span>log</span><span>(</span><span>"Esto&nbsp;es&nbsp;un&nbsp;console.log"</span><span>)</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})(</span><span>document</span><span>,</span><span>window</span><span>,</span><span>console</span><span>);&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Formas&nbsp;de&nbsp;escribir&nbsp;las&nbsp;funciones&nbsp;autoejecutables</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;cl&aacute;sica</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(</span><span>function</span><span>(){</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Versi&oacute;n&nbsp;cl&aacute;sica"</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})();&nbsp;</span></div>
<br />
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;La&nbsp;Crockford&nbsp;(JavaScript&nbsp;The&nbsp;Good&nbsp;Part)</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;((</span><span>function</span><span>(){</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Versi&oacute;n&nbsp;Crockford&nbsp;"</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})());&nbsp;</span></div>
<br />
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//Unaria</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</span><span>function</span><span>(){</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Versi&oacute;n&nbsp;Unaria"</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}();&nbsp;</span></div>
<br />
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Facebook</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;!</span><span>function</span><span>(){</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Versi&oacute;n&nbsp;Facebook"</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}();&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
</div>`;

var myModImpoExpor = `<a href="../apuntes/JsJonMircha/js33.html">Clase 33: Módulos ( import / export ) </a>
<br>
<div class = "paragraph05 litle">  <div> 
<div>
<div><span>&lt;!</span><span>DOCTYPE</span><span>&nbsp;</span><span>html</span><span>&gt;</span></div>
<div><span>&lt;</span><span>html</span><span>&nbsp;</span><span>lang</span><span>=</span><span>"en"</span><span>&gt;</span></div>
<div><span>&lt;</span><span>head</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>meta</span><span>&nbsp;</span><span>charset</span><span>=</span><span>"UTF-8"</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>meta</span><span>&nbsp;</span><span>name</span><span>=</span><span>"viewport"</span><span>&nbsp;</span><span>content</span><span>=</span><span>"width=device-width,&nbsp;initial-scale=1.0"</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>title</span><span>&gt;</span><span>Js&nbsp;Fundamentos&nbsp;2020</span><span>&lt;/</span><span>title</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>link</span><span>&nbsp;</span><span>href</span><span>=</span><span>"../../css/app.css"</span><span>&nbsp;</span><span>rel</span><span>=</span><span>"stylesheet"</span><span>&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
<div><span>&lt;/</span><span>head</span><span>&gt;</span></div>
<div><span>&lt;</span><span>body</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>div</span><span>&nbsp;</span><span>class</span><span>=</span><span>"mainWrapperMovil"</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>div</span><span>&nbsp;</span><span>class</span><span>&nbsp;=&nbsp;</span><span>"paragraph03"</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>h2</span><span>&gt;</span><span>JavaScript&nbsp;Fundamentos</span><span>&lt;/</span><span>h2</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>h1</span><span>&gt;</span><span>M&oacute;dulos&nbsp;(&nbsp;import&nbsp;/&nbsp;export&nbsp;)</span><span>&lt;/</span><span>h1</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>div</span><span>&nbsp;</span><span>class</span><span>&nbsp;=&nbsp;</span><span>"paragraph05"</span><span>&gt;</span><span>&nbsp;&nbsp;&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>ul</span><span>&nbsp;</span><span>class</span><span>=</span><span>"list-item-1"</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>li</span><span>&gt;&lt;</span><span>a</span><span>&nbsp;</span><span>href</span><span>=</span><span>"https://www.youtube.com/watch?v=0GEUyQXe3NI"</span><span>&gt;</span><span>Video&nbsp;33</span><span>&lt;/</span><span>a</span><span>&gt;&lt;/</span><span>li</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>li</span><span>&gt;&lt;</span><span>a</span><span>&nbsp;</span><span>href</span><span>=</span><span>"https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export"</span><span>&gt;</span><span>export&nbsp;MDN</span><span>&lt;/</span><span>a</span><span>&gt;&lt;/</span><span>li</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>li</span><span>&gt;&lt;</span><span>a</span><span>&nbsp;</span><span>href</span><span>=</span><span>"https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import"</span><span>&gt;</span><span>import&nbsp;MDN</span><span>&lt;/</span><span>a</span><span>&gt;&lt;/</span><span>li</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>ul</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>div</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>a</span><span>&nbsp;</span><span>href</span><span>=</span><span>"javascript:&nbsp;history.go(-1)"</span><span>&gt;</span><span>Volver</span><span>&lt;/</span><span>a</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>div</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>div</span><span>&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span><span>&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>/*</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;&lt;script&nbsp;src="js/modulos.js"&nbsp;type="module"&nbsp;nomodule&gt;&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;export&nbsp;const&nbsp;PI&nbsp;=&nbsp;Math.PI;&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;import&nbsp;{PI}&nbsp;from&nbsp;"./moduloConst.js";</span></div>
<br />
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;export&nbsp;const&nbsp;aritmetica&nbsp;=&nbsp;{</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sumar,</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;restar</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};</span></div>
<br />
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Por&nbsp;defecto&nbsp;export&nbsp;default&nbsp;solamente&nbsp;1</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;por&nbsp;definici&oacute;n</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;por&nbsp;declaraci&oacute;n</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Alias&nbsp;import{aritmetica&nbsp;as&nbsp;calculo}&nbsp;from&nbsp;"./aritmetica.js";</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
<div><span>&lt;/</span><span>body</span><span>&gt;</span><span>&nbsp;</span></div>
<div><span>&lt;/</span><span>html</span><span>&gt;</span></div>
</div>`;