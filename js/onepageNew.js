window.onload = function(){
    const elm = document.querySelectorAll('.section');
    const elmCount = elm.length;
    elm.forEach(function(item, index){
      item.addEventListener('mousewheel', function(event){
        event.preventDefault();
        let delta = 0;

        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } 
        else if (event.detail)
            delta = -event.detail / 3;

        let moveTop = window.scrollY;
        let elmSelector = elm[index];

        // wheel down : move to next section
        if (delta < 0){
          if (elmSelector !== elmCount-1){
            try{
              moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }
        // wheel up : move to previous section
        else{
          if (elmSelector !== 0){
            try{
              moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
            }catch(e){}
          }
        }

        const body = document.querySelector('html');
        window.scrollTo({top:moveTop, left:0, behavior:'smooth'});
      });
    });
  }

  function caffeine(){
    var textBox = document.getElementById('kg');
    var arrRadio = document.getElementsByName('choose');
    console.log(arrRadio);
    var arrPreg = document.getElementsByName('preg');
    console.log(arrPreg);
    
    var i = textBox.value * 6
    var j = textBox.value * 2.5
   
  
      if(!textBox.value)
       alert('몸무게를 입력해주세요.')
     
       
      else 
          if(arrRadio[0].checked & arrPreg[1].checked){
            if( i >= 400){
            alert('성인, 비임신을 선택한' + '\n' +'당신의 하루 카페인 권장량은' + ' ' + '400mg입니다.' )
            }
            else if( i< 400) {
              alert('성인, 비임신을 선택한' + '\n' +'당신의 하루 카페인 권장량은' + ' ' + textBox.value * 6 + 'mg입니다.' )
            }
          }
          else if(arrRadio[0].checked & arrPreg[0].checked){
            if( i >= 200){
              alert(  '성인, 임신을 선택한' + '\n' + '당신의 하루 카페인 권장량은 200mg입니다.')
            }
            else if (i < 200){
              alert( '성인, 임신을 선택한' + '\n' + '당신의 하루 카페인 권장량은' + ' ' + textBox.value * 6 + 'mg입니다.'  )
            }
          }
          else if(arrRadio[1].checked & arrPreg[1].checked){
            alert('청소년, 비임신을 선택한' + '\n' +'당신의 하루 카페인 권장량은' + ' ' + textBox.value * 2.5 + 'mg입니다.' )
          }
          else if(arrRadio[1].checked & arrPreg[0].checked){
            if( j >= 200){
              alert(  '청소년, 임신을 선택한' + '\n' + '당신의 하루 카페인 권장량은 200mg입니다.')
            }
            else if (j < 200){
              alert( '청소년, 임신을 선택한' + '\n' + '당신의 하루 카페인 권장량은' + ' ' + textBox.value * 2.5 + 'mg입니다.'  )
            }
          }
       
          
  }
  
  
  
  