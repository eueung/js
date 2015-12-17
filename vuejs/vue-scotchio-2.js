new Vue({
  el: '#events',
  data: {
    event: { name: '', description: '', date: '' },
    events: []
  },
  ready: function() {
    this.fetchEvents();
  },
  methods: {
    fetchEvents: function() {
      this.$http.get('vue-scotchio-2.json').success(function(events) {
        this.$set('events', events);
      }).error(function(error) {
        console.log(error);
      });      
    },
    addEvent: function() {
      if(this.event.name) {
        this.events.push(this.event);
        this.event = { name: '', description: '', date: '' };
      }
    },
    deleteEvent: function(index) {
      if(confirm("Are you sure you want to delete this event?")) {
        this.events.$remove(index);        
      }
    }
  }
});