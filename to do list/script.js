const cardinput = document.querySelector('.card-input');
const input = document.getElementById('input');
const cardcontent = document.querySelector('.card-content');
const button = document .getElementById('button');
const temizle = document.getElementById('clear')

button.addEventListener('click' , ekle)
input.addEventListener('keyup', function(e){
 if(e.keyCode == 13){
    ekle();
 }
});

function ekle(){
    if(input.value !== "" ){
    
    var paragraf = document.createElement('div');
    paragraf.classList.add('paragraf');
   
    var li = document.createElement('li');
    li.classList.add('li');
    li.innerText = input.value;
   
    var sil = document.createElement('button');
    sil.classList.add('sil');
    sil.innerText= "sil";
   
    var yapıldı = document.createElement('button');
    yapıldı.classList.add('yapıldı');
    yapıldı.innerText= "yapıldı"
  
    paragraf.appendChild(li);
    paragraf.appendChild(yapıldı);
    paragraf.appendChild(sil);
    cardcontent.appendChild(paragraf);

    //her eklemeden sonra search kısmı sıfırlanır 
    input.value=""; 

    //sil adlı butona tıklandığında oluşturulan paragrafı siler 
    sil.addEventListener('click', function(){ 
        cardcontent.removeChild(paragraf); }
    );

    //yapıldı butonuna tıklanınca yazının üzerini çizer 
    yapıldı.addEventListener('click' , function(){
        paragraf.classList.toggle('çiz');
    })
    }

    //tüm yapılacakları listeden kaldırır
    temizle.addEventListener('click' , function(){
        paragraf.remove();
    })

}

