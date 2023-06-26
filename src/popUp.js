import Swal from 'sweetalert2'
import { writeData } from './databaseFunctions'


export const addData = async () => {
    
 const {value: data} = await Swal.fire({
  title: 'Add component',
  html:
    '<input type="text" id="swal-input1" class="swal2-input" placeholder="Component">' +
    '<input type="number" id="swal-input2" class="swal2-input" placeholder="Number">',
  focusConfirm: false,
  preConfirm: () => {
    return writeData(document.getElementById('swal-input1').value,document.getElementById('swal-input2').value)
  }
})

if (data) {
  Swal.fire(`Added succesfully`)
}
}