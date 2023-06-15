

export const saveUser = (user,name,image) => {

    console.log(user);
    const currentUser = {
      email: user.email,
      role:"student",
      name:name,
      img:image
    }


    fetch(`https://summer-camp-server-eight-kappa.vercel.app/users/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }
 