export async function fetchData() {
	try {
	  const response = await fetch("/api/projects/getAll");
	  const data = await response.json();
	  console.log(data)

	  return await data;
	} catch (error) {
	  console.error("There was an error fetching the projects:", error);
	}
}

export async function fetchUsers() 
{
	try {
	  const response = await fetch("/api/users/getAll");
	  const data = await response.json();
	  return await data;
	} catch (error) {
	  console.error("There was an error fetching the users:", error);
	}
}

// fetch data of pool with id
export async function getPool(id) {
    const projects = await fetchData();

    for (let project of projects) {
        const poolFound = project.pools.find(pool => pool._id === id);
        if (poolFound) {
            return poolFound;
        }
    }
    // If the pool with the given ID isn't found, return null or undefined (or throw an error if that's preferable)
    return null;
}


// get user by addressWallet

export async function getUser(addressWallet) {
	const users = await fetchUsers();
	
	// Find the user by address
	const foundUser = users.find(user => user.walletAddress === addressWallet);
	
	// Return the found user or undefined if not found
	return foundUser;
  }