/*

need list of all page names
need to normalize for link format (e.g. spaces to underscores)
[alter the link using a loop going through all the names]
load JSON link e.g. https://en.wikipedia.org/w/api.php?action=query&titles=Shepherd%27s_Bush&prop=revisions&rvprop=ids&rvlimit=max
need to check if there is an 'rvcontinue' variable
if there is, add 'rvcontinue = value' to end of link after &
keep doing this until no more rvcontinue to process all
count the number of revisions

PAGE LIST JSON: http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=SELECT+DISTINCT+%3Fresource+%3Flabel+%3Flocation%0D%0AWHERE%0D%0A%7B%0D%0A%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2FLondon%3E+geo%3Ageometry+%3Fsourcegeo+.%0D%0A%3Fresource+geo%3Ageometry+%3Flocation+%3B%0D%0Ardfs%3Alabel+%3Flabel+.%0D%0AFILTER%28+bif%3Ast_intersects%28+%3Flocation%2C+%3Fsourcegeo%2C+10+%29+%29+.%0D%0AFILTER%28+lang%28+%3Flabel+%29+%3D+%22en%22+%29%0D%0A%7D&format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000000&debug=on&run=+Run+Query+

FORMAT: https://en.wikipedia.org/w/api.php?format=json&action=query&prop=revisions&rvprop=ids&rvlimit=max&titles=Shepherd%27s_Bush

*/



var container = document.getElementById("info");
var button = document.getElementById("button");

button.addEventListener("click", function() {

  var pageListRequest = new XMLHttpRequest();
  pageListRequest.open('GET', 'http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=SELECT+DISTINCT+%3Fresource+%3Flabel+%3Flocation%0D%0AWHERE%0D%0A%7B%0D%0A%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2FLondon%3E+geo%3Ageometry+%3Fsourcegeo+.%0D%0A%3Fresource+geo%3Ageometry+%3Flocation+%3B%0D%0Ardfs%3Alabel+%3Flabel+.%0D%0AFILTER%28+bif%3Ast_intersects%28+%3Flocation%2C+%3Fsourcegeo%2C+10+%29+%29+.%0D%0AFILTER%28+lang%28+%3Flabel+%29+%3D+%22en%22+%29%0D%0A%7D&format=application%2Fsparql-results%2Bjson&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000000&debug=on&run=+Run+Query+');
  pageListRequest.onload = function() {
    var pageListData = JSON.parse(pageListRequest.responseText);
    //console.log(pageListData[0]);
    renderHTML(pageListData);


    for(i = 0; i < pageListData.length; i++) {
      


      var wikiQueryRequest = new XMLHttpRequest();
      wikiQueryRequest.open('GET', )


      wikiQueryRequest.send();
    }



  };

  pageListRequest.send();

});


function renderHTML(data) {
  var htmlString = "<p>test</p>";

  /*for(i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

    for(ii = 0; ii < data[i].foods.likes.length; ii++) {
      if(ii == 0) {
        htmlString += data[i].foods.likes[ii];
      } else {
        htmlString += " and " + data[i].foods.likes[ii];
      }
    }

    htmlString += '.</p>';

  }*/

  container.insertAdjacentHTML('beforeend', htmlString);
}
