<template>
  <div>

    <h1>Leaderboard</h1>

    <ol>
      <li v-for="(entry, index) in leaderboard" :key="index">
       {{ entry.username }} - Score: {{ entry.score }}
      </li>
    </ol>

  </div>

</template>

<script>

export default {      //Uppdatera till ny metod - composition.

  data() {
    return {
      leaderboard: [

        { username: 'Clickb8Conny', score: 100 },
        { username: 'Dragonslayer', score: 90 },
        { username: 'UserGuest', score: 80 }
//Skapa rutor - kolumner och rader med användarnamn, poäng och bild på användare.
      ]
    };
  }

};
</script>
