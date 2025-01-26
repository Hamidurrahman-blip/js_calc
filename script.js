window.onload = function() {
    document.getElementById("dis").focus();
  }
function equal(){
   let a= document.getElementById('dis').value
   let result=eval(a)
   document.getElementById('dis').value=result
   document.getElementById("dis").focus();

   console.log(result)
   console.log(a)
}
function ce(){
    document.getElementById('dis').value=''
    document.getElementById("dis").focus();

}
function key(clicked_id){
    let a=''
    if(clicked_id==1)
    {
        let a=document.getElementById('dis').value=clicked_id
        document.getElementById("dis").focus();
        return a
        console.log(clicked_id)
    }
    if(clicked_id==2)
        {
             a=document.getElementById('dis').value=clicked_id
            document.getElementById("dis").focus();
            
        }
        if(clicked_id==3)
            {
                let a=document.getElementById('dis').value=clicked_id
                document.getElementById("dis").focus();
                return a
            }
            if(clicked_id==4)
                {
                    let a=document.getElementById('dis').value=clicked_id
                    document.getElementById("dis").focus();
                    return a
                }
                if(clicked_id==5)
                    {
                        let a=document.getElementById('dis').value=clicked_id
                        document.getElementById("dis").focus();
                        return a
                    }
                    if(clicked_id==6)
                        {
                            let a=document.getElementById('dis').value=clicked_id
                            document.getElementById("dis").focus();
                            return a
                        }
                        if(clicked_id==7)
                            {
                                let a=document.getElementById('dis').value=clicked_id
                                document.getElementById("dis").focus();
                                return a
                            }
                            if(clicked_id==8)
                                {
                                    let a=document.getElementById('dis').value=clicked_id
                                    document.getElementById("dis").focus();
                                    return a
                                }
                                if(clicked_id==9)
                                    {
                                        let a=document.getElementById('dis').value=clicked_id
                                        document.getElementById("dis").focus();
                                        return a
                                    }
                                    if(clicked_id==0)
                                        {
                                            let a=document.getElementById('dis').value=clicked_id
                                            document.getElementById("dis").focus();
                                            return a
                                        }
    
}