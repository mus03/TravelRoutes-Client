import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { FaEye, FaEyeSlash,FaFacebookF,FaGoogle } from 'react-icons/fa';
import { Helmet } from "react-helmet";



const Login = () => {
    const[error,setError] = useState()
    const[showPass,setShowPass]=useState(false);
    const {login,google,faceBook,user} = useContext(AuthContext)
	const location = useLocation()
	const navigate = useNavigate()
    const handleLogin = (e) =>{

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        login(email,password)
        .then(result=>{
            toast.success('Login Successful!')
            console.log(result.user)
            const user = {
                email,
                lastLoggedAt: result.user.metadata?.lastSignInTime
            }
            //update last logged at in the database
            fetch("http://localhost:5173/users",{
                method:"put",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(user)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.modifiedCount>0){
                    Swal.fire("User Details Updated!");
                    
                }
            })
        })
        .catch(error=>{
            // setError("")
			toast.error('Provide registered user information!')
			if(password.length<6){
				setError("password length should be more than 6 characters")
			}
            console.log(error)
        })
    }
	const handleGoogle = () =>{
		google()
		.then(result=>{
			// setUser(result.user)
			console.log(result.user)
		})
		.catch(error=>{
			console.log(error)
		})
	}

	const handleFaceBook=()=>{
		faceBook()
		.then(result=>{
			// setUser(result.user)
			console.log(result.user)
		})
		.catch(error=>{
			console.log(error)
		})
	}

	// useEffect(()=>{
	// 	if(user){
	// 	navigate(location?.state  || '/')
	//     }
    // },[user])

    return (
        <div  className="py-6 w-full rounded-2xl bg-gradient-to-r from-[#135D66] via-[#77B0AA] to-[#E3FEF7] inline-block">
            <div><Toaster/></div>
			<Helmet>
            <title>Login Page</title>
            </Helmet>
            <div data-aos="fade-up" data-aos-duration ="1000"  className="w-full mx-auto md:border-2 max-w-md p-2 md:p-8 space-y-3 rounded-xl">
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form  onSubmit={handleLogin} noValidate="" action="" className="space-y-6">
	<div  className="space-y-1 text-sm">
			<label htmlFor="username" className="block " >Email</label>
			<input type="email" name="email" id="email" required placeholder="Your Email" className="w-full px-4 py-3 border-2 rounded-md border-black text-black" />
		</div>
        
    
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block " >Password</label>
			<div className="flex relative ">
            <input type={showPass ? "text" : "password" } name="password" id="password" required placeholder="Password" className=" w-full px-4 py-3  border-2 rounded-md border-black text-black" />
			<span className="absolute right-5 top-3" onClick={()=>setShowPass(!showPass)}>
            {showPass? <p className="text-xl"><FaEye/></p>  : <p className="text-xl"><FaEyeSlash /></p>}
            </span>
            </div>
			<div className="flex justify-end text-md">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		{
			error && <p className="text-md text-red-700">{error}</p>
		}
		<button className="block w-full p-3 text-center rounded-md text-white bg-[#003C43] hover:border hover:bg-white hover:text-black hover:border-black">Login</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
		<p className="px-3 text-sm ">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button onClick={handleGoogle} aria-label="Log in with Google" className="p-3 rounded-sm hover:bg-[#003C43] hover:text-white">
			<span className="text-xl "><FaGoogle /></span>
		</button>
		<button onClick={handleFaceBook} aria-label="Log in with Facebook" className="p-3 rounded-sm hover:bg-[#003C43] hover:text-white">
			<span className="text-xl "><FaFacebookF></FaFacebookF></span>
			
		</button>
		
	</div>
	<p className="text-md text-center sm:px-6 ">Don't have an account?
		<Link to='/register' rel="noopener noreferrer" href="#" className="underline font-bold"> Register</Link>
	</p>
</div>
        </div>
    );
};

export default Login;