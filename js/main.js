$(document).ready(function(){
    //Sliders
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });
    // Posts
    var posts = [
        {
            title: 'Prueba de titulo 1',
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie nisi lacus, vitae tristique ante bibendum varius.Aliquam quis dolor mattis, fermentum leo eget, feugiat nunc.Nunc porttitor tempor nisl vitae efficitur. Nam at dictum ipsum.Nam vulputate, libero vitae maximus facilisis, purus quam eleifend neque, eget tempus quam dui in tortor.Maecenas semper vestibulum erat ut auctor. Pellentesque varius congue vulputate.Quisque vitae libero magna.Donec id turpis aliquet, eleifend purus varius, luctus turpis.Curabitur dapibus lectus eu viverra fermentum. Sed commodo nunc sit amet dui suscipit sollicitudin at sed leo.'
        },
        {
            title: 'Prueba de titulo 2',
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie nisi lacus, vitae tristique ante bibendum varius.Aliquam quis dolor mattis, fermentum leo eget, feugiat nunc.Nunc porttitor tempor nisl vitae efficitur. Nam at dictum ipsum.Nam vulputate, libero vitae maximus facilisis, purus quam eleifend neque, eget tempus quam dui in tortor.Maecenas semper vestibulum erat ut auctor. Pellentesque varius congue vulputate.Quisque vitae libero magna.Donec id turpis aliquet, eleifend purus varius, luctus turpis.Curabitur dapibus lectus eu viverra fermentum. Sed commodo nunc sit amet dui suscipit sollicitudin at sed leo.'
        },
        {
            title: 'Prueba de titulo 3',
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie nisi lacus, vitae tristique ante bibendum varius.Aliquam quis dolor mattis, fermentum leo eget, feugiat nunc.Nunc porttitor tempor nisl vitae efficitur. Nam at dictum ipsum.Nam vulputate, libero vitae maximus facilisis, purus quam eleifend neque, eget tempus quam dui in tortor.Maecenas semper vestibulum erat ut auctor. Pellentesque varius congue vulputate.Quisque vitae libero magna.Donec id turpis aliquet, eleifend purus varius, luctus turpis.Curabitur dapibus lectus eu viverra fermentum. Sed commodo nunc sit amet dui suscipit sollicitudin at sed leo.'
        },
        {
            title: 'Prueba de titulo 4',
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie nisi lacus, vitae tristique ante bibendum varius.Aliquam quis dolor mattis, fermentum leo eget, feugiat nunc.Nunc porttitor tempor nisl vitae efficitur. Nam at dictum ipsum.Nam vulputate, libero vitae maximus facilisis, purus quam eleifend neque, eget tempus quam dui in tortor.Maecenas semper vestibulum erat ut auctor. Pellentesque varius congue vulputate.Quisque vitae libero magna.Donec id turpis aliquet, eleifend purus varius, luctus turpis.Curabitur dapibus lectus eu viverra fermentum. Sed commodo nunc sit amet dui suscipit sollicitudin at sed leo.'
        }
    ];

    posts.forEach((item, i) => {
        var post = `
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer m�s</a>
            </article >
        `;
        $("#posts").append(post);
    });

    // Selector de tema
    var theme = $("#theme");
    $("#to-green").click(function () {
        theme.attr("href", "css/green.css");
    });
    $("#to-red").click(function () {
        theme.attr("href", "css/red.css");
    });
    $("#to-blue").click(function () {
        theme.attr("href", "css/blue.css");
    });

    // Scroll al inicio
    $('.subir').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    // Login falso
    $("#login form").submit(function () {
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");
    if (form_name != null || form_name != undefined) {
        var about_parrafo = $("#about p");
        about_parrafo.html("<br><strong>Bienvenido, " + form_name + "</strong>");
        about_parrafo.append("<a href='#' id= 'logout'>Cerrar sesi�n</a>");
        $("login").hide();
        $("#logout").click(function () {
            localStorage.clear();
            location.reload();
        });
    } 
});