function ContactController() {
  var vm = this;
  
  this.changeName = function() {
    vm.name = 'Something else!';
  };
}

// The variable vm is a reference to the this object 