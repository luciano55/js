const d = document,
  $main = d.querySelector("main"),
  $files = d.getElementById("files");

const uploader = (file) => {
  console.log(file);
  const xhr = new XMLHttpRequest(),
    formData = new FormData();
  formData.append("file", file);

  xhr.addEventListener("readystatechange", (e) => {
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.responseText);
    } else {
      let message = xhr.statusText || "Ocurrió un error";
      console.error(`Error ${xhr.status}: ${message}`);
    }
  });
  xhr.open("POST", "uploader.php");
  xhr.setRequestHeader("enc-type", "multipart/form-data");
  xhr.send(formData);
};
d.addEventListener("change", (e) => {
  if (e.target === $files) {
    console.log(e.target.files);
    const files = Array.from(e.target.files);
    files.forEach((el) => uploader(el));
  }
});
