// List function
function list(clients) {
    return clients.map((client, index) => {
      return `
  <li class="list-group-item d-flex justify-content-between" data-index="${index}">
    ${client.name}
    <strong>$${client.balance}</strong>
  </li>
      `;
    }).join('');
  }
  
  // Order function
  function order(clients, property) {
    return clients.slice().sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
  }
  
  // Total function
  function total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
  }
  
  // Info function
  function info(index) {
    return clients.find((client, i) => i === index);
  }
  
  // Search function
  function search(query) {
    const lowerQuery = query.toLowerCase();
    return clients.filter(client => client.name.toLowerCase().includes(lowerQuery));
  }
  