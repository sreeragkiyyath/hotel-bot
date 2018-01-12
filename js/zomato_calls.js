function callZomatoUrl(response) {
    if (action == "findRest") {
      console.log("zomato my method called")
      var zomatoCityId = { "Bangalore": "4", "Mumbai": "3", "Delhi": "1", "Kolkata": "2" }
      var xhttp = new XMLHttpRequest();
      var city_id ;//zomatoCityId[response["location_suggestions"]["entity_id"]]
    // alert(city_id  + " ----- ------------  ")
      var entity_type = "city";
      var area = response["parameters"]["Area"]
      var encodedArea = encodeURI(area);
    
    //  var zomato_url = "https://developers.zomato.com/api/v2.1/search?entity_id=" + city_id + "&entity_type=" + entity_type + "&q=" + encodedArea
    var zomato_url  = "https://developers.zomato.com/api/v2.1/locations?query=pune";
    xhttp.open("GET", zomato_url, true);
      xhttp.setRequestHeader("user-key", zomatoApiToke);
      xhttp.send();
      //var response = JSON.parse(xhttp.responseText.substring(1, xhttp.responseText.length-1));
      var restaurants;
      
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          var response = JSON.parse(xhttp.response);
          console.log("  ------->  " +xhttp.response  + "<-----------------")
          restaurants = response.location_suggestions[0].entity_id;
         alert(restaurants);
          var node2 = document.createElement('div');
          node2.className = 'bot';
          node2.innerHTML = "Here are top 5 restaurants<br/>";
          chatmessage.appendChild(document.createElement('br'));
  
          chatmessage.appendChild(node2);
          chatmessage.appendChild(document.createElement('br'));
          chatmessage.appendChild(document.createElement('br'));
          chatmessage.appendChild(document.createElement('br'));
  
          Speech("Here are the top 5 restaurants");
  
          for (i = 0; i < 5; i++) {
  
            var node2 = document.createElement('div');
            node2.className = 'bot';
            node2.innerHTML = restaurants[i]["restaurant"]["name"] + "<br/> " + restaurants[i]["restaurant"]["cuisines"]
            chatmessage.appendChild(node2);
            chatmessage.appendChild(document.createElement('br'));
            chatmessage.appendChild(document.createElement('br'));
            chatmessage.appendChild(document.createElement('br'));
            chatmessage.appendChild(document.createElement('br'));
  
  
          }
  
  
          chatmessage.appendChild(document.createElement('br'));
          chatmessage.scrollTop = chatmessage.scrollHeight;
  
  
        }
      }
    }
    }