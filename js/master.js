(() => {
    //rework this with a Vue instance 
    const vm = new Vue({
        el : '#app',

        data : {
            modelname : "",
            modelpricing : "",
            modeldetails : ""
        },

        //we know to write mounted, beforeUpdate and Updated because of this website: https://vuejs.org/v2/guide/instance.html

                mounted : function() {
                        console.log('view is ready to go on the page'); //making these messages to see what happens and when

                        //trigger an ajax call with a mocked click event
                        document.querySelector('#F55').click(); //this makes it so that when you go to the page, the blue one is already there as the starter page
                            //PORTFOLIO: this works for the services part 


                    },
            
                beforeUpdate : function() {
                        console.log('things are gonna change...');
            
                    },
            
                updated: function() {
                        console.log('things are different now');
            
                    },

        methods : {
            fetchData(e) {
                //debugger;
                //gets the id of the element via the event object
                let targetURL = e.currentTarget.id;

                fetch(`./includes/connect.php?modelNo=${targetURL}`) //like telling your dog to go fetch the data from the url and bring it back! good doggy!
                .then(res => res.json()) 
                .then(data => {
                    console.log(data); //let's see what we got 
                    const { modelName, pricing, modelDetails } = data[0];

                    this.modelname = modelName;
                    this.modeldetails = modelDetails;
                    this.modelpricing = pricing;

                    //run a function to parse our data
                    //parseCarData(data[0]); //run a function to put the data on the page 
                }) //lets see what we got
                .catch(function(error) {
                    console.log(error); //if anything broke, lot it in the console    
            }); 
            }
        }
    });


    

   })();