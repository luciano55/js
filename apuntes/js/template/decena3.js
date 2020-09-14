var myArrwFun = `<a href="../apuntes/JsJonMircha/js21.html">Clase 21: Arrow Function</a>
<br>
<div class = "paragraph05 litle" > 
  <div>        
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>saludo</span><span>&nbsp;=&nbsp;</span><span>function</span><span>(){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Hola"</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>saludo</span><span>();</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>saludar</span><span>&nbsp;=&nbsp;()</span><span>=&gt;</span><span>{</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Hola"</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>saludar</span><span>();</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>saludar2</span><span>&nbsp;=&nbsp;()</span><span>=&gt;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Hola"</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>saludar2</span><span>();</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>saludar3</span><span>&nbsp;=&nbsp;(</span><span>nombre</span><span>)</span><span>=&gt;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>` + 'Hola&nbsp;</span><span>${</span><span>nombre</span><span>}</span><span>`</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>' +
      + `<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>saludar3</span><span>(</span><span>"Irma"</span><span>);</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>saludar4</span><span>&nbsp;=&nbsp;</span><span>nombre</span><span>=&gt;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>` + 'Hola&nbsp;</span><span>${</span><span>nombre</span><span>}</span><span>`</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>' +
      `<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>saludar4</span><span>(</span><span>"Irma"</span><span>);</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>sumar</span><span>&nbsp;=&nbsp;</span><span>function</span><span>(</span><span>a</span><span>,</span><span>b</span><span>){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span>&nbsp;</span><span>a</span><span>&nbsp;+&nbsp;</span><span>b</span><span>;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>sumar</span><span>(</span><span>8</span><span>,</span><span>9</span><span>));</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>sumar2</span><span>&nbsp;=&nbsp;(</span><span>a</span><span>,</span><span>b</span><span>)</span><span>=&gt;</span><span>a</span><span>&nbsp;+&nbsp;</span><span>b</span><span>;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>sumar2</span><span>(</span><span>8</span><span>,</span><span>9</span><span>));</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>funcionDeVariasLineas</span><span>&nbsp;=&nbsp;()&nbsp;</span><span>=&gt;</span><span>&nbsp;{</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Uno"</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"dos"</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"tres"</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>funcionDeVariasLineas</span><span>&nbsp;();</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>numeros</span><span>&nbsp;=&nbsp;[</span><span>1</span><span>,</span><span>2</span><span>,</span><span>3</span><span>,</span><span>4</span><span>,</span><span>5</span><span>];</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>numeros</span><span>.</span><span>forEach</span><span>(</span><span>function</span><span>(</span><span>el</span><span>,</span><span>index</span><span>){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>`+ 'El&nbsp;elemento&nbsp;</span><span>${</span><span>el</span><span>}</span><span>&nbsp;esta&nbsp;en&nbsp;la&nbsp;posici&oacute;n&nbsp;</span><span>${</span><span>el</span><span>}</span><span>`</span><span>);</span></div>' +
      `<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>numeros2</span><span>&nbsp;=&nbsp;[</span><span>1</span><span>,</span><span>2</span><span>,</span><span>3</span><span>,</span><span>4</span><span>,</span><span>5</span><span>];</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>numeros2</span><span>.</span><span>forEach</span><span>((</span><span>el</span><span>,</span><span>index</span><span>)</span><span>=&gt;</span><span>{</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>`+ '</span><span>${</span><span>el</span><span>}</span><span>&nbsp;esta&nbsp;en&nbsp;la&nbsp;posici&oacute;n&nbsp;</span><span>${</span><span>el</span><span>}</span><span>`</span><span>);</span></div>' +
      `<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>numeros3</span><span>&nbsp;=&nbsp;[</span><span>1</span><span>,</span><span>2</span><span>,</span><span>3</span><span>,</span><span>4</span><span>,</span><span>5</span><span>];</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>numeros3</span><span>.</span><span>forEach</span><span>((</span><span>el</span><span>,</span><span>index</span><span>)</span><span>=&gt;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>` + '</span><span>${</span><span>el</span><span>}</span><span>&nbsp;esta&nbsp;en&nbsp;la&nbsp;posici&oacute;n&nbsp;</span><span>${</span><span>el</span><span>}</span><span>`</span><span>));</span></div>' +
      `<br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;This</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>function</span><span>&nbsp;</span><span>Perro</span><span>(){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>this</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>Perro</span><span>();&nbsp;</span><span>//&nbsp;Window</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>myPerro</span><span>&nbsp;=&nbsp;{</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nombre:</span><span>"boby"</span><span>,</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>ladrar</span><span>:</span><span>function</span><span>(){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>this</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>myPerro</span><span>.</span><span>ladrar</span><span>();&nbsp;</span><span>//&nbsp;myPerro</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>myPerro2</span><span>&nbsp;=&nbsp;{</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nombre:</span><span>"boby"</span><span>,</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>ladrar</span><span>:</span><span>()</span><span>=&gt;</span><span>{</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>this</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>myPerro2</span><span>.</span><span>ladrar</span><span>();&nbsp;</span><span>//&nbsp;Window</span></div>
      <br>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>myPerro3</span><span>&nbsp;=&nbsp;{</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nombre:</span><span>"boby"</span><span>,</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>ladrar</span><span>(){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>this</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>myPerro3</span><span>.</span><span>ladrar</span><span>();&nbsp;</span><span>//&nbsp;myPerro3</span></div>
      <br><br>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>   
             
  </div>
</div>`;

var myProto = `<a href="../apuntes/JsJonMircha/js22.html">Clase 22: Prototype</a>
  <br>
  <div class = "paragraph05 litle" > 
    <div>        

        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;POO</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>/*</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clases&nbsp;-&nbsp;Modelo&nbsp;a&nbsp;seguir</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Objetos&nbsp;-&nbsp;Es&nbsp;una&nbsp;Instancia&nbsp;de&nbsp;una&nbsp;clase</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Atributos</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;M&eacute;todos&nbsp;*/</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Platon&nbsp;</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>animal</span><span>&nbsp;=&nbsp;{</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nombre:</span><span>"Snoopy"</span><span>,</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>sonar</span><span>(){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Hago&nbsp;sonidos&nbsp;porque&nbsp;soy&nbsp;un&nbsp;animal&nbsp;vivo"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>animal</span><span>);</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>animal2</span><span>&nbsp;=&nbsp;{</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nombre:</span><span>"Lola&nbsp;Bunny"</span><span>,</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>sonar</span><span>(){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Hago&nbsp;sonidos&nbsp;porque&nbsp;soy&nbsp;un&nbsp;animal&nbsp;vivo"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>animal2</span><span>);</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Funciones&nbsp;constructoras&nbsp;simulan&nbsp;a&nbsp;las&nbsp;clases</span></div>
        <div><span>function</span><span>&nbsp;</span><span>Animal</span><span>(</span><span>nombre</span><span>,&nbsp;</span><span>genero</span><span>){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Propiedades&nbsp;o&nbsp;Atributos</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>nombre</span><span>&nbsp;=&nbsp;</span><span>nombre</span><span>;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>genero</span><span>&nbsp;=&nbsp;</span><span>genero</span><span>;</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;M&eacute;todos</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>sonar</span><span>&nbsp;=&nbsp;</span><span>function</span><span>(){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Hago&nbsp;sonidos&nbsp;porque&nbsp;soy&nbsp;un&nbsp;animal&nbsp;vivo"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span>&nbsp;}</span></div>
        <div><span>const</span><span>&nbsp;</span><span>snoopy</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Animal</span><span>(</span><span>"Snoopy"</span><span>,</span><span>"Macho"</span><span>),</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>lolaBunny</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Animal</span><span>(</span><span>"Lola&nbsp;Bunny"</span><span>,</span><span>"Hembra"</span><span>);</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>snoopy</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>lolaBunny</span><span>);&nbsp;</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>/*</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Todo&nbsp;esto&nbsp;no&nbsp;tiene&nbsp;nada&nbsp;que&nbsp;ver&nbsp;es&nbsp;otro&nbsp;objeto&nbsp;distinto,&nbsp;nuevo</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Animal.saludar&nbsp;=&nbsp;function(){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(` + 'Hola&nbsp;me&nbsp;llamo...${this.nombre}.`);&nbsp;</span></div>' +
        `<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;console.log(Animal.saludar());&nbsp;Hola&nbsp;me&nbsp;llamo...undefined&nbsp;*/</span></div>
        <br />
        <div><span>function</span><span>&nbsp;</span><span>Animal2</span><span>(</span><span>nombre</span><span>,&nbsp;</span><span>genero</span><span>){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Propiedades&nbsp;o&nbsp;Atributos</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>nombre</span><span>&nbsp;=&nbsp;</span><span>nombre</span><span>;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>genero</span><span>&nbsp;=&nbsp;</span><span>genero</span><span>;</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;M&eacute;todos</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>sonar</span><span>&nbsp;=&nbsp;</span><span>function</span><span>(){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Hago&nbsp;sonidos&nbsp;porque&nbsp;soy&nbsp;un&nbsp;animal&nbsp;vivo"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span>&nbsp;}</span></div>
        <div><span>Animal2</span><span>.</span><span>prototype</span><span>.</span><span>saludar</span><span>&nbsp;=&nbsp;</span><span>function</span><span>(){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>` + 'Hola&nbsp;me&nbsp;llamo...&nbsp;</span><span>${</span><span>this</span><span>.</span><span>nombre</span><span>}</span><span>.`</span><span>);&nbsp;</span></div>' +
        `<div><span>}</span></div>
        <div><span>console</span><span>.</span><span>info</span><span>(</span><span>Animal2</span><span>);</span></div>
        <div><span>console</span><span>.</span><span>dir</span><span>(</span><span>Animal2</span><span>);</span></div>
        <div><span>const</span><span>&nbsp;</span><span>lolin</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Animal2</span><span>(</span><span>"Lolin"</span><span>,</span><span>"Macho"</span><span>),</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>laika</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Animal2</span><span>(</span><span>"Laika&nbsp;Astron&aacute;uta"</span><span>,</span><span>"Hembra"</span><span>);</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>lolin</span><span>.</span><span>saludar</span><span>();</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>lolin</span><span>.</span><span>sonar</span><span>();</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>laika</span><span>.</span><span>saludar</span><span>();</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>laika</span><span>.</span><span>sonar</span><span>();</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
        </div> 
    </div>
  </div>`;

  var myHerenProto = `<a href="../apuntes/JsJonMircha/js23.html">Clase 23: Herencia prototípica </a>
    <br>
    <div class = "paragraph05 litle" > 
      <div>

        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>info</span><span>(</span><span>Object</span><span>);&nbsp;</span><span>//&nbsp;Important!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Object</span><span>);&nbsp;</span><span>//&nbsp;Important!!</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>Object</span><span>);&nbsp;</span><span>//&nbsp;Important!!</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>/*Propiedades:</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Object.prototype.constructor:&nbsp;Especifica&nbsp;la&nbsp;funci&oacute;n&nbsp;que&nbsp;crea&nbsp;el&nbsp;prototipo&nbsp;de&nbsp;un&nbsp;objeto.</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Object.prototype.__proto__&nbsp;:&nbsp;Apunta&nbsp;al&nbsp;objeto&nbsp;que&nbsp;se&nbsp;us&oacute;&nbsp;como&nbsp;prototipo&nbsp;cuando&nbsp;fue&nbsp;instanciado.</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></div>
        <br /><br />
        <div><span>&nbsp;</span><span>/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Funciones&nbsp;constructoras&nbsp;simulan&nbsp;a&nbsp;las&nbsp;clases</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function&nbsp;Animal(nombre,&nbsp;genero){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Propiedades&nbsp;o&nbsp;Atributos</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.nombre&nbsp;=&nbsp;nombre;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.genero&nbsp;=&nbsp;genero;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.sonar&nbsp;=&nbsp;function(){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("Hago&nbsp;sonidos&nbsp;porque&nbsp;soy&nbsp;un&nbsp;animal&nbsp;y&nbsp;estoy&nbsp;vivo");</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.saludar&nbsp;=&nbsp;function(){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(`+ 'Hola&nbsp;me&nbsp;llamo...&nbsp;${this.nombre}.'+`);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var&nbsp;perro&nbsp;=&nbsp;new&nbsp;Animal("Scooby","macho");&nbsp;//&nbsp;Ahora&nbsp;perro&nbsp;es&nbsp;una&nbsp;animal</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.dir(perro);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;perro.saludar();&nbsp;//&nbsp;Hola&nbsp;me&nbsp;llamo&nbsp;Scooby</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Uno&nbsp;de&nbsp;los&nbsp;problemas&nbsp;que&nbsp;tenemos&nbsp;es&nbsp;que&nbsp;los&nbsp;m&eacute;todos&nbsp;se&nbsp;repiten&nbsp;por&nbsp;cada&nbsp;animal</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Lo&nbsp;que&nbsp;supone&nbsp;un&nbsp;despilfarro&nbsp;de&nbsp;memoria</span></div>
        <br /><br />
        <div><span>*/</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Soluci&oacute;n&nbsp;el&nbsp;prototype</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Funciones&nbsp;constructoras&nbsp;simulan&nbsp;a&nbsp;las&nbsp;clases</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>function</span><span>&nbsp;</span><span>Animal</span><span>(</span><span>nombre</span><span>,&nbsp;</span><span>genero</span><span>){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Propiedades&nbsp;o&nbsp;Atributos</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>nombre</span><span>&nbsp;=&nbsp;</span><span>nombre</span><span>;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>genero</span><span>&nbsp;=&nbsp;</span><span>genero</span><span>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;M&eacute;todos&nbsp;agregados&nbsp;al&nbsp;prototype&nbsp;de&nbsp;la&nbsp;funci&oacute;n&nbsp;Animal</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>Animal</span><span>.</span><span>prototype</span><span>.</span><span>sonar</span><span>&nbsp;=&nbsp;</span><span>function</span><span>(){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Hago&nbsp;sonidos&nbsp;porque&nbsp;soy&nbsp;un&nbsp;animal&nbsp;y&nbsp;estoy&nbsp;vivo"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>Animal</span><span>.</span><span>prototype</span><span>.</span><span>saludar</span><span>&nbsp;=&nbsp;</span><span>function</span><span>(){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>` + 'Hola&nbsp;me&nbsp;llamo...&nbsp;</span><span>${</span><span>this</span><span>.</span><span>nombre</span><span>}</span><span>.' + `</span><span>);&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>info</span><span>(</span><span>Animal</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Animal</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>Animal</span><span>);</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>perro</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Animal</span><span>(</span><span>"Lolin"</span><span>,</span><span>"Macho"</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;perro&nbsp;es&nbsp;una&nbsp;instancia&nbsp;de&nbsp;animal&nbsp;es&nbsp;decir&nbsp;una&nbsp;referencia&nbsp;a&nbsp;un&nbsp;Animal&nbsp;nuevo&nbsp;creado</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>info</span><span>(</span><span>perro</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>perro</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>perro</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>perro</span><span>.</span><span>saludar</span><span>();&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Hola&nbsp;me&nbsp;llamo&nbsp;Lolin</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>gato</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Animal</span><span>(</span><span>"Bobi"</span><span>,</span><span>"Macho"</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;gato&nbsp;&nbsp;es&nbsp;una&nbsp;instancia&nbsp;de&nbsp;animal&nbsp;es&nbsp;decir&nbsp;una&nbsp;referencia&nbsp;a&nbsp;un&nbsp;Animal&nbsp;nuevo&nbsp;creado</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>info</span><span>(</span><span>gato</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>gato</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>gato</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>gato</span><span>.</span><span>saludar</span><span>();&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Hola&nbsp;me&nbsp;llamo&nbsp;Bobi</span></div>
        <br /><br />
        <div><span>&nbsp;&nbsp;</span><span>//&nbsp;Ahora&nbsp;quiero&nbsp;definir&nbsp;a&nbsp;las&nbsp;familias:&nbsp;perro,&nbsp;gato,&nbsp;etc.</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>function</span><span>&nbsp;</span><span>Can</span><span>(</span><span>nombre</span><span>,&nbsp;</span><span>genero</span><span>,&nbsp;</span><span>tamanio</span><span>){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>nombre</span><span>&nbsp;=&nbsp;</span><span>nombre</span><span>;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>genero</span><span>&nbsp;=&nbsp;</span><span>genero</span><span>;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>tamanio</span><span>&nbsp;=&nbsp;</span><span>tamanio</span><span>;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Herencia&nbsp;prototipica</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>Can</span><span>.</span><span>prototype</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Animal</span><span>();&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>lolin</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Can</span><span>(</span><span>"Lolin"</span><span>,</span><span>"Macho"</span><span>,</span><span>"Mediano"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>info</span><span>(</span><span>lolin</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>lolin</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>lolin</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Ahora&nbsp;puedo&nbsp;usar&nbsp;propiedades&nbsp;y&nbsp;m&eacute;todos&nbsp;de&nbsp;Can&nbsp;y&nbsp;de&nbsp;Animal</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>lolin</span><span>.</span><span>nombre</span><span>);&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>lolin</span><span>.</span><span>sonar</span><span>();&nbsp;</span><span>//&nbsp;Hago&nbsp;sonidos&nbsp;porque&nbsp;soy&nbsp;un&nbsp;animal&nbsp;y&nbsp;estoy&nbsp;vivo</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>lolin</span><span>.</span><span>saludar</span><span>();&nbsp;</span><span>//&nbsp;&nbsp;Hola&nbsp;me&nbsp;llamo...&nbsp;Lolin.</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Sobrescribo&nbsp;m&eacute;todo</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>lolin</span><span>.</span><span>saludar</span><span>&nbsp;=&nbsp;</span><span>function</span><span>(){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Guauuuu"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>lolin</span><span>.</span><span>saludar</span><span>();&nbsp;</span><span>//&nbsp;Guauuuu</span></div>
        <br /><br /><br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Ahora&nbsp;intentaremos&nbsp;No&nbsp;repetir&nbsp;variables&nbsp;aprovechando&nbsp;la&nbsp;funci&oacute;n&nbsp;constructora</span></div>
        <br /><br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>function</span><span>&nbsp;</span><span>Felino</span><span>(</span><span>nombre</span><span>,</span><span>genero</span><span>,</span><span>tamanio</span><span>){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>super</span><span>&nbsp;=&nbsp;</span><span>Animal</span><span>;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>super</span><span>(</span><span>nombre</span><span>,</span><span>genero</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>tamanio</span><span>&nbsp;=&nbsp;</span><span>tamanio</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>polita</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Felino</span><span>(</span><span>"Polita"</span><span>,</span><span>"Hembra"</span><span>,</span><span>"peque&ntilde;a"</span><span>&nbsp;);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>info</span><span>(</span><span>polita</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>polita</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>polita</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>polita</span><span>.</span><span>nombre</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;Polita</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>polita2</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Felino</span><span>(</span><span>"Polita2"</span><span>,</span><span>"Hembra"</span><span>,</span><span>"peque&ntilde;a"</span><span>&nbsp;);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>var</span><span>&nbsp;</span><span>polita3</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Felino</span><span>(</span><span>"Polita3"</span><span>,</span><span>"Macho"</span><span>,</span><span>"grande"</span><span>&nbsp;);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>polita2</span><span>.</span><span>nombre</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;Polita</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>polita3</span><span>.</span><span>nombre</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;Polita</span></div>
        <br />
        <div><span>&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>polita2</span><span>);</span></div>
        <div><span>&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>polita3</span><span>);</span></div>
        <br /><br /><br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
        
        </div>     
 
    </div>`;

    var myClases = `<a href="../apuntes/JsJonMircha/js24.html">Clase 24: Clases </a>
      <br>
      <div class = "paragraph05 litle" > 
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
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>h1</span><span>&gt;</span><span>Clases</span><span>&lt;/</span><span>h1</span><span>&gt;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>div</span><span>&nbsp;</span><span>class</span><span>&nbsp;=&nbsp;</span><span>"paragraph05"</span><span>&gt;</span><span>&nbsp;&nbsp;&nbsp;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>ul</span><span>&nbsp;</span><span>class</span><span>=</span><span>"list-item-1"</span><span>&gt;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>li</span><span>&gt;&lt;</span><span>a</span><span>&nbsp;</span><span>href</span><span>=</span><span>"http://www.etnassoft.com/2011/04/15/concepto-de-herencia-prototipica-en-javascript/"</span><span>&gt;</span><span>Concepto&nbsp;de&nbsp;herencia&nbsp;protot&iacute;pica&nbsp;en&nbsp;Javascript</span><span>&lt;/</span><span>a</span><span>&gt;&lt;/</span><span>li</span><span>&gt;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>li</span><span>&gt;&lt;</span><span>a</span><span>&nbsp;</span><span>href</span><span>=</span><span>"https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/prototype"</span><span>&gt;</span><span>&nbsp;Object.prototype</span><span>&lt;/</span><span>a</span><span>&gt;&lt;/</span><span>li</span><span>&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>li</span><span>&gt;&lt;</span><span>a</span><span>&nbsp;</span><span>href</span><span>=</span><span>"https://developer.mozilla.org/es/docs/Web/JavaScript/Herencia_y_la_cadena_de_protipos"</span><span>&gt;</span><span>Herencia&nbsp;y&nbsp;la&nbsp;cadena&nbsp;de&nbsp;prototipos</span><span>&lt;/</span><span>a</span><span>&gt;&lt;/</span><span>li</span><span>&gt;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>ul</span><span>&gt;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>div</span><span>&gt;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>a</span><span>&nbsp;</span><span>href</span><span>=</span><span>"javascript:&nbsp;history.go(-1)"</span><span>&gt;</span><span>Volver</span><span>&lt;/</span><span>a</span><span>&gt;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>div</span><span>&gt;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>div</span><span>&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>class</span><span>&nbsp;</span><span>Animal</span><span>&nbsp;{</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>constructor</span><span>(</span><span>nombre</span><span>,</span><span>genero</span><span>){</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>nombre</span><span>&nbsp;=&nbsp;</span><span>nombre</span><span>;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>genero</span><span>&nbsp;=&nbsp;</span><span>genero</span><span>;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>sonar</span><span>(){</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Hago&nbsp;sonidos&nbsp;porque&nbsp;soy&nbsp;un&nbsp;animal&nbsp;y&nbsp;estoy&nbsp;vivo"</span><span>);</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>saludar</span><span>(){</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>` + 'Hola&nbsp;me&nbsp;llamo...&nbsp;</span><span>${</span><span>this</span><span>.</span><span>nombre</span><span>}</span><span>.' + `</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>mimi</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Animal</span><span>(</span><span>"Mimi"</span><span>,</span><span>"Hembra"</span><span>),</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>scooby</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Animal</span><span>(</span><span>"Scooby"</span><span>,</span><span>"Macho"</span><span>);</span></div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>mimi</span><span>);</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>scooby</span><span>);</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>mimi</span><span>.</span><span>saludar</span><span>();</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>scooby</span><span>.</span><span>saludar</span><span>();</span></div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>class</span><span>&nbsp;</span><span>Perro</span><span>&nbsp;</span><span>extends</span><span>&nbsp;</span><span>Animal</span><span>{</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>constructor</span><span>(</span><span>nombre</span><span>,</span><span>genero</span><span>,</span><span>tamanio</span><span>){</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Con&nbsp;el&nbsp;m&eacute;todo&nbsp;super()&nbsp;se&nbsp;manda&nbsp;a&nbsp;llamar&nbsp;al&nbsp;constructor&nbsp;de&nbsp;la&nbsp;clase&nbsp;padre</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>super</span><span>(</span><span>nombre</span><span>,</span><span>genero</span><span>);</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>tamanio</span><span>&nbsp;=&nbsp;</span><span>tamanio</span><span>;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>sonar</span><span>(){</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Hago&nbsp;sonidos&nbsp;porque&nbsp;soy&nbsp;un&nbsp;perro&nbsp;y&nbsp;estoy&nbsp;vivo"</span><span>);</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>ladrar</span><span>(){</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>`+ 'Guauuuu' +`</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>nitri</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Perro</span><span>(</span><span>"Nitri"</span><span>,</span><span>"Hembra"</span><span>,</span><span>"Mediano"</span><span>),</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>rin</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Perro</span><span>(</span><span>"Rin"</span><span>,</span><span>"Macho"</span><span>,</span><span>"peque&ntilde;o"</span><span>);</span></div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>nitri</span><span>);</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>rin</span><span>);</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nitri</span><span>.</span><span>saludar</span><span>();</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>rin</span><span>.</span><span>tamanio</span><span>);</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>rin</span><span>.</span><span>sonar</span><span>();</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>rin</span><span>.</span><span>saludar</span><span>();</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>rin</span><span>.</span><span>ladrar</span><span>();</span></div>
          <br /><br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
          <div><span>&lt;/</span><span>body</span><span>&gt;</span><span>&nbsp;</span></div>
          <div><span>&lt;/</span><span>html</span><span>&gt;</span></div>
          </div>  
      </div>`;

var myMeestSstGet = ` <a href="../apuntes/JsJonMircha/js25.html">Clase 25: Métodos Estáticos. Getters y Setters </a>
<br>
<div class = "paragraph05 litle" > 
  <div>
   
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>class</span><span>&nbsp;</span><span>Animal</span><span>&nbsp;{</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>constructor</span><span>(</span><span>nombre</span><span>,</span><span>genero</span><span>){</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>nombre</span><span>&nbsp;=&nbsp;</span><span>nombre</span><span>;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>genero</span><span>&nbsp;=&nbsp;</span><span>genero</span><span>;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>sonar</span><span>(){</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Hago&nbsp;sonidos&nbsp;porque&nbsp;soy&nbsp;un&nbsp;animal&nbsp;y&nbsp;estoy&nbsp;vivo"</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>saludar</span><span>(){</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>` + 'Hola&nbsp;me&nbsp;llamo...&nbsp;</span><span>${</span><span>this</span><span>.</span><span>nombre</span><span>}</span><span>.' + `</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>mimi</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Animal</span><span>(</span><span>"Mimi"</span><span>,</span><span>"Hembra"</span><span>),</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>scooby</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Animal</span><span>(</span><span>"Scooby"</span><span>,</span><span>"Macho"</span><span>);</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>mimi</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>scooby</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>mimi</span><span>.</span><span>saludar</span><span>();</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>scooby</span><span>.</span><span>saludar</span><span>();</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>class</span><span>&nbsp;</span><span>Perro</span><span>&nbsp;</span><span>extends</span><span>&nbsp;</span><span>Animal</span><span>{</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>constructor</span><span>(</span><span>nombre</span><span>,</span><span>genero</span><span>,</span><span>tamanio</span><span>){</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Con&nbsp;el&nbsp;m&eacute;todo&nbsp;super()&nbsp;se&nbsp;manda&nbsp;a&nbsp;llamar&nbsp;al&nbsp;constructor&nbsp;de&nbsp;la&nbsp;clase&nbsp;padre</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>super</span><span>(</span><span>nombre</span><span>,</span><span>genero</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>tamanio</span><span>&nbsp;=&nbsp;</span><span>tamanio</span><span>;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>raza</span><span>&nbsp;=&nbsp;</span><span>null</span><span>;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>sonar</span><span>(){</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Hago&nbsp;sonidos&nbsp;porque&nbsp;soy&nbsp;un&nbsp;perro&nbsp;y&nbsp;estoy&nbsp;vivo"</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>ladrar</span><span>(){</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>`+ 'Guauuuu' +`</span><span>);&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Un&nbsp;m&eacute;todo&nbsp;est&aacute;tico&nbsp;se&nbsp;puede&nbsp;ejecutar&nbsp;sin&nbsp;necesidad&nbsp;de&nbsp;instanciar&nbsp;la&nbsp;clase</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>static</span><span>&nbsp;</span><span>queEres</span><span>(){</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Los&nbsp;perros&nbsp;eramos&nbsp;lobos&nbsp;y&nbsp;por&nbsp;culpa&nbsp;de&nbsp;los&nbsp;humanos&nbsp;y&nbsp;sus&nbsp;modas&nbsp;nos&nbsp;vemos&nbsp;sometidos&nbsp;a&nbsp;sus&nbsp;aburrimientos,&nbsp;&nbsp;......&nbsp;"</span><span>);</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>get</span><span>&nbsp;</span><span>getRaza</span><span>(){</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span>&nbsp;</span><span>this</span><span>.</span><span>raza</span><span>;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>set</span><span>&nbsp;</span><span>setRaza</span><span>(</span><span>raza</span><span>){</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>this</span><span>.</span><span>raza</span><span>&nbsp;=&nbsp;</span><span>raza</span><span>;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>Perro</span><span>.</span><span>queEres</span><span>();</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>nitri</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Perro</span><span>(</span><span>"Nitri"</span><span>,</span><span>"Hembra"</span><span>,</span><span>"Mediano"</span><span>),</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>rin</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Perro</span><span>(</span><span>"Rin"</span><span>,</span><span>"Macho"</span><span>,</span><span>"peque&ntilde;o"</span><span>);</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>nitri</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>rin</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nitri</span><span>.</span><span>saludar</span><span>();</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>rin</span><span>.</span><span>tamanio</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>rin</span><span>.</span><span>sonar</span><span>();</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>rin</span><span>.</span><span>saludar</span><span>();</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>rin</span><span>.</span><span>ladrar</span><span>();</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>rin</span><span>.</span><span>getRaza</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>rin</span><span>.</span><span>setRaza</span><span>&nbsp;=&nbsp;</span><span>"Mast&iacute;n"</span><span>;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>rin</span><span>.</span><span>getRaza</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
    
    </div>
       

</div></div> `;

var myConsole = `<a href="../apuntes/JsJonMircha/js26.html">Clase 26: Console </a>
<br>
<div class = "paragraph05 litle" > 
  
  <div>

    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span><span>&nbsp;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>console</span><span>);&nbsp;&nbsp;&nbsp;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>error</span><span>(</span><span>"Esto&nbsp;es&nbsp;un&nbsp;error"</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>warn</span><span>(</span><span>"Esto&nbsp;es&nbsp;un&nbsp;aviso"</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>info</span><span>(</span><span>"Esto&nbsp;es&nbsp;un&nbsp;mensaje&nbsp;informativo"</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Un&nbsp;registro&nbsp;de&nbsp;lo&nbsp;que&nbsp;ha&nbsp;pasado&nbsp;en&nbsp;nuestra&nbsp;aplicaci&oacute;n"</span><span>);&nbsp;&nbsp;&nbsp;</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>nombre</span><span>&nbsp;=&nbsp;</span><span>"Jon"</span><span>,</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>apellido</span><span>&nbsp;=&nbsp;</span><span>"Mircha"</span><span>,</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>edad</span><span>&nbsp;=&nbsp;</span><span>35</span><span>;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>`+ 'Hola&nbsp;soy&nbsp;</span><span>${</span><span>nombre</span><span>}</span><span>&nbsp;</span><span>${</span><span>apellido</span><span>}</span><span>&nbsp;y&nbsp;tengo&nbsp;</span><span>${</span><span>edad</span><span>}</span><span>&nbsp;a&ntilde;os' + `</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>`+ 'Hola&nbsp;mi&nbsp;nombre&nbsp;es&nbsp;%s&nbsp;%s&nbsp;y&nbsp;tengo&nbsp;%d&nbsp;a&ntilde;os' + `</span><span>,</span><span>nombre</span><span>,</span><span>apellido</span><span>,</span><span>edad</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>clear</span><span>();</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>window</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>document</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>window</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>document</span><span>);</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>clear</span><span>();</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>group</span><span>(</span><span>"17'Cursos&nbsp;de&nbsp;@jonmircha&nbsp;en&nbsp;YouTube"</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Curso&nbsp;de&nbsp;Js"</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Curso&nbsp;de&nbsp;Node"</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Curso&nbsp;de&nbsp;PWAs"</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Curso&nbsp;de&nbsp;Flexbox"</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Curso&nbsp;de&nbsp;dise&ntilde;o&nbsp;y&nbsp;programaci&oacute;n&nbsp;Web"</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>groupEnd</span><span>();</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>console</span><span>);&nbsp;&nbsp;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>table</span><span>(</span><span>Object</span><span>.</span><span>entries</span><span>(</span><span>console</span><span>));</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>table</span><span>(</span><span>Object</span><span>.</span><span>entries</span><span>(</span><span>console</span><span>).</span><span>sort</span><span>());</span></div>
    <br /><br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>numeros</span><span>&nbsp;=&nbsp;[</span><span>1</span><span>,</span><span>2</span><span>,</span><span>3</span><span>,</span><span>4</span><span>,</span><span>5</span><span>],</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>vocales</span><span>&nbsp;=[</span><span>"a"</span><span>,</span><span>"e"</span><span>,</span><span>"i"</span><span>,</span><span>"o"</span><span>,</span><span>"u"</span><span>];</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>table</span><span>(</span><span>numeros</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>table</span><span>(</span><span>vocales</span><span>);</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>perro</span><span>&nbsp;={</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nombre:</span><span>"Boni"</span><span>,</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>raza:</span><span>"Boxer"</span><span>,</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>color:</span><span>"caf&eacute;"</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>table</span><span>(</span><span>perro</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>clear</span><span>();</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>time</span><span>(</span><span>"Cuanto&nbsp;tiempo&nbsp;tarda&nbsp;mi&nbsp;codigo"</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>arreglo</span><span>&nbsp;=&nbsp;</span><span>Array</span><span>(</span><span>1000000</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>for</span><span>(</span><span>let</span><span>&nbsp;</span><span>i</span><span>=</span><span>0</span><span>;&nbsp;</span><span>i</span><span>&lt;&nbsp;</span><span>arreglo</span><span>.</span><span>length</span><span>&nbsp;;</span><span>i</span><span>++){</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>arreglo</span><span>[</span><span>i</span><span>]=</span><span>i</span><span>;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>timeEnd</span><span>(</span><span>"Cuanto&nbsp;tiempo&nbsp;tarda&nbsp;mi&nbsp;codigo"</span><span>);</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>clear</span><span>();</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>for</span><span>(</span><span>let</span><span>&nbsp;</span><span>i</span><span>=</span><span>0</span><span>;&nbsp;</span><span>i</span><span>&lt;=&nbsp;</span><span>100</span><span>&nbsp;;</span><span>i</span><span>++){</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>count</span><span>(</span><span>"C&oacute;digo&nbsp;for"</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>i</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>clear</span><span>();</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>x</span><span>=</span><span>11</span><span>,&nbsp;</span><span>y</span><span>=</span><span>2</span><span>,&nbsp;</span><span>pruebaXY</span><span>&nbsp;=&nbsp;</span><span>"Se&nbsp;espera&nbsp;que&nbsp;X&nbsp;siempre&nbsp;sea&nbsp;menor&nbsp;que&nbsp;Y"</span><span>;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>assert</span><span>(</span><span>x</span><span>&lt;</span><span>y</span><span>,{</span><span>x</span><span>,</span><span>y</span><span>,</span><span>pruebaXY</span><span>});</span></div>
    <br /><br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
   
    </div>    

</div>`;

var myDate = `<a href="../apuntes/JsJonMircha/js27.html">Clase 27: Date </a>
  <br>
  <div class = "paragraph05 litle" > 
    
    <div>

      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span><span>&nbsp;</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Date</span><span>());</span></div>
      <div><span>&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>fecha</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Date</span><span>();</span></div>
      <div><span>&nbsp;&nbsp;</span><span>//&nbsp;d&iacute;a&nbsp;del&nbsp;mes</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"fecha.getDate():"</span><span>&nbsp;,&nbsp;</span><span>fecha</span><span>.</span><span>getDate</span><span>());&nbsp;</span><span>//&nbsp;d&iacute;a&nbsp;del&nbsp;mes</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"fecha.getDay():"</span><span>&nbsp;,&nbsp;</span><span>fecha</span><span>.</span><span>getDay</span><span>());&nbsp;</span><span>//&nbsp;d&iacute;a&nbsp;de&nbsp;la&nbsp;semana</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"fecha.getMonth():"</span><span>&nbsp;,</span><span>fecha</span><span>.</span><span>getMonth</span><span>());&nbsp;</span><span>//&nbsp;d&iacute;a&nbsp;de&nbsp;la&nbsp;semana</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"fecha.getFullYear():"</span><span>&nbsp;,</span><span>fecha</span><span>.</span><span>getFullYear</span><span>());&nbsp;</span><span>//&nbsp;a&ntilde;o&nbsp;completo</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"fecha.getHours():"</span><span>&nbsp;,</span><span>fecha</span><span>.</span><span>getHours</span><span>());</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"fecha.getMinutes():"</span><span>,&nbsp;</span><span>fecha</span><span>.</span><span>getMinutes</span><span>());</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"fecha.getSeconds():"</span><span>&nbsp;,&nbsp;</span><span>fecha</span><span>.</span><span>getSeconds</span><span>());</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"fecha.getMilliseconds():"</span><span>,&nbsp;</span><span>fecha</span><span>.</span><span>getMilliseconds</span><span>());</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"fecha.toString():"</span><span>&nbsp;,&nbsp;</span><span>fecha</span><span>.</span><span>toString</span><span>());</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"fecha.toDateString():"</span><span>&nbsp;,&nbsp;</span><span>fecha</span><span>.</span><span>toDateString</span><span>());</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"fecha.toLocaleString()"</span><span>&nbsp;,&nbsp;</span><span>fecha</span><span>.</span><span>toLocaleString</span><span>());</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"fecha.toLocaleDateString()"</span><span>&nbsp;,&nbsp;</span><span>fecha</span><span>.</span><span>toLocaleDateString</span><span>());</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"fecha.toLocaleTimeString()"</span><span>&nbsp;,&nbsp;</span><span>fecha</span><span>.</span><span>toLocaleTimeString</span><span>());</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"fecha.getTimezoneOffset()"</span><span>&nbsp;,&nbsp;</span><span>fecha</span><span>.</span><span>getTimezoneOffset</span><span>());</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"fecha.getUTCDate():"</span><span>,</span><span>fecha</span><span>.</span><span>getUTCDate</span><span>());</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"fecha.getUTCHours():"</span><span>,</span><span>fecha</span><span>.</span><span>getUTCHours</span><span>());</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Date.now():"</span><span>,&nbsp;</span><span>Date</span><span>.</span><span>now</span><span>());</span></div>
      <div><span>&nbsp;</span></div>
      <div><span>&nbsp;</span><span>let</span><span>&nbsp;</span><span>cumpleJon</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Date</span><span>(</span><span>1984</span><span>,</span><span>4</span><span>,</span><span>23</span><span>,</span><span>3</span><span>,</span><span>15</span><span>);&nbsp;</span></div>
      <div><span>&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>cumpleJon</span><span>);</span></div>
      <br /><br />
      <div><span>&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
      </div>

  </div>`;

  var myMath = ` <a href="../apuntes/JsJonMircha/js28.html">Clase 28: Math</a>
    <br>
    <div class = "paragraph05 litle" > 
      
      <div>

        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span><span>&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Math</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Math</span><span>.</span><span>PI</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Math</span><span>.</span><span>abs</span><span>(-</span><span>7.8</span><span>));&nbsp;</span><span>//&nbsp;7.8</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Math</span><span>.</span><span>ceil</span><span>(</span><span>7.2</span><span>));&nbsp;</span><span>//&nbsp;8</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Math</span><span>.</span><span>floor</span><span>(</span><span>7.2</span><span>));&nbsp;</span><span>//&nbsp;7</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Math</span><span>.</span><span>floor</span><span>(</span><span>7.8</span><span>));&nbsp;</span><span>//&nbsp;7</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Math</span><span>.</span><span>round</span><span>(</span><span>7.2</span><span>));&nbsp;</span><span>//&nbsp;7</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Math</span><span>.</span><span>round</span><span>(</span><span>7.8</span><span>));&nbsp;</span><span>//&nbsp;8</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Math</span><span>.</span><span>sqr</span><span>(</span><span>78</span><span>));&nbsp;</span><span>//&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Math</span><span>.</span><span>pow</span><span>(</span><span>2</span><span>,</span><span>5</span><span>));&nbsp;</span><span>//&nbsp;</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Math</span><span>.</span><span>sign</span><span>(-</span><span>7.8</span><span>));&nbsp;</span><span>//&nbsp;-1</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Math</span><span>.</span><span>sign</span><span>(</span><span>0</span><span>));&nbsp;</span><span>//&nbsp;0</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Math</span><span>.</span><span>sign</span><span>(</span><span>7.8</span><span>));&nbsp;</span><span>//&nbsp;1</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Math</span><span>.</span><span>random</span><span>());&nbsp;</span><span>//&nbsp;aleatorio&nbsp;entre&nbsp;0&nbsp;y&nbsp;1</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Math</span><span>.</span><span>random</span><span>()*</span><span>1000</span><span>);&nbsp;</span><span>//&nbsp;aleatorio&nbsp;entre&nbsp;0&nbsp;y&nbsp;1000</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Math</span><span>.</span><span>round</span><span>(</span><span>Math</span><span>.</span><span>random</span><span>()*</span><span>1000</span><span>));</span></div>
        <br />
        <div><span>&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
       
        </div>
 
    </div>`;

var myCortoci = `<a href="../apuntes/JsJonMircha/js29.html">Clase 29: Cortocircuito AND - OR </a>
<br>
<div class = "paragraph05 litle" > 
  
  <div>

    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span><span>&nbsp;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>/*&nbsp;&nbsp;OR</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;0&nbsp;&nbsp;0</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;1&nbsp;&nbsp;1</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;0&nbsp;&nbsp;1</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;1&nbsp;&nbsp;1</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AND&nbsp;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;0&nbsp;&nbsp;0</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;1&nbsp;&nbsp;0</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;0&nbsp;&nbsp;0</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;1&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>function</span><span>&nbsp;</span><span>saludar</span><span>(</span><span>nombre</span><span>){</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nombre</span><span>&nbsp;=&nbsp;</span><span>nombre</span><span>&nbsp;||&nbsp;</span><span>"Desconocido"</span><span>;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>` + 'Hola&nbsp;</span><span>${</span><span>nombre</span><span>}</span><span>' + `</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>saludar</span><span>(</span><span>"Jon"</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>saludar</span><span>();</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"cadena"</span><span>||&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;cadena</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>19</span><span>||&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//19</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>true</span><span>||&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//true</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>([]||&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;[]</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>({}||&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;{}</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>false</span><span>||&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>null</span><span>||&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>undefined</span><span>||&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>""</span><span>||&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(-</span><span>2</span><span>||&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;-2</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>0</span><span>||&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span></div>
    <div><span>&nbsp;&nbsp;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"cadena"</span><span>&nbsp;&amp;&amp;&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>19</span><span>&nbsp;&amp;&amp;&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>true</span><span>&nbsp;&amp;&amp;&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>([]&nbsp;&amp;&amp;&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>({}&nbsp;&amp;&amp;&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>false</span><span>&nbsp;&amp;&amp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;false</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>null</span><span>&nbsp;&amp;&amp;&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;null</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>undefined</span><span>&nbsp;||&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;"Valor&nbsp;de&nbsp;la&nbsp;cade</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>""</span><span>&nbsp;&amp;&amp;&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(-</span><span>2</span><span>&nbsp;&amp;&amp;&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;"Valor&nbsp;de&nbsp;la&nbsp;cadeNna"</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>0</span><span>&nbsp;&amp;&amp;&nbsp;</span><span>"Valor&nbsp;de&nbsp;la&nbsp;cadena"</span><span>);&nbsp;</span><span>//&nbsp;0</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>1</span><span>&nbsp;&amp;&amp;&nbsp;</span><span>2</span><span>&nbsp;&amp;&amp;&nbsp;</span><span>3</span><span>&nbsp;&amp;&amp;&nbsp;</span><span>4</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;cuando&nbsp;todos&nbsp;son&nbsp;verdadero&nbsp;toma&nbsp;el&nbsp;&uacute;ltimo</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
    
    </div>

</div>`;

var myAlertPromptComfirm =  `<a href="../apuntes/JsJonMircha/js30.html">Clase 30: Mensajes emergentes usando Alert, Confirm y Prompt </a>
<br>
<div class = "paragraph05 litle" > 
  
  <div>
<div><span>&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span><span>&nbsp;</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>window</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>window</span><span>.</span><span>alert</span><span>(</span><span>"Hola&nbsp;esto&nbsp;es&nbsp;una&nbsp;alerta"</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>alert</span><span>(</span><span>"Hola&nbsp;esto&nbsp;es&nbsp;una&nbsp;alerta"</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>confirm</span><span>(</span><span>"Hola&nbsp;esto&nbsp;es&nbsp;un&nbsp;confirm"</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>prompt</span><span>(</span><span>"Esto&nbsp;es&nbsp;un&nbsp;prompt&nbsp;y&nbsp;le&nbsp;permite&nbsp;al&nbsp;usario&nbsp;ingresar&nbsp;un&nbsp;valor"</span><span>)</span></div>
<br />
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>alerta</span><span>&nbsp;=&nbsp;</span><span>alert</span><span>(</span><span>"Hola&nbsp;esto&nbsp;es&nbsp;una&nbsp;alerta"</span><span>),</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>confirmacion</span><span>&nbsp;=&nbsp;</span><span>confirm</span><span>(</span><span>"Hola&nbsp;esto&nbsp;es&nbsp;un&nbsp;confirm"</span><span>),</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>aviso</span><span>&nbsp;=&nbsp;</span><span>prompt</span><span>(</span><span>"Esto&nbsp;es&nbsp;un&nbsp;prompt&nbsp;y&nbsp;le&nbsp;permite&nbsp;al&nbsp;usario&nbsp;ingresar&nbsp;un&nbsp;valor"</span><span>);</span></div>
<br />
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>alerta</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>confirmacion</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>aviso</span><span>);</span></div>
<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
</div> `;