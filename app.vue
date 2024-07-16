<template>
  <article>
    <p>SET LANGUAGE:</p>
    <div class="buttons">
      <button class="setlocale" @click="setLocale('en')">en</button>
      <button class="setlocale" @click="setLocale('fr')">fr</button>
      <button class="setlocale" @click="setLocale('es')">es</button>
      <button class="setlocale" @click="setLocale('ko')">ko</button>
    </div>
    <div class="text">
      <p>{{ $t('welcome') }}</p>
      <p>{{ $t('blurb') }}</p>
      <p>{{ $t('ending') }}</p>
    </div>
  </article>
  <div class="speech-to-text">
    <button class="microphone-on">🗣️ Speech to Text 🗣️</button>
    <input>
  </div>
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

article,
.speech-to-text {
  margin: 50px 0;

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

.setlocale {
  margin: 5px;
}

.microphone-on {
  margin-bottom: 10px;
  padding: 8px;
}

input {
  width: 300px;
  height: 50px;

  text-align: center;
}

</style>