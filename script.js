for (var i = 1; i <= 151; i++) {
    $('.image-container').append($('<img>').attr('id', i).attr('src', 'http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + i + '.png'))
}

$('img').on('click', function(event) {
    $('.poke-dex').html('');
    var id = $(this).attr('id');
    $.get("https://pokeapi.co/api/v2/pokemon/" + id + '/', function(data) {
        console.log(data);
        var types = "<ul>";
        for (var i = 0; i < data.types.length; i++) {
            types += "<li>" + data.types[i].type.name + "</li>";
        }
        types += "</ul>";
        var info = "<h5>Types</h5>" + types + "<h5>Height</h5>" + data.height + "<h5>Weight</h5>" + data.weight;
        console.log(types);
        data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        $('.poke-dex').append("<h2>" + data.name + "</h2>");
        $('.poke-dex').append("<img src=" + 'http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + data.id + '.png' + ">");
        $('.poke-dex').append(info);
    });
    event.stopPropagation();
});