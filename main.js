function sub(event) {
     event.preventDefault();
    let login = document.getElementById("chase").value;
    let lan = document.getElementById("item");
    let hide = document.getElementById("info");

    if (login === "XBMNC") {
        if (localStorage.getItem("Viewed")) {
            alert("You have already viewed it. Purchase another key.");
            
        } else {
            Toastify({
                text: 'Welcome',
                duration: 2000,
                close: true
            }).showToast();
            
            hide.style.display = "none";
            lan.style.display = "block";
            localStorage.setItem("Viewed", true);
            
             // Hide the input form
        }
    }else if(login === "BHMNC") {
        if (localStorage.getItem("Viewed1")) {
            alert("You have already viewed it. Purchase another key.");
            
        } else {
            Toastify({
                text: 'Welcome',
                duration: 2000,
                close: true
            }).showToast();
            
            hide.style.display = "none";
            lan.style.display = "block";
            localStorage.setItem("Viewed1", true);
            
             // Hide the input form
        }
        }else if(login === "HJFSC") {
          if (localStorage.getItem("Viewed2")) {
            alert("You have already viewed it. Purchase another key.");
        
          } else {
            Toastify({
              text: 'Welcome',
              duration: 2000,
              close: true
            }).showToast();
        
            hide.style.display = "none";
            lan.style.display = "block";
            localStorage.setItem("Viewed2", true);
          }
            // Hide the input form
          }else if(login === "GGDNC") {
            if (localStorage.getItem("Viewed3")) {
              alert("You have already viewed it. Purchase another key.");
          
            } else {
              Toastify({
                text: 'Welcome',
                duration: 2000,
                close: true
              }).showToast();
          
              hide.style.display = "none";
              lan.style.display = "block";
              localStorage.setItem("Viewed3", true);
          
              // Hide the input form
            }
            
    } else {
        alert("Wrong key. Please enter a valid key."); // Alert for wrong key
    }
}
