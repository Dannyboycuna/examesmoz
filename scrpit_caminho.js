function showdecima() {
    event.preventDefault()
    document.getElementById('decima').style.display='flex'
}

function showdisciplina(disciplina) {
        var disc = document.getElementById(`${disciplina}`)
        //var UP = document.getElementById('UP')
        var tira = document.getElementById('ver')
        if (disc.style.display == '' || disc.style.display == 'none'){
            disc.style.display ='inline'
        }
        else{
            disc.style.display='none'
        }
  
    
}
function button(){
    var pega = document.getElementById("Inicio")
    var pegabutton = document.getElementById("but")
    var content = document.getElementById("content")
    if (pega.style.display == "" || pega.style.display == "none"){
        pegabutton.innerHTML='x'
        pega.style.display = 'flex'

        
        
        
       
    }
    else{
        
        content.style.opacity = 1
        pegabutton.innerHTML = "≡"
        
        pega.style.display = "none"
        content.style.display = 'inline'
    }
}