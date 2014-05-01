$.getJSON('http://rs.hankyates.com:3000/content', function(tabData){  
    
    $.each(tabData, function(tabName, tabContent) {

//Capitalzing the first letter in the link
        
String.prototype.capitalize = function(tabName) {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
        
        $('nav ul').append('<li class = "tabs"><a href=#'+ tabName +' id = "yes'+tabName+'" >'+ tabName.capitalize() +'</a></li>');
        
        $('nav').append('<div class = "hidden '+tabName+'" id = this'+tabName+'>'+ tabContent +'</div>');
        
//Getting rid of the p tags
        
        $('p').replaceWith
(
    function() { return $(this).contents(); }
);
        
        
    });
    $('div').hide();    
    $('#yeshome').on('click', function(){
        $('#thisportfolio').hide();
        $('#thisarticles').hide();
        $('#thishome').slideDown();
});
        $('#yesarticles').on('click', function(){
            $('#thishome').hide();
            $('#thiportfolio').hide();
            $('#thisarticles').slideDown();
});
        $('#yesportfolio').on('click', function(){
            $('#thishome').hide();
            $('#thisarticles').hide();
            $('#thisportfolio').slideDown();
});
});