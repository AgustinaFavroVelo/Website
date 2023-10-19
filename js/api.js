async function fetchRandomUserData() {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json(); //lo convierto en objeto de js
      return data.results[0]; // Extraigo el primer random user de la API
    } catch (error) {
      console.error('Error fetching data:', error);
      return null; 
    }
  }
  
  // Function para mostrar eso que agarré con fetch
  async function populateCommentCard(commentCard) {
    const userData = await fetchRandomUserData();
    if (userData) {
      const commenterName = commentCard.querySelector('.comentador-name');
      const commenterPicture = commentCard.querySelector('.comentador-picture');
      const commentText = commentCard.querySelector('.comentario-text');
  
      commenterName.textContent = `${userData.name.first} ${userData.name.last}:`;
      commenterPicture.src = userData.picture.thumbnail; // la pic del user
      commentText.innerHTML = `<i>"${userData.email}"</i>`;
    }
  }
  
  // Aca se juntan las comment cards con la data 
  const commentCards = document.querySelectorAll('.comentario-card');
  commentCards.forEach((commentCard) => {
    populateCommentCard(commentCard);
  });