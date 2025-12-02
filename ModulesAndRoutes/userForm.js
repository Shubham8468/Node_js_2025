function userForm(req,resp){
    
    resp.write(` <form action="/submit" method="POST">
        <input type="text" placeholder="Enter your Name" name="name">
        <input type="email" placeholder="Enter email here" name="email">
        <button>Submit</button>
    </form>`)
   
}
module.exports=userForm;