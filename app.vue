<template>
  <article>
    <h1>Let's Translate!</h1>
    <p>SET LANGUAGE:</p>
    <div class="buttons">
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('fr')">fr</button>
      <button @click="setLocale('es')">es</button>
      <button @click="setLocale('ko')">ko</button>
    </div>
    <div class="text">
      <p>{{ $t('welcome') }}</p>
      <p>{{ $t('blurb') }}</p>
      <p>{{ $t('ending') }}</p>
    </div>
  </article>
</template>

<script>

export default {
  setup() {
    const { locale, setLocale } = useI18n();

    return {
      locale,
      setLocale
    };
  }
};

</script>

<style>
body {
  width: 100%;
 }

article {
  margin-top: 50px;

  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text {
  width: 200px;

  border: 2px solid black;
  border-radius: 8px;
  margin-top: 20px;
  padding: 20px;

  background-color: rgb(220, 235, 245);
}

button {
  margin: 5px;
}



</style>