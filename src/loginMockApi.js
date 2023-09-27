const users = [
    { id: 1, username: 'admin', password: 'admin' },
    { id: 2, username: 'user', password: 'password' },
    
  ];
  
  let currentUser = null;
  
  export function login(username, password) {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      currentUser = user;
      return user;
    }
    return null;
  }
  
  export function getCurrentUser() {
    return currentUser;
  }
  