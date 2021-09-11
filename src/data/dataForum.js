export const dataForum = [
  {
    IdQuestion: "18",
    Name: "Jane Wilson",
    IdPerson: "185jsx",
    ProfilePhoto: `${"./assets/PruebaForos/AvatarCeleste.svg"}`,
    Title:
      " Hola a todos. Tengo el siguiente porblema con esta función: en mi archivos main.js tengo esto",
    Category: "Programación",
    Body: `{
                var respu = habilita_nat1(hiddenInput18.value);
                if(respu = "SI"){
                agregar_trat('18');
                }
                function habilita_nat1(pieza){
                var vpieza = pieza;
                $(document).ready(function(){
                $.ajax({
                url:'./php/buscar_habnat.php',
                method: 'GET',
                data: {
                pieza:vpieza
                }
                }).done(function(res){
                return res;
                });
                });
                }
                El problema es que puedo hacer que me devuelva la respuesta. Es decir, cuando ejecuto esto me sale que respu es UNDEFINED. Que
                estoy haciendo mal. Ya llevo varias horas y no encuentro error.
                Gracias por su ayuda
            }`,
    Date: "Jan, 17, 2021",
    Likes: "25",
    LikedQuestion: false,
    QuantityAnswers: [
      {
        NameAnswers: "Calvin Flores",
        IdPerson: "18jsx",
        ProfilePhoto: `${"./assets/PruebaForos/user.svg"}`,
        BodyAnswer: `{Hola Felix, si si faltan lineas, lo que pasa es que es un codigo muy largo para copiarlo todo, pero te explico, en el hiddenInput18 ha
            valor, por ejemplo 18 y la función habilita_nat1() lo que hace es con ese valor que le paso como parametro hace una consulta a
            base de datos para ver si ese valor habilita o no algo. Entonces lo que tengo que devolver es eso, SI si habilita y NO sino habilita.
            eso lo hace en forma correcta, lo que no puedo hacer es que me devuelva ese valor para continuar con las demás líneas.}`,
        DateAnswers: "Jan, 17, 2021",
        LikesAnswers: "2",
        LikedAnswer: false,

      },
      {
        NameAnswers: "Kathryn Cooper",
        IdPerson: "15jsx",
        ProfilePhoto: `${"./assets/PruebaForos/user.svg"}`,
        BodyAnswer:
          "Hola Juan, entiendo que en este código faltan lineas, cierto? Hay que ver que es hiddenInput18 y que hace al función habilita_na",
        DateAnswers: "Jan, 17, 2021",
        LikesAnswers: "5",
        LikedAnswer: false,

      },
    ],
  },
  {
    IdQuestion: "18",
    Name: "Jane Wilson",
    IdPerson: "185jsx",
    ProfilePhoto: `${"./assets/PruebaForos/AvatarCeleste.svg"}`,
    Title:
      " Hola a todos. Tengo el siguiente porblema con esta función: en mi archivos main.js tengo esto",
    Category: "Programación",
    Body: `{
                var respu = habilita_nat1(hiddenInput18.value);
                if(respu = "SI"){
                agregar_trat('18');
                }
                function habilita_nat1(pieza){
                var vpieza = pieza;
                $(document).ready(function(){
                $.ajax({
                url:'./php/buscar_habnat.php',
                method: 'GET',
                data: {
                pieza:vpieza
                }
                }).done(function(res){
                return res;
                });
                });
                }
                El problema es que puedo hacer que me devuelva la respuesta. Es decir, cuando ejecuto esto me sale que respu es UNDEFINED. Que
                estoy haciendo mal. Ya llevo varias horas y no encuentro error.
                Gracias por su ayuda
            }`,
    imageQuestion: `${"./assets/PruebaForos/RedirectLinks.png"}`,
    Date: "Jan, 17, 2021",
    Likes: "25",
    LikedQuestion: false,
    QuantityAnswers: [
      {
        NameAnswers: "Calvin Flores",
        IdPerson: "18jsx",
        ProfilePhoto: `${"./assets/ICONS/user.svg"}`,
        BodyAnswer: `{Hola Felix, si si faltan lineas, lo que pasa es que es un codigo muy largo para copiarlo todo, pero te explico, en el hiddenInput18 ha
            valor, por ejemplo 18 y la función habilita_nat1() lo que hace es con ese valor que le paso como parametro hace una consulta a
            base de datos para ver si ese valor habilita o no algo. Entonces lo que tengo que devolver es eso, SI si habilita y NO sino habilita.
            eso lo hace en forma correcta, lo que no puedo hacer es que me devuelva ese valor para continuar con las demás líneas.}`,
        DateAnswers: "Jan, 17, 2021",
        LikesAnswers: "2",
        LikedAnswer: false,

      },
      {
        NameAnswers: "Kathryn Cooper",
        IdPerson: "15jsx",
        ProfilePhoto: `${"./assets/ICONS/user.svg"}`,
        BodyAnswer:
          "Hola Juan, entiendo que en este código faltan lineas, cierto? Hay que ver que es hiddenInput18 y que hace al función habilita_na",
        DateAnswers: "Jan, 17, 2021",
        LikesAnswers: "5",
        LikedAnswer: false,
      },
    ],
  },

];
