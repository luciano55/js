var myArray = ` <a href="../apuntes/JsJonMircha/js11.html">Clase 11: Array</a><br> <div class = "paragraph05 litle" > 
   <div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Sintaxis</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;[elemento0,&nbsp;elemento1,&nbsp;...,&nbsp;elementoN]</span></div>
       <div><span>//new&nbsp;Array(elemento0,&nbsp;elemento1[,&nbsp;...[,&nbsp;elementoN]])</span></div>
       <div><span>//new&nbsp;Array(longitudDelArray)</span></div>       <br /><br />
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Declaraci&oacute;n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>dia11</span><span>&nbsp;=&nbsp;[];&nbsp;</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>dia11</span><span>);&nbsp;</span><span>//&nbsp;Array&nbsp;vac&iacute;o</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>dia12</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Array</span><span>();&nbsp;</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>dia12</span><span>);&nbsp;</span><span>//&nbsp;Array&nbsp;vac&iacute;o</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;conclusi&oacute;n&nbsp;puedes&nbsp;usar&nbsp;cualquiera&nbsp;de&nbsp;las&nbsp;dos&nbsp;expresiones</span></div>
       <br />       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>dia21</span><span>&nbsp;=&nbsp;[</span><span>9</span><span>];&nbsp;</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>dia21</span><span>);&nbsp;</span><span>//&nbsp;Array&nbsp;1&nbsp;elemento&nbsp;length:&nbsp;1</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>dia22</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Array</span><span>(</span><span>9</span><span>);&nbsp;</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>dia22</span><span>);&nbsp;</span><span>//&nbsp;Array&nbsp;vac&iacute;o&nbsp;length:&nbsp;9</span></div>
       <br />       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>dia31</span><span>&nbsp;=&nbsp;[</span><span>null</span><span>,[</span><span>"Sunday"</span><span>,</span><span>"Lunes"</span><span>],[</span><span>"Tuesday"</span><span>,</span><span>"Martes"</span><span>],[</span><span>"Wednesday"</span><span>,</span><span>"Mi&eacute;rcoles"</span><span>]];&nbsp;</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>dia31</span><span>);&nbsp;</span><span>//&nbsp;Array&nbsp;4&nbsp;elemento&nbsp;length:&nbsp;4</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>dia32</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Array</span><span>(</span><span>null</span><span>,[</span><span>"Sunday"</span><span>,</span><span>"Lunes"</span><span>],[</span><span>"Tuesday"</span><span>,</span><span>"Martes"</span><span>],[</span><span>"Wednesday"</span><span>,</span><span>"Mi&eacute;rcoles"</span><span>]);&nbsp;</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>dia32</span><span>);&nbsp;</span><span>//&nbsp;Array&nbsp;4&nbsp;elemento&nbsp;length:&nbsp;4</span></div>
       <br />       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//Add</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>dia31</span><span>.</span><span>push</span><span>([</span><span>"Thursday"</span><span>,</span><span>"Jueves"</span><span>]);</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>dia32</span><span>.</span><span>push</span><span>([</span><span>"Thursday"</span><span>,</span><span>"Jueves"</span><span>]);</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>dia31</span><span>);&nbsp;</span><span>//&nbsp;Array&nbsp;5&nbsp;elemento&nbsp;length:&nbsp;5</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>dia32</span><span>);&nbsp;</span><span>//&nbsp;Array&nbsp;5&nbsp;elemento&nbsp;length:&nbsp;5</span></div>
       <br />       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Update&nbsp;&nbsp;vamos&nbsp;arrgeglar&nbsp;los&nbsp;d&iacute;as&nbsp;anglosajones</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//dia31[5][0]&nbsp;=&nbsp;"Thursday";&nbsp;Uncaught&nbsp;TypeError:&nbsp;Cannot&nbsp;set&nbsp;property&nbsp;'0'&nbsp;of&nbsp;undefined</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;dia31[5][1]&nbsp;=&nbsp;"Viernes";&nbsp;&nbsp;&nbsp;Uncaught&nbsp;TypeError:&nbsp;Cannot&nbsp;set&nbsp;property&nbsp;'0'&nbsp;of&nbsp;undefined</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>dia31</span><span>.</span><span>push</span><span>([</span><span>"Thursday"</span><span>,</span><span>"Viernes"</span><span>]);</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>dia31</span><span>[</span><span>4</span><span>][</span><span>0</span><span>]&nbsp;=&nbsp;</span><span>dia31</span><span>[</span><span>3</span><span>][</span><span>0</span><span>];</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>dia31</span><span>[</span><span>3</span><span>][</span><span>0</span><span>]&nbsp;=&nbsp;</span><span>dia31</span><span>[</span><span>2</span><span>][</span><span>0</span><span>];</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>dia31</span><span>[</span><span>2</span><span>][</span><span>0</span><span>]&nbsp;=&nbsp;</span><span>dia31</span><span>[</span><span>1</span><span>][</span><span>0</span><span>];</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>dia31</span><span>[</span><span>2</span><span>][</span><span>0</span><span>]&nbsp;=&nbsp;</span><span>"Monday"</span><span>;</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>dia31</span><span>);&nbsp;</span><span>//&nbsp;Array&nbsp;6&nbsp;elemento&nbsp;length:&nbsp;6</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>dia31</span><span>.</span><span>push</span><span>([</span><span>"Friday"</span><span>,</span><span>"S&aacute;bado"</span><span>]);</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>dia31</span><span>.</span><span>push</span><span>([</span><span>"Saturday"</span><span>,</span><span>"Domingo"</span><span>]);</span></div>
       <br />       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Select&nbsp;con&nbsp;for&nbsp;primitivo</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>for</span><span>&nbsp;(</span><span>let</span><span>&nbsp;</span><span>i</span><span>&nbsp;=&nbsp;</span><span>0</span><span>;&nbsp;</span><span>i</span><span>&nbsp;&lt;&nbsp;</span><span>dia31</span><span>.</span><span>length</span><span>;&nbsp;</span><span>i</span><span>++)&nbsp;{</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>dia31</span><span>[</span><span>i</span><span>]);</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Como&nbsp;hay&nbsp;problemas&nbsp;si&nbsp;no&nbsp;es&nbsp;array</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>&nbsp;(</span><span>Array</span><span>.</span><span>isArray</span><span>(</span><span>dia31</span><span>[</span><span>i</span><span>])){</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>for</span><span>&nbsp;(</span><span>let</span><span>&nbsp;</span><span>j</span><span>&nbsp;=&nbsp;</span><span>0</span><span>;&nbsp;</span><span>j</span><span>&nbsp;&lt;&nbsp;</span><span>dia31</span><span>[</span><span>i</span><span>].</span><span>length</span><span>;&nbsp;</span><span>j</span><span>++)&nbsp;&nbsp;&nbsp;{&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>dia31</span><span>[</span><span>i</span><span>][</span><span>j</span><span>]);</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>       <br />
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;con&nbsp;forEach</span></div>       <br />
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>dia31</span><span>.</span><span>forEach</span><span>(</span><span>function</span><span>(</span><span>ele</span><span>,</span><span>index</span><span>){</span></div>'
       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>` 
       
       + ' "&lt;li&nbsp;id="</span><span>${</span><span>index</span><span>}</span><span>"&gt;</span><span>${</span><span>ele</span><span>}</span><span>&lt;/li&gt;`</span><span>);</span></div>'
       + '      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Como&nbsp;hay&nbsp;problemas&nbsp;si&nbsp;no&nbsp;es&nbsp;array</span></div>'
       + '  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>(</span><span>Array</span><span>.</span><span>isArray</span><span>(</span><span>ele</span><span>)){</span></div>'
        + '  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>ele</span><span>.</span><span>forEach</span><span>(</span><span>function</span><span>(</span><span>ele</span><span>,</span><span>index</span><span>){</span></div>'
            + '    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>`&lt;li&nbsp;id="</span><span>${</span><span>index</span><span>}</span><span>"&gt;</span><span>${</span><span>ele</span><span>}</span><span>&lt;/li&gt;`</span><span>);</span></div>'
            + '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</span></div>'
            + '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>'
            + '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
            + '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</span></div>       <br />'
            + '    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Con&nbsp;forEach&nbsp;&nbsp;arrow</span></div>       <br />'
            + ' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>dia31</span><span>.</span><span>forEach</span><span>((</span><span>ele</span><span>,</span><span>index</span><span>)&nbsp;</span><span>=&gt;</span><span>&nbsp;{</span></div>'
                + '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>`&lt;li&nbsp;id="</span><span>${</span><span>index</span><span>}</span><span>"&gt;</span><span>${</span><span>ele</span><span>}</span><span>&lt;/li&gt;`</span><span>);</span></div>'
                + '    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Como&nbsp;hay&nbsp;problemas&nbsp;si&nbsp;no&nbsp;es&nbsp;array</span></div>'
                + '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>(</span><span>Array</span><span>.</span><span>isArray</span><span>(</span><span>ele</span><span>)){</span></div>'
                    + '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>ele</span><span>.</span><span>forEach</span><span>((</span><span>ele</span><span>,</span><span>index</span><span>)</span><span>=&gt;</span><span>{</span></div>'
                        + '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>`&lt;li&nbsp;id="</span><span>${</span><span>index</span><span>}</span><span>"&gt;</span><span>${</span><span>ele</span><span>}</span><span>&lt;/li&gt;`</span><span>);</span></div>'
                        + '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</span></div>'
                        + '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>'
                        + '    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</span></div>'
                        + '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//Diariemente&nbsp;queremos&nbsp;anotar&nbsp;las&nbsp;temperaturas&nbsp;&nbsp;m&aacute;xima&nbsp;y&nbsp;m&iacute;nima&nbsp;de&nbsp;Almendralejo&nbsp;para&nbsp;un&nbsp;a&ntilde;o</span></div>'
                        + '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + ' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + ' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + ' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + ' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + ' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + ' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + ' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + ' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + ' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + '      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + ' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + '  <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;const&nbsp;temperatureAlmendralejo0&nbsp;=&nbsp;[][];&nbsp;&nbsp;asi&nbsp;no&nbsp;se&nbsp;puede</span></div>'
                        + '   <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>temperatureAlmendralejo</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Array</span><span>(</span><span>13</span><span>);&nbsp;</span><span>//n&ordm;&nbsp;de&nbsp;meses,&nbsp;n&ordm;&nbsp;de&nbsp;dias,&nbsp;la&nbsp;m&aacute;xima&nbsp;y&nbsp;la&nbsp;m&iacute;nima</span></div>'
                        + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>diaMes</span><span>&nbsp;=&nbsp;[</span><span>null</span><span>,</span><span>31</span><span>,</span><span>29</span><span>,</span><span>31</span><span>,</span><span>30</span><span>,</span><span>31</span><span>,</span><span>30</span><span>,</span><span>31</span><span>,</span><span>31</span><span>,</span><span>30</span><span>,</span><span>31</span><span>,</span><span>30</span><span>,</span><span>31</span><span>];</span></div>'
                        + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                        + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>diaMes</span><span>.</span><span>forEach</span><span>((</span><span>mes</span><span>,</span><span>index</span><span>)</span><span>=&gt;</span><span>{</span></div>'
                            + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>&nbsp;(</span><span>index</span><span>&nbsp;&gt;&nbsp;</span><span>0</span><span>){</span></div>'
                                + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>temperatureAlmendralejo</span><span>[</span><span>index</span><span>]&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Array</span><span>(</span><span>mes</span><span>+</span><span>1</span><span>);</span></div>'
                                + ' <br />       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>for</span><span>(</span><span>let</span><span>&nbsp;</span><span>i</span><span>=</span><span>1</span><span>;&nbsp;</span><span>i</span><span>&nbsp;&lt;&nbsp;</span><span>mes</span><span>&nbsp;+&nbsp;</span><span>1</span><span>;&nbsp;</span><span>i</span><span>++){</span></div>'
                                    + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>temperatureAlmendralejo</span><span>[</span><span>index</span><span>][</span><span>i</span><span>]&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Array</span><span>(</span><span>2</span><span>);</span></div>'
                                    + ' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                                    + ' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>'
                                    + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                                    + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</span></div>'
                                    + '<br />       <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                                    + ' <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>temperatureAlmendralejo</span><span>[</span><span>4</span><span>][</span><span>12</span><span>][</span><span>0</span><span>]=&nbsp;</span><span>12</span><span>;</span></div>'
                                    + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>temperatureAlmendralejo</span><span>[</span><span>4</span><span>][</span><span>12</span><span>][</span><span>1</span><span>]=&nbsp;</span><span>22</span><span>;</span></div>'
                                    + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>'
                                    + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>temperatureAlmendralejo</span><span>);</span></div>'
                                    + '<div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>'
                               
                                    + ' </div></div> </div>';
 
var myObject =  `<a href="../apuntes/JsJonMircha/js12.html">Clase 12: Object</a>
<br>
<div class = "paragraph05 litle" > 
<div> 
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>a</span><span>&nbsp;=&nbsp;{};</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>a</span><span>);&nbsp;&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>a</span><span>);&nbsp;</span><span>console</span><span>.</span><span>info</span><span>(</span><span>a</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>b</span><span>&nbsp;=&nbsp;</span><span>new</span><span>&nbsp;</span><span>Object</span><span>();</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>b</span><span>);&nbsp;</span><span>console</span><span>.</span><span>dir</span><span>(</span><span>b</span><span>);&nbsp;&nbsp;</span><span>console</span><span>.</span><span>info</span><span>(</span><span>b</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>jon</span><span>&nbsp;=&nbsp;{&nbsp;</span><span>//Jon</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nombre:</span><span>&nbsp;</span><span>"Juan"</span><span>,</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>apellido:</span><span>&nbsp;</span><span>"Mina"</span><span>,</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>edad:</span><span>&nbsp;</span><span>35</span><span>,</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>pasatiempos:</span><span>&nbsp;[</span><span>"Ajedrez"</span><span>,</span><span>"pasear"</span><span>,</span><span>"m&uacute;sica"</span><span>],</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>soltero:</span><span>true</span><span>,</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>contacto:</span><span>{</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>email:</span><span>"ksjuankilo@gmail.com"</span><span>,</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>twitter:</span><span>&nbsp;</span><span>"@juankilo"</span><span>,</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>movil:</span><span>&nbsp;</span><span>34551234556</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>saludar</span><span>:</span><span>&nbsp;</span><span>function</span><span>(){</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Hola&nbsp;:)"</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>decirMiNombre</span><span>:</span><span>function</span><span>(){</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>` + 'Hola&nbsp;me&nbsp;llamo&nbsp;</span><span>${</span><span>this</span><span>.</span><span>nombre</span><span>}</span><span>&nbsp;</span><span>${</span><span>this</span><span>.</span><span>apellido</span><span>}</span><span>&nbsp;y&nbsp;tengo&nbsp;</span><span>${</span><span>this</span><span>.</span><span>edad</span><span>}</span><span>&nbsp;a&ntilde;os&nbsp;y&nbsp;puedes&nbsp;seguirme&nbsp;como&nbsp;</span><span>${</span><span>this</span><span>.</span><span>contacto</span><span>.</span><span>twitter</span><span>}</span><span>&nbsp;en&nbsp;twitter`</span><span>);</span></div>' +
    `<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
    <br />
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>jon</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>jon</span><span>[</span><span>"nombre"</span><span>]);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>jon</span><span>[</span><span>"apellido"</span><span>]);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>jon</span><span>.</span><span>nombre</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>jon</span><span>.</span><span>apellido</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>jon</span><span>.</span><span>pasatiempos</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>jon</span><span>.</span><span>pasatiempos</span><span>[</span><span>1</span><span>]);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>jon</span><span>.</span><span>contacto</span><span>.</span><span>twitter</span><span>);</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>jon</span><span>.</span><span>decirMiNombre</span><span>());</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Object</span><span>.</span><span>keys</span><span>(</span><span>jon</span><span>));&nbsp;&nbsp;&nbsp;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>Object</span><span>.</span><span>values</span><span>(</span><span>jon</span><span>));&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>jon</span><span>.</span><span>hasOwnProperty</span><span>(</span><span>"nombre"</span><span>));</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>jon</span><span>.</span><span>hasOwnProperty</span><span>(</span><span>"xxxx"</span><span>));</span></div>
    <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
    
    </div>
</div>
  </div> `;

  var myExprOp = ` <a href="../apuntes/JsJonMircha/js13.html">Clase 13: Expresiones y operadores</a>
      <br>
      <div class = "paragraph05 litle" > 
        <div>

          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>a1</span><span>&nbsp;=&nbsp;</span><span>5</span><span>&nbsp;+&nbsp;</span><span>5</span><span>&nbsp;-&nbsp;</span><span>10</span><span>&nbsp;*&nbsp;</span><span>3</span><span>;&nbsp;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>a1</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;-20</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>a2</span><span>&nbsp;=&nbsp;</span><span>5</span><span>&nbsp;+&nbsp;(</span><span>5</span><span>&nbsp;-</span><span>10</span><span>)&nbsp;*&nbsp;</span><span>3</span><span>;&nbsp;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>a2</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;-10</span></div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>modulo</span><span>&nbsp;=&nbsp;</span><span>5</span><span>&nbsp;%&nbsp;</span><span>2</span><span>;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>modulo</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;1</span></div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>8</span><span>&nbsp;&gt;&nbsp;</span><span>9</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;false</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>9</span><span>&nbsp;&gt;&nbsp;</span><span>8</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;true</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>8</span><span>&nbsp;&gt;=&nbsp;</span><span>9</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;false</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>9</span><span>&nbsp;&gt;=&nbsp;</span><span>8</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;true&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>7</span><span>&nbsp;&lt;&nbsp;</span><span>7</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;false</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>7</span><span>&nbsp;&lt;=&nbsp;</span><span>7</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;true</span></div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>7</span><span>&nbsp;==&nbsp;</span><span>7</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;true</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"7"</span><span>&nbsp;==&nbsp;</span><span>7</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;true</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>0</span><span>&nbsp;==&nbsp;</span><span>false</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;true</span></div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>7</span><span>&nbsp;===&nbsp;</span><span>7</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;true</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"7"</span><span>&nbsp;===&nbsp;</span><span>7</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;false</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>0</span><span>&nbsp;===&nbsp;</span><span>false</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;false</span></div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>i</span><span>&nbsp;=&nbsp;</span><span>0</span><span>;</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>i</span><span>++);&nbsp;</span><span>//&nbsp;0</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(++</span><span>i</span><span>);&nbsp;</span><span>//&nbsp;2</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//console.log((++i)++);&nbsp;//&nbsp;Uncaught&nbsp;SyntaxError:&nbsp;Invalid&nbsp;left-hand&nbsp;side&nbsp;expression&nbsp;in&nbsp;postfix&nbsp;operation</span></div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(!</span><span>true</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;false</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(!</span><span>false</span><span>);&nbsp;&nbsp;</span><span>//&nbsp;true</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>((</span><span>9</span><span>&nbsp;===&nbsp;</span><span>9</span><span>)&nbsp;||&nbsp;(</span><span>"9"</span><span>&nbsp;===&nbsp;</span><span>9</span><span>));&nbsp;&nbsp;</span><span>//&nbsp;true</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>((</span><span>9</span><span>&nbsp;===&nbsp;</span><span>9</span><span>)&nbsp;&amp;&amp;&nbsp;(</span><span>"9"</span><span>&nbsp;===&nbsp;</span><span>9</span><span>));&nbsp;&nbsp;</span><span>//&nbsp;false</span></div>
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>((</span><span>9</span><span>&nbsp;===&nbsp;</span><span>9</span><span>)&nbsp;&amp;&amp;&nbsp;(</span><span>"9"</span><span>&nbsp;===&nbsp;</span><span>"9"</span><span>));&nbsp;&nbsp;</span><span>//&nbsp;true</span></div>
          <br />
          <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
        
          </div>
      </div>
      </div> `;
var myExpConBl = `  <a href="../apuntes/JsJonMircha/js14.html">Clase 14: Expresiones Condicionales y de Bloque</a>
    <br>
    <div class = "paragraph05 litle" > 
      <div>

        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>edad</span><span>&nbsp;=&nbsp;</span><span>1</span><span>;</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//if</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>(</span><span>edad</span><span>&nbsp;&gt;&nbsp;</span><span>100</span><span>&nbsp;){&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Eres&nbsp;muy&nbsp;longevo"</span><span>);}</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//if&nbsp;-&nbsp;else&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>(</span><span>edad</span><span>&nbsp;&gt;&nbsp;</span><span>17</span><span>){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Eres&nbsp;mayor&nbsp;de&nbsp;Edad"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;}</span><span>else</span><span>{</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Eres&nbsp;menor&nbsp;de&nbsp;Edad"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//if&nbsp;-&nbsp;else&nbsp;if&nbsp;-&nbsp;else&nbsp;*/</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>(</span><span>edad</span><span>&nbsp;&gt;&nbsp;</span><span>17</span><span>){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Eres&nbsp;mayor&nbsp;de&nbsp;Edad"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;}</span><span>else</span><span>&nbsp;</span><span>if</span><span>(</span><span>edad</span><span>&lt;&nbsp;</span><span>2</span><span>){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Eres&nbsp;un&nbsp;bebe&nbsp;Edad"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span><span>else</span><span>{</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Eres&nbsp;menor&nbsp;de&nbsp;Edad"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>/*</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;D&eacute;jame&nbsp;Dormir&nbsp;-&nbsp;0&nbsp;hrs&nbsp;-&nbsp;5hrs</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;Buenos&nbsp;d&iacute;as&nbsp;6hrs&nbsp;-&nbsp;11hrs</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;Buenas&nbsp;tardes&nbsp;12hrs&nbsp;-&nbsp;18hrs</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;Buenas&nbsp;noches&nbsp;19hrs&nbsp;-&nbsp;23hrs</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;*/</span></div>
        <div><span>let</span><span>&nbsp;</span><span>hora</span><span>&nbsp;=&nbsp;</span><span>5</span><span>;</span></div>
        <div><span>if</span><span>(</span><span>hora</span><span>&nbsp;&gt;=&nbsp;</span><span>0</span><span>&nbsp;&amp;&amp;&nbsp;</span><span>hora</span><span>&nbsp;&lt;=&nbsp;</span><span>5</span><span>){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"D&eacute;jame&nbsp;Dormir"</span><span>);</span></div>
        <div><span>}</span><span>else</span><span>&nbsp;</span><span>if</span><span>(</span><span>hora</span><span>&nbsp;&gt;=&nbsp;</span><span>6</span><span>&nbsp;&amp;&amp;&nbsp;</span><span>hora</span><span>&nbsp;&lt;=&nbsp;</span><span>11</span><span>){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Buenos&nbsp;d&iacute;as"</span><span>);</span></div>
        <div><span>}</span><span>else</span><span>&nbsp;</span><span>if</span><span>(</span><span>hora</span><span>&nbsp;&gt;=&nbsp;</span><span>12</span><span>&nbsp;&amp;&amp;&nbsp;</span><span>hora</span><span>&nbsp;&lt;=&nbsp;</span><span>18</span><span>){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Buenos&nbsp;tardes"</span><span>);</span></div>
        <div><span>}</span><span>else</span><span>{</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Buenos&nbsp;noches"</span><span>);</span></div>
        <div><span>}</span></div>
        <br />
        <div><span>//&nbsp;Operador&nbsp;Ternario&nbsp;(condici&oacute;n)&nbsp;?&nbsp;verdadero&nbsp;:&nbsp;falso</span></div>
        <div><span>&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Operador&nbsp;Ternario&nbsp;"</span><span>);</span></div>
        <div><span>let</span><span>&nbsp;</span><span>eresMayor</span><span>&nbsp;=&nbsp;(</span><span>edad</span><span>&nbsp;&gt;=&nbsp;</span><span>18</span><span>)&nbsp;?&nbsp;</span><span>"Eres&nbsp;mayor&nbsp;de&nbsp;Edad"</span><span>&nbsp;:&nbsp;</span><span>"Eres&nbsp;menor&nbsp;de&nbsp;Edad"</span><span>;</span></div>
        <div><span>console</span><span>.</span><span>log</span><span>(</span><span>eresMayor</span><span>);</span></div>
        <div><span>//&nbsp;if&nbsp;alternativo</span></div>
        <br />
        <div><span>let</span><span>&nbsp;</span><span>dia</span><span>&nbsp;=&nbsp;</span><span>12</span><span>;</span></div>
        <br />
        <div><span>switch</span><span>(</span><span>dia</span><span>){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>case</span><span>&nbsp;</span><span>0</span><span>:</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Domingo"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>break</span><span>;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>case</span><span>&nbsp;</span><span>1</span><span>:</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Lunes"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>break</span><span>;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>case</span><span>&nbsp;</span><span>2</span><span>:</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Martes"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>break</span><span>;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>default</span><span>:</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"otro&nbsp;d&iacute;a"</span><span>);</span></div>
        <div><span>}</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
        
        </div>
    </div> `;

    var myEsReBuIt = `<a href="../apuntes/JsJonMircha/js15.html">Clase 15: Estructuras Repetitivas: Bucles e Iteración</a>
  <br>
  <div class = "paragraph05 litle" > 
    <div>

      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>contador</span><span>&nbsp;=&nbsp;</span><span>0</span><span>;</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Puede&nbsp;que&nbsp;el&nbsp;bloque&nbsp;no&nbsp;se&nbsp;ejecute&nbsp;nunca</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;</span><span>while</span><span>&nbsp;(</span><span>contador</span><span>&nbsp;&lt;&nbsp;</span><span>10</span><span>){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"while&nbsp;"</span><span>&nbsp;+&nbsp;</span><span>contador</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>contador</span><span>++;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;}</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;</span><span>//&nbsp;Al&nbsp;menos&nbsp;una&nbsp;vez</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;</span><span>do</span><span>{</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"do&nbsp;while&nbsp;"</span><span>&nbsp;+&nbsp;</span><span>contador</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>contador</span><span>++;</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;}&nbsp;</span><span>while</span><span>&nbsp;(</span><span>contador</span><span>&nbsp;&lt;&nbsp;</span><span>10</span><span>)</span></div>
      <br />
      <div><span>//for(inicio;condici&oacute;n;incremento)</span></div>
      <br />
      <div><span>for</span><span>(</span><span>let</span><span>&nbsp;</span><span>i</span><span>=</span><span>0</span><span>;&nbsp;</span><span>i</span><span>&lt;</span><span>10</span><span>;</span><span>i</span><span>++){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"for&nbsp;"</span><span>&nbsp;+&nbsp;</span><span>i</span><span>);</span></div>
      <div><span>}</span></div>
      <div><span>let</span><span>&nbsp;</span><span>numeros</span><span>&nbsp;=&nbsp;[</span><span>10</span><span>,</span><span>20</span><span>,</span><span>30</span><span>,</span><span>40</span><span>,</span><span>50</span><span>,</span><span>60</span><span>,</span><span>70</span><span>,</span><span>80</span><span>,</span><span>90</span><span>];</span></div>
      <br />
      <div><span>for</span><span>(</span><span>let</span><span>&nbsp;</span><span>i</span><span>=</span><span>0</span><span>;&nbsp;</span><span>i</span><span>&lt;</span><span>numeros</span><span>.</span><span>length</span><span>;</span><span>i</span><span>++){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"numeros:&nbsp;"</span><span>&nbsp;+&nbsp;</span><span>numeros</span><span>[</span><span>i</span><span>]);</span></div>
      <div><span>}</span></div>
      <br />
      <div><span>//for(const&nbsp;key&nbsp;in&nbsp;Object){}&nbsp;itera&nbsp;propiedades&nbsp;de&nbsp;un&nbsp;object</span></div>
      <br />
      <div><span>const</span><span>&nbsp;</span><span>jon</span><span>&nbsp;={</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nombre:</span><span>"Jon"</span><span>,</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>apellidos:</span><span>&nbsp;</span><span>"Mirra&nbsp;Chamorro"</span><span>,</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>edad:</span><span>25</span></div>
      <div><span>}</span></div>
      <br />
      <div><span>for</span><span>(</span><span>const</span><span>&nbsp;</span><span>propiedad</span><span>&nbsp;</span><span>in</span><span>&nbsp;</span><span>jon</span><span>){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>` + 'Key:&nbsp;</span><span>${</span><span>propiedad</span><span>}</span><span>,&nbsp;Value:</span><span>${</span><span>jon</span><span>[</span><span>propiedad</span><span>]</span><span>}</span><span>&nbsp;`</span><span>)</span></div>' 
      + ` <div><span>}</span></div>
      <br />
      <div><span>//for(const&nbsp;iterator&nbsp;of&nbsp;Object){}&nbsp;itera&nbsp;elementos&nbsp;de&nbsp;un&nbsp;object</span></div>
      <br />
      <div><span>for</span><span>(</span><span>const</span><span>&nbsp;</span><span>elemento</span><span>&nbsp;</span><span>of</span><span>&nbsp;</span><span>numeros</span><span>){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>elemento</span><span>);</span></div>
      <div><span>}</span></div>
      <br />
      <div><span>let</span><span>&nbsp;</span><span>cadena</span><span>&nbsp;=&nbsp;</span><span>"Hola&nbsp;Mundo"</span><span>;</span></div>
      <br />
      <div><span>for</span><span>(</span><span>const</span><span>&nbsp;</span><span>caracter</span><span>&nbsp;</span><span>of</span><span>&nbsp;</span><span>cadena</span><span>){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>caracter</span><span>);</span></div>
      <div><span>}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
      </div>
   </div>`;
var myGestErr = `<a href="../apuntes/JsJonMircha/js16.html">Clase 16: Gestión de errores</a>
<br>
<div class = "paragraph05 litle" > 
  <div>
    <div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>try</span><span>{</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"En&nbsp;el&nbsp;try&nbsp;se&nbsp;agrega&nbsp;el&nbsp;codigo&nbsp;actual"</span><span>)</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>noexiste</span><span>;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span><span>catch</span><span>(</span><span>error</span><span>){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Catch&nbsp;captura&nbsp;cualquier&nbsp;error&nbsp;surgido&nbsp;o&nbsp;lanzado&nbsp;en&nbsp;el&nbsp;try"</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;</span><span>finally</span><span>{</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"Se&nbsp;ejecutar&aacute;&nbsp;siempre&nbsp;al&nbsp;final&nbsp;de&nbsp;un&nbsp;bloque&nbsp;try"</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>try</span><span>{</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>numero</span><span>&nbsp;=&nbsp;</span><span>"a10"</span><span>;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>(</span><span>isNaN</span><span>(</span><span>numero</span><span>)){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>throw</span><span>&nbsp;</span><span>new</span><span>&nbsp;</span><span>Error</span><span>(</span><span>` + '</span><span>${</span><span>numero</span><span>}</span><span>&nbsp;No&nbsp;es&nbsp;un&nbsp;n&uacute;mero`</span><span>);</span></div>'
      + `<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>numero</span><span>&nbsp;*&nbsp;</span><span>numero</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span><span>catch</span><span>(</span><span>error</span><span>){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>` + 'Se&nbsp;produjo&nbsp;el&nbsp;siguiente&nbsp;error:&nbsp;</span><span>${</span><span>error</span><span>}</span><span>`</span><span>);</span></div>' +
      `<div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      <br />
      <div><span>&nbsp;&nbsp;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
     
      </div>
      </div>
      </div>
 </div>
   </div>`;

var myBreCont = `<a href="../apuntes/JsJonMircha/js17.html">Clase 17: Break - Continue</a>
<br>
<div class = "paragraph05 litle" > 
  <div>
  
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>numeros</span><span>&nbsp;=[</span><span>1</span><span>,</span><span>2</span><span>,</span><span>3</span><span>,</span><span>4</span><span>,</span><span>5</span><span>,</span><span>6</span><span>,</span><span>7</span><span>,</span><span>8</span><span>,</span><span>9</span><span>,</span><span>0</span><span>];</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>for</span><span>(</span><span>let</span><span>&nbsp;</span><span>i</span><span>=</span><span>0</span><span>;&nbsp;</span><span>i</span><span>&lt;&nbsp;</span><span>numeros</span><span>.</span><span>length</span><span>;</span><span>i</span><span>++){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>(</span><span>i</span><span>===</span><span>5</span><span>){</span><span>break</span><span>;}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>numeros</span><span>[</span><span>i</span><span>])</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>for</span><span>(</span><span>let</span><span>&nbsp;</span><span>i</span><span>=</span><span>0</span><span>;&nbsp;</span><span>i</span><span>&lt;&nbsp;</span><span>numeros</span><span>.</span><span>length</span><span>;</span><span>i</span><span>++){</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>(</span><span>i</span><span>===</span><span>5</span><span>){</span><span>continue</span><span>;}</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>numeros</span><span>[</span><span>i</span><span>])</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
      <div><span>&nbsp;&nbsp;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
           </div>

 </div>
   </div>`;

var myAsigDest = `<a href="../apuntes/JsJonMircha/js18.html">Clase 18: Asignación Desestructurante</a>
<br>
<div class = "paragraph05 litle" > 
  <div>        

      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//Sin&nbsp;destructuring</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>numeros</span><span>&nbsp;=&nbsp;[</span><span>1</span><span>,</span><span>2</span><span>,</span><span>3</span><span>];</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>uno</span><span>&nbsp;=&nbsp;</span><span>numeros</span><span>[</span><span>0</span><span>],</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>dos</span><span>&nbsp;=&nbsp;</span><span>numeros</span><span>[</span><span>1</span><span>],</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>tres</span><span>&nbsp;=&nbsp;</span><span>numeros</span><span>[</span><span>2</span><span>];</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>uno</span><span>,</span><span>dos</span><span>,</span><span>tres</span><span>);</span></div>
      <br /><br />
      <div><span>&nbsp;&nbsp;</span><span>//Con&nbsp;destructuring</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;[</span><span>one</span><span>,</span><span>two</span><span>,</span><span>three</span><span>]&nbsp;=&nbsp;</span><span>numeros</span><span>;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>one</span><span>,</span><span>two</span><span>,</span><span>three</span><span>);</span></div>
      <br />
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>persona</span><span>&nbsp;=&nbsp;{</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nombre:</span><span>&nbsp;</span><span>"Jon"</span><span>,</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>apellido:</span><span>&nbsp;</span><span>"MirCha"</span><span>,</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>edad:</span><span>35</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;{</span><span>nombre</span><span>,</span><span>edad</span><span>,</span><span>apellido</span><span>}&nbsp;=&nbsp;</span><span>persona</span><span>;</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>nombre</span><span>,</span><span>apellido</span><span>,</span><span>edad</span><span>);</span></div>
      <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
     
      </div>
 </div>
   </div></div> `;

var myObectLit = `<a href="../apuntes/JsJonMircha/js19.html">Clase 19: Objetos Literales</a>
  <br>
  <div class = "paragraph05 litle" > 
    <div>        

        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>nombre</span><span>&nbsp;=&nbsp;</span><span>"kEnAi"</span><span>,</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>edad</span><span>&nbsp;=&nbsp;</span><span>7</span><span>;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>perro</span><span>&nbsp;=&nbsp;{</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nombre&nbsp;:</span><span>nombre</span><span>,</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>edad:</span><span>edad</span><span>,</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>ladrar</span><span>:</span><span>&nbsp;</span><span>function</span><span>(){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"guauu&nbsp;guauu!!!"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>perro</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>perro</span><span>.</span><span>ladrar</span><span>();</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>dog</span><span>&nbsp;=&nbsp;{</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>nombre</span><span>,</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>edad</span><span>,</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>ladrar</span><span>(){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>"guauu&nbsp;guauu&nbsp;&nbsp;guauu!!!"</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>dog</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>dog</span><span>.</span><span>ladrar</span><span>();</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
       
        </div>
   </div>
     </div>`;
var myParRest = `<a href="../apuntes/JsJonMircha/js20.html">Clase 20: Parámetros REST & Operador Spread</a>
  <br>
  <div class = "paragraph05 litle" > 
    <div>        

        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;</span><span>script</span><span>&gt;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>function</span><span>&nbsp;</span><span>sumar</span><span>(</span><span>a</span><span>,&nbsp;</span><span>b</span><span>,&nbsp;...</span><span>c</span><span>){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>let</span><span>&nbsp;</span><span>resultado</span><span>&nbsp;=&nbsp;</span><span>a</span><span>&nbsp;+&nbsp;</span><span>b</span><span>;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>c</span><span>.</span><span>forEach</span><span>(</span><span>function</span><span>(</span><span>n</span><span>){</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>resultado</span><span>&nbsp;+=&nbsp;</span><span>n</span><span>;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span>&nbsp;</span><span>resultado</span><span>;</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>sumar</span><span>(</span><span>1</span><span>,</span><span>2</span><span>));</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>sumar</span><span>(</span><span>1</span><span>,</span><span>2</span><span>,</span><span>3</span><span>));</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>sumar</span><span>(</span><span>1</span><span>,</span><span>2</span><span>,</span><span>3</span><span>,</span><span>4</span><span>));</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>sumar</span><span>(</span><span>1</span><span>,</span><span>2</span><span>,</span><span>3</span><span>,</span><span>4</span><span>,</span><span>5</span><span>));</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>sumar</span><span>(</span><span>1</span><span>,</span><span>2</span><span>,</span><span>3</span><span>,</span><span>4</span><span>,</span><span>5</span><span>,</span><span>6</span><span>));</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>sumar</span><span>(</span><span>1</span><span>,</span><span>2</span><span>,</span><span>3</span><span>,</span><span>4</span><span>,</span><span>5</span><span>,</span><span>6</span><span>,</span><span>7</span><span>));</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>arr1</span><span>&nbsp;=&nbsp;[</span><span>1</span><span>,</span><span>2</span><span>,</span><span>3</span><span>,</span><span>4</span><span>,</span><span>5</span><span>],</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>arr2</span><span>&nbsp;=&nbsp;[</span><span>6</span><span>,</span><span>7</span><span>,</span><span>8</span><span>,</span><span>9</span><span>,</span><span>0</span><span>];</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>arr1</span><span>,</span><span>arr2</span><span>);</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>arr3</span><span>&nbsp;=&nbsp;[</span><span>arr1</span><span>,</span><span>arr2</span><span>];</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>arr3</span><span>);</span></div>
        <br />
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>const</span><span>&nbsp;</span><span>arr4</span><span>&nbsp;=&nbsp;[...</span><span>arr1</span><span>,&nbsp;...</span><span>arr2</span><span>];</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>console</span><span>.</span><span>log</span><span>(</span><span>arr4</span><span>);</span></div>
        <div><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&lt;/</span><span>script</span><span>&gt;</span></div>
       
        </div>
       
   </div>
     </div>`;