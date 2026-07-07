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


# FORM HANDLING IN REACT JS

* for preventing default behaviour we use e.preventDefault() method 

*    submit handler
    ye method form ko reload hone se rokega 

    const submitHandler = (e) => {
        // preventing default behaviour 
        e.preventDefault();
        console.log('Form Submitted ')
        
    }


# * Two Way Binding 
- here we basically form ko khud se change nhi karte react se bolte hai vo change kare na and display karega ui par

*                   const [text , setText ] = useState('')

                        <input
                        className='py-3 px-6  text-white text-2xl  bg-gray-500 rounded-3xl' type="text"

                        placeholder='Enter your Name '
                        value = {text}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setText(e.target.value)
                        }}
                         />