const importMap = {
    imports: {
      foo: "./foo.js",
    },
  };
  const im = document.createElement("script");
  im.type = "systemjs-importmap";
  im.textContent = JSON.stringify(importMap);
  document.currentScript.after(im);