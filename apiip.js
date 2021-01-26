function httpGetAsync(url, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", url, true); // true for asynchronous
  xmlHttp.send(null);
}

var url = "https://ipgeolocation.abstractapi.com/v1/?api_key=19138c11a3c2444fb575008588367267&ip_address=95.239.55.131"

httpGetAsync(url)
