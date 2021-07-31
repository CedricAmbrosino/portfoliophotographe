function calculate_age(dob) { 
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

let age = calculate_age(new Date(1992, 3, 6));

let tablePresentation = document.querySelector('.container_a_propos_section_description_table');

tablePresentation.innerHTML = tablePresentation.innerHTML + '<tr><th>Age : </th><td>'+ age +' ans</td></tr>';