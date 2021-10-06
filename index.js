const myKey = ""
const tableName = ""

const requestOptions = {
  headers: {
    Authorization: `Bearer ${myKey}`
  }
}

let datas;

fetch('', requestOptions)
  .then(response => response.text())
  .then(result => {
    let parsedData = JSON.parse(result);
    datas = parsedData.records;

  })
  .catch(error => console.log("error", error));
