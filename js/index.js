document.querySelector("#signup-form .actions ul li:last-child a").onclick = () => {
  // let btn = document.querySelector(
  //   "#signup-form .actions ul li:last-child a"
  // );

  // let arrInput = document.querySelector(
  //   ".fieldset-content .form-group #ten, .fieldset-content .form-group #ho, .fieldset-content .form-group #email, .fieldset-content .form-group #soDienThoai, .fieldset-content .form-date #ngay, .fieldset-content .form-date #thang, .fieldset-content .form-date #nam, .fieldset-content .form-group #diaChi"
  // ).value;

  let arrInput = document.querySelectorAll(
    ".fieldset-content .form-group input, .fieldset-content .form-date input, .fieldset-content .form-group .form-find select"
  );
    let nguoiDung={};
  for (let input of arrInput) {
    let {id,value} = input
    // let id = input.id;
    // let value = input.value;
    nguoiDung = {...nguoiDung,[id]:value};
  }
  console.log('Nguoi Dung',nguoiDung);

  let contentHTML = '';
  for (let key in nguoiDung){ 
    contentHTML += 
    `
    <div>
      <p>${key}: ${nguoiDung[key]} </p>
    </div>
    `
  }

  document.querySelector('.result').innerHTML = contentHTML;
}
    
