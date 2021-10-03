
var telegram_bot_id = "1987403419:AAHRIMG6c20UZGBXmXZ02JYjbwP8YFlXZ4c";
//chat id
var chat_id = 1994166104;
var u_name, email, message;
var ready = function() {
  u_name = document.getElementById("nama").value;
  email = document.getElementById("telepon").value;
  message = document.getElementById("pesan").value;
  message = "Nama: " + u_name + "\nEmail / No.HP: " + email + "\nPesan: " + message;
};
var sender = function() {
  ready();
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "cache-control": "no-cache"
    },
    "data": JSON.stringify({
      "chat_id": chat_id,
      "text": message
    })
  };
  $.ajax(settings).done(function(response) {
    console.log(response);
  });
  document.getElementById("nama").value = "";
  document.getElementById("telepon").value = "";
  document.getElementById("pesan").value = "";
  return false;
};

const form = document.forms['myForm']
const btnKirim = document.querySelector('.btn-Kirim');
const btnLoad = document.querySelector('.btn-load');
const btnSukses = document.querySelector('.btn-sukses');
form.addEventListener('submit', e => {
      e.preventDefault()
      
      //tampilkan loading
      btnLoad.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      fetch(form, { method: 'POST', body: new FormData(form)})
      
      .then(response =>{
        //kembalikan loading seperti semula
        btnSukses.classList.toggle('d-none');
        btnLoad.classList.toggle('d-none');
        alert("Terimakasih pesan anda telah kami terima😁😁!!");
        form.reset();
        console.log('Success!', response)
        
      })
        .catch(error => {
          form.reset();
          console.error('Error!', error.message)
        })
      })
     
  const name=prompt("Siapa Nama Lengkap Anda");
 if(name){
   alert("Selamat datang di Web saya " +name+ " 😁😁!!");
 }
 else{
   alert("Memperkenalkan nama anda akan lebih baik");
 }
 
 const next=prompt("Maukah anda mengikuti saya di media sosial (Facebook,Instagram,Youtube,Github) Balas YA atau TIDAK");
 if(next){
   alert("😁🙏");
 }
else{
  alert("Terimakasih telah berkunjung😁!! meskipun anda tidak mengikuti saya di media sosial");
}