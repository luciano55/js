var myVar_let = `<a href='../apuntes/JsJonMircha/js03.html'>Clase 03: var - let</a>
   <br>
   <div class = 'paragraph05 litle'> 
      <div>
<div><span>&lt;!</span><span>DOCTYPE</span><span>&nbsp;</span><span>html</span><span>&gt;</span></div>
<div><span>&lt;</span><span>html</span><span>&nbsp;</span><span>lang</span><span>=</span><span>"en"</span><span>&gt;</span></div>
<div><span>&lt;</span><span>head</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>meta</span><span>&nbsp;</span><span>charset</span><span>=</span><span>"UTF-8"</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>meta</span><span>&nbsp;</span><span>name</span><span>=</span><span>"viewport"</span><span>&nbsp;</span><span>content</span><span>=</span><span>"width=device-width,&nbsp;initial-scale=1.0"</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>title</span><span>&gt;</span><span>Document</span><span>&lt;/</span><span>title</span><span>&gt;</span></div>
<div><span>&lt;/</span><span>head</span><span>&gt;</span></div>
<div><span>&lt;</span><span>body</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>h1</span><span>&gt;</span><span>JavaScript&nbsp;Fundamentos:&nbsp;&Aacute;mbito:var&nbsp;y&nbsp;let&nbsp;</span><span>&lt;/</span><span>h1</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>h2</span><span>&gt;</span><span>Intenta&nbsp;usar&nbsp;let</span><span>&lt;/</span><span>h2</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>musica</span><span>&nbsp;=</span><span>"Rock"</span><span>;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"var&nbsp;musica&nbsp;antes&nbsp;del&nbsp;bloque"</span><span>,</span><span>musica</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>musica</span><span>&nbsp;=</span><span>"Pop"</span><span>;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"var&nbsp;musica&nbsp;dentro&nbsp;del&nbsp;bloque"</span><span>,</span><span>musica</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"var&nbsp;musica&nbsp;despues&nbsp;del&nbsp;bloque"</span><span>,</span><span>musica</span><span>);</span></div>
<br />
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>////&nbsp;Ahora&nbsp;con&nbsp;let</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Ahora&nbsp;con&nbsp;let"</span><span>);</span></div>
<br />
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>musica2</span><span>&nbsp;=</span><span>"Rock"</span><span>;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"let&nbsp;musica&nbsp;antes&nbsp;del&nbsp;bloque"</span><span>,</span><span>musica2</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>musica2</span><span>&nbsp;=</span><span>"Pop"</span><span>;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"let&nbsp;musica&nbsp;dentro&nbsp;del&nbsp;bloque"</span><span>,</span><span>musica2</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"let&nbsp;musica&nbsp;despues&nbsp;del&nbsp;bloque"</span><span>,</span><span>musica2</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
<div><span>&lt;/</span><span>body</span><span>&gt;</span></div>
<div><span>&lt;/</span><span>html</span><span>&gt;</span></div>`;

var myCons = ` <a href="../apuntes/JsJonMircha/js04.html">Clase 04: const</a>
   <br>
   <div class = "paragraph05 litle" > 
       <div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>PI</span><span>&nbsp;=&nbsp;</span><span>3.141516</span><span>;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"El&nbsp;n&uacute;mero&nbsp;PI"</span><span>,</span><span>PI</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//PI&nbsp;=&nbsp;0.9;&nbsp;Uncaught&nbsp;TypeError:&nbsp;Assignment&nbsp;to&nbsp;constant&nbsp;variable.</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>IES</span><span>&nbsp;=&nbsp;</span><span>"Arroyo&nbsp;Harnina"</span><span>;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//IES="Carolina&nbsp;Coronado";&nbsp;Uncaught&nbsp;TypeError:&nbsp;Assignment&nbsp;to&nbsp;constant&nbsp;variable.</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>COCHE</span><span>&nbsp;=&nbsp;{</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>motor&nbsp;:</span><span>&nbsp;</span><span>"Ineyecci&oacute;n&nbsp;k78s"</span><span>,</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>neumatico&nbsp;:</span><span>&nbsp;</span><span>"Firelli"</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>COLOR</span><span>&nbsp;=&nbsp;[</span><span>"Azul"</span><span>,&nbsp;</span><span>"blanco"</span><span>];</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>COCHE</span><span>.</span><span>faro</span><span>&nbsp;=&nbsp;</span><span>"Al&oacute;genos"</span><span>;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>COLOR</span><span>.</span><span>push</span><span>&nbsp;=&nbsp;</span><span>"anaranjado"</span><span>;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Mi&nbsp;coche:"</span><span>,&nbsp;</span><span>COCHE</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Mis&nbsp;colores&nbsp;favoritos:"</span><span>,&nbsp;</span><span>COLOR</span><span>);</span></div>
<br />
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>MOTO</span><span>&nbsp;=&nbsp;{</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>motor:</span><span>&nbsp;</span><span>"turbo...."</span><span>,</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>neumatico&nbsp;:</span><span>&nbsp;</span><span>"Michelin"</span><span>&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>MOTO</span><span>.</span><span>faro</span><span>&nbsp;=&nbsp;</span><span>"led"</span><span>;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;MOTO&nbsp;=&nbsp;COCHE;&nbsp;al&nbsp;cambiar&nbsp;la&nbsp;referencia&nbsp;&nbsp;Uncaught&nbsp;TypeError:&nbsp;Assignment&nbsp;to&nbsp;constant&nbsp;variable.</span></div>
<br />
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>ARCOIRIS</span><span>&nbsp;=&nbsp;&nbsp;[</span><span>"Rojo"</span><span>,</span><span>"naranja"</span><span>&nbsp;,</span><span>"amarillo"</span><span>,</span><span>"verde"</span><span>&nbsp;,</span><span>"cian"</span><span>,&nbsp;</span><span>"azul"</span><span>];</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>ARCOIRIS</span><span>.</span><span>push</span><span>(</span><span>"violeta"</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"ARCOIRIS:"</span><span>,&nbsp;</span><span>ARCOIRIS</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//COLOR&nbsp;=&nbsp;ARCOIRIS;&nbsp;al&nbsp;cambiar&nbsp;la&nbsp;referencia&nbsp;&nbsp;Uncaught&nbsp;TypeError:&nbsp;Assignment&nbsp;to&nbsp;constant&nbsp;variable.</span></div>

<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>

</div>`;  

var myString = `<a href="../apuntes/JsJonMircha/js05.html">Clase 05: String</a>
   <br>
   <div class = "paragraph05 litle" > 
    <div>   

      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>nombre</span><span>&nbsp;=&nbsp;</span><span>"Luciano"</span><span>;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>apellido</span><span>&nbsp;=&nbsp;</span><span>"Romero&nbsp;Moreno"</span><span>;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>saludo</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>String</span><span>(</span><span>"Hola&nbsp;Mundo"</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>nombre</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>apellido</span><span>);&nbsp;&nbsp;&nbsp;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>saludo</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nombre</span><span>.</span><span>dies</span><span>&nbsp;=</span><span>"j"</span><span>;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>saludo</span><span>.</span><span>diez</span><span>&nbsp;=</span><span>"j"</span><span>;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>nombre</span><span>);&nbsp;&nbsp;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>saludo</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>lorem</span><span>&nbsp;=&nbsp;</span><span>"Lorem&nbsp;ipsum&nbsp;dolor&nbsp;sit&nbsp;amet,&nbsp;consectetur&nbsp;adipisicing&nbsp;elit.&nbsp;Asperiores&nbsp;quia&nbsp;voluptatum&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;atque&nbsp;temporibus,&nbsp;quas&nbsp;reiciendis&nbsp;in,&nbsp;fugit&nbsp;eligendi&nbsp;laboriosam&nbsp;deleniti&nbsp;veniam,&nbsp;aliquam&nbsp;porro&nbsp;debitis.&nbsp;Enim&nbsp;vero&nbsp;rerum&nbsp;labore&nbsp;error&nbsp;ducimus."</span><span>;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>&nbsp;(</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nombre</span><span>.</span><span>length</span><span>,</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>apellido</span><span>.</span><span>length</span><span>,</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>saludo</span><span>.</span><span>length</span><span>,</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>lorem</span><span>.</span><span>length</span><span>,</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nombre</span><span>.</span><span>toUpperCase</span><span>(),</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>apellido</span><span>.</span><span>toLowerCase</span><span>(),</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>lorem</span><span>.</span><span>includes</span><span>(</span><span>"amet"</span><span>),</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>lorem</span><span>.</span><span>split</span><span>(</span><span>"."</span><span>)</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
      </div>
   </div> `;

   var myConcat = " <a href='../apuntes/JsJonMircha/js06.html'>Clase 06: Concatenación</a><br><div class = 'paragraph05 litle'> <div>"

    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>nombre</span><span>&nbsp;=&nbsp;</span><span>'Luciano'</span><span>;</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>apellido</span><span>&nbsp;=&nbsp;</span><span>'Romero&nbsp;Moreno'</span><span>;</span></div>"
    + "    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Concatenaci&oacute;n</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>saludo</span><span>&nbsp;=&nbsp;</span><span>'Hola&nbsp;mi&nbsp;nombre&nbsp;es&nbsp;'</span><span>&nbsp;+&nbsp;</span><span>nombre</span><span>&nbsp;+&nbsp;</span><span>'&nbsp;'</span><span>&nbsp;+&nbsp;</span><span>apellido</span><span>&nbsp;+&nbsp;</span><span>'.'</span><span>;</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>saludo</span><span>);</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Interpolaci&oacute;n&nbsp;de&nbsp;variables&nbsp;Template&nbsp;String&nbsp;&nbsp;&nbsp;</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>otroSaludo</span><span>&nbsp;=&nbsp;&nbsp;</span><span>`Hola&nbsp;mi&nbsp;nombre&nbsp;es&nbsp;</span><span>${</span><span>nombre</span><span>}</span><span>&nbsp;</span><span>${</span><span>apellido</span><span>}</span><span>.`</span><span>;</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>otroSaludo</span><span>);</span></div>"
    + "     <br />"
    + "    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>ul</span><span>&nbsp;=&nbsp;</span><span>'&lt;ul&gt;&lt;li&gt;Primavera&lt;/li&gt;&lt;li&gt;Verano&lt;/li&gt;&lt;li&gt;Oto&ntilde;o&lt;/li&gt;&lt;li&gt;Invierno&lt;/li&gt;&lt;/ul'</span><span>;</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>ul</span><span>);</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>ul2</span><span>&nbsp;=&nbsp;</span><span>`</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Primavera&lt;/li&gt;</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Verano&lt;/li&gt;</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Oto&ntilde;o&lt;/li&gt;</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Invierno&lt;/li&gt;</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;`</span><span>;</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>ul2</span><span>);</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>ul3</span><span>&nbsp;=&nbsp;</span><span>'&lt;ul&gt;'</span><span>;</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>ul3</span><span>+=&nbsp;</span><span>'&lt;li&gt;Primavera&lt;/li&gt;'</span><span>;</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>ul3</span><span>+=&nbsp;</span><span>'&lt;li&gt;Verano&lt;/li&gt;'</span><span>;</span></div>" 
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>ul3</span><span>+=&nbsp;</span><span>'&lt;li&gt;Oto&ntilde;o&lt;/li&gt;'</span><span>;</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>ul3</span><span>+=&nbsp;</span><span>'&lt;li&gt;Invierno&lt;/li&gt;'</span><span>;</span></div>"
    + "     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>ul3</span><span>+=&nbsp;</span><span>'&lt;/ul&gt;'</span><span>;</span></div>"
    + "      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>ul3</span><span>);</span></div>"
    + "      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>"
    + "     </div> " ;
    var myNumber = `
        <a href="../apuntes/JsJonMircha/js07.html">Clase 07: Number</a>
       <br>
       <div class = "paragraph05 litle" > 
        <div>
      
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
          <br />
          <div><span>let</span><span>&nbsp;</span><span>n</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Number</span><span>(</span><span>'123'</span><span>);&nbsp;</span><span>//&nbsp;n&nbsp;===&nbsp;123&nbsp;es&nbsp;false</span></div>
          <div><span>console</span><span>.</span><span>log</span><span>(</span><span>n</span><span>==</span><span>123</span><span>,</span><span>n</span><span>===</span><span>123</span><span>);</span></div>
          <div><span>//&nbsp;&iquest;?&nbsp;Por&nbsp;que&nbsp;el&nbsp;tipo&nbsp;de&nbsp;&nbsp;n&nbsp;es&nbsp;una&nbsp;referencia</span></div>
          <div><span>//&nbsp;y&nbsp;el&nbsp;de&nbsp;123&nbsp;es&nbsp;number</span></div>
          <div><span>var</span><span>&nbsp;</span><span>m</span><span>&nbsp;=&nbsp;</span><span>Number</span><span>(</span><span>'123'</span><span>);&nbsp;</span><span>//&nbsp;m&nbsp;===&nbsp;123&nbsp;es&nbsp;true</span></div>
          <div><span>console</span><span>.</span><span>log</span><span>(</span><span>m</span><span>==</span><span>123</span><span>,</span><span>m</span><span>===</span><span>123</span><span>);</span></div>
          <div><span>console</span><span>.</span><span>log</span><span>(</span><span>n</span><span>&nbsp;</span><span>instanceof</span><span>&nbsp;</span><span>Number</span><span>);&nbsp;</span><span>//&nbsp;es&nbsp;true</span></div>
          <div><span>console</span><span>.</span><span>log</span><span>(</span><span>m</span><span>&nbsp;</span><span>instanceof</span><span>&nbsp;</span><span>Number</span><span>);&nbsp;</span><span>//&nbsp;es&nbsp;false</span></div>
          <br /><br /><br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>a</span><span>&nbsp;=&nbsp;</span><span>2</span><span>;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>b</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Number</span><span>(</span><span>1</span><span>);</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>c</span><span>&nbsp;=&nbsp;</span><span>7.19</span><span>;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>a</span><span>,</span><span>b</span><span>);</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>c</span><span>.</span><span>toFixed</span><span>(</span><span>1</span><span>));&nbsp;</span><span>//&nbsp;7.2</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>c</span><span>.</span><span>toFixed</span><span>(</span><span>5</span><span>));&nbsp;</span><span>//&nbsp;7.19000</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>parseInt</span><span>(</span><span>c</span><span>));&nbsp;</span><span>//&nbsp;7</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>parseFloat</span><span>(</span><span>c</span><span>));&nbsp;</span><span>//&nbsp;7.19</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>d</span><span>&nbsp;=&nbsp;</span><span>"5.6"</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>typeof</span><span>&nbsp;</span><span>c</span><span>,</span><span>typeof</span><span>&nbsp;</span><span>d</span><span>);&nbsp;</span><span>//number&nbsp;,&nbsp;string</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>a</span><span>&nbsp;+&nbsp;</span><span>b</span><span>);&nbsp;</span><span>//&nbsp;3</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>c</span><span>&nbsp;+&nbsp;</span><span>d</span><span>);&nbsp;</span><span>//&nbsp;7.195.6</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>c</span><span>&nbsp;+&nbsp;</span><span>parseInt</span><span>(</span><span>d</span><span>));&nbsp;&nbsp;</span><span>//&nbsp;12.190000000000001</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>c</span><span>&nbsp;+&nbsp;</span><span>parseFloat</span><span>(</span><span>d</span><span>));&nbsp;&nbsp;</span><span>//&nbsp;12.79</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>c</span><span>&nbsp;+&nbsp;</span><span>Number</span><span>.</span><span>parseInt</span><span>(</span><span>d</span><span>));&nbsp;&nbsp;</span><span>//&nbsp;12.190000000000001</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>c</span><span>&nbsp;+&nbsp;</span><span>Number</span><span>.</span><span>parseFloat</span><span>(</span><span>d</span><span>));&nbsp;&nbsp;</span><span>//&nbsp;12.79</span></div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;parseInt&nbsp;y&nbsp;parseFloat&nbsp;est&aacute;n&nbsp;en&nbsp;el&nbsp;prototype&nbsp;de&nbsp;Object</span></div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
         
          </div>
       </div>   
       <a href="javascript: history.go(-1)">Volver</a>
       </div>  `;
var myBoolean = `<a href="../apuntes/JsJonMircha/js08.html">Clase 08: Boolean</a>
   <br>
   <div class = "paragraph05 litle" > 
    <div>  

      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Asignacion&nbsp;directa</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>sw11</span><span>&nbsp;=&nbsp;</span><span>true</span><span>;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>sw12</span><span>&nbsp;=&nbsp;</span><span>false</span><span>;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>sw11</span><span>,</span><span>sw12</span><span>);&nbsp;</span><span>//&nbsp;true&nbsp;&nbsp;false</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>typeof</span><span>&nbsp;</span><span>sw11</span><span>,&nbsp;</span><span>typeof</span><span>&nbsp;</span><span>sw12</span><span>);&nbsp;</span><span>//&nbsp;boolean&nbsp;boolean</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;mediante&nbsp;function</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>sw21</span><span>&nbsp;=&nbsp;</span><span>Boolean</span><span>(</span><span>true</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>sw22</span><span>&nbsp;=&nbsp;</span><span>Boolean</span><span>(</span><span>false</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>sw21</span><span>,</span><span>sw22</span><span>);&nbsp;</span><span>//&nbsp;true&nbsp;&nbsp;false</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>typeof</span><span>&nbsp;</span><span>sw21</span><span>,&nbsp;</span><span>typeof</span><span>&nbsp;</span><span>sw22</span><span>);&nbsp;</span><span>//&nbsp;boolean&nbsp;boolean</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;mediante&nbsp;constructor</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>sw31</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Boolean</span><span>(</span><span>true</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>sw32</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Boolean</span><span>(</span><span>false</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>sw31</span><span>,</span><span>sw32</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Boolean{true}&nbsp;&nbsp;Boolean{false}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>typeof</span><span>&nbsp;</span><span>sw31</span><span>,&nbsp;</span><span>typeof</span><span>&nbsp;</span><span>sw32</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;object&nbsp;object</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Ejemplos</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Boolean</span><span>(</span><span>0</span><span>));&nbsp;</span><span>//&nbsp;false</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Boolean</span><span>(-</span><span>7</span><span>));&nbsp;&nbsp;</span><span>//&nbsp;true</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Boolean</span><span>(</span><span>""</span><span>));&nbsp;&nbsp;</span><span>//&nbsp;false</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Boolean</span><span>(</span><span>"&nbsp;"</span><span>));&nbsp;&nbsp;</span><span>//&nbsp;true</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Boolean</span><span>(</span><span>null</span><span>));&nbsp;</span><span>//&nbsp;false</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Boolean</span><span>(</span><span>undefined</span><span>));&nbsp;</span><span>//&nbsp;false</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Boolean</span><span>(</span><span>"abc"</span><span>));&nbsp;</span><span>//&nbsp;true</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Boolean</span><span>(</span><span>"0034"</span><span>));&nbsp;</span><span>//&nbsp;true</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>     
    </div>
  </div>`;

  var myNullUnN = '<a href="../apuntes/JsJonMircha/js09.html">Clase 09: Valores Primitivos: null, undefined y NaN</a><br> <div class = "paragraph05 litle" > <div>'
+ '    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>    <br />'
+ '    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;null</span></div>'
+ '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>nulo</span><span>&nbsp;=&nbsp;</span><span>null</span><span>;</span></div>'
+ '    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>nulo</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;null</span></div>'
+ '   <br /> <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;undefined</span></div>'
+ '    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>indefinida</span><span>;</span></div>'
+ '    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>indefinida</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;undefined</span></div>'
+ '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;&nbsp;&nbsp;console.log(Marta);&nbsp;&nbsp;//&nbsp;js09.html:31&nbsp;Uncaught&nbsp;ReferenceError:&nbsp;Marta&nbsp;is&nbsp;not&nbsp;defined</span></div>'
+ '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
+ '    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;NaN</span></div>'
+ '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>noEsUnNumero</span><span>&nbsp;=&nbsp;</span><span>"hola"</span><span>&nbsp;*&nbsp;</span><span>3.141516</span><span>;</span></div>'
+ '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>noEsUnNumero</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;NaN</span></div>'
+ '    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>'
+ '    </div></div>' ;

var myFunction = '<a href="../apuntes/JsJonMircha/js10.html">Clase 10: Funciones</a><br><div class = "paragraph05 litle" > <div>'

  +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>'
  +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Distintas&nbsp;formas&nbsp;para&nbsp;declarar.&nbsp;Veamos&nbsp;algunas</span></div>'
  +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;La&nbsp;definici&oacute;n&nbsp;de&nbsp;una&nbsp;funci&oacute;n&nbsp;(tambi&eacute;n&nbsp;llamada&nbsp;declaraci&oacute;n&nbsp;de&nbsp;funci&oacute;n&nbsp;o&nbsp;sentencia&nbsp;de&nbsp;funci&oacute;n</span></div>'
  +'   <br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>square</span><span>(</span><span>3</span><span>));</span></div>'
  +'  <br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>function</span><span>&nbsp;</span><span>square</span><span>(</span><span>number</span><span>)&nbsp;{</span></div>'
   +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span>&nbsp;</span><span>number</span><span>&nbsp;*&nbsp;</span><span>number</span><span>;</span></div>'
   +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
   +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>typeof</span><span>&nbsp;</span><span>square</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;function</span></div>'
   +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//Expresiones&nbsp;de&nbsp;funci&oacute;n.&nbsp;&nbsp;</span></div>'
   +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;console.log(producto(4));&nbsp;Uncaught&nbsp;TypeError:&nbsp;producto&nbsp;is&nbsp;not&nbsp;a&nbsp;function</span></div>'
   +'    <br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>producto</span><span>&nbsp;=&nbsp;</span><span>function</span><span>&nbsp;(</span><span>number</span><span>)&nbsp;{&nbsp;</span><span>//&nbsp;En&nbsp;esta&nbsp;ocasi&oacute;n&nbsp;la&nbsp;parte&nbsp;derecha&nbsp;a&nbsp;=&nbsp;es&nbsp;una&nbsp;funci&oacute;n&nbsp;an&oacute;nima</span></div>'
      +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span>&nbsp;</span><span>number</span><span>&nbsp;*&nbsp;</span><span>number</span><span>;</span></div>'
      +'     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>'
      +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>typeof</span><span>&nbsp;</span><span>producto</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;function</span></div>'
      +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>producto</span><span>(</span><span>4</span><span>));</span></div>'
      +'     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
      +'     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Js&nbsp;realiza&nbsp;una&nbsp;precompilaci&oacute;n&nbsp;previa&nbsp;de&nbsp;los&nbsp;objetos&nbsp;que&nbsp;intervienen&nbsp;el&nbsp;el&nbsp;programa</span></div>'
      +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Los&nbsp;motores&nbsp;de&nbsp;los&nbsp;navegadores&nbsp;suelen&nbsp;mezclar&nbsp;las&nbsp;dos&nbsp;t&eacute;cnicas&nbsp;de&nbsp;interpretaci&oacute;n&nbsp;y&nbsp;de&nbsp;compilacion</span></div>'
      +'   <div><span>&nbsp;</span></div>'
      +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Recursividad</span></div>'
      +'   <br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;console.log(factorial(3));&nbsp;Uncaught&nbsp;TypeError:&nbsp;factorial&nbsp;is&nbsp;not&nbsp;a&nbsp;function</span></div>'
      +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>factorial</span><span>&nbsp;=&nbsp;</span><span>function</span><span>&nbsp;</span><span>fac</span><span>(</span><span>n</span><span>)&nbsp;{</span><span>return</span><span>&nbsp;</span><span>n</span><span>&lt;</span><span>2</span><span>&nbsp;?&nbsp;</span><span>1</span><span>&nbsp;:&nbsp;</span><span>n</span><span>*</span><span>fac</span><span>(</span><span>n</span><span>-</span><span>1</span><span>)};</span></div>'
      +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;console.log2(factorial(3));&nbsp;Uncaught&nbsp;TypeError:&nbsp;console.log2&nbsp;is&nbsp;not&nbsp;a&nbsp;function&nbsp;at</span></div>'
      +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>typeof</span><span>&nbsp;</span><span>factorial</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;function</span></div>'
      +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>factorial</span><span>(</span><span>3</span><span>));</span></div>'
      +'    <br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>coche</span><span>&nbsp;=&nbsp;{};</span></div>'
      +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>coche</span><span>);</span></div>'
      +'     <br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>num</span><span>&nbsp;=&nbsp;</span><span>0</span><span>;</span></div>'
      +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>myFunc</span><span>;</span></div>'
      +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>&nbsp;(</span><span>num</span><span>&nbsp;==&nbsp;</span><span>0</span><span>){</span></div>'
         +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>myFunc</span><span>&nbsp;=&nbsp;</span><span>function</span><span>(</span><span>theObject</span><span>)&nbsp;{</span></div>'
            +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>theObject</span><span>.</span><span>make</span><span>&nbsp;=&nbsp;</span><span>"Toyota"</span></div>'
            +'     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>'
            +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>'
            +'     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>typeof</span><span>&nbsp;</span><span>myFunc</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;function</span></div>'
            +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>myFunc</span><span>(</span><span>coche</span><span>);</span></div>'
            +'     <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>coche</span><span>);</span></div>'
            +'    <br /><br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;El&nbsp;Patr&oacute;n&nbsp;M&oacute;dulo&nbsp;()()&nbsp;es&nbsp;autoejecutable</span></div>'
            +'  <br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(</span><span>function</span><span>(</span><span>n</span><span>){</span></div>'
               +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>n</span><span>);</span></div>'
               +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span>&nbsp;&nbsp;</span><span>function</span><span>(</span><span>n</span><span>){&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Probar&nbsp;sin&nbsp;return</span></div>'
                  +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>n</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                  +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}(</span><span>2</span><span>);</span></div>'
                  +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})(</span><span>2</span><span>);</span></div>'
                  +'   <br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Con&nbsp;Constructor</span></div>'
                  +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>multiplicar</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Function</span><span>(</span><span>"x"</span><span>,&nbsp;</span><span>"y"</span><span>,&nbsp;</span><span>"return&nbsp;x&nbsp;*&nbsp;y"</span><span>);</span></div>'
                  +'   <br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>typeof</span><span>&nbsp;</span><span>multiplicar</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;function</span></div>'
                  +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>multiplicar</span><span>(</span><span>4</span><span>,</span><span>5</span><span>));&nbsp;&nbsp;&nbsp;</span></div>'
                  +'     <br /><br />'
                  +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Todas&nbsp;las&nbsp;funciones&nbsp;son&nbsp;de&nbsp;tipo&nbsp;function&nbsp;</span></div>'
                  +'  <br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;&nbsp;&Aacute;mbito:&nbsp;&nbsp;&nbsp;&nbsp;Toda&nbsp;funci&oacute;n&nbsp;&nbsp;tiene&nbsp;su&nbsp;propio&nbsp;&aacute;mbito&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                  +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Las&nbsp;variables&nbsp;definidas&nbsp;dentro&nbsp;de&nbsp;una&nbsp;funci&oacute;n&nbsp;no&nbsp;pueden&nbsp;ser&nbsp;accedidas&nbsp;desde&nbsp;ning&uacute;n&nbsp;lugar&nbsp;fuera&nbsp;de&nbsp;la&nbsp;funci&oacute;n</span></div>'
                  +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Sin&nbsp;embargo,&nbsp;una&nbsp;funci&oacute;n&nbsp;puede&nbsp;acceder&nbsp;a&nbsp;todas&nbsp;las&nbsp;variables&nbsp;y&nbsp;funciones&nbsp;definidas&nbsp;dentro&nbsp;del&nbsp;&aacute;mbito&nbsp;en&nbsp;el&nbsp;cual&nbsp;est&aacute;&nbsp;definida.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                  +'  <br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Las&nbsp;siguientes&nbsp;variables&nbsp;est&aacute;n&nbsp;&nbsp;definidas&nbsp;en&nbsp;el&nbsp;&aacute;mbito&nbsp;global</span></div>'
                  +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>num1</span><span>&nbsp;=&nbsp;</span><span>20</span><span>,</span></div>'
                  +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>num2</span><span>&nbsp;=&nbsp;</span><span>3</span><span>,</span></div>'
                  +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nombre</span><span>&nbsp;=&nbsp;</span><span>"Messi"</span><span>;</span></div>'
                  +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>num3</span><span>&nbsp;=&nbsp;</span><span>5</span><span>;</span></div>'
                  +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Esta&nbsp;funci&oacute;n&nbsp;se&nbsp;define&nbsp;en&nbsp;el&nbsp;&aacute;mbito&nbsp;global</span></div>'
                  +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>function</span><span>&nbsp;</span><span>multi</span><span>()&nbsp;{</span></div>'
                     +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span>&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>num1</span><span>&nbsp;*&nbsp;</span><span>num2</span><span>&nbsp;+&nbsp;</span><span>num3</span><span>);</span></div>'
                     +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>'
                     +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>multi</span><span>();&nbsp;</span><span>//&nbsp;Retorna&nbsp;65</span></div>'
                     +'    <br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Un&nbsp;ejemplo&nbsp;de&nbsp;funci&oacute;n&nbsp;anidada</span></div>'
                     +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>function</span><span>&nbsp;</span><span>obtenerPuntaje</span><span>&nbsp;()&nbsp;{</span></div>'
                        +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>num1</span><span>&nbsp;=&nbsp;</span><span>2</span><span>,</span></div>'
                        +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>num2</span><span>&nbsp;=&nbsp;</span><span>3</span><span>;</span></div>'
                        +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>num3</span><span>&nbsp;=&nbsp;</span><span>7</span><span>;</span></div>'
                        +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>function</span><span>&nbsp;</span><span>agregar</span><span>()&nbsp;{</span></div>'
                           +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span>&nbsp;</span><span>nombre</span><span>&nbsp;+&nbsp;</span><span>"&nbsp;puntaje&nbsp;"</span><span>&nbsp;+&nbsp;(</span><span>num1</span><span>&nbsp;+&nbsp;</span><span>num2</span><span>);</span></div>'
                           +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>'
                           +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                           +'    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span>&nbsp;</span><span>agregar</span><span>();</span></div>'
                           +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>'
                           +'   <br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>obtenerPuntaje</span><span>());&nbsp;</span><span>//&nbsp;Retorna&nbsp;"Messi&nbsp;puntaje&nbsp;5"</span></div>'
                           +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>num1</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;2</span></div>'
                           +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>num3</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;2</span></div>'
                           +'  <br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>for</span><span>(&nbsp;</span><span>var</span><span>&nbsp;</span><span>x</span><span>&nbsp;=&nbsp;</span><span>0</span><span>;&nbsp;</span><span>x</span><span>&nbsp;&lt;&nbsp;</span><span>1000</span><span>;&nbsp;</span><span>x</span><span>++&nbsp;)&nbsp;{</span></div>'
                              +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Awesome&nbsp;code&nbsp;goes&nbsp;here...</span></div>'
                              +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</span></div>'
                              +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>info</span><span>(&nbsp;</span><span>x</span><span>&nbsp;);&nbsp;</span><span>//&nbsp;1000</span></div>'
                              +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                              +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>for</span><span>(&nbsp;</span><span>let</span><span>&nbsp;</span><span>y</span><span>&nbsp;=&nbsp;</span><span>0</span><span>;&nbsp;</span><span>y</span><span>&nbsp;&lt;&nbsp;</span><span>1000</span><span>;&nbsp;</span><span>y</span><span>++&nbsp;)&nbsp;{</span></div>'
                                 +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Awesome&nbsp;code&nbsp;goes&nbsp;here...</span></div>'
                                 +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</span></div>'
                                 +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//console.info(y);&nbsp;//&nbsp;Uncaught&nbsp;ReferenceError:&nbsp;y&nbsp;is&nbsp;not&nbsp;defined</span></div>'
                                 +'  <br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Hoisting</span></div>'
                                 +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></div>'
                                    +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>foo</span><span>&nbsp;=&nbsp;</span><span>"block-1"</span><span>;</span></div>'
                                    +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>info</span><span>(&nbsp;</span><span>foo</span><span>&nbsp;);&nbsp;</span><span>//&nbsp;block-1</span></div>'
                                    +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></div>'
                                       +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>foo</span><span>&nbsp;=&nbsp;</span><span>"block-2"</span><span>;</span></div>'
                                       +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>info</span><span>(&nbsp;</span><span>foo</span><span>&nbsp;);&nbsp;</span><span>//&nbsp;block-2</span></div>'
                                       +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></div>'
                                          +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>foo</span><span>&nbsp;=&nbsp;</span><span>"block-3"</span><span>;</span></div>'
                                          +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>info</span><span>(&nbsp;</span><span>foo</span><span>&nbsp;);&nbsp;</span><span>//&nbsp;block-3</span></div>'
                                          +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></div>'
                                             +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>foo</span><span>&nbsp;=&nbsp;</span><span>"block-4"</span><span>;</span></div>'
                                             +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>info</span><span>(&nbsp;</span><span>foo</span><span>&nbsp;);&nbsp;</span><span>//&nbsp;block-4</span></div>'
                                             +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>'
                                             +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>'
                                             +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>'
                                             +'   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>'
                                             +' <br />    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Par&aacute;metros</span></div>'
                                             +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</span></div>'
                                                +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>foo</span><span>&nbsp;=&nbsp;</span><span>"Hello&nbsp;World"</span><span>,</span></div>'
                                                +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>bar</span><span>&nbsp;=&nbsp;</span><span>"Goodbye&nbsp;Lenin"</span><span>,</span></div>'
                                                +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>concat</span><span>,</span></div>'
                                                +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>result</span><span>;</span></div>'
                                                +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                                                +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>concat</span><span>&nbsp;=&nbsp;</span><span>function</span><span>&nbsp;(&nbsp;...</span><span>params</span><span>&nbsp;)&nbsp;{</span></div>'
                                                   +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span>&nbsp;</span><span>params</span><span>;</span></div>'
                                                   +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>'
                                                   +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                                                   +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>result</span><span>&nbsp;=&nbsp;</span><span>concat</span><span>(&nbsp;</span><span>foo</span><span>,&nbsp;</span><span>bar</span><span>&nbsp;);</span></div>'
                                                   +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                                                   +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>info</span><span>(&nbsp;</span><span>result</span><span>&nbsp;);</span></div>'
                                                   +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>'
                                                   +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                                                   +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>info</span><span>(&nbsp;</span><span>result</span><span>&nbsp;);</span></div>'
                                                   +'  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;["Hello&nbsp;World",&nbsp;"Goodbye&nbsp;Lenin"]</span></div>'
                                                   +' <br /><br />'
                                                   +' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>'
                                                  
                                                   +'  </div></div>';