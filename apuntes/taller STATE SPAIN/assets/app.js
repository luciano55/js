const d = document,
  $selectPrimary = d.getElementById("select-primary"),
  $selectSecondary = d.getElementById("select-secondary"),
  $selectThird = d.getElementById("select-third");

function loadStates() {
  fetch("https://apiv1.geoapi.es/comunidades?type=JSON&key=&sandbox=1%27")
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json.size);

      let $options = `<option value="" > Elige una Comunidad </option>`;
      json.data.forEach(
        (el) => ($options += `<option value="${el.CCOM}">${el.COM}</option>`)
      );
      $selectPrimary.innerHTML = $options;
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $selectPrimary.nextElementSibling.innerHTML = `Error  ${err.status}: ${message}`;
    });
}

function loadProvinces(comunidad) {
  fetch(
    `https://apiv1.geoapi.es/provincias?CCOM=${comunidad}&type=JSON&key=&sandbox=1`
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      let $options = `<option value="" > Elige una Provincia </option>`;
      json.data.forEach(
        (el) => ($options += `<option value="${el.CPRO}">${el.PRO}</option>`)
      );
      $selectSecondary.innerHTML = $options;
    })
    .catch((err) => {
      console.log(err);
      let message = err.statusText || "Ocurrió un error";
      $selectSecondary.nextElementSibling.innerHTML = `Error  ${err.status}: ${message}`;
    });
}
function loadMunicipality(province) {
  fetch(
    `https://apiv1.geoapi.es/municipios?CPRO=${province}&type=JSON&key=&sandbox=1`
  )
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      let $options = `<option value="" > Elige un Municipio </option>`;
      json.data.forEach(
        (el) => ($options += `<option value="${el.CMUM}">${el.DMUN50}</option>`)
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

$selectPrimary.addEventListener("change", (e) => loadProvinces(e.target.value));

$selectSecondary.addEventListener("change", (e) =>
  loadMunicipality(e.target.value)
);
