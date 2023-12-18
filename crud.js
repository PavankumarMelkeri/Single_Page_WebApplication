var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["firstname"] = document.getElementById("firstname").value;
    formData["lastname"] = document.getElementById("lastname").value;
    formData["address"] = document.getElementById("address").value;
    formData["city"] = document.getElementById("city").value;
    formData["state"] = document.getElementById("state").value;
    formData["email"] = document.getElementById("email").value;
    formData["phonenumber"] = document.getElementById("phonenumber").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.firstname;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.lastname;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.address;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.city;
    cell5=newRow.insertCell(4);
         cell5.innerHTML=data.state;
    cell6=newRow.insertCell(5);
         cell6.innerHTML=data.email;
    cell7=newRow.insertCell(6);
         cell7.innerHTML=data.phonenumber;     
    
    cell7 = newRow.insertCell(7);
        cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("address").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
    document.getElementById("state").value = selectedRow.cells[4].innerHTML;
    document.getElementById("email").value = selectedRow.cells[5].innerHTML;
    document.getElementById("phonenumber").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstname;
    selectedRow.cells[1].innerHTML = formData.lastname;
    selectedRow.cells[2].innerHTML = formData.address;
    selectedRow.cells[3].innerHTML = formData.city;
    selectedRow.cells[4].innerHTML = formData.state;
    selectedRow.cells[5].innerHTML = formData.email;
    selectedRow.cells[6].innerHTML = formData.phonenumber;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("firstname").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById("address").value = '';
    document.getElementById("city").value = '';
    document.getElementById("state").selectedIndex="";
    document.getElementById("email").value='';
    document.getElementById("phonenumber").value='';
    selectedRow = null;
}