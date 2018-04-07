angular.module("toDoapp",[])
       .controller("firstCtrl",firstCtrl)

    function firstCtrl()
    {
        var first=this
        first.tasks=[]
        
        first.addTask =function()
        {   
            var d=new Date()
            var obj= { id:d.getTime() , name: first.name , status:false,time:new Date()}
            first.tasks.push(obj)
            console.log(first.tasks)
       
           //
        }

        first.delTask=function(id)
        {
            first.tasks.splice(fetchIndex(id),1)
        }

        function fetchIndex(id)
        {
            var index
            for(var i=0;i<first.tasks.length;i++)
            {
                if(first.tasks[i].id==id)
                {
                    index=i
                }

            }
            return index
        }

        first.check=function(id)
        {
            first.tasks[fetchIndex(id)].status=!first.tasks[fetchIndex(id)].status
        }
    }