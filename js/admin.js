let form = document.querySelector('#form')
const email = document.querySelector("#email")

window.onbeforeunload = function(ev) {
    ev.returnValue = "\o/";
  };
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = new FormData(form)

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.response)
            const res = this.response;
            if (res.succes){
                form.style.display="none";
                let data = JSON.parse(res.data);
                console.log(data);
                

                for (let i = 0; i < data.length; i++) {
                    const data1 = data[i];
                    email.innerHTML +="<li>"+ data1+"</li><br>";
                }
            }else{
                alert(res.msg)
            }
            
           
        } else if (this.readyState == 4) {
            alert("Une erreur est survenu (404 not found)");
        }
    };

    xhr.open("POST", "async/bdd.php", true);
    xhr.responseType = "json";
    try {
        xhr.send(data);
    } catch (error) {
        setTimeout(xhr.send(data), 1000)
        console.log("Error : "+error+"(send data)");
    }
});
