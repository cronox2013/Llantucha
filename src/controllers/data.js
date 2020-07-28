export const CATEGORIES = [
  "postres",
  "botanas",
  "desayunos",
  "ensaladas",
  "bebidas",
  "sopas",
  "entradas",
  "comidas"
];

export const RECIPES = [
  {
    id: 1,
    title: "Tostada con huevo y queso",
    image:
      "https://s2.eestatic.com/2015/01/13/cocinillas/Cocinillas_3009771_115921060_1706x960.jpg",
    video: "https://www.youtube.com/embed/ssfNGqSKa54",
    content:
      "La tostada con huevo y queso definitiva. Fácil de hacer, riquísima y lista en menos de 5 minutos, una auténtica receta Cocinillas en estado puro",
    category: 2,
    ingredients: [
      "1 rebanada de pan de molde ",
      "1 huevo",
      "Queso rallado",
      "Sal",
      "pimienta"
    ],
    preparation: `
    Precalentamos el horno a 180ºC.
    Cortamos, sin llegar al final, un cuadrado en la rebanada de pan dejando un centímetro de margen a cada lado.
    Aplastamos con una cucharada para bajar el nivel de la parte que hemos recortado.
    Llenamos el hueco con un huevo.
    Ponemos queso rallado entre el borde del corte y el huevo para sellarlo.
    Opcionalmente podemos echar sal y pimienta al gusto.
    Metemos al horno 15 minutos a 180ºC, aunque mejor vigilar poco a poco.`
  },

  {
    id: 2,
    title: "Hot Cakes",
    image:
      "https://d2p4qauh5fa1j0.cloudfront.net/fotos/recetas/hot-c_Blitx4mQLDKJr59AWX21gu78FkcUHw.jpg",
    video: "https://www.youtube.com/embed/VSJEy39IsVA",
    content:
      "Una receta clásica y deliciosa que encontré en el recetario de mi abuelita. A juzgar por la forma en que se veía la receta, era una de las favoritas de la familia.",
    category: 2,
    ingredients: [
      "Azúcar 100 grs. ",
      "Harina 240 grs.",
      "Huevos 3 Unidades",
      "Leche 360 Ml.",
      "Leche 360 Ml.",
      "Polvo para hornear 8 grs.",
      "Extracto de vainilla 5 Ml"
    ],
    preparation: `    Cernir harina, polvo para hornear y azúcar, separar los huevos y combinar las yemas con la leche, la mantequilla y el extracto de vainilla.
    Batir las claras a punto de picos suaves.
    Combinar la mezcla de harina con la mezcla de leche, incorporar con movimientos envolventes 1/3 de las claras para aligerar la consistencia, y despues añadir el resto.
    Cocinar los hot cakes sobre la plancha en un sarten con mantequilla.`
  },

  {
    id: 3,
    title: "Tostada de pera",
    image:
      "https://recetas.lidl.es/var/lidl-recipes/storage/images/media/spain/images/online-editor/autoupload/receta-de-tostada-de-pera-con-infusion-de-hinojo/2274446-1-esl-ES/Receta-de-Tostada-de-Pera-con-Infusion-de-Hinojo_image950x509.jpg",
    video: "https://www.youtube.com/embed/ERsi5XdTeFU",
    content:
      "Te traemos un nuevo desayuno a base de pera e infusión de hinojo. La pera es beneficiosa para la salud y para la piel y una infusión de hinojo es ideal para la digestión.",
    category: 2,
    ingredients: [
      "1 pera  ",
      "2 rebanadas de pan de molde integral sin corteza La Cestera",
      "pimienta",
      "infusión de hinojo Lord Nelson",
      "queso crema Goldessa"
    ],
    preparation: `
    Lavamos la pera y la cortamos en láminas con la ayuda de una mandolina.
    Tostamos las rebanadas de pan en una sartén y extendemos el queso crema sobre ellas.
    Colocamos las láminas de pera en las tostadas y aromatizamos con pimienta molida.
    Acompañamos las tostadas con una infusión de hinojo y… ¡a empezar el día con energía!`
  },

  {
    id: 4,
    title: "Omelette",
    image:
      "https://www.enmicocinahoy.cl/wp-content/uploads/2013/04/omelette-receta-basica-1024x782.jpg",
    video: "https://www.youtube.com/embed/WM3ZMS4Pe-s",
    content:
      "El omelette es una preparación rápida y nutritiva, ideal para la hora del desayuno o la cena.",
    category: 2,
    ingredients: [
      "3 huevos  ",
      "queso picado en cubos pequeños o rallado",
      "Sal, pimienta y ciboulette picado fino",
      "1 cucharada de mantequilla"
    ],
    preparation: `
    En una sartén a fuego medio derretir la mantequilla y esperar a que empiece a burbujear.
    Por mientras colocar en un bol los huevos, sal, pimienta y ciboulette, batir por 20 segundos hasta que estén bien mezclados.
    Volcar en la sartén enmantequillada y caliente, dejar cocinar hasta que empiecen a ver que el borde esta cocido, empezar a mover la sartén para asegurarse que la omelette esta suelta y ya ha formado costra.
    Agregar el relleno y dejar que el queso se empiece a derretir.
    Ayudándose con una espátula, plegar la omelette y pasar a un plato ojalá caliente.
    Dejar reposar 1 minuto.
    Servir.`
  },

  {
    id: 5,
    title: "Desayuno americano",
    image:
      "https://cocina-casera.com/wp-content/uploads/2018/04/desayuno-americano-3.jpg",
    video: "https://www.youtube.com/embed/pVKoBu_H7xE",
    content:
      "Desayuno americano o American breakfast es uno de los éxitos del mítico grupo de rock  Supertramp. El desayuno en Norteamérica tiene bastante parecido al desayuno inglés en los huevos y beicon, pero añade más ingredientes como los panqueques o famosas tortitas.",
    category: 2,
    ingredients: [
      "3 huevos ",
      "100 g de tocino o beicon en lonchas",
      "½ taza de leche",
      "Media taza de harina",
      "2 cucharadas de azúcar",
      "1 cucharada de mantequilla",
      "Sal y pimienta"
    ],
    preparation: `
    Para garantizar un plato caliente, se recomienda comenzar por los panqueques. En una licuadora mezclar un huevo, la leche y la azúcar hasta homogeneizar.
    Añadir la mantequilla y licuar. Agregar poco a poco la harina sin dejar de remover hasta conseguir una mezcla homogénea.
    En una sartén caliente, agregar una cucharadita de mantequilla. Colocar una porción de la mezcla con un cucharón y dejar cocinar hasta que aparezcan burbujas sobre la superficie. Dar la vuelta y dorar del otro lado.
    Repetir hasta que la mezcla se haya gastado y reservar.
    Por otro lado, poner a calentar un sartén antiadherente. Una vez que esté bien caliente, agregar las lonchas de tocino y cocinar hasta dorar por ambos lados. Su textura debe ser crujiente.
    Finalmente, en otra sartén, calentar con un chorrito de aceite. Batir dos huevos a mano, agregar una pizca de sal y pimienta y vaciar en la sartén. Revolver constantemente hasta que los huevos estén un poco cuajados, pero no demasiado secos.
    Para servir, en un plato agregar el huevo revuelto, el tocino y los panqueques en forma de torre. Éstos últimos pueden ir bañados con miel, mermelada, sirope, etc.`
  },

  {
    id: 6,
    title: "Desayuno británico",
    image: "https://okdiario.com/img/recetas/2016/12/14/desayuno-ingles-01.jpg",
    video: "https://www.youtube.com/embed/Jbm7GBNGvVQ",
    content:
      "Desayuno inglés o English breakfast, sustancioso desayuno rico en grasas saturadas donde no faltan las salchichas.",
    category: 2,
    ingredients: [
      "4 salchichas para asar tipo Nuremberg ",
      "8 lonchas de bacón",
      "4 huevos",
      "3 tomates",
      "Aceite de oliva ",
      "4 rebanadas de pan tostado"
    ],
    preparation: `En primer lugar comenzamos añadiendo aceite a una sartén y friendo las salchichas. Nos tienen que quedar crujientes así que fuego medio y las cocinamos entre 8 y 10 minutos. Mientras termina de hacerse las salchichas tendremos listo el bacon y los añadimos una vez tenemos la sartén libre.
    El bacon no necesita mucho, pero como lo buscamos crujiente al menos dos minutos por cada lado o tres; dependiendo del grosor de la loncha.A continuación lavamos y cortamos los tomates en rebanadas de unos 2 cm, espolvorear sal, freír los tomates unos 6 minutos por cada lado hasta que se lleguen a caramelizar.
    Los huevos se hacen lo último, se puede elegir o escalfados o revueltos o fritos, aunque estos últimos son los mas populares.Servir en el plato las salchichas, el bacon, los tomates y el huevo acompañado de pan tostado. Algunas personas acompañan el huevo con tomate ketchup o mostaza inglesa. Para beber no falta el café y el zumo de naranja.`
  },

  {
    id: 7,
    title: "Desayuno francés",
    image:
      "https://chefjames.com/wp-content/uploads/2019/07/DESAYUNO-FRANCES-1-1300x482.jpg",
    video: "https://www.youtube.com/embed/DdDHjFObwXA",
    content:
      "Desayuno inglés o English breakfast, sustancioso desayuno rico en grasas saturadas donde no faltan las salchichas.",
    category: 2,
    ingredients: [
      "papa rallada",
      "huevos",
      "queso",
      "mantequilla",
      "cebolla",
      "tomate",
      "sal",
      "aceite de oliva"
    ],
    preparation: `Comenzamos preparando los huevos. Sofreímos la cebolla, el tomate y el cilantro por unos minutos con aceite de oliva. Después, agregamos los huevos, sazonamos con sal y mezclamos hasta que estén cocinados. Apartamos del fuego. 
    Por otra parte, le agregamos el queso a las papas ralladas. Mezclamos y después la añadimos a un molde de muffins que podemos conseguir en cualquier supermercado. Este recipiente debe estar previamente engrasado con mantequilla. 
    Lo llevamos a un horno precalentado a 350 grados y cocinamos hasta que estén doraditos. 
    Por último, sacamos las copitas de papa del horno y le agregamos el huevo por encima. `
  },

  {
    id: 8,
    title: "Porridge de avena y fruta",
    image:
      "https://www.solucionesparaladiabetes.com/magazine-diabetes/wp-content/uploads/avena-desayuno-696x464.jpg",
    video: "https://www.youtube.com/embed/wtbtdSWoAEo",
    content:
      "La avena es un cereal compuesto por fibra. En nuestro organismo, esta fibra soluble absorbe los hidratos de carbono, por lo que ayuda a mantener los niveles de azúcar en sangre controlados.",
    category: 2,
    ingredients: [
      "½ taza de avena.",
      "1 taza de leche desnatada.",
      "6 almendras.",
      "1 Manzana.",
      "1 cucharadita de miel."
    ],
    preparation: `
    En una olla pequeña echamos la leche y los copos. Ponemos a cocer la olla unos 5 minutos aproximadamente a fuego medio-bajo y removemos continuamente.
    Pelamos la manzana y preparamos las almendras.
    Cuando la avena empiece a espesar y a coger una textura cremosa, apagamos el fuego y servimos en un bol.
    En la parte superior del porridge colocamos la manzana troceada y las almendras.
    Si queremos endulzar un poco, podemos esparcir una cucharada de miel. Incluso, podemos añadir canela en polvo al gusto.`
  },

  {
    id: 9,
    title: "Tostadas de aguacate y huevo",
    image:
      "https://img-global.cpcdn.com/recipes/7167956f2eac5fc1/751x532cq70/tostadas-de-aguacate-y-huevo-foto-principal.jpg",
    video: "https://www.youtube.com/embed/lRT37ppNAOM",
    content: "Unas tostadas nutritivas, bajas en grasas y ricas en proteínas. ",
    category: 2,
    ingredients: [
      "4 Rodajas Pan Integral con Semillas ",
      "1 Aguacate ",
      "2 Huevos ",
      "2 Tomates Cherry de Pera ",
      "1 Chorrito Aceite de Oliva Virgen Extra ",
      "1 Pizca Sal ",
      "1 Pizca Orégano "
    ],
    preparation: `Tostamos el pan. Mientras, machacamos el aguacate en un recipiente con un tenedor. Cuando quede una pasta untable, le añadimos el chorrito de aceite y la pizca de sal y lo mezclamos bien con el tenedor.
    En una sartén pequeña y antiadherente hacemos los huevos revueltos. Yo pinto la sartén de aceite de oliva con ayuda de un pincel de silicona. Echo los huevos, los revuelvo (como su nombre indica) y los saco del fuego antes de que se cuajen del todo (aunque eso va a gustos, se pueden dejar poco hechos o muy hechos...)
    Y llega el momento de montarlo todo!! Untamos el aguacate en el pan tostado, encima colocamos el huevo + los tomatitos a rodajitas + una pizca de orégano por encima. Y a disfrutar antes de que el pan se enfríe y deje de estar crujiente.`
  },

  {
    id: 10,
    title: "Crepes de jamón y queso",
    image: "https://okdiario.com/img/2016/08/15/crepe-de-jamon-y-queso-655x368.jpg",
    video: "https://www.youtube.com/embed/EipUj1UiRtU",
    content:
      "Las crepes de jamón y queso son un clásico desayuno, merienda o cena rápida que nunca falla.",
    category: 2,
    ingredients: [
      "2 huevos",
      "125 gr de harina",
      "300 ml de leche ",
      "Una pizca de sal ",
      "Una pizca de nuez moscada",
      "150 gr de lonchas de queso finas",
      "150 gr de jamón york "
    ],
    preparation: `El secreto de unas buenas crepes estará en la masa y en la herramienta que usaremos para cocinarla. Es importante tener siempre a mano una buena sartén antiadherente que nos ayude a crear un plato increíble. En las buenas creperías engrasan esta herramienta con un poco de mantequilla para poder conseguir un resultado mucho mejor.
    Con la sartén lista vamos en busca de la masa. Empezamos a tamizar la harina, la pasamos por un colador para que no quede ningún grumo, la masa de la crepe es de las más suaves que existen.
Batimos los huevos con unas varillas hasta que hagan un poco de espuma. Les incorporamos la leche, base principal de estas crepes. Ponemos una pizca de sal, si queremos aprovechar la masa y hacer crepes dulces no es necesario que pongamos sal.
Vamos incorporando poco a poco la harina hasta conseguir la masa de crepe perfecta. Debe quedar un poco líquida para poder derramarse mucho mejor en la sartén y quedar lo más fina posible.
Dejamos que la masa repose durante una hora en la nevera. Cuando esté lista calentamos la sartén. Añadimos un cucharón de masa y la repartimos por la sartén. En el momento en que ha cuajado le damos la vuelta un segundo y retiramos el fuego.
Colocamos la loncha de jamón y de queso, plegamos la crepe que aún caliente permitirá que el queso se funda perfectamente. Tendremos lista una crepe de jamón y queso deliciosa. Repetimos el proceso las veces que queramos. Atrévete a crear tus propias crepes caseras repletas de sabor.`
  },

  {
    id: 11,
    title: "Ensalada de pasta con brócoli",
    image:
      "https://i1.wp.com/www.piloncilloyvainilla.com/wp-content/uploads/2019/05/pasta-con-brocoli-2-of-3.jpg?resize=900%2C1350&ssl=1",
    video: "https://www.youtube.com/embed/WRptoh7jWDw",
    content:
      "Una deliciosa pasta que con el sabor del brócoli, resulta fenomenal. Prepárate a disfrutar de este plato de otro mundo",
    category: 3,
    ingredients: [
      "1 Paquete de pasta de 8oz. 227 grs.",
      "4 Tazas de brócoli en trozos",
      "3 dientes de ajo, pelados",
      "2 cucharadas de mantequilla yo uso Earth Balance que es vegana",
      "2 cucharadas de aceite de oliva extra virgen",
      "La ralladura de un limón amarillo",
      "1 cucharada de jugo de limón el que le quitaste la ralladura",
      "sal y pimienta al gusto",
      "1 chile seco *opcional",
      "queso parmesano yo uso vegano de la marca Violife"
    ],
    preparation: ` Pon a hervir agua en la olla donde vas a cocer la pasta.
    Cuando este hirviendo ponle una cucharadita de sal y pon el brócoli. Déjalo por unos 2 minutos y sácalo, ponlo de una vez en el platón donde vas a servir la pasta. La idea general es que el brócoli quede crujiente y verde fuerte.
    Pon la pasta (si, en la misma olla y con la misma agua) y sigue las instrucciones del paquete. Cuando este lista la pasta, guarda una taza de agua donde se coció y ponla en el mismo platón que el brócoli.
    En un sartén o en la misma olla, pon la mantequilla, el aceite de oliva, ajo y la ralladura de limón y el chile seco si lo vas a usar por un minuto aproximadamente. La idea es que el ajo se cueza, pero que no se dore. Quítalo del fuego y pon la sal (2 cucharaditas aprox.), la pimienta y el jugo del limón. Revuelve muy bien y vacíalo encima de la pasta y brócoli.
    Termina la pasta con nuceces, semillas o queso parmesano vegano.`
  },

  {
    id: 12,
    title: "Ensalada rusa",
    image: "https://cdn.bolivia.com/sdi/2011/08/19/ensalada-rusa-537234.jpg",
    video: "https://www.youtube.com/embed/Xp_dCrkdMxM",
    content:
      "Este tipo de ensalada, es un plato típico en varios países de Europa, Asia y América. ",
    category: 3,
    ingredients: [
      "12 papas sabaneras grandes",
      "1 rama de cebolla",
      "2 zanahorias",
      "¼ libra de habichuelas",
      "1 cebolla cabezona ",
      "1 frasco mediano de mayonesa",
      "1 frasco de aceitunas",
      "1 cucharadita de mostaza",
      "1 limón perejil finamente picado",
      "Sal y pimienta"
    ],
    preparation: `Cocinar las papas con agua, sal y la rama de cebolla hasta que estén blandas. Dejarlas enfriar y partirlas en cuadritos. Aparte cocinar la zanahoria partida en cuadritos y las habichuelas desvenadas y picadas.
    Mientras tanto mezclar la mayonesa, la mostaza, el jugo de limón y salpimentar. Cortar en rodajas la mitad de las aceitunas.
    Revolver la papa, la zanahoria, la habichuela, las aceitunas, el perejil y la cebolla con la mayonesa. Colocar en una bandeja y decorar con aceitunas.`
  },

  {
    id: 13,
    title: "Ensalada Waldorf",
    image:
      "https://locosxlagastronomia.com/wp-content/uploads/2017/12/1fff3e256019cbae5712329f832cd440.jpg",
    video: "https://www.youtube.com/embed/gKjQllo5E0Y",
    content:
      "Sencilla pero llena de sabores. La podemos hacer súper rápido y es fenomenal",
    category: 3,
    ingredients: [
      "2 pechugas de pollo (rostizadas)",
      "1 ramillete de apio",
      "1 manzana picadita",
      "2 tazas de uvas moradas",
      "1 cebolla cabezona ",
      "2 tazas de nueces pecanas",
      "3/4 de tazas de mayonesa",
      "jugo de un limón",
      "pimienta negra"
    ],
    preparation: `Mezclamos el apio, las nueces, las uvas, las pechugas de pollo, la mayonesa, el aceite de oliva, sal, pimienta negra, manzana y jugo de limón. 
    ¡Y es todo! Es perfecta como acompañante o de entrada.`
  },

  {
    id: 14,
    title: "Ensalada de tomates con chorizo",
    image: "https://c8.alamy.com/compes/x0pxc6/chorizo-ensalada-de-tomate-x0pxc6.jpg",
    video: "https://www.youtube.com/embed/kyEwyJZXoN4",
    content:
      "Nada como el espectacular sabor del chorizo. Esta ensalada es tan deliciosa, que dudo que alguien pueda decirle que no. ",
    category: 3,
    ingredients: [
      "2 Chorizos españoles",
      "3 dientes de ajo fileteados",
      "2 tomates jugosos",
      "2 ramilletes de cebollin",
      "1 ramillete de perejil fresco italiano",
      "orégano fresco",
      "vinagre de jerez",
      "1 cucharada de mostaza antigua entera"
    ],
    preparation: `Comenzamos por sofreír el chorizo cortado en trozos no circulares, hasta que el aceite tome un color rojo y se aromatice. 
    Luego retiramos los chorizos y agregamos el ajo fileteado. Cuando empiece a tomar un tono tostado, agregamos dos cucharadas de vinagre y la mostaza para formar un aderezo, reservamos. 
    En un recipiente, incorporamos los tomates cortados en trozos no uniformes, el perejil, cebollines, orégano y seguido, agregamos el chorizo con la vinagreta tibia. 
    Mezclamos y servimos. Esto está ready!.`
  },

  {
    id: 15,
    title: "Ensalada de aguacate y garbanzos",
    image:
      "https://t1.rg.ltmcdn.com/es/images/5/0/5/img_ensalada_de_garbanzos_con_aguacate_60505_600.jpg",
    video: "https://www.youtube.com/embed/6Nr_pksRci8",
    content:
      "Esta ensalada es tan deliciosa, que dudo que alguien pueda decirle que no. ",
    category: 3,
    ingredients: [
      "1 Taza de garbanzos",
      "2 aguacates hass",
      "1/2 Taza de espinaca",
      "1/2 Taza de queso feta",
      "1/2 Taza de tomates cherry",
      "1/4 De taza de Boniato"
    ],
    preparation: `En un plato grande agregamos el aguacate, las espinacas, el queso, los garbanzos, los tomates y el boniato, todos por separado para que podamos escoger lo que más nos guste.
    Para servir agarramos un poco de cada ingrediente y rociamos con un poco de aceite de oliva, sal y limón.`
  },

  {
    id: 16,
    title: "Ensalada César",
    image: "https://www.comedera.com/wp-content/uploads/2018/03/ensalada-cesar.jpg",
    video: "https://www.youtube.com/embed/LhrapnF8Phk",
    content:
      "¿Buscando opciones para una cena ligera? Esta ensalada César puede salvarte.",
    category: 3,
    ingredients: [
      "2 yemas de huevo ",
      "2 cucharadas de jugo de limón ",
      "1 cucharadita de Salsa inglesa",
      "2 dientes de ajo",
      "1 taza de aceite de canola",
      "1 oz de crutones",
      "1 pechuga de pollo ",
      "sal",
      "pimienta",
      "lechuga romana"
    ],
    preparation: `Para el aderezo
    En una licuadora, agregamos las yemas de huevo, el jugo de limón, la salsa inglesa, los dientes de ajo triturados y procesamos.
    Poco a poco vamos agregando el aceite hasta que se vaya formando una emulsión y obtengamos una mezcla homogénea y cremosa.
    Una vez formada la mayonesa agregamos el queso rallado, sal y pimienta y dejamos a un lado.Para la ensalada
    En un recipiente agregamos la lechuga y un par de cucharadas del aderezo Caesar, seguido de los crutones y el pollo picado, mezclamos bien y servimos.`
  },

  {
    id: 17,
    title: "Ensalada griega",
    image: "https://www.comedera.com/wp-content/uploads/2018/05/ensalada-griega.jpg",
    video: "https://www.youtube.com/embed/xMchkLG-yyI",
    content:
      "Desde Grecia hasta tu mesa, esta ensalada griega es mi secreto para una cena deliciosa y sin regordimientos.",
    category: 3,
    ingredients: [
      "150 Gr. de tomates cherry",
      "100 Gr. de queso feta ",
      "1 lata mediana de aceitunas negras",
      "1 cebolla morada ",
      "1 pepino",
      "1 cucharada de Vinagre de vino rojo",
      "3 cucharadas de aceite de oliva",
      "sal",
      "1 chorrito de miel"
    ],
    preparation: `En un envase añadimos todos los ingredientes: un tomate cortado en dados, medio pepino troceado dejando un poquito de piel, media cebolla pelada y picada en trozos, aceitunas negras (las que sobren se guardan con el líquido para que duren más), queso feta troceado.
    En un pequeño recipiente, preparamos una sencilla vinagreta para aliñar la ensalada en estas proporciones: una parte de vinagre de vino tinto, otras tres partes de aceite de oliva, un poquito de sal y un chorrito de miel para darle un punto dulce y contrarrestar la acidez del vinagre. Mezclamos con la ensalada, ¡y listo!.`
  },

  {
    id: 18,
    title: "Ensalada de quinoa, naranja, menta y granada",
    image:
      "https://chefjames.com/wp-content/uploads/2019/06/16185371889_7cb27c17e4_k-1300x482.jpg",
    video: "https://www.youtube.com/embed/5PPTIdR3Eqs",
    content:
      "Nada mejor que una combinación de sabores de este tipo. Será toda una experiencia ",
    category: 3,
    ingredients: [
      "1 libra de Quinoa",
      "2 naranjas",
      "1 granada",
      "1 toronja",
      "piñones",
      "canela",
      "clavo de olor",
      "jengibre",
      "cardamomo",
      "azúcar"
    ],
    preparation: `Cocinamos la quinoa siguiendo las direcciones del paquete del producto.
    Luego, en un recipiente agregamos la menta, jugo de naranja con su cáscara, jugo y cáscara de toronja, semillas de granada y por último, la quinoa y los piñones tostados previamente mezclado con las especias.`
  },

  {
    id: 19,
    title: "Ensalada de fresas quemadas con ricotta",
    image:
      "https://chefjames.com/wp-content/uploads/2018/04/WhatsApp-Image-2018-04-27-at-12.20.27-PM-e1524864486725-1300x975.jpeg",
    video: "https://www.youtube.com/embed/f-pYLrsmh_Q",
    content:
      "Anímate a preparar esta ensalada que no es la típica acompañante de nuestros platillos…",
    category: 3,
    ingredients: [
      "2 tazas de fresas",
      "2 tazas de arúgula",
      "2 onzas de ricotta",
      "1 taza de pistachos triturados",
      "1 taza de tomates cherry",
      "1 cucharadita de extracto de vainilla",
      "4 cucharadas de vinagre de jerez",
      "1/2 cucharadita de mostaza dijon",
      "1 cucharada de miel",
      "4 cucharadas de aceite de oliva",
      "1 cucharada de eneldo fresco"
    ],
    preparation: ` En una bandeja para hornear colocamos las fresas, previamente sazonados con un poco de sal, aceite oliva y pimienta. 
    Llevamos a un horno precalentado a 450° hasta dorar toda la parte externa de nuestras fresas. Luego retiramos y dejamos reposar a temperatura ambiente. 
    En una licuadora agregamos todos los ingredientes para el aderezo y batimos por dos minutos. Sazonamos con sal y pimienta. Reservamos. 
    En un recipiente mezclamos las fresas con los tomates cherry cortados a la mitad y la arúgula. 
    Bañamos con el aderezo y mezclamos. Servimos con pistachos por encima y unas cuantas cucharadas de ricotta.`
  },

  {
    id: 20,
    title: "Ensalada de sandía con menta y pollo al grill",
    image: "https://chefjames.com/wp-content/uploads/2019/01/FOTO-ENSALADA.png",
    video: "https://www.youtube.com/embed/bd9FIqnpuZ4",
    content: "Esta es una receta fácil, sabrosa y con sabores frescos que te encantarán",
    category: 3,
    ingredients: [
      "Una pechuga de pollo",
      "Un aguacate ",
      "1/2 pepino ",
      "Una taza de sandía",
      "Una cucharada de hojas de menta fresca",
      "jugo de limón",
      "Una taza de aceite de oliva"
    ],
    preparation: `Sazonamos la pechuga de pollo con aceite de oliva, sal y pimienta al gusto. 
    Colocamos la pechuga en una plancha caliente por unos 15 minutos o hasta que se cocine sin dejar que se seque. 
    Cortamos la pechuga en cubos y la colocamos en un recipiente para ensaladas.
    Agregamos el pepino, el aguacate, la sandía y las hojas de mentas en el recipiente.
    Sazonamos con el jugo de limón, aceite de oliva, sal y pimienta al gusto.`
  },
  {
    id: 21,
    title: "Pie de limon",
    image:
      "https://arc-anglerfish-arc2-prod-lanacionar.s3.amazonaws.com/public/BF2JJDGMJ5F4XCR3UUO5C64PXQ.jpg",
    video: "",
    content:
      "Los invito a probar hacer este exquisito postre, que hoy en día hago a menudo para aprovechar los limones de mi árbol. Y mejor si lo hacen para alguien que aman.",
    category: 0,
    ingredients: [],
    preparation: ""
  },
  {
    id: 22,
    title: "Maicillos",
    image: "https://cdn.bolivia.com/sdi/2012/12/26/9b798653c8e14be4b733243ac0812952.jpg",
    video: "https://www.youtube.com/embed/SZpwjlFmSi0",
    content:
      "Desde que sigo estos pasos como a una religión mis maicillos siempre quedan perfectos, así que espero que los suyos también!",
    category: 0,
    ingredients: [
      "2 libras de harina de maíz cernida",
      "1 libra de azúcar molida",
      "4 huevos",
      "1 libra de manteca",
      "1 copa de pisco",
      "1 sobre canela molida"
    ],
    preparation: `En un recipiente mezcle la harina, el azúcar, la manteca, canela molida, copa de pisco y los huevos hasta formar una masa completamente suave.
	Haga pequeñas bolitas hasta terminar la masa, aplaste ligeramente cada una y forme un hueco en el centro de la base de cada bolita ayudada con el dedo.
	En latas previamente enharinadas y enmantequilladas coloque los maicillos sobre hojas de papel sabana para evitar que se peguen. Hornee a temperatura regular aproximadamente 15 minutos hasta que estén dorados.
	Deje enfriar. Decore cada maicillo colocando al centre una porción de mermelada o dulce del sabor de si preferencia.`,
    tags: ["maicena", "manteca", "pisco"]
  },
  {
    id: 23,
    title: "Suspiros de Merengue",
    image:
      "https://annaspasteleria.com/wp-content/uploads/2014/11/02-194-post/IMG_4954web.jpg",
    video: "https://www.youtube.com/embed/Iz9z31yFE8M",
    content:
      "La cosa acerca de los merengues es que, por lo general, son extremadamente fáciles de hacer, pero, aún mas fáciles de dañar (sobre todo si no tienes mucha experiencia). Un día puedes tener un error y después otro, y puede llegar a ser un poco frustrante; pero por suerte para ustedes, ahora me tienen a mi!; que, como mi mamá dice, soy más terca que una mula desde chiquitica y no me doy por vencida con una receta hasta que me quede bien. Lo que hice es que poco a poco fui recolectando tips de personas conocidas y de recetas en internet que hacen que ahora mis suspiritos siempre queden perfectos. ",
    category: 0,
    ingredients: [
      "150 gramos de claras de huevo (aproximadamente 5 claras)",
      "300 gramos (1 1/2 tazas) de azúcar",
      "2.5 gramos de sal",
      "2.5 gramos de cremor tártaro (puede sustituirse por 1/2 cucharadita de zumo de limón)",
      "5 gramos (1 cucharadita) de vainilla",
      "1 cucharadita de colorante alimentario en pasta (opcional)"
    ],
    preparation:
      "Precalentar el horno a 90°C. Preparar 2 o 3 bandejas (dependiendo del tamaño que quieran hacer sus suspiros) con papel parafinado o papel de horno. Cocinar las claras y el azúcar a Baño María* hasta que alcancen 55-60°C (si no se tiene un termómetro de cocina, este punto será en el que se observe que el azúcar se ha diluido por completo en el huevo y no se vean grumos), hay que remover constantemente o de lo contrario la clara se cocinará. En un bowl limpio y seco de una batidora vaciar la mezcla de huevo y azúcar y agregar el cremor tártaro. Batir en velocidad media-rápida hasta que se vea brillante, sedoso y al levantar las varillas de la batidora se hagan picos que se mantienen sin caerse. Otro buen indicador de que el merengue está listo es que al tocar el bowl, ya no se siente caliente sino a temperatura ambiente. Se debe tener cuidado de no batir demasiado, ya que esto puede hacer que pierda su textura. En una bandeja con papel parafinado colocar el merengue con cucharadas o con una manga pastelera (en este punto es cuestión de gusto personal, de las dos maneras se ve muy bien) Hornear entre 1 hora y media a 2 horas, hasta que se vea que los suspiros han comenzado a secarse. Dejar 30-45 minutos en el horno apagado para que se terminen de secar. Pueden almacenarse en bolsas o contenedores herméticos.",
    tags: ["huevos", "azucar molida"]
  },
  {
    id: 24,
    title: "Torta tres leches",
    image:
      "https://www.laylita.com/recetas/wp-content/uploads/2018/09/1-Pastel-o-torta-tres-leches.jpg",
    video: "https://www.youtube.com/embed/ty_Wq8nQ634",
    content:
      "Hoy en día hay muchísimas nuevas tendencias en el mundo de la pastelería. Tenemos cientos de programas en la televisión que nos muestran postres innovadores en cuanto a forma, sabores, combinaciones, técnicas, etc. No olvidemos la cantidad de recetas que vemos en publicaciones por todas nuestras redes sociales. Pero, ¿quién podría resistirse a una clásica torta tres leches? ",
    category: 0,
    ingredients: [
      "4 huevos",
      "1 taza de azúcar (1 taza de azúcar = 7 onzas = 200 gramos)",
      "1 taza de harina todo uso (1 tasa de harina todo uso = 5 onzas = 140 gramos)",
      "1 cucharadita de vainilla",
      "1 pizca de sal",
      "14 onzas de leche condensada (1 lata de 14 onzas=397 gramos)",
      "12 onzas de leche evaporada o crema (nata) líquida de leche (1 lata de 12 onzas=355 ml)",
      "1 taza de leche (1 taza de leche=250 ml)",
      "4 claras de huevo (4 claras de huevo son 5 onzas)",
      "1 taza de azúcar (1 taza de azúcar = 7 onzas = 200 gramos)",
      "1 pizca de sal",
      "1/4 cucharadita de cremor tártaro, se puede reemplazar con unas gotitas de jugo de limón",
      "2 cucharadas de canela molida"
    ],
    preparation:
      "Precalentar el horno a 90°C. Preparar 2 o 3 bandejas (dependiendo del tamaño que quieran hacer sus suspiros) con papel parafinado o papel de horno. Cocinar las claras y el azúcar a Baño María* hasta que alcancen 55-60°C (si no se tiene un termómetro de cocina, este punto será en el que se observe que el azúcar se ha diluido por completo en el huevo y no se vean grumos), hay que remover constantemente o de lo contrario la clara se cocinará. En un bowl limpio y seco de una batidora vaciar la mezcla de huevo y azúcar y agregar el cremor tártaro. Batir en velocidad media-rápida hasta que se vea brillante, sedoso y al levantar las varillas de la batidora se hagan picos que se mantienen sin caerse. Otro buen indicador de que el merengue está listo es que al tocar el bowl, ya no se siente caliente sino a temperatura ambiente. Se debe tener cuidado de no batir demasiado, ya que esto puede hacer que pierda su textura. En una bandeja con papel parafinado colocar el merengue con cucharadas o con una manga pastelera (en este punto es cuestión de gusto personal, de las dos maneras se ve muy bien) Hornear entre 1 hora y media a 2 horas, hasta que se vea que los suspiros han comenzado a secarse. Dejar 30-45 minutos en el horno apagado para que se terminen de secar. Pueden almacenarse en bolsas o contenedores herméticos.",
    tags: ["harina", "leche condensada", "leche evaporada", "leche"]
  },
  {
    id: 25,
    title: "Galletas de coco",
    image:
      "https://t2.uc.ltmcdn.com/images/4/8/7/img_como_hacer_galletas_de_coco_34784_600.jpg",
    video: "https://www.youtube.com/embed/JVwS5gfNOfw",
    content:
      "Si eres de las personas que siempre quieren merendar o desayunar galletas, en este artículo te proponemos una receta muy fácil de hacer que tan solo te llevará 20 minutos y con la que toda la familia estará encantada. Se trata de las galletas de coco, un dulce delicioso que puedes tomar a cualquier hora del día y que se hacen de una manera muy sencilla. Toma nota y aprende cómo hacer galletas de coco en sencillos pasos. ¡Están para chuparse los dedos!",
    category: 0,
    ingredients: [
      "125 gramos de coco rallado deshidratado",
      "150 gramos de azúcar",
      "40 gramos de harina",
      "2 huevos",
      "Sal"
    ],
    preparation: `Lo primero que tenemos que hacer es mezclar el azúcar con los huevos y echar un poco de sal. Ten en cuenta que tienes que batir con paciencia hasta que te quede una pasta blanquecina, homogénea y esponjosa; puedes ayudarte con unas varillas eléctricas para conseguir esta textura lo más rápido posible.
    Cuando tengamos la textura que buscamos será el momento de tamizar la harina y, una vez lista, irla añadiendo poco a poco a la mezcla para que se fundan todos los ingredientes. Tendrás que ir removiendo todo de manera conjunta para que quede todo perfectamente repartido; a continuación, añade el coco rallado y sigue batiéndolo todo hasta que se mezclen. Acto seguido encenderemos el horno a 180ºC para que vaya cogiendo la temperatura que necesitaremos para cocinar nuestras galletas de coco.`,
    tags: ["harina", "coco"]
  },
  {
    id: 26,
    title: "Galletas de avena",
    image:
      "https://t1.uc.ltmcdn.com/images/1/1/7/img_como_hacer_galletas_de_avena_32711_600.jpg",
    video: "https://www.youtube.com/embed/nrP6gM98yEE",
    content:
      "Las galletas de avena figuran en al lista de recetas populares y deliciosas que todos los amantes de la repostería deberían experimentar alguna vez. Se trata de una perfecta combinación entre dulzura, sabor y fibra que es irresistible. Si quieres elaborarlas pero no sabes por dónde comenzar, en unComo.com te explicamos cómo hacer galletas de avena exquisitas e ideales para toda la familia.",
    category: 0,
    ingredients: [
      "1 taza de copos de avena naturales",
      "Media taza de harina",
      "¼ de taza de azúcar preferiblemente moreno",
      "2 huevos",
      "¼ de taza de aceite de oliva",
      "Media cucharadita de levadura",
      "1 cucharadita de esencia de vainilla",
      "Una pizca de sal",
      "Un puñado de pasas u otro fruto seco (opcional)"
    ],
    preparation: `Las galletas de avena son una opción deliciosa, especialmente si a la masa añades pasas u otro fruto seco como avellanas, naranja, etc. Pero lo mejor de su preparación es que resulta muy sencilla, por lo que es perfecta para elaborar con los más pequeños de la casa o en un momento en el que deseas comer algo dulce y delicioso sin mucho esfuerzo.
    Comienza por precalentar el horno a 180 ºC mientras prepararas la masa de tus galletas de avena. En un recipiente mezcla los huevos, el aceite y la esencia de vainilla hasta que sea uniforme. Reserva.
    En otro recipiente mezcla los copos de avena, la harina, el azúcar, la levadura y la piazca de sal removiendo bien. Luego añade los huevos, el aceite y la vainilla que tenías reservada y mezcla muy bien usando una espátula o varilla. Si deseas añadir algún fruto seco, incorpóralo a la mezcla.`,
    tags: ["harina", "avena"]
  },
  {
    id: 27,
    title: "Galletas de naranja",
    image:
      "https://t1.uc.ltmcdn.com/images/5/8/7/img_como_hacer_galletas_de_naranja_34785_600.jpg",
    video: "https://www.youtube.com/embed/y9Xb-yheKvE",
    content:
      "¿A tus hijos les encantan los dulces? Una buena manera de hacer que los más pequeños coman frutas y se beneficien, así, de sus nutrientes saludables y de sus grandes vitaminas es elaborando recetas dulces en las que el ingrediente principal sea una fruta. Así, en este artículo de unComo te contamos cómo hacer galletas de naranja para que toda tu familia disfrute de un plato delicioso ideal para desayunar o merendar y, también, esté tomando una receta saludable y repleta de vitamina C. ¡Ponte manos a la obra!",
    category: 0,
    ingredients: [
      "200 gramos de azúcar",
      "3 huevos",
      "1 vaso de zumo de naranja",
      "250 gramos de harina",
      "¼ de taza de ralladura de naranja",
      "¼ de taza de la ralladura de un limón"
    ],
    preparation: `Antes de comenzar a elaborar nuestra receta, es recomendable que encendamos el horno a 170 grados para que se caliente tanto por arriba como por abajo; de esta manera tendremos el horno a punto para cocinar nuestras galletas de naranja.
    Ahora sí que comenzamos con la receta propiamente dicha: lo primero a hacer es mezclar las ralladuras de limón y de naranja en un recipiente y añadir, también, el azúcar. La ralladura de limón la añadimos para darle un toque más sabroso a nuestra receta pero, si no te gusta, puedes prescindir de este ingrediente.`,
    tags: ["harina", "naranja"]
  },
  {
    id: 28,
    title: "Galletas de chocolate",
    image:
      "https://t2.uc.ltmcdn.com/images/0/1/7/img_como_hacer_galletas_de_chocolate_32710_600.jpg",
    video: "https://www.youtube.com/embed/tX2Apn2oCEM",
    content:
      "Las galletas de chocolate son un clásico absoluto, una opción sencilla pero totalmente deliciosa cuando nos provoca tener en casa algo dulce y simple de preparar. Una alternativa muy popular son las galletas con pepitas de chocolate, pero en unComo.com te planteamos una receta perfecta si eres amante de lo dulce: las galletas de chocolate totalmente marrones, crujientes y divinas. ¿Te animas? pues apúntate esta receta y no dejes de prepararla.",
    category: 0,
    ingredients: [
      "250 gr de chocolate para postres de 70% de cacao",
      "200 gr de pepitas de chocolate",
      "75 gr de harina con levadura o para bizcochos",
      "50 gr de mantequilla",
      "100 gr de azúcar",
      "2 huevos",
      "Una cucharadita de sal"
    ],
    preparation: `Las galletas de chocolate que te proponemos en unComo son la receta ideal para sorprender a todos: crocantes por fuera y suaves por dentro, con un relleno de chocolate fundido sencillamente delicioso.
	Comienza por fundir el chocolate con la mantequilla cuidadosamente para que no se queme. En nuestro artículo cómo fundir chocolate te explicamos las mejores técnicas para conseguirlo.
	Una vez fundido el chocolate, mezcla en un recipiente el azúcar, la harina previamente tamizada y la sal. Remueve y luego añade el chocolate y la mantequilla fundidos y las pepitas de chocolate. La mezcla de tus galletas de chocolate ya está lista, ahora deberás llevarla a la nevera por media hora.`,
    tags: ["harina", "chocolate"]
  },
  {
    id: 29,
    title: "Queque de vainilla",
    image:
      "https://t1.uc.ltmcdn.com/images/4/2/5/img_como_hacer_un_queque_de_vainilla_27524_600.jpg",
    video: "https://www.youtube.com/embed/GKhWf8MNB68",
    content:
      "El queque de vainilla es uno de los bizcochos más tradicionales y simples que existen, a pesar de eso se trata de una opción perfecta para cualquier ocasión, desde una merienda o una comida especial, hasta un detalle para endulzar nuestro día a día. En unComo lo sabemos bien, por eso te explicamos paso a paso cómo hacer un queque de vainilla para disfrutarlo junto a tus seres queridos.",
    category: 0,
    ingredients: [
      "3 tazas de harina",
      "1 taza y media de azúcar",
      "4 huevos",
      "1 taza de mantequilla o margarina",
      "1 cucharadita de polvo para hornear",
      "1 cucharadita de esencia de vainilla",
      "1 taza de leche",
      "Media cucharadita de sal"
    ],
    preparation: `Para hacer tu queque de vainilla comienza por encender el horno para precalentarlo. Luego mezcla con batidora o varilla la taza de mantequilla o margarina con el azúcar. Remueve hasta que quede una crema.
	A esta mezcla añade los 4 huevos y la esencia de vainilla. Continua removiendo para que el resultado final sea un queque de vainilla esponjoso y delicioso.
	Tamiza las tres tazas de harina para evitar grumos. Añade la sal y los polvos para hornear. Después junta lentamente esta mezcla con la anterior y agrega la taza de leche. Ve batiendo suavemente para unir a la perfección todos los ingredientes y tener lista la masa de tu queque de vainilla.`,
    tags: ["harina", "vainilla", "mantequilla"]
  },
  {
    id: 30,
    title: "Queque de chocolate",
    image:
      "https://t1.uc.ltmcdn.com/images/5/2/5/img_como_hacer_un_queque_de_chocolate_27525_600.jpg",
    video: "https://www.youtube.com/embed/q80g2JOt2HA",
    content:
      "Queque es el nombre que recibe el tradicional bizcocho o torta en algunos países de América Latina, el cual se elabora con los clásicos ingredientes de huevos, harina, azúcar y leche. sin embargo, es posible incluir a esta receta nuevos ingredientes que nos ayuden a preparar un delicioso bizcocho con diferentes sabores. Y sin duda, una de las opciones más demandadas es la de incorporar chocolate, ideal para obtener un queque más dulce y sabroso. Si quieres saber cómo hacer un queque de chocolate paso a paso, no te pierdas este artículo.",
    category: 0,
    ingredients: [
      "1 tableta de chocolate para fundi",
      "3 huevos",
      "1 taza de azúcar",
      "2 tazas de harina",
      "125 g de mantequilla",
      "3 cucharadas pequeñas de levadura en polvo"
    ],
    preparation: `El primer paso que debes hacer para elaborar este queque es derretir el chocolate. Para ello, corta la tableta en pequeños trozos y fúndelo al baño María. Ponlo a fuego medio o bajo y cuando veas que el chocolate empieza a derretirse, debes ir removiéndolo para que no se queme. Una vez esté listo, retira el cazo del fuego y resérvalo para utilizarlo más adelante.
    Ahora, coge un bol y vierte el azúcar y la mantequilla. Debes batir ambos ingredientes enérgicamente para conseguir que se integren bien y obtengas una masa homogénea. Utiliza unas varillas manuales o eléctricas, según prefieras.
	En otro recipiente, bate las claras a punto de nieve hasta lograr la textura deseada. Consulta el artículo cómo montar claras a punto de nieve para ver el procedimiento. Cuando estén listas, añádelas al bol en el que tienes el azúcar y la mantequilla mezcladas, y remueve muy bien todos los ingredientes.`,
    tags: ["harina", "chocolate", "mantequilla"]
  },
  {
    id: 31,
    title: "Queque de limon",
    image:
      "https://t2.uc.ltmcdn.com/images/6/2/5/img_como_hacer_un_queque_de_limon_27526_600.jpg",
    video: "https://www.youtube.com/embed/VB1yOi8UzWs",
    content:
      "Un queque es el nombre que recibe el bizcocho tradicional en algunos países de América Latina. Siempre podemos elaborarlo siguiendo la receta convencional, o bien hacerlo incluyendo algunos ingredientes extra que consigan darle un toque distinto. En esta receta de unComo te proponemos añadir un poco de limón, algo que sin duda potenciará su sabor. Descubre los pasos que debes seguir para hacer un queque de limón y ¡ponte manos a la obra!",
    category: 0,
    ingredients: [
      "3 huevos",
      "media taza de zumo de limón",
      "1 cucharada pequeña de ralladura de limón",
      "1 taza de azúcar",
      "2 tazas de harina",
      "3 cucharadas pequeñas de levadura en polvo",
      "125 g de mantequilla"
    ],
    preparation: `El primero paso para elaborar este queque de limón, es coger un bol y agregar en él la mantequilla y el azúcar. Mezcla bien ambos ingredientes ayudándote con una espátula manual o eléctrica hasta llegar a obtener una pasta homogénea. Si la mantequilla es demasiado consistente, trocéala anteriormente o introdúcela unos segundos en el microondas para que puedas mezclarla bien con el azúcar.
    Seguidamente, debes tamizar la harina con la levadura en polvo e introducirla en el recipiente con el resto de ingredientes poco a poco. Te aconsejamos tamizar la harina directamente sobre el bol para no tener que ensuciar otros instrumentos de la cocina. Remueve muy bien todos los ingredientes hasta conseguir una masa homogénea y sin grumos.`,
    tags: ["harina", "limon", "mantequilla"]
  },
  {
    id: 32,
    title: "Pie de manzana",
    image:
      "https://t2.uc.ltmcdn.com/images/4/1/0/img_como_hacer_pie_de_manzana_31014_600.jpg",
    video: "https://www.youtube.com/embed/bdwsU2RbFoE",
    content:
      "La tarta de manzana tiene tantas versiones como gustos existen, sin embargo una de las más deliciosas y populares es el apple pie o pie de manzana, una receta típica de Inglaterra y Estados Unidos que resulta sencillamente deliciosa. Preparar este postre puede tomar su tiempo, sin embargo los resultados valen la pena pues suele gustar tanto a grandes como a chicos. Si quieres elaborarlo en casa, en unComo.com te explicamos cómo hacer pie de manzana con un resultado exquisito.",
    category: 0,
    ingredients: [
      "Para el relleno",
      "8 manzanas golden (es importante que sean ligeramente ácidas)",
      "2 cucharadas de azúcar",
      "1 huevo",
      "1 cucharada de zumo de limón",
      "Media cucharadita de canela",
      "1 cucharada de agua",
      "Para la masa",
      "1 taza de harina",
      "3 cucharadas de azúcar",
      "150 gramos de mantequilla",
      "3 cucharadas de agua muy fría",
      "Una pizca de sal"
    ],
    preparation: `Uno de los secretos del pie de manzana es que el mismo sea ligeramente ácido al final, aprovechando la propia acidez de la manzana golden. Por eso no se recomienda comprar manzanas rojas o agregar demasiado azúcar a esta receta.
	Comienza por encender el horno a 180 ºC para que se vaya calentando. Luego deberás pelar las 8 manzanas golden, picarlas al medio para retirar el corazón y las semillas, y cortarlas en cubos. Añádelas a una olla y agrega la cucharada de agua, luego cocínalas durante 5 minutos y apaga el fuego. Saca el relleno de la olla y déjalo enfriar.
	Mientras el relleno de tu pie de manzana se enfría ve preparando la masa. En un recipiente mezcla la taza de harina, 3 cucharadas de azúcar, la mantequilla, la pizca de sal y las 3 cucharadas de agua muy fría. Con las manos mezcla todos los ingredientes hasta formar una masa homogénea. Si la misma se pega a tus dedos, añade un poco más de harina y mezcla nuevamente hasta que esté compacta.`,
    tags: ["harina", "manzana", "mantequilla"]
  },
  {
    id: 33,
    title: "Jugo de piña",
    image:
      "https://t2.uc.ltmcdn.com/images/3/2/5/img_como_hacer_jugo_de_pina_29523_600.jpg",
    video: "https://www.youtube.com/embed/eNPlYsQMvJE",
    content:
      "La piña es uno de los diuréticos naturales más deliciosos y efectivos que podemos encontrar. Se trata de una fruta ideal para evitar la retención de líquido y desinflamar nuestro abdomen, ayudándonos además a mejorar nuestra salud renal. Y una excelente manera de consumirla es en zumo, consiguiendo los mejores aportes de esta fruta de forma rápida y eficaz. Si quieres hacerlo en casa, en unComo.com te explicamos cómo hacer jugo de piña de forma rápida y con un resultado delicioso.",
    category: 4,
    ingredients: ["Media piña natural", "Medio litro de agua", "Azúcar al gusto"],
    preparation: `Una vez seleccionada, pela la piña y corta la mitad en rodajas. Si deseas puedes preparar un zumo con la piña entera, en ese caso en lugar de medio litro de agua añade un litro.
    Para hacer tu jugo de piña necesitarás una licuadora o varilla eléctrica. Agrega la piña picada y el agua y mezcla hasta que la fruta quede completamente triturada.
	Recuerda que las frutas cuentan con un azúcar natural, la fructosa, por lo que si la piña está bien madura no necesitará de azúcar añadido. Agrégalo a tu zumo solo en caso de que sea necesario.
	Luego cuela el jugo de piña para eliminar los trozos y fibra de la fruta ¡y listo! Ya podrás disfrutar de un delicioso zumo natural muy refrescante.`,
    tags: ["piña"]
  },

  {
    id: 34,
    title: "Jugo de arandano",
    image:
      "https://t2.uc.ltmcdn.com/images/6/2/8/img_como_hacer_jugo_de_arandanos_28826_600.jpg",
    video: "https://www.youtube.com/embed/dAnDu37S1cc",
    content:
      "Si quieres disfrutar de todas las propiedades de un potente antioxidante de forma simple, entonces los arándanos son tu mejor opción. Estas bayas están llenas de beneficios para nuestra salud, siendo una excelente alternativa para luchar contra las infecciones urinarias y combatir la formación de radicales libres. Y una gran forma de consumirlos es en zumo, por eso en unComo te explicamos cómo hacer jugo de arándanos en tan solo unos minutos.",
    category: 4,
    ingredients: [
      "2 tazas de arándanos",
      "1 taza de agua fría",
      "Zumo de medio limón",
      "Azúcar al gusto"
    ],
    preparation: `El zumo de arándanos es una excelente forma de ingerir todos los nutrientes de esta fruta, además su preparación es muy sencilla. Comienza por lavar muy bien las dos tazas de arándanos para asegurarte de que están libres de cualquier residuo.
	Agrega a la licuadora una taza de agua fría, el zumo de medio limón para evitar que el jugo se oxide, y las dos tazas de arándanos. Enciende la licuadora a potencia media y mezcla hasta que los arándanos queden completamente triturados.
	Si no tienes licuadora puedes usar una batidora eléctrica.
	Prueba el jugo de arándanos y, en caso de ser necesario, añade azúcar al gusto. Remueve nuevamente. Si el zumo ha quedado muy espeso para tu gusto, añade un poco más de agua y mezcla.
	Después deberás colar el zumo en un colador fino, de este modo cualquier residuo de la fruta podrá eliminarse y tu jugo quedará mucho más líquido y delicioso.`,
    tags: ["arandano"]
  },
  {
    id: 35,
    title: "Jugo de frutilla",
    image:
      "https://t1.uc.ltmcdn.com/images/8/2/8/img_como_hacer_jugo_de_fresa_28828_600.jpg",
    video: "https://www.youtube.com/embed/NVW_LaFPSxs",
    content:
      "El jugo de fresa es una alternativa excelente para disfrutar de todo el sabor de esta fruta y aprovechar sus beneficios al máximo. Además se trata de una alternativa práctica cuando esta fruta se encuentra muy madura y no deseamos que se pierda, y es que mientras más dulce esté la fresa más delicioso será el zumo. ¿Quieres disfrutar de esta bebida sana y refrescante?, en unComo te explicamos cómo hacer jugo de fresa.",
    category: 4,
    ingredients: [
      "500 gramos de fresas",
      "1 litro de agua",
      "Azúcar al gusto",
      "Una cucharada de jugo de limón"
    ],
    preparation: `Para hacer un zumo de fresas realmente delicioso es muy importante elegir adecuadamente las frutas. La principal recomendación es preparar esta bebida cuando sea temporada de fresas, de este modo garantizamos que las mismas sean dulces, jugosas y de sabor intenso.
	Recuerda también que si las frutas están maduras lo mejor es no añadir azúcar extra, así podrás disfrutar de una bebida natural y saludable.
	Lava muy bien las fresas y retira el tallo de las mismas. Una vez que estén perfectamente limpiar podrás comenzar a preparar tu jugo de fresas.
	Añade en la licuadora el medio kilo de fresas, la cucharada de jugo de limón y el litro de agua. Mezcla hasta que la fruta esté completamente triturada, luego prueba y añade azúcar en el caso de que sea necesario. Mezcla nuevamente.
	Si no tienes licuadora puedes usar la varilla eléctrica.
	Deja enfriar durante al menos una hora para que tu zumo de fresas esté fresco y delicioso. ¡Listo!, en pocos pasos podrás disfrutar de un jugo natural lleno de beneficios para tu salud.`,
    tags: ["frutilla"]
  },
  {
    id: 36,
    title: "Jugo de chirimoya",
    image:
      "https://t2.uc.ltmcdn.com/images/3/3/8/img_como_hacer_jugo_de_guanabana_28833_600.jpg",
    video: "https://www.youtube.com/embed/PQ7vJVRA4mQ",
    content:
      "Al igual que la guayaba, la guanábana es una fruta tropical con un gran número de propiedades beneficiosas para el organismo. Además de comerla directamente como desayuno, merienda o postre, preparar zumo o jugo de guanábana es una opción muy recomendable para aprovechar todas sus ventajas. Por ello, en unComo te explicamos paso a paso cómo hacer jugo de guanábana.",
    category: 4,
    ingredients: ["1 chirimoya", "1y ½ tazas de agua", "Azúcar al gusto"],
    preparation: `El primer paso para preparar jugo de guanábana será partirla por la mitad y retirar toda la pulpa, desechando pues la cáscara de esta fruta tropical. Podrás ayudarte de una cuchara o cuchillo para retirar mejor la carne de la guanábana. En la medida de lo posible, separa las semillas de la pulpa de la guanábana para evitar licuarlas y que acaben formando parte del zumo.
	A continuación, mete en el vaso de la licuadora todos los pedazos de la guanábana; en caso de que sean demasiado grandes, trocéala primero. Añade una taza y media de agua y pon en marcha el electrodoméstico para licuar la guanábana. Si lo deseas, puedes agregar azúcar al gusto antes de batir la fruta.
	Por último, puedes optar por colar el jugo de guanábana con la ayuda de un colador fino para conseguir que no tenga grumos. Esto será especialmente recomendable en el caso de no haber quitado las semillas previamente.
	Puedes agregar hielo a tu zumo de guanábana para que resulte una bebida más refrescante, así como puedes rectificar de azúcar en caso de que quieras que sea más dulce. Para que sepas todos los beneficios del jugo de guanábana, te recomendamos consultar nuestro artículo acerca de cuáles son las propiedades de la guanábana.`,
    tags: ["chirimoya"]
  },
  {
    id: 37,
    title: "Jugo de perejil",
    image:
      "https://t1.uc.ltmcdn.com/images/6/3/8/img_como_hacer_jugo_de_perejil_28836_600.jpg",
    video: "https://www.youtube.com/embed/m30g_ufEUuU",
    content:
      "No solo como condimento de numerosas recetas puede usarse el perejil, sino que esta hierba aromática puede ser también ingrediente principal de jugos o zumos, junto con otros vegetales. En este artículo de unComo, queremos explicarte los pasos a seguir para preparar jugo de perejil y zanahoria, una de las mejores formas de aprovechar todos los beneficios del perejil.",
    category: 4,
    ingredients: [
      "1 y ½ cucharadas de perejil picado",
      "1 zanahoria grande",
      "Agua o zumo de limón"
    ],
    preparation: `El primer paso para preparar jugo de perejil será lavar bien este vegetal bajo el grifo de agua fría. Para que el zumo sea mucho más sabroso y poder aprovechar todos los beneficios del perejil, te recomendamos que lo cultives tú mismo/a en casa
    Seguidamente, deberás picar el perejil con la ayuda de un cuchillo, así como también deberás lavar, pelar y trocear las zanahorias.
    El siguiente paso será licuar el perejil picado y la zanahoria troceada junto con un poco de agua. Algunas personas reemplazan el agua por zumo de limón, puedes probarlo tú también si te apetece.`,
    tags: ["perejil"]
  },
  {
    id: 38,
    title: "Jugo de aloe vera",
    image:
      "https://t1.uc.ltmcdn.com/images/3/5/0/img_como_hacer_jugo_de_aloe_vera_26053_600.jpg",
    video: "https://www.youtube.com/embed/vYmYacJn7dc",
    content:
      "El aloe vera es una de las plantas medicinales más efectivas y extendidas en todo el mundo. Tanto sus propiedades cosméticas como las terapeuticas son altamente valoradas y explotadas en productos cosméticos y farmaceuticos. Aprovecharnos de sus múltiples beneficios es fácil, podemos elaborar cremas faciales caseras o gel para tratar las quemaduras, por ejemplo. Pero, la manera más sencilla es hacer un jugo de aloe vera. Sigue leyendo este artículo de unComo y aprende a elaborar esta bebida tan beneficiosa para nuestra salud.",
    category: 4,
    ingredients: [
      "Dos hojas de aloe vera",
      "150 ml de agua",
      "Una cucharadita de miel (opcional)",
      "Una cucharadita del zumo que quieras (opcional)"
    ],
    preparation: `Lo primero que debes hacer es cortar un par de hojas de aloe vera, te recomendamos que consultes nuestro artículo sobre cómo cortar hojas de aloe vera para hacerlo correctamente. Luego, con un cuchillo, corta las espinas laterales para no pincharte y lava bien las hojas.
    Ahora es el momento de retirar la pulpa para hacer el jugo. Para ello, corta la hoja por una de los lados y ábrela. Luego, coge una cuchara y extrae todo el gel de aloe vera que puedas, hasta que veas la cáscara de la hoja. Coloca la pulpa que hayas extraído en un recipiente de borde alto para poder triturarlo más adelante.
    Ahora deberás agregar el agua y, de forma opcional, puedes incluir miel y una cucharadita del zumo de frutas o cítricos que más te guste para contrarestar el sabor amargo del aloe vera. Si dispones de licuadora, lícualo todo, sino, puedes utilizar una batidora y triturarlo hasta que esté completamente líquido.
    Si consideras que necesitas más agua porque no quedó líquido del todo, añade un poco más hasta que esté a tu gusto. Cuando lo tengas, ya puedes servir el jugo de aloe vera en vasos y tomarlo. Puesto que la cantidad te dará para varios vasos, deberás reservar lo que sobre en el frigorífico dentro un recipiente tapado, como una botella, para que se conserve en perfectas condiciones. Si lo deseas, puedes añadir cubitos de hielo para que esté más fresco.`,
    tags: ["aloe vera"]
  },
  {
    id: 39,
    title: "Zumo de naranja",
    image:
      "https://t1.uc.ltmcdn.com/images/0/2/6/img_como_hacer_zumo_de_naranja_25620_600.jpg",
    video: "https://www.youtube.com/embed/BYdOVFvXTIE",
    content:
      "Nada tiene que ver un zumo o jugo de naranja natural con cualquiera de los que puedes encontrar en tiendas y supermercados, y es que un jugo con naranjas recién exprimidas será mucho más sabroso y además conservará todas las propiedades de esta fruta. Además, preparar un zumo es una tarea sumamente fácil que podrás llevar a cabo en cuestión de minutos. De este modo, en unComo queremos explicarte los pasos a seguir para que no te quede dudas alguna sobre cómo hacer zumo de naranja.",
    category: 4,
    ingredients: ["Una cucharadita de miel (opcional)", "5 naranjas"],
    preparation: `Lo primero que deberás hacer para preparar un buen zumo de naranja será escoger bien las naranjas, asegurándote que estén maduras para que tengan suficiente jugo. En muchas fruterías o establecimientos, podrás encontrar naranjas etiquetadas específicamente para zumo.
	En caso de conservar las naranjas en la nevera o frigorífico, será necesario que las saques un rato antes de preparar el zumo. A continuación, deberás cortar las naranjas por la mitad por el lado opuesto al peciolo que unía la naranja al árbol. La cantidad de naranjas necesarias variará en función de cuán jugosas sean las piezas de fruta.
	Seguidamente deberás pasar ya a exprimir las naranjas para retirar todo el jugo de la pulpa; podrás optar por un exprimidor manual, de modo que deberás hacer girar tú la naranja, o uno eléctrico con el que únicamente deberás apoyar la naranja y girará automáticamente.`,
    tags: ["naranja"]
  },
  {
    id: 40,
    title: "Zumo de zanahoria",
    image:
      "https://t2.uc.ltmcdn.com/images/9/8/1/img_como_hacer_zumo_de_zanahoria_26189_600.jpg",
    video: "https://www.youtube.com/embed/kycIySxIcKo",
    content:
      "El jugo de zanahoria es de las alternativas más saludables y deliciosas que podemos encontrar. Lleno de betacaroteno, fibra y antioxidantes, se trata de una opción excelente para nuestra salud, además de ser ideal si quieres favorecer o mantener tu bronceado durante los meses de calor. ¿Quieres hacerlo en casa pero no sabes por dónde comenzar? en unComo.com te explicamos los pasos que debes seguir para que descubras cómo hacer zumo de zanahoria.",
    category: 4,
    ingredients: ["4 zanahorias grandes y frescas (rinde para dos vasos)", "1 limón"],
    preparation: `El zumo de zanahoria es una bebida perfecta para el verano y también para aquellos días en los que nos apetece disfrutar de todos los beneficios de la zanahoria, pero no tenemos tiempo para cocinarla o consumirla de otra manera.
	Para hacer un jugo de zanahoria delicioso es importante elegir zanahorias que se encuentres frescas, duras y con un color naranja intenso.
	Comienza lavando y pelando la parte externa de la zanahoria para eliminar la capa de suciedad que la cubre.
	Coloca en la licuadora o el procesador de alimentos con un poco de agua para que se mezcle bien. Añade el zumo de un limón y licua durante al menos un minuto.
	Tu zumo de zanahoria está casi listo, solo te falta colar esta mezcla para eliminar todos los pedazos que pudieran estar duros y darle la textura ideal a tu jugo.
	Normalmente esta bebida no necesita azúcar puesto que la zanahoria ya es dulce naturalmente, sin embargo si al probar crees que debe ser endulzada basta con agregar un poco de azúcar o una cucharadita de miel.`,
    tags: ["zanahoria"]
  },
  {
    id: 41,
    title: "Zugo de guayaba",
    image:
      "https://t2.uc.ltmcdn.com/images/7/3/8/img_como_hacer_jugo_de_guayaba_28837_600.jpg",
    video: "https://www.youtube.com/embed/SyN6t3u4rCE",
    content:
      "De aspecto exterior similar a la pera, la guayaba o guara es un fruta tropical con una infinidad de propiedades beneficiosas para el organismo humano. Además de comerla entre horas o como postre, una idea genial es preparar zumo de guayaba porque resulta muy rico y refrescante. Es por ello que en unComo queremos explicarte con más detalle cómo hacer jugo de guayaba.",
    category: 4,
    ingredients: [
      "4 guayabas medianas",
      "1/2 taza de azúcar",
      "Agua",
      "Cubitos de hielo (opcionales)"
    ],
    preparation: `El primer paso para preparar un jugo de guayaba será lavarlas y pelarlas para, a continuación, trocearlas en pedazos pequeños. Es importante que sean todos los trozos de guayaba de un tamaño similar para que puedan triturarse correctamente.
    A continuación, deberás echar la guayaba troceada en la jarra de la licuadora junto con el agua y el azúcar y . En caso de que que no dispongas de este pequeño electrodoméstico, puedes usar también la batidora tradicional para obtener el zumo de la guayaba.
    A continuación, te recomendamos usar un colador fino para tamizar el jugo de guayaba y evitar así que tenga grumos y eliminar así también las semillas de la guara. Te recomendamos dejarlo enfriar en la nevera o, si lo prefieres, añadirle cubitos de hielo para que resulte mucho más sabroso.`,
    tags: ["guayaba"]
  }
];
