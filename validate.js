// số điện thoại 10 số và bắt đàua là số 0 
var checkphone = document.getElementById("checkphone");
var idphone = document.getElementById("idphone");
var clickbutton = document.getElementById("clickbutton");
var idform=document.getElementById("idform");
idform.addEventListener("submit",function(event){
    event.preventDefault()
});
function ktPhone(phone) {
    var dem=0;
    for (var i = 0; i < phone.length-1; i++) 
    {
        if (phone.length >= 9&&(phone[0]==0)&&(phone[i] ==1 || phone[i] ==2 || phone[i] ==3 || phone[i] ==4 || phone[i] == 5 || phone[i] ==6 || phone[i] ==7 || phone[i] ==8 || phone[i] ==9 || phone[i] ==0)) {
            // console.log(phone)
        dem++;
    }

    else {
        // console.log(phone)
        dem--;
    }
    }
    if(dem==9)
    {
        checkphone.textContent="";
    }
    else{
        checkphone.textContent="Số điện thoại không hợp lệ"
    }
    
}
clickbutton.addEventListener("click", function (event) {

    ktPhone(idphone.value);
});