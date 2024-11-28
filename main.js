function getdetails() {
   const weights = weight.value
   const Heights = (height.value / 100) ** 2
   const ans = (weights / Heights).toFixed(2)
   console.log(ans);

   if (weights && Heights) {
      if (weights > 0 && Heights > 0) {
         result.innerHTML = `<h3>Your BMI Is</h3><br>
                <p id="para">${ans}</p>`
          if(ans>18.5 && ans<24.9){
            result.style.color="green"
          }else{
            result.style.color="red"
          }
      } else {
         alert("please enter a valid input");

      }
   } else {
      alert("please fill both column");

   }

}
