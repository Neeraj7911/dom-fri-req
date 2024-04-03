var a = document.querySelector(".btn")
var b = document.querySelector("h5")
var flag = 0
a.addEventListener("click", function(){
        if(flag == 0)
    {
        a.innerHTML = "Unfollow"
        a.style.marginLeft = "131px"
        b.innerHTML = "Followed"
        b.style.marginLeft = "129px"
        b.style.color = "green"
        flag = 1
    } else{
        a.innerHTML = "Follow Now"
        a.style.marginLeft = "125px"
        b.innerHTML = "1.8k Followers"
        b.style.marginLeft = "115px"
        b.style.color = "red"
        flag = 0

    }
})