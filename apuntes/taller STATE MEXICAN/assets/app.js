const d = document,
  $selectPrimary = d.getElementById("select-primary"),
  $selectSecondary = d.getElementById("select-secondary"),
  $selectThird = d.getElementById("select-third");

function loadStates() {
  fetch("https://api-sepomex.hckdrk.mx/query/get_estados")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      let $options = `<option value="" > Elige un Estado </option>`;
      json.response.estado.forEach(
        (el) => ($options += `<option value="${el}">${el}</option>`)
      );
      $selectPrimary.innerHTML = $options;
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $selectPrimary.nextElementSibling.innerHTML = `Error  ${err.status}: ${message}`;
    });
}

function loadTowns(state) {
  fetch(`https://api-sepomex.hckdrk.mx/query/get_municipio_por_estado/${state}`)
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      let $options = `<option value="" > Elige un Municipio </option>`;
      json.response.municipios.forEach(
        (el) => ($options += `<option value="${el}">${el}</option>`)
      );
      $selectSecondary.innerHTML = $options;
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $selectSecondary.nextElementSibling.innerHTML = `Error  ${err.status}: ${message}`;
    });
}
function loadSuburbs(suburb) {
  fetch(
    `https://api-sepomex.hckdrk.mx/query/get_colonia_por_municipio/${suburb}`
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      let $options = `<option value="" > Elige una Colonia </option>`;
      json.response.colonia.forEach(
        (el) => ($options += `<option value="${el}">${el}</option>`)
      );
      $selectThird.innerHTML = $options;
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $selectThird.nextElementSibling.innerHTML = `Error  ${err.status}: ${message}`;
    });
}
d.addEventListener("DOMContentLoaded", loadStates);

$selectPrimary.addEventListener("change", (e) => loadTowns(e.target.value));

$selectSecondary.addEventListener("change", (e) => loadSuburbs(e.target.value));