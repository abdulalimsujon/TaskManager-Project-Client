import Swal from "sweetalert2"
import { UpdateTask } from "../APIRequest/APIRequest";



export function UpdateAlert(id,status){
   return Swal.fire({
      title:"change status",
      showCancelButton: true,
      input:"select",
      inputOptions:{new:"new",completed:"completed",progress:"progress",cancelled:"cancelled"},
      inputValue:status
      }).then((result) => {
        if (result.isConfirmed) {
                  
          return  UpdateTask(id,result.value).then((res)=>{
            return res;
          })
          
        }
      })


}