window.onload = () => {
  const textline = new ya.speechkit.Textline('my_id', {
    apikey: '032bbd65-5d26-4bdd-9dc7-4c3c7dda4d55', 
    onImputFinished: (text) => {
      alert(text);
    }
  });
};
