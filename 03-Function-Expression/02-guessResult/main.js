// บรรทัด \* และ \*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
// const showModal = alert;

// showModal("Execute modal"); // *   < --------------------  alert "Execute modal"
// ```

// ```js
const showModal = alert();  

showModal("Execute modal"); // ** <---------------- alert empty 