// ผลลัพธ์ในบรรทัดที่มี \*, **, \*** และ \*\*\*\* มีค่าเป็นอะไรและเพราะอะไร

// ```js
// const sender = 'Matt';

// function sendTo(from, to) {
//     console.log(`From ${from} to ${to}`);
// }

// sendTo(sender, 'Sarah'); // * From Matt to Sarah  <<------------
// sendTo(null); // ** From null to undefined  <<------------------ ถ้าไม่ส่ง params ไปตรงนั้น จะมีค่าเป็น unefined เพราะไม่มี default value
// ```

// ```js
// const sender = 'Matt';

// function sendTo(to, from = 'CC') {
//     console.log(`From ${from} to ${to}`);
// }

// sendTo('Max'); // *** From CC to Max  <<-------------
// sendTo('Ben', 'Jay'); // ****  From Jay to Ben  <<----------

//------------------------------------------------

