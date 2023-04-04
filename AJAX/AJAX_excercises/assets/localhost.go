package main

//Abandoned
import (
	"fmt"
	"log"
	"net/http"
)

var Port = ":3333"

func main() {
  http.HandleFunc("/", ServeFiles)
  log.Fatal(http.ListenAndServe(Port, nil))
  fmt.Println("----------------------------------------------------------------")
  fmt.Println("Serving @ : ", "http://127.0.0.1" + Port)
  fmt.Println("----------------------------------------------------------------")
}

func ServeFiles(w http.ResponseWriter, request *http.Request){
    switch request.Method {
    case "GET":
      path := request.URL.Path
  
      fmt.Println("CURRENT PATH: " + path)
  
      if path == "/" {
        path = "../uploader.html"
      } else {
        path = "." + path
      }
      http.ServeFile(w, request, path)

    default: fmt.Fprint(w, "Request type other than GET or POST not supported")
  }
}