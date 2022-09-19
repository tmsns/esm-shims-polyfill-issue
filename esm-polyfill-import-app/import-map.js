const importMap = {
    imports: {
      foo: "./foo.js",
      app: "./app-shell.js",
    },
  };
  const im = document.createElement("script");
  im.type = "importmap";
  im.textContent = JSON.stringify(importMap);
  document.currentScript.after(im);