(function(){
    if(document.getElementById('title')!=null){
      document.getElementById('title').innerHTML=(`welcome ${sessionStorage.getItem('nameLogin')}`)
    }
  }())
  
  