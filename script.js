function myFunction() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("head");
    if (x.className === "menu") {
      x.className += " responsive";
      y.className += " responsive";
    } else {
      x.className = "menu";
      y.className = "header"
    }
}

function myFunction1() {
    var gallery = document.getElementById("gallery");
    var groups = gallery.getElementsByTagName("li");

    var menuItems = document.querySelectorAll("#gallery li");
    var allGroups = document.querySelectorAll(".gallery [data-group]");


    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", function(e) {
            e.preventDefault();
            
            var activeGroup = this.getAttribute("data-group");

            for (var j = 0; j < allGroups.length; j++) {
                var group = allGroups[j].getAttribute("data-group");

                if (activeGroup === "all" || group.includes(activeGroup)) {
                    allGroups[j].classList.add("active");
                    allGroups[j].style.display = "flex";
                } else {
                    allGroups[j].classList.remove("active");
                    allGroups[j].style.display = "none";
                }
            }
        });
    }


    for (var i = 0; i < groups.length; i++) {
        groups[i].addEventListener("click", function () {

        for (var k = 0; k < groups.length; k++) {
            if (groups[k] !== this) {
                groups[k].classList.remove("active");
            }
        }

        // Set active class for clicked menu item
        this.classList.add("active");
        });
    }
}

myFunction1();
