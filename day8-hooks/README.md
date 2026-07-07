# State Management 

* const changeuser = ()=> {
        // copy banaounga user ki
        // const newuser = {...num};
        // console.log("copy user  : ", newuser)
        // newuser.user = "Hidude";
        // newuser.age= 22

        // setnum(newuser)
        // console.log("new user : ", newuser)
        // console.log("num : ", num)

        // ANOTHER MEHTOD OF CHANGE 

        setnum(prev=> ({...prev , user:"yash", age: 32}))
        
    }