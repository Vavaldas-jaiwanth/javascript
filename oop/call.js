function setname(user){
    this.user=user
}

function createuser(user,email,pw){
    //setname(user);
    /*the setname function get called but the value of user is not initialized as the
     the call stack of setuser is removed first in order to preserve the values of the setuser we use setuser.call()*/ 
     setname.call(this,user);//this is sent because we need the context of the createuser not the setname
    this.email=email;
    this.pw=pw;
}

const temp=new createuser("abc","abc@gmail.com","123");
console.log(temp);