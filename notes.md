AngluarJS Notes:
  - DOM = representation of the data
  - angularJs takes care of updating the HTML and the js updates w/o us having to do it manually => MVC
  - Model (defines data, variable), View (what people see, HTML), (Collection) Binds the model and the view so that what happens to the model, automatically affects the view

  Custom attributes

  dependency injection ex:
      var Person = function(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
      }  // create an object

      function logPerson(person){ //pass the object to the function
        console.log(person);
      }

      var john = newPerson('John', 'Doe');  //injecting it to the function 
      logPerson(john);
