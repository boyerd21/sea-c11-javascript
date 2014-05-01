$(function(){

var TabModel = Backbone.Model.extend({
    name: '',
    content: '',
});
var tabModel = new TabModel();

var TabCollection = Backbone.Collection.extend({
    model: tabModel,
    url: 'http://rs.hankyates.com:3000/V2/content'
});
    
var tabCollection = new TabCollection();
tabCollection.fetch();
    
    var TabContent = Backbone.View.extend({
        _.each(tabCollection,
        function(){
        tagName: 'div',
        className: 'hidden',
        id: 'contents_'+name+'',
        template: _.template('<div><%=content%></div>');
        render: function(){
            this.$el.html(this.template('name'));
            return this;
        }
       });
    });

var TabName = Backbone.View.extend({
        _.each(tabCollection,
    function(){
        tagName: 'li',
        className: 'tabs',
    id: 'name',
        template: _.template('<li><a href="#'+name+'><%=name%></a></li>');
        render function(){
        this.$el.html(this.template('content'));
        return this;
    }
    });
    });
    
a.on('click', funtion({
    
    $('.hidden').hide();
    
}))
});