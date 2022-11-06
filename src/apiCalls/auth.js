const API = "http://localhost:5000/api"

export const register = async (userCredentials) => {
    console.log(`${API}/`)
    const res = await fetch(`${API}/auth/register`,{
        method:'POST',
      //   credentials: 'include',
        headers: {
             "Content-Type": "application/json",
           },
        body: JSON.stringify(userCredentials)
     })
    
     console.log(res)
     return res.json();
};

export const login = async (userCredentials) => {
  console.log(`${API}/auth/login`)
  const res = await fetch(`${API}/auth/login`,{
      method:'POST',
      // credentials: 'include',
      headers: {
           "Content-Type": "application/json",
         },
      body: JSON.stringify(userCredentials)
   })
  
   return res.json();
};

