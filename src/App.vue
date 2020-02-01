<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import indexedDb from './indexedDbstorage';

export default {
  name: 'app',
  methods: {
  },
  beforeCreate() {
    // if there are tasks in dexie indexedDb load them to vuex
    indexedDb.getToDoList().then((res) => {
      const toDoList = res.map(item => ({
        id: item.id,
        title: item.title,
        status: false,
        image: item.image,
        timestamp: item.timestamp,
      })).sort((x, y) => y.timestamp - x.timestamp);
      this.$store.dispatch('updateToDoList', toDoList);
    });
    indexedDb.getDoneList().then((res) => {
      const doneList = res.map(item => ({
        id: item.id,
        title: item.title,
        status: true,
        image: item.image,
        timestamp: item.timestamp,
      }));
      this.$store.dispatch('updateDoneList', doneList);
    });
  },
  beforeMount() {
    if (this.$store.getters.getLoggedUser === null) {
      this.$router.push({ name: 'login' });
    }
  },
};
</script>

<style lang="scss">
body {
  position: absolute;
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  overflow-y: scroll;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F1F1F1;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
