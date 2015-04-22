
  utils = {

    buildCombobox: function(el, list) {
      var cb = $('<select/>',{
        name : el.attr('id'),
        class: el.attr('class')
      });
      $.each(list, function(index, option){
        cb.append($('<option/>',{
          value : option.value,
          text :  option.name
        }))
      });
      el.replaceWith(cb);
    },

    getHours: function() {
      var hours = [];
      for (var i=0; i<=23; i++) {
        if (i<10) i = '0' + i;
        hours.push({name: i, value: i});
      }
      return hours;
    },

    getMins: function() {
      var mins = [];
      for (var i=0; i<=59; i++) {
        if (i<10) i = '0' + i;
        mins.push({name: i, value: i});
      }
      return mins;
    },

    serializeObject: function(frm) {
      var o = {};
      var a = frm.serializeArray();
      $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
      });
      return o;
    }

  }