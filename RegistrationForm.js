// const order_number = [];
// const rider_name = [];
// const delivery_date = [];
// const payment_method = [];
// const courier = [];
// const amount = [];
let no = 2;
let rider = false;
let booking = false;
let delivery = false;
let s = false;
var x = 0;




function AddOrder(){

    
    var rName = String(document.getElementById("riderName").value);
    var bNum = String(document.getElementById("bookingNum").value);
    var dDate = new Date(document.getElementById("deliveryDate").value);
    

    
    // var user_inputs = new Array();
    // user_inputs[0] = document.getElementById('Fname').value;
    // user_inputs[1] = document.getElementById('Lname').value;
    // user_inputs[2] = document.getElementById('address').value;
    // user_inputs[3] = document.getElementById('age').value;
    // user_inputs[4] = document.getElementById('sex').value;

    //Checking of Name
    if(rName.length > 0)
    {
        if(rName.length > 9)
        {
            rider = true;
            document.getElementById("errName").style.display = "none";

            //Checking of booking number
            if(bNum.length > 0)
            {
                if(bNum.length > 5)
                {
                    booking = true;
                    document.getElementById("errBooking").style.display = "none";

                    if(dDate != null)
                    {
                        console.log("Date:"+dDate);
                        delivery = true;
                        document.getElementById("errDelivery").style.display = "none";

                    }
                    else{
                        
                        document.getElementById('errDelivery').innerHTML = "Invalid Input";
                        document.getElementById('errDelivery').style.removeProperty( 'display' );
                    }

                }
                else{
                    document.getElementById('errBooking').innerHTML = "Minimum of 6 Characters";
                    document.getElementById('errBooking').style.removeProperty( 'display' );
                    booking = false;
                }
            }
            else{
                document.getElementById('errBooking').innerHTML = "Invalid Input";
                document.getElementById('errBooking').style.removeProperty( 'display' );
            }

        }
        else{
            document.getElementById('errName').innerHTML = "Minimum of 10 Characters";
            document.getElementById('errName').style.removeProperty( 'display' );
            rider = false;
        }
    }
    else{
        document.getElementById('errName').innerHTML = "Invalid Input";
        document.getElementById('errName').style.removeProperty( 'display' );
    }

    if (delivery == true)
    {
        
    }

    




    
    
    // if(add.length > 14){
    //     ad = true;
    //     document.getElementById("uadd").style.display = "none";
    // }
    // else{
    //     document.getElementById("uadd").style.removeProperty( 'display' );
    // }

    // if(uage > 17 && uage < 99){
    //     a = true;
    //     document.getElementById("uage").style.display = "none";
    // }
    // else{
    //     a = false;
    //     document.getElementById("uage").style.removeProperty( 'display' );
    // }

    // if(sex.length == 1)
    // {
    //     if(sex == "M" || sex == "m" || sex == "F" || sex == "f"){
    //         s = true;
    //         document.getElementById("usex").style.display = "none";
    //     }
    //     else{
    //         s = false;
    //         document.getElementById("usex").style.removeProperty( 'display' );
    //     }
    // }
    // else{
    //     s = false;
    //     document.getElementById("usex").style.removeProperty( 'display' );
    // }

    // if(n == true && ad == true && a == true && s == true)
    // {
    //     const d = new Date();
    //     let month = ('0' + (d.getMonth()+1)).slice(-2);
    //     let day = ('0' + (d.getDate())).slice(-2);
    //     let year = ('0' + (d.getFullYear())).slice(-2);
    //     user_id.push(month+day+year+(('000' + id).slice(-4)));
    //     full_name.push(name);
    //     user_address.push(add);
    //     user_age.push(uage);
    //     user_sex.push(sex);
    //     console.log(user_id);
    //     console.log(full_name);
    //     console.log(user_address);
    //     console.log(user_age);
    //     console.log(user_sex);
    //     document.getElementById("uid").value = user_id[user_id.length -1];
    //     document.getElementById('Fname').value = "";
    //     document.getElementById('Lname').value = "";
    //     document.getElementById('address').value = "";
    //     document.getElementById('age').value = "";
    //     document.getElementById('sex').value = "";
    //     document.getElementById("uid_alert").style.removeProperty( 'display' );
    //     document.getElementById("reg_again").style.removeProperty( 'display' );
    //     alert("Registration Successful");
    //     id++;
    // }

}

// function RegisterAgain()
// {
//     document.getElementById('Fname').value = "";
//     document.getElementById('Lname').value = "";
//     document.getElementById('address').value = "";
//     document.getElementById('age').value = "";
//     document.getElementById('sex').value = "";
//     document.getElementById('uid').value = "";
//     document.getElementById("uid_alert").style.display = "none";
//     document.getElementById("reg_again").style.display = "none";
// }

// function ViewRecords() {
//     console.log(true);

//     for(var i = 0; i < user_id.length; i++)
//     {
//         var table = document.getElementById("table_records");
//         var row_record = table.insertRow(1);
//         var tuserid = row_record.insertCell(0);
//         var tname = row_record.insertCell(1);
//         var tage = row_record.insertCell(2);
//         var tsex = row_record.insertCell(3);
//         var taddress = row_record.insertCell(4);
//         console.log(false);
//         tuserid.innerHTML =  user_id[i];
//         tname.innerHTML = full_name[i];
//         tage.innerHTML =  user_age[i];
//         tsex.innerHTML =  user_sex[i];
//         taddress.innerHTML =  user_address[i];
        
//     }
//   }

// // Add click event listeners to make table cells editable
// var editableCells = document.querySelectorAll('.editable');
// editableCells.forEach(function(cell) {
//     cell.addEventListener('click', function() {
//         this.contentEditable = true;
//         this.focus();
//     });
// });

// // Add click event listener to the "Add Row" button
// document.getElementById('add-row').addEventListener('click', function() {
//     addRow();
// });

// // Add click event listener to the "Store Data as JSON" button
// document.getElementById('store-data').addEventListener('click', function() {
//     storeDataInGoogleSheets();
// });

// // Function to add a new row to the table
// function addRow() {
//     var tableBody = document.querySelector('#editable-table tbody');
//     var newRow = document.createElement('tr');
//     var num = no.toString();

//     // Create the non-editable first cell
//     var nonEditableCell = document.createElement('td');
//     nonEditableCell.textContent = num; // Add content if needed
//     no++;
//     newRow.appendChild(nonEditableCell);

//     // Create editable cells for the new row
//     for (var i = 0; i < 4; i++) {
//         var cell = document.createElement('td');
//         cell.className = 'editable';
//         cell.setAttribute('contenteditable', 'true');
//         newRow.appendChild(cell);
//     }

//     tableBody.appendChild(newRow);

//     // Add click event listeners to make the new row's cells editable
//     var newEditableCells = newRow.querySelectorAll('.editable');
//     newEditableCells.forEach(function(newCell) {
//         newCell.addEventListener('click', function() {
//             this.contentEditable = true;
//             this.focus();
//         });
//     });
// }

        function deleteRow(button) {
            var row = button.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }


function addRow() {
    var tableBody = document.querySelector('#editableTable tbody');
    var newRow = document.createElement('tr');
    var num = no.toString();

    // Create the non-editable first cell
    // var nonEditableCell = document.createElement('td');
    // nonEditableCell.textContent = num; // Add content if needed
    // no++;
    // newRow.appendChild(nonEditableCell);

    // Create editable cells for the new row
    // for (var i = 0; i < 4; i++) {
    //     var cell = document.createElement('td');
    //     cell.className = 'editable';
    //     cell.setAttribute('contenteditable', 'true');
    //     newRow.appendChild(cell);
    // }

//    Create editable cells for the new row
    for (var i = 0; i < 4; i++) {
        switch(i)
        {
            case 0:
                var cell = document.createElement('td');
                cell.className = 'editable';
                cell.innerHTML = '<input name="OrderNumber'+x+'" type="number" id="orderNumber" class="form-control form-control-lg" />';
                newRow.appendChild(cell);
                break;
            case 1:
                var cell = document.createElement('td');
                cell.className = 'editable';
                cell.innerHTML = '<input name="PaymentMethod'+x+'" type="text" id="paymentMethod" class="form-control form-control-lg" />';
                newRow.appendChild(cell);
                break;
            case 2:
                var cell = document.createElement('td');
                cell.className = 'editable';
                cell.innerHTML = '<input name="Amount'+x+'" type="number" id="amount" class="form-control form-control-lg" />';
                newRow.appendChild(cell);
                break;
            case 3:
                var cell = document.createElement('td');
                cell.className = 'editable';
                cell.innerHTML = '<input name="Courier'+x+'" type="text" id="courier" class="form-control form-control-lg" />';
                x++;
                newRow.appendChild(cell);
                break;            
        }
    }

    var deleteBtn = document.createElement('td');
    deleteBtn.innerHTML = '<button type="button" class="btn btn-success btn-block btn-sm gradient-custom-4 text-body" onclick="deleteRow(this)"><span class="glyphicon glyphicon-trash"></span></button>'; // Add content if needed
    newRow.appendChild(deleteBtn);

    tableBody.appendChild(newRow);

    // Add click event listeners to make the new row's cells editable
    // var newEditableCells = newRow.querySelectorAll('.editable');
    // newEditableCells.forEach(function(newCell) {
    //     newCell.addEventListener('click', function() {
    //         this.contentEditable = true;
    //         this.focus();
    //     });
    // });
}


function submitForm() {
    var tableRows = document.querySelectorAll('#editableTable tbody tr');
    var data = [];

    //rider detail
    var rName = String(document.getElementById("riderName").value);
    var bNum = String(document.getElementById("bookingNum").value);
    var dDate = new Date(document.getElementById("deliveryDate").value);

    //orders carried by rider
    tableRows.forEach(function(row) {
        var rowData = {
            OrderNumber: row.cells[0].textContent,
            PaymentMethod: row.cells[1].textContent,
            Amount: row.cells[2].textContent,
            Courier: row.cells[3].textContent,
            RiderName: rName,
            DeliveryDate: dDate.getMonth()+"/"+dDate.getDate()+"/"+dDate.getFullYear(),
            BookingNumber: bNum
        };
        data.push(rowData);
    });

    // send data to gsheet
    var jsonString = JSON.stringify(data, null, 2); 

    // var formData = new FormData();
    // formData.append('data', jsonString);

    var url = 'https://script.google.com/macros/s/AKfycbxFspE4qRCHJP40jMFI3r0kYzn7tvgFUvsBOyxwK-2Rbj4IPZw0RCd5vyycbRpMLl_qiQ/exec';

    fetch(url, {
        // method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': '*'
        // },
        // body: jsonString
        method: "POST", 
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json', 
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Handle the response from your Google Apps Script
    })
    .catch(error => {
        console.error('Error:', error);
    });

    console.log(jsonString);
}

    // tableRows.forEach(function(row) {
    //     var rowData = [
    //         row.cells[0].textContent,
    //         row.cells[1].textContent,
    //         row.cells[2].textContent,
    //         row.cells[3].textContent,
    //         rName,
    //         bNum,
    //         dDate.getMonth()+"/"+dDate.getDate()+"/"+dDate.getFullYear()
    //     ];
    //     data.push(rowData);
    // });

    // alert(jsonString);
    //sendDataToGoogleSheets(data);

        // Create a new FormData object


    // Send a POST request to your Google Apps Script web app

    // .then(response => response.json())
    // .then(data => {
    //     console.log(data); // Handle the response from your Google Apps Script
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });


function sendDataToGoogleSheets(data) {

    
    var url = 'https://script.google.com/macros/s/AKfycbxFspE4qRCHJP40jMFI3r0kYzn7tvgFUvsBOyxwK-2Rbj4IPZw0RCd5vyycbRpMLl_qiQ/exec'; // Replace with your web app URL
    var options = {
        method: 'POST',
        payload: {
            data: data
        }
    };

    fetch(url, options)
        // .then(function(response) {
        //     if (response.ok) {
        //         alert('Data stored in Google Sheets successfully!');
        //     } else {
        //         alert('Error storing data in Google Sheets.');
        //     }
        // })
        // .catch(function(error) {
        //     console.error('Error:', error);
        //     alert('An error occurred while storing data in Google Sheets.');
        // });
}


// function submitForm() {

//     var rName = String(document.getElementById("riderName").value);
//     var bNum = String(document.getElementById("bookingNum").value);
//     var dDate = new Date(document.getElementById("deliveryDate").value);

//     var tableData = [];
//     var table = document.getElementById("editableTable").getElementsByTagName('tbody')[0].rows;
//     for (var i = 0; i < table.length; i++) {
//         var row = table[i];
//         var name = row.cells[0].textContent;
//         var payment = row.cells[1].textContent;
//         var amount = row.cells[2].textContent;
//         var courier = row.cells[3].textContent;
//         tableData.push({ OrderNumber: name, PaymentMethod: payment, Amount: amount, Courier: courier, RiderName: rName, DeliveryDate: dDate, BookingNumber: bNum });
//     }

//     var tableDataString = JSON.stringify(tableData, null, 2); 

//     var options = {
//         method: 'POST',
//         payload: {
//             data: tableDataString
//         }
//     };

//     console.log(options);
//     console.log(tableData);

//     fetch("https://script.google.com/macros/s/AKfycbycWjFX1mXxzVq5flfkP-FqftY_TAjqOb0Msk7ONshJD1z_U0ct4dOsDfKMW-dQaWWbEg/exec", options)
//     // .then(function (response) {
//     //     return response.json();
//     // })
//     // .then(function (data) {
//     //     if (data.result === "success") {
//     //         alert("Data submitted successfully!");
//     //     } else {
//     //         alert("Error: " + data.message);
//     //     }
//     // })
//     // .catch(function (error) {
//     //     console.error("Error:", error);
//     // });
// }

// Function to store table data as JSON
// function storeDataAsJson() {

//     var rName = String(document.getElementById("riderName").value);
//     var bNum = String(document.getElementById("bookingNum").value);
//     var dDate = new Date(document.getElementById("deliveryDate").value);

//     var tableRows = document.querySelectorAll('#editableTable tbody tr');
//     var jsonData = [];

//     tableRows.forEach(function(row) {
//         var rowData = {
//             OrderNumber: row.cells[0].textContent,
//             PaymentMethod: row.cells[1].textContent,
//             Amount: row.cells[2].textContent,
//             Courier: row.cells[3].textContent,
//             RiderName: rName,
//             DeliveryDate: dDate.getMonth()+"/"+dDate.getDate()+"/"+dDate.getFullYear(),
//             BookingNumber: bNum
//         };
//         jsonData.push(rowData);
//     });


    

//     // Convert the JSON data to a string for display or further processing
//     // Call the function to send JSON data to Google Sheet
//     sendJsonToGoogleSheet(jsonData);
//     var jsonString = JSON.stringify(jsonData, null, 2);    
//     alert(jsonString);

// }

function storeDataInGoogleSheets() {

    var rName = String(document.getElementById("riderName").value);
    var bNum = String(document.getElementById("bookingNum").value);
    var dDate = new Date(document.getElementById("deliveryDate").value);

    var tableRows = document.querySelectorAll('#editableTable tbody tr');
    var data = [];

    tableRows.forEach(function(row) {
        var rowData = [
            row.cells[0].textContent,
            row.cells[1].textContent,
            row.cells[2].textContent,
            row.cells[3].textContent,
            rName,
            dDate.getMonth()+"/"+dDate.getDate()+"/"+dDate.getFullYear(),
            bNum
        ];
        data.push(rowData);
    });

    // Send data to Google Sheets via Google Apps Script web app
    console.log(data);
    sendDataToGoogleSheets(data);
}

// Function to store table data as JSON
// function storeDataAsJson() {

//     var rName = String(document.getElementById("riderName").value);
//     var bNum = String(document.getElementById("bookingNum").value);
//     var dDate = new Date(document.getElementById("deliveryDate").value);

//     var tableRows = document.querySelectorAll('#editableTable tbody tr');
//     var jsonData = [];

//     tableRows.forEach(function(row) {
//         var rowData = {
//             OrderNumber: row.cells[0].textContent,
//             PaymentMethod: row.cells[1].textContent,
//             Amount: row.cells[2].textContent,
//             Courier: row.cells[3].textContent,
//             RiderName: rName,
//             DeliveryDate: dDate.getMonth()+"/"+dDate.getDate()+"/"+dDate.getFullYear(),
//             BookingNumber: bNum
//         };
//         jsonData.push(rowData);
//     });


    

//     // Convert the JSON data to a string for display or further processing
//     // Call the function to send JSON data to Google Sheet
//     sendJsonToGoogleSheet(jsonData);
//     var jsonString = JSON.stringify(jsonData, null, 2);    
//     alert(jsonString);

// }





function sendDataToGoogleSheets(data) {
    var url = 'https://script.google.com/macros/s/AKfycbycWjFX1mXxzVq5flfkP-FqftY_TAjqOb0Msk7ONshJD1z_U0ct4dOsDfKMW-dQaWWbEg/exec'; // Replace with your web app URL
    var options = {
        method: 'POST',
        payload: {
            data: data
        }
    };

    fetch(url, options)
        // .then(function(response) {
        //     if (response.ok) {
        //         alert('Data stored in Google Sheets successfully!');
        //     } else {
        //         alert('Error storing data in Google Sheets.');
        //     }
        // })
        // .catch(function(error) {
        //     console.error('Error:', error);
        //     alert('An error occurred while storing data in Google Sheets.');
        // });
}


    // function importJsonDataToSheetWithTimestamp(jsonString, sheetName) {
    //     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
      
    //     if (sheet) {
    //       var jsonData = JSON.parse(jsonString);
        
    //       // Clear existing data in the sheet
    //       sheet.clear();
          
    //       // Add headers
    //       sheet.appendRow(Object.keys(jsonData[0]).concat(['Timestamp']));
          
    //       // Write JSON data to the sheet with a timestamp
    //       jsonData.forEach(function(item) {
    //         var rowData = [];
    //         for (var key in item) {
    //           rowData.push(item[key]);
    //         }
    //         rowData.push(new Date()); // Add timestamp to the last column
    //         sheet.appendRow(rowData);
    //       });
    //     } else {
    //       Logger.log('Sheet not found: ' + sheetName);
    //     }
    //   }
      
